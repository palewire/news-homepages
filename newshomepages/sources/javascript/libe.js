document.querySelectorAll(
  '[class^="StickyAd"]'
).forEach(el => el.style.display = 'none')

document.querySelectorAll(
  '.message-container,.message-container,[id^="sp_message_container"]'
).forEach(el => el.remove())
