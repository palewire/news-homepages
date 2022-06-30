'use strict';const LOCALE_TAG = 'i18n';
const EXTRA_ISSUES_URL = 'https://github.com/AdguardTeam/AdGuardExtra/issues';
const EXTRA_HOSTS_URL = 'https://github.com/AdguardTeam/AdGuardExtra#websites-where-adguard-extra-can-be-useful';
const LINK_MARKER_START = '{link}';
const LINK_MARKER_END = '{/link}';
const getLocale = (key) => {
    const browser = window.browser || chrome;
    const translation = browser.i18n.getMessage(key);
    if (!translation) {
        return false;
    }
    return translation;
};
const translateAll = () => {
    const stringsI18n = document.querySelectorAll(`[${LOCALE_TAG}]`);
    [...stringsI18n].forEach((str) => {
        const attr = str.getAttribute(LOCALE_TAG);
        const locale = getLocale(attr);
        if (locale) {
            str.innerHTML = locale;
        }
    });
};
const addLink = (id, url) => {
    const element = document.querySelector(id);
    element.innerHTML = element.innerText
        .replace(LINK_MARKER_START, `<a href="${url}" target="_blank">`)
        .replace(LINK_MARKER_END, '</a>');
};
window.onblur = () => {
    window.close();
};
translateAll();
addLink('#hosts-message', EXTRA_HOSTS_URL);
addLink('#report-message', EXTRA_ISSUES_URL);