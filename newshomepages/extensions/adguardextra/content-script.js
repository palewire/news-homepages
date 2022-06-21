'use strict';(() => {
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'text/javascript');
    scriptTag.className = 'extra';
    const browser = window.browser || chrome;
    const scriptSource = browser.runtime.getURL('userscript.js');
    const hash = Math.random().toString(36).substring(5);
    scriptTag.setAttribute('src', `${scriptSource}?${hash}`);
    const parent = document.head || document.documentElement;
    parent.appendChild(scriptTag);
    if (scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
    }
})();