import tempfile
import time

import click

from . import utils


def _load_persistent_context(p_handle, width, height):
    """
    Loads the browser with a persistent context nad with a set of common ad-blocking extensions.
    """
    # Boot up the browser with the ad blocker plugin installed
    data_dir = tempfile.mkdtemp()
    print(f"Temporary data directory created at {data_dir}")

    # Set the extensions path
    extensions_list = [
        utils.EXTENSIONS_PATH / "adguard",
        utils.EXTENSIONS_PATH / "adguardextra",
    ]
    extensions_str = ",".join(map(str, extensions_list))

    # Set the browser context
    print("Launching Chromium browser")
    context = p_handle.chromium.launch_persistent_context(
        data_dir,
        channel="chrome",
        headless=False,
        args=[
            f"--disable-extensions-except={extensions_str}",
            f"--load-extension={extensions_str}",
            "--disable-gpu",
            "--disable-notifications",
            "--disable-search-geolocation-disclosure",
            "--enable-logging=stderr",
            "--log-level=0",
            "--v=1",
        ],
        user_agent=utils.get_user_agent(),
        viewport={
            "width": width,
            "height": height,
        },
    )

    # Wait for adguard filters to load
    print("Waiting 15 seconds for AdGuard filters to load")
    time.sleep(15)
    return context


def _get_common_blocking_javascript():
    """
    Compiles a set of commands into an executable javascript script to block common pop-ups, banners, etc.
    """
    # Run common JavaScript for all sites
    target_list = [
        ".tp-modal",  # Common popover ad
        ".tp-backdrop",
        ".onesignal-slidedown-container",  # Common slidedown ad
        "#regiwall-overlay",
        ".regiwall",
        ".bxc",  # Common takeover ad
        ".met-footer-toast",  # Common toaster at the bottom
        ".grecaptcha-badge",
        ".fEy1Z2XT",  # Common ad blocker popup
        ".dgEhJe6g",
        ".notification-soft-optin",  # Common notification popup
        ".popup_background",
        ".popup_wrapper",
        ".pw-subscribe-popup",
        ".ThirdPartySlot-container",
        ".newspack-lightbox",  # Common takover ad
        ".pbs_loc",  # PBS site location picker
        "#onetrust-consent-sdk",
        ".gdpr-huffpost-cookiewall",
        "#header-cts",
        ".pum-overlay",  # Common takeover ad
        "#pico_prompt",
        "#pico_header",
        ".mol-ads-cmp",  # Footer toaster thing on some sites
        ".gdpr-glm-standard",  # GDPR blockers on some sites
        "#didomi-host",  # Common cookies popup
        ".fc-ab-root",  # Ad blocker popup
        ".fancybox-overlay",  # Popup overlay
        ".fancybox-overlay-fixed",
        ".ab_widget_container_popin-image",  # Popover
        ".ab_widget_container_popin-image_content",
        ".ab_widget_container_popin-image_overlay",
        ".fc-ab-root",  # Popover
        ".modal-backdrop",  # Modal popup
        "#dth-borderless-modal-alt",
        "#floatingBlockerGuide",  # Popup overlay
        ".ctct-popup-overlay",  # Popup overlay
        ".ctct-popup-wrapper",
        ".message-container",  # Popup
        ".teg-container",
        'div[id^="sp_message_container"]',  # Popover
        ".wisepops-root",  # Popover
        "#wisepops-root",
        ".widget_eu_cookie_law_widget",  # GDPR poup
        ".fancybox-overlay",  # Ad overlay
        ".signup-box",  # Popup ad
        ".newspack-lightbox",  # Popup
        ".adunit-googleadmanager",  # Google ad
        ".mc-modal",  # Newsletter popup
        ".mc-modal-bg",
        ".blockNavigation",
        ".ab-iam-root",
        ".omaha-background",  # Takeover ad
        ".sqs-popup-overlay",  # Overlay popup
        "#gcomPromo",  # Overlay found on Brazilian sites
        ".Campaign",
    ]
    target_str = ",".join(target_list)
    javascript = f"""
        document.querySelectorAll('{target_str}').forEach(el => el.remove());
        var styleSheet = document.createElement('style');
        styleSheet.innerText = '{target_str} {{ display: none !important; }}';
        document.head.appendChild(styleSheet);
     """
    return javascript


def _load_new_page_disable_javascript(context, url, wait_seconds, handle):
    """Loads the page with javascript blocking."""
    # Create an empty tab
    page = context.new_page()
    # Open the page
    print(f"Opening {url}")
    page.goto(url, timeout=60000)

    # Give it a beat
    print(f"Waiting {wait_seconds} seconds")
    time.sleep(wait_seconds)
    common_javascript = _get_common_blocking_javascript()

    print("Executing common JavaScript")
    page.evaluate(common_javascript)

    # If there's custom javascript for this site, run it
    custom_javascript = utils.get_javascript(handle)
    if custom_javascript:
        print("Executing custom JavaScript")
        try:
            page.evaluate(custom_javascript)
        except Error as error:
            raise click.ClickException(error.message)

    # Hide the scrollbars
    print("Hiding scrollbars with CSS")
    css = """document.body.style.overflow = 'hidden';"""
    page.evaluate(css)

    # Prevent Playwright from hovering over a link and highlighting it
    print("Preventing mouse hovers")
    css = """
    const style = document.createElement("style");
    style.innerHTML = "a:hover, a:focus { color: initial; text-decoration: initial; }";
    document.head.appendChild(style);
    """
    page.evaluate(css)

    # Give it another beat
    print(f"Waiting {wait_seconds} seconds")
    time.sleep(wait_seconds)
    return page