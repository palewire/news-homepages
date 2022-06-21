// ==UserScript==
// @name AdGuard Extra 
// @name:be AdGuard Extra 
// @name:cs AdGuard Extra 
// @name:da AdGuard Extra 
// @name:de AdGuard Extra 
// @name:es AdGuard Extra 
// @name:fi AdGuard Extra 
// @name:fr AdGuard Extra 
// @name:he AdGuard Extra 
// @name:hr AdGuard Extra 
// @name:hu AdGuard Extra 
// @name:id AdGuard Extra 
// @name:it AdGuard Extra 
// @name:ja AdGuard Extra 
// @name:ko AdGuard Extra 
// @name:lt AdGuard Extra 
// @name:nl AdGuard Extra 
// @name:no AdGuard Extra 
// @name:pl AdGuard Extra 
// @name:pt-PT AdGuard Extra 
// @name:pt AdGuard Extra 
// @name:ro AdGuard Extra 
// @name:ru AdGuard Extra 
// @name:sk AdGuard Extra 
// @name:sl Uporabi AdGuard Extra 
// @name:sr AdGuard ekstra 
// @name:tr AdGuard Extra 
// @name:uk AdGuard Extra 
// @name:vi AdGuard Extra 
// @name:zh-TW AdGuard Extra 
// @name:zh AdGuard Extra 
// @namespace    adguard
// @version      1.0.395
// @description AdGuard Extra is designed to solve complicated cases when regular ad blocking rules aren't enough. 
// @description:be AdGuard Extra прызначаны для вырашэння складаных выпадкаў, калі звычайных правілаў блакавання рэкламы недастаткова. 
// @description:cs AdGuard Extra má za úkol řešit složité případy, když běžná pravidla pro blokování reklam nestačí. 
// @description:da AdGuard Extra er designet til at løse komplicerede tilfælde, hvor alm. adblockingregler ikke er nok. 
// @description:de AdGuard Extra wurde entwickelt, um komplexe Fälle zu lösen, wenn normalen Regeln zum Sperren von Werbung nicht ausreichen. 
// @description:es AdGuard Extra está diseñado para resolver casos complicados cuando las reglas regulares para bloqueo de anuncios no son suficientes. 
// @description:fi AdGuard Extra on suunniteltu ratkaisemaan monimutkaisia tapauksia kun tavalliset mainosten estosäännöt eivät riitä. 
// @description:fr AdGuard Extra est conçu pour résoudre les cas complexes lorsque les règles de blocage des publicités ne suffisent pas. 
// @description:he AdGuard Extra מתוכנן לפתור מקרים מורכבים בהם כללים רגילים של חסימת פרסומות אינם מספיקים. 
// @description:hr AdGuard Extra je dizajniran za rješavanje kompleksnih slučajeva kada opća pravila blokade oglasa nisu dovoljna. 
// @description:hu Az AdGuard Extra olyan bonyolultabb esetek megoldására szolgál, amikor a hagyományos hirdetésblokkolási szabályok nem elegendőek. 
// @description:id AdGuard Extra dirancang untuk menyelesaikan kasus rumit saat aturan pemblokiran iklan biasa tidak cukup. 
// @description:it AdGuard Extra è progettato per risolvere casi complicati in cui le normali regole di blocca-annunci non sono sufficienti. 
// @description:ja AdGuard Extraは、通常の広告ブロックルールが十分ではない複雑なケースを解決するために設計されています。 
// @description:ko AdGuard Extra는 일반적인 광고 차단 규칙이 충분하지 않은 복잡한 문제를 해결하도록 설계되었습니다. 
// @description:lt AdGuard Extra yra skirtas išspręsti sudėtingesnius atvejus, kai nepakanka įprastų skelbimų blokavimo taisyklių. 
// @description:nl AdGuard Extra is bedoeld om ingewikkelde gevallen op te lossen wanneer de standaard advertentie blokkeringsregels niet voldoende blijken. 
// @description:no AdGuard Extra er utformet for å løse kompliserte saker der vanlige blokkeringsoppføringer ikke strekker til. 
// @description:pl AdGuard Extra jest przeznaczony do rozwiązywania skomplikowanych przypadków, gdy zwykłe reguły blokowania reklam nie wystarczą. 
// @description:pt-PT O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. 
// @description:pt O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. 
// @description:ro AdGuard Extra este creeat să rezolve cazuri complexe când regulile uzuale de blocat reclame sunt insuficiente. 
// @description:ru AdGuard Extra предназначен для решения более сложных задач, когда обычных правил блокировки рекламы недостаточно. 
// @description:sk AdGuard Extra má za úlohu riešiť zložité prípady, keď bežné pravidlá blokovania reklám nestačia. 
// @description:sl AdGuard Extra naj bi rešil zapletene primere, ko običajna pravila za zaviranje oglasov niso dovolj. 
// @description:sr AdGuard Extra bi trebalo da reši komplikovane slučajeve u kojima standardna pravila blokiranja reklama nisu dovoljna. 
// @description:tr AdGuard Extra, normal reklam engelleme kurallarının yeterli olmadığı karmaşık durumları çözmek için tasarlanmıştır. 
// @description:uk AdGuard Extra призначений для вирішення складних завдань, коли звичайних правил для блокування реклами недостатньо. 
// @description:vi AdGuard Extra được thiết kế để giải quyết các vấn đề khi mà các quy tắc chặn quảng cáo thông thường chưa đủ. 
// @description:zh-TW 當常規的廣告封鎖規則不夠時，AdGuard Extra 旨在解決複雜的情況。 
// @description:zh AdGuard Extra 旨在解决常规的广告拦截规则无能为力的复杂情况。 
// @downloadURL  https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js
// @updateURL    https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.meta.js
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @exclude *://mil.ru/*
// @exclude *wikipedia.org*
// @exclude *icloud.com*
// @exclude *hangouts.google.com*
// @exclude *www.facebook.com/plugins/*
// @exclude *www.facebook.com/v*/plugins*
// @exclude *disqus.com/embed/comments*
// @exclude *vk.com/widget*
// @exclude *twitter.com/intent/*
// @exclude *www.youtube.com/embed/*
// @exclude *player.vimeo.com*
// @exclude *coub.com/embed*
// @exclude *staticxx.facebook.com/connect/xd_arbiter/*
// @exclude *vk.com/q_frame*
// @exclude *tpc.googlesyndication.com*
// @exclude *syndication.twitter.com*
// @exclude *platform.twitter.com*
// @exclude *tutosdeath.blogspot.com*
// @exclude *notifications.google.com*
// @exclude *google.com/recaptcha/*
// @exclude *bizmania.ru/*
// ==/UserScript==
'use strict';const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
const browser = {
  window: win,
  document: win.document,
  location: win.document.location,
  console: {},
  querySelector: win.document.querySelector.bind(win.document),
  querySelectorAll: win.document.querySelectorAll.bind(win.document),
  getAttribute: Function.prototype.call.bind(HTMLElement.prototype.getAttribute),
  setAttribute: Function.prototype.call.bind(HTMLElement.prototype.setAttribute),
  removeAttribute: Function.prototype.call.bind(HTMLElement.prototype.removeAttribute),
  defineProperty: Object.defineProperty,
  MutationObserver: win.MutationObserver
};
Object.keys(browser.window.console).forEach(name => {
  browser.console[name] = browser.window.console[name];
});const hosts = {
  '4pda.ru': '*://*.4pda.ru/*',
  '4pda.to': '*://*.4pda.to/*',
  'adguard.com': '*://*.adguard.com/*',
  'auto.ru': '*://*.auto.ru/*',
  'media.auto.ru': '*://*.media.auto.ru/*',
  'yandex.ru': '*://*.yandex.ru/*',
  'yandex.kz': '*://*.yandex.kz/*',
  'yandex.by': '*://*.yandex.by/*',
  'yandex.ua': '*://*.yandex.ua/*',
  'yandex.md': '*://*.yandex.md/*',
  'yandex.fr': '*://*.yandex.fr/*',
  'yandex.lv': '*://*.yandex.lv/*',
  'yandex.ee': '*://*.yandex.ee/*',
  'yandex.com.tr': '*://*.yandex.com.tr/*',
  'yandex.com': '*://*.yandex.com/*',
  'yandex.uz': '*://*.yandex.uz/*',
  'afisha.yandex.ru': '*://*.afisha.yandex.ru/*',
  'afisha.yandex.kz': '*://*.afisha.yandex.kz/*',
  'afisha.yandex.by': '*://*.afisha.yandex.by/*',
  'afisha.yandex.ua': '*://*.afisha.yandex.ua/*',
  'afisha.yandex.md': '*://*.afisha.yandex.md/*',
  'mail.yandex.ru': '*://*.mail.yandex.ru/*',
  'mail.yandex.kz': '*://*.mail.yandex.kz/*',
  'mail.yandex.by': '*://*.mail.yandex.by/*',
  'mail.yandex.ua': '*://*.mail.yandex.ua/*',
  'mail.yandex.md': '*://*.mail.yandex.md/*',
  'mail.yandex.com.tr': '*://*.mail.yandex.com.tr/*',
  'mail.yandex.com': '*://*.mail.yandex.com/*',
  'mail.yandex.fr': '*://*.mail.yandex.fr/*',
  'mail.yandex.ee': '*://*.mail.yandex.ee/*',
  'mail.yandex.kg': '*://*.mail.yandex.kg/*',
  'mail.yandex.lv': '*://*.mail.yandex.lv/*',
  'mail.yandex.lt': '*://*.mail.yandex.lt/*',
  'news.yandex.ru': '*://*.news.yandex.ru/*',
  'news.yandex.kz': '*://*.news.yandex.kz/*',
  'news.yandex.by': '*://*.news.yandex.by/*',
  'news.yandex.ua': '*://*.news.yandex.ua/*',
  'news.yandex.md': '*://*.news.yandex.md/*',
  'music.yandex.ru': '*://*.music.yandex.ru/*',
  'music.yandex.kz': '*://*.music.yandex.kz/*',
  'music.yandex.by': '*://*.music.yandex.by/*',
  'music.yandex.ua': '*://*.music.yandex.ua/*',
  'music.yandex.md': '*://*.music.yandex.md/*',
  'tv.yandex.ru': '*://*.tv.yandex.ru/*',
  'tv.yandex.kz': '*://*.tv.yandex.kz/*',
  'tv.yandex.by': '*://*.tv.yandex.by/*',
  'tv.yandex.ua': '*://*.tv.yandex.ua/*',
  'tv.yandex.md': '*://*.tv.yandex.md/*',
  'zen.yandex.ru': '*://*.zen.yandex.ru/*',
  'zen.yandex.kz': '*://*.zen.yandex.kz/*',
  'zen.yandex.by': '*://*.zen.yandex.by/*',
  'zen.yandex.ua': '*://*.zen.yandex.ua/*',
  'zen.yandex.md': '*://*.zen.yandex.md/*',
  'realty.yandex.ru': '*://*.realty.yandex.ru/*',
  'docviewer.yandex.ru': '*://*.docviewer.yandex.ru/*',
  'docviewer.yandex.kz': '*://*.docviewer.yandex.kz/*',
  'docviewer.yandex.by': '*://*.docviewer.yandex.by/*',
  'docviewer.yandex.ua': '*://*.docviewer.yandex.ua/*',
  'docviewer.yandex.md': '*://*.docviewer.yandex.md/*',
  'docviewer.yandex.com.tr': '*://*.docviewer.yandex.com.tr/*',
  'docviewer.yandex.com.am': '*://*.docviewer.yandex.com.am/*',
  'drive2.ru': '*://*.drive2.ru/*',
  'drive2.com': '*://*.drive2.com/*',
  'kinopoisk.ru': '*://*.kinopoisk.ru/*',
  'eda.ru': '*://*.eda.ru/*',
  'facebook.com': '*://*.facebook.com/*',
  'facebookcorewwwi.onion': '*://*.facebookcorewwwi.onion/*',
  'go.mail.ru': '*://*.go.mail.ru/*',
  'e.mail.ru': '*://*.e.mail.ru/*',
  'octavius.mail.ru': '*://*.octavius.mail.ru/*',
  'mail.ru': '*://*.mail.ru/*',
  'news.mail.ru': '*://*.news.mail.ru/*',
  'auto.mail.ru': '*://*.auto.mail.ru/*',
  'sportmail.ru': '*://*.sportmail.ru/*',
  'horo.mail.ru': '*://*.horo.mail.ru/*',
  'deti.mail.ru': '*://*.deti.mail.ru/*',
  'lady.mail.ru': '*://*.lady.mail.ru/*',
  'hi-tech.mail.ru': '*://*.hi-tech.mail.ru/*',
  'minigames.mail.ru': '*://*.minigames.mail.ru/*',
  'otvet.mail.ru': '*://*.otvet.mail.ru/*',
  'tv.mail.ru': '*://*.tv.mail.ru/*',
  'ok.ru': '*://*.ok.ru/*',
  'rambler.ru': '*://*.rambler.ru/*',
  'championat.com': '*://*.championat.com/*',
  'gazeta.ru': '*://*.gazeta.ru/*',
  'lenta.ru': '*://*.lenta.ru/*',
  'quto.ru': '*://*.quto.ru/*',
  'rns.online': '*://*.rns.online/*',
  'passion.ru': '*://*.passion.ru/*',
  'wmj.ru': '*://*.wmj.ru/*',
  'wp.pl': '*://*.wp.pl/*',
  'vidstream.online': '*://*.vidstream.online/*',
  'livejournal.com': '*://*.livejournal.com/*',
  'varlamov.ru': '*://*.varlamov.ru/*',
  'lena-miro.ru': '*://*.lena-miro.ru/*',
  'olegmakarenko.ru': '*://*.olegmakarenko.ru/*',
  'periskop.su': '*://*.periskop.su/*',
  'levik.blog': '*://*.levik.blog/*',
  'vadimrazumov.ru': '*://*.vadimrazumov.ru/*',
  'otzovik.com': '*://*.otzovik.com/*',
  'sinoptik.ua': '*://*.sinoptik.ua/*',
  'multiup.org': '*://*.multiup.org/*',
  'yaplakal.com': '*://*.yaplakal.com/*',
  'yap.ru': '*://*.yap.ru/*',
  'pravda.com.ua': '*://*.pravda.com.ua/*',
  'epravda.com.ua': '*://*.epravda.com.ua/*',
  'glianec.com': '*://*.glianec.com/*',
  'ostro.org': '*://*.ostro.org/*',
  'nashamama.com': '*://*.nashamama.com/*',
  'bilshe.com': '*://*.bilshe.com/*',
  'zdorovia.com.ua': '*://*.zdorovia.com.ua/*',
  'i.factor.ua': '*://*.i.factor.ua/*',
  'gismeteo.ua': '*://*.gismeteo.ua/*',
  '1777.ru': '*://*.1777.ru/*',
  'cn.ru': '*://*.cn.ru/*',
  'finance.i.ua': '*://*.finance.i.ua/*',
  'glavcom.ua': '*://*.glavcom.ua/*',
  'hvylya.net': '*://*.hvylya.net/*',
  'kp.ua': '*://*.kp.ua/*',
  'love.i.ua': '*://*.love.i.ua/*',
  'newsone.ua': '*://*.newsone.ua/*',
  'peers.tv': '*://*.peers.tv/*',
  'radio.i.ua': '*://*.radio.i.ua/*',
  'real-vin.com': '*://*.real-vin.com/*',
  'viks.bz': '*://*.viks.bz/*',
  'vsetv.com': '*://*.vsetv.com/*',
  'tv.ua': '*://*.tv.ua/*',
  'isport.ua': '*://*.isport.ua/*',
  'eurointegration.com.ua': '*://*.eurointegration.com.ua/*',
  'u-news.com.ua': '*://*.u-news.com.ua/*',
  'strana.ua': '*://*.strana.ua/*',
  '4mama.ua': '*://*.4mama.ua/*',
  'bigmir.net': '*://*.bigmir.net/*',
  'dengi.ua': '*://*.dengi.ua/*',
  'enovosty.com': '*://*.enovosty.com/*',
  'facenews.ua': '*://*.facenews.ua/*',
  'football24.ua': '*://*.football24.ua/*',
  'gorod.dp.ua': '*://*.gorod.dp.ua/*',
  'inforesist.org': '*://*.inforesist.org/*',
  'kolobok.ua': '*://*.kolobok.ua/*',
  'liga.net': '*://*.liga.net/*',
  'nnovosti.info': '*://*.nnovosti.info/*',
  'smak.ua': '*://*.smak.ua/*',
  'tochka.net': '*://*.tochka.net/*',
  'ukr.net': '*://*.ukr.net/*',
  'nv.ua': '*://*.nv.ua/*',
  'meteo.ua': '*://*.meteo.ua/*',
  'besplatka.ua': '*://*.besplatka.ua/*',
  'lifedon.com.ua': '*://*.lifedon.com.ua/*',
  'sheee.co.il': '*://*.sheee.co.il/*',
  'walla.co.il': '*://*.walla.co.il/*',
  'kakprosto.ru': '*://*.kakprosto.ru/*',
  '24smi.org': '*://*.24smi.org/*',
  'youtube.com': '*://*.youtube.com/*',
  'echo.msk.ru': '*://*.echo.msk.ru/*',
  'soft98.ir': '*://*.soft98.ir/*',
  'twitch.tv': '*://*.twitch.tv/*',
  'ppss.kr': '*://*.ppss.kr/*',
  'ygosu.com': '*://*.ygosu.com/*',
  'pussyspace.net': '*://*.pussyspace.net/*',
  'pussyspace.com': '*://*.pussyspace.com/*',
  'letidor.ru': '*://*.letidor.ru/*',
  'motor.ru': '*://*.motor.ru/*',
  'zv.zp.ua': '*://*.zv.zp.ua/*',
  'techpowerup.com': '*://*.techpowerup.com/*',
  'rjno1.com': '*://*.rjno1.com/*',
  'liveinternet.ru': '*://*.liveinternet.ru/*'
};class UserInteractionTracker {
  constructor() {
    this.TRACKED_EVENTS = ['auxclick', 'click', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup', 'wheel', 'keydown', 'keypress', 'keyup'];
    this.LAST_EVENT_TIMEOUT_MS = 10;
    this.lastEventType = '';
    this.lastEventTime = '';
    const trackEvent = event => {
      this.lastEventType = event.type;
      this.lastEventTime = Date.now();
    };
    for (let i = 0; i < this.TRACKED_EVENTS.length; i += 1) {
      document.documentElement.addEventListener(this.TRACKED_EVENTS[i], trackEvent, true);
    }
  }
  getCurrentEvent() {
    if (!this.lastEventType || !this.lastEventTime) {
      return null;
    }
    const isTimeout = Date.now() - this.lastEventTime > this.LAST_EVENT_TIMEOUT_MS;
    if (!isTimeout) {
      return this.lastEventType;
    }
    return null;
  }
}let tracker;
function getTracker() {
  if (!tracker) {
    tracker = new UserInteractionTracker();
  }
  return tracker;
}
function observeDomChanges(callback) {
  const domMutationObserver = new browser.MutationObserver(mutations => {
    if (getTracker().getCurrentEvent()) {
      return;
    }
    callback(mutations);
  });
  domMutationObserver.observe(browser.document, {
    childList: true,
    subtree: true
  });
}
function disableScripts(pattern) {
  observeDomChanges(mutations => {
    mutations.forEach(mutation => {
      for (let i = 0; i < mutation.addedNodes.length; i += 1) {
        const node = mutation.addedNodes[i];
        if (node.localName === 'script' && node.innerText.match(pattern)) {
          node.remove();
        }
      }
    });
  });
}
function safeGetStylesheetRules(sheet) {
  try {
    if (sheet.rules === null) {
      return [];
    }
    return sheet.rules;
  } catch (e) {
    return [];
  }
}
function removeNode(node) {
  return node && node.parentNode && node.parentNode.removeChild(node);
}
function browserSupported() {
  return !(navigator.userAgent && navigator.userAgent.match(/(MSIE|Trident)/));
}
const hideViaDisplayProperty = node => {
  if (node) {
    node.style.setProperty('display', 'none', 'important');
  }
};
const hideViaPositionProperty = node => {
  if (node) {
    node.style.position = 'absolute';
    node.style.top = '-99999px';
  }
};
const hideViaOpacity = node => {
  if (node) {
    node.style.setProperty('position', 'absolute', 'important');
    node.style.setProperty('opacity', '0', 'important');
  }
};
const iterateCSSRules = func => {
  [...browser.document.styleSheets].forEach(sheet => {
    [...safeGetStylesheetRules(sheet)].forEach(rule => {
      func(rule);
    });
  });
};
const hideRulesByCondition = (pattern, condition) => {
  iterateCSSRules(rule => {
    if (rule.selectorText && condition(rule.selectorText, pattern)) {
      hideViaDisplayProperty(rule);
    }
  });
};
const stringPatternCondition = (selector, pattern) => selector.includes(pattern);
const regexpPatternCondition = (selector, pattern) => pattern.test(selector);
const hideCssRulesBySelectorText = pattern => {
  if (pattern && pattern.constructor === String) {
    hideRulesByCondition(pattern, stringPatternCondition);
  } else if (pattern && pattern.constructor === RegExp) {
    hideRulesByCondition(pattern, regexpPatternCondition);
  } else {
    throw new Error('The arguments must be type of String or RegExp');
  }
};
const isMatchingHostnames = function isMatchingHostnames() {
  for (var _len = arguments.length, hostnames = new Array(_len), _key = 0; _key < _len; _key++) {
    hostnames[_key] = arguments[_key];
  }
  return browserSupported() && hostnames.some(hostname => {
    if (!hosts[hostname]) {
      return false;
    }
    const hostPattern = hosts[hostname].replace('*://*.', '');
    return browser.location.origin.match(hostPattern);
  });
};
const injectHidingRuleForClassname = (() => {
  const injectedRules = [];
  return className => {
    const hidingRule = `.${className} { display: none !important }`;
    if (injectedRules.some(rule => rule === hidingRule)) {
      return;
    }
    const {
      styleSheets
    } = browser.document;
    let styleSheet = styleSheets[styleSheets.length - 1];
    if (!styleSheet) {
      const style = browser.document.createElement('style');
      browser.document.head.appendChild(style);
      styleSheet = style.sheet;
    }
    styleSheet.insertRule(hidingRule, styleSheet.cssRules.length);
    injectedRules.push(hidingRule);
  };
})();
const replaceScripts = (regex, replacement) => {
  observeDomChanges(mutations => {
    mutations.forEach(mutation => {
      for (let i = 0; i < mutation.addedNodes.length; i += 1) {
        const node = mutation.addedNodes[i];
        if (node.localName === 'script' && node.innerText.match(regex)) {
          node.innerHTML = node.innerHTML.replace(regex, replacement);
        }
      }
    });
  });
};
const preventXHR = shouldBlock => {
  const origOpen = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function () {
    function intercept(e) {
      const request = e.currentTarget;
      if (shouldBlock(request)) {
        request.abort();
        request.removeEventListener('readystatechange', intercept);
      }
      if (request.readyState === 4) {
        request.removeEventListener('readystatechange', intercept);
      }
    }
    this.addEventListener('readystatechange', intercept);
    return origOpen.apply(this, arguments);
  };
};
const elementContains = (element, pattern) => {
  if (!element || !element.textContent) {
    return false;
  }
  return element.textContent.match(pattern);
};
const getParent = (node, stepsUp) => {
  if (!node) {
    return null;
  }
  if (stepsUp <= 0) {
    return node;
  }
  return getParent(node.parentNode, stepsUp - 1);
};
const blockProperty = prop => {
  if (!prop) {
    return;
  }
  if (window[prop] && Object.getOwnPropertyDescriptor(browser.window, prop).configurable || !window[prop]) {
    browser.defineProperty(browser.window, prop, {
      configurable: false
    });
  }
};
function observeShadowRoots(callback) {
  const safeGetDescriptor = (obj, prop) => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    if (descriptor && descriptor.get && descriptor.configurable) {
      return descriptor;
    }
    return null;
  };
  const shadowObserver = new MutationObserver(callback);
  const shadowObserverOpts = {
    subtree: true,
    childList: true
  };
  const hijackAttachShadow = context => {
    const originalAttachShadow = context.Element.prototype.attachShadow;
    context.Element.prototype.attachShadow = function (originalArgs) {
      const shadowRoot = originalAttachShadow.call(this, originalArgs);
      shadowObserver.observe(shadowRoot, shadowObserverOpts);
      return shadowRoot;
    };
    context.Element.prototype.attachShadow.toString = originalAttachShadow.toString.bind(originalAttachShadow);
  };
  const hijackContentWindows = context => {
    const descriptor = safeGetDescriptor(context.HTMLIFrameElement.prototype, 'contentWindow');
    if (!descriptor) {
      return;
    }
    const originalGetter = descriptor.get;
    descriptor.get = function () {
      const contentWindow = originalGetter.call(this);
      try {
        hijackAttachShadow(contentWindow);
        return contentWindow;
      } catch (e) {
        return contentWindow;
      }
    };
    Object.defineProperty(context.HTMLIFrameElement.prototype, 'contentWindow', descriptor);
  };
  hijackAttachShadow(browser.window);
  hijackContentWindows(browser.window);
}
function removeFromShadowRoots(selector) {
  let nodesToClear = [];
  const clearRootsContent = () => {
    if (nodesToClear.length !== 0) {
      nodesToClear.forEach(node => {
        removeNode(node);
      });
      nodesToClear = [];
    }
  };
  observeShadowRoots(mutationList => {
    [...mutationList].forEach(mutationRecord => {
      if (mutationRecord.addedNodes.length !== 0) {
        const container = mutationRecord.target;
        const shadowContentNodes = container.querySelectorAll(selector);
        nodesToClear.push(...shadowContentNodes);
        clearRootsContent();
      }
    });
  });
}
const hideViaOverlay = function hideViaOverlay(container) {
  let color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';
  if (!container) {
    return;
  }
  const customLayerStyle = `
        z-index: 100;
        background-color: ${color};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
    `;
  if (container.querySelector('#CUSTOM_OVERLAY')) {
    return;
  }
  const layer = browser.document.createElement('div');
  layer.setAttribute('id', 'CUSTOM_OVERLAY');
  layer.style.cssText = customLayerStyle;
  container.append(layer);
};
const exposeContent = function exposeContent(wrapNode, contentNodes) {
  let color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
  if (!wrapNode) {
    return;
  }
  hideViaOverlay(wrapNode, color);
  [...contentNodes].forEach(node => {
    node.style.position = 'relative';
    node.style.zIndex = '999';
  });
};if (isMatchingHostnames('facebook.com', 'facebookcorewwwi.onion')) {
  const hideFeedAds = () => {
    const posts = browser.querySelectorAll('div[id^="substream_"] div[id^="hyperfeed_story_id"]');
    if (posts.length <= 0) {
      return;
    }
    posts.forEach(post => {
      if (post.style.display === 'none') {
        return;
      }
      let dataFt;
      Object.keys(post).some(key => {
        if (!post[key]) {
          return false;
        }
        dataFt = post[key]['data-ft'];
        return !!dataFt;
      });
      if (!dataFt) {
        return;
      }
      const sponsored1 = dataFt.includes('"is_sponsored":1');
      const sponsored2 = dataFt.includes('"ei":') && !dataFt.includes('"page_id":"');
      if (sponsored1 || sponsored2) {
        post.style.display = 'none';
      }
    });
  };
  const hideMarketplaceAds = () => {
    const posts = browser.querySelectorAll('div[data-testid="marketplace_home_feed"] > div > div > div[class] > div[class] > div > div[class]:not([style*="display:none"])');
    if (posts.length <= 0) {
      return;
    }
    posts.forEach(post => {
      const html = post.outerHTML;
      if (!html) {
        return;
      }
      if (html.includes('/ads/about/')) {
        post.style = 'display:none!important;';
      }
    });
  };
  observeDomChanges(() => {
    hideFeedAds();
    hideMarketplaceAds();
  });
}if (isMatchingHostnames('4pda.ru', '4pda.to') && !browser.location.pathname.startsWith('/amp/')) {
  const remove = node => node && node.parentNode.removeChild(node);
  const width = () => browser.window.innerWidth || browser.document.body.clientWidth || 0;
  const height = () => browser.window.innerHeight || browser.document.body.clientHeight || 0;
  const blockHeaderAds = () => {
    let header = browser.querySelector('.menu-main');
    if (!header) {
      return;
    }
    header = header.parentNode.parentNode;
    for (let i = 0; i < header.parentNode.children.length; i += 1) {
      const childNode = header.parentNode.children[i];
      if (childNode !== header) {
        hideViaDisplayProperty(childNode);
      } else {
        return;
      }
    }
  };
  const isAppPromo = element => {
    const appPromoHeader = element === null || element === void 0 ? void 0 : element.firstElementChild;
    return (appPromoHeader === null || appPromoHeader === void 0 ? void 0 : appPromoHeader.tagName) === 'H2' && /[AmopPrАорР]{8}/.test(appPromoHeader === null || appPromoHeader === void 0 ? void 0 : appPromoHeader.innerText);
  };
  const blockSidebarAds = () => {
    var _devdbcArticle$nextSi, _adElement$firstEleme;
    const aside = browser.querySelectorAll('[class]:not([id]) > [id]:not([class]) > :first-child + [id][class] > [class]:not([id])');
    [...aside].forEach(itm => {
      if ((itm === null || itm === void 0 ? void 0 : itm.firstElementChild) === null || itm.offsetHeight > 999 || isAppPromo(itm)) {
        hideViaPositionProperty(itm);
      }
    });
    const devdbcArticle = browser.querySelector('div[id^="devdbc_articles"]');
    const adElement = devdbcArticle === null || devdbcArticle === void 0 ? void 0 : (_devdbcArticle$nextSi = devdbcArticle.nextSibling) === null || _devdbcArticle$nextSi === void 0 ? void 0 : _devdbcArticle$nextSi.nextSibling;
    if (!/DIV|SPAN|SCRIPT/.test(adElement === null || adElement === void 0 ? void 0 : (_adElement$firstEleme = adElement.firstElementChild) === null || _adElement$firstEleme === void 0 ? void 0 : _adElement$firstEleme.tagName)) {
      hideViaPositionProperty(adElement);
    }
  };
  const blockNewSidebarAds = () => {
    const adElements = browser.querySelectorAll('[id][class] > .slider-list ~ div[class]:not([id])');
    if (adElements) {
      [...adElements].forEach(adElement => {
        if ((adElement === null || adElement === void 0 ? void 0 : adElement.textContent.indexOf('HUAWEI')) > 0 || (adElement === null || adElement === void 0 ? void 0 : adElement.textContent.indexOf('vive-zoneid')) > 0) {
          hideViaPositionProperty(adElement);
        }
      });
    }
  };
  const blockMobileAds = () => {
    const elements = browser.querySelectorAll('body > :not(div):not(a)');
    if (elements.length === 0) {
      return;
    }
    [...elements].forEach(el => {
      if (browser.getAttribute(el, 'items') === 'result.adv') {
        hideViaDisplayProperty(el);
      }
    });
  };
  const blockMobileHeaderFooterAds = () => {
    if (navigator.userAgent.match('Mobile')) {
      const headerAdsImg = browser.querySelector('article a[target="_blank"] > img');
      const footerButtonAdsImg = browser.querySelector('body > a[class][role="button"]');
      const footerAdsImg = footerButtonAdsImg === null || footerButtonAdsImg === void 0 ? void 0 : footerButtonAdsImg.previousSibling;
      if (headerAdsImg) {
        hideViaDisplayProperty(headerAdsImg.parentNode);
      }
      if (footerButtonAdsImg && footerAdsImg) {
        hideViaDisplayProperty(footerButtonAdsImg);
        hideViaDisplayProperty(footerAdsImg);
      }
      const navPromo = browser.querySelector('.menu-main-mobile > li:last-child');
      if (navPromo && navPromo.querySelector('svg')) {
        removeNode(navPromo);
      }
    }
  };
  const fixNavMenu = () => {
    const adLink = browser.querySelector('.menu-main .menu-main-item > a[style*="background"]');
    if (!adLink) {
      return;
    }
    hideViaDisplayProperty(adLink);
  };
  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const fixAdsPlaceholder = () => {
    var _adsScript$parentNode, _adsScript$nextElemen;
    const adsScript = browser.document.querySelector('script[src^="//4pda.ru/ad/www"]');
    const adsContainer = adsScript === null || adsScript === void 0 ? void 0 : (_adsScript$parentNode = adsScript.parentNode) === null || _adsScript$parentNode === void 0 ? void 0 : _adsScript$parentNode.parentNode;
    if (adsContainer && (adsScript === null || adsScript === void 0 ? void 0 : (_adsScript$nextElemen = adsScript.nextElementSibling) === null || _adsScript$nextElemen === void 0 ? void 0 : _adsScript$nextElemen.className) !== 'slider-news' && !isMobile()) {
      adsContainer.style.marginTop = '-100px';
    }
  };
  const fixHeaderLeftover = () => {
    const fakePost = browser.querySelector('article[itemscope][itemtype][itemid]');
    if (!fakePost) {
      return;
    }
    const container = getParent(fakePost, 3);
    const nextSibling = fakePost.nextElementSibling;
    if (container.nodeName !== 'DIV' && !browser.getAttribute(nextSibling, 'itemid')) {
      hideViaDisplayProperty(container);
    }
  };
  const restoreBackground = () => {
    const {
      body
    } = browser.document;
    body.setAttribute('style', `${body.getAttribute('style') || ''};background-color:#E6E7E9!important`);
    const extra = 'background-image:none!important;background-color:transparent!important';
    const fakeStyles = new WeakMap();
    const styleProxy = {
      get: (target, prop) => fakeStyles.get(target)[prop] || target[prop],
      set(target, prop, value) {
        const fakeStyle = fakeStyles.get(target);
        (prop in fakeStyle ? fakeStyle : target)[prop] = value;
        return true;
      }
    };
    [...browser.querySelectorAll('[id]:not(A), A')].forEach(itm => {
      if (!(itm.offsetWidth > 0.95 * width() && itm.offsetHeight > 0.85 * height())) {
        return;
      }
      if (itm.tagName !== 'A') {
        fakeStyles.set(itm.style, {
          backgroundImage: itm.style.backgroundImage,
          backgroundColor: itm.style.backgroundColor
        });
        try {
          browser.defineProperty(itm, 'style', {
            value: new Proxy(itm.style, styleProxy),
            enumerable: true
          });
        } catch (_unused) {}
        browser.setAttribute(itm, 'style', `${browser.getAttribute(itm, 'style') || ''};${extra}`);
      }
      if (itm.tagName === 'A') {
        browser.setAttribute(itm, 'style', 'display:none!important');
      }
    });
    fixAdsPlaceholder();
    fixHeaderLeftover();
  };
  const blockForumAds = () => {
    const itm = browser.querySelector('#logostrip');
    if (itm) {
      remove(itm.parentNode.nextSibling);
    }
    if (browser.location.pathname.startsWith('/forum/dl/')) {
      const setBackground = node => browser.setAttribute(node, 'style', `${browser.getAttribute(node, 'style') || ''};background-color:#4ebaf6!important`);
      setBackground(browser.document.body);
      [...browser.querySelectorAll('body > div')].forEach(item => {
        if (!item.querySelector('.dw-fdwlink, .content') && !item.classList.contains('footer')) {
          remove(item);
        } else {
          setBackground(item);
        }
      });
    }
  };
  const blockAdInFeed = () => {
    const elements = browser.querySelectorAll('[id][class] > article[class^="post"]:not([itemid])');
    [...elements].forEach(element => {
      if (!element.querySelector('div[id^="poll-ajax-frame"]')) {
        hideViaPositionProperty(element);
      }
    });
  };
  browser.window.addEventListener('DOMContentLoaded', () => {
    const isForum = browser.location.pathname.startsWith('/forum/');
    const isUserProfile = isForum && browser.location.href.indexOf('showuser') > 0;
    if (isForum) {
      blockForumAds();
      if (isUserProfile) {
        blockHeaderAds();
      }
    } else {
      blockNewSidebarAds();
      blockHeaderAds();
      fixNavMenu();
      restoreBackground();
    }
  });
  observeDomChanges(() => {
    blockMobileAds();
    blockMobileHeaderFooterAds();
    blockAdInFeed();
    blockSidebarAds();
  });
}const hideFeedsAdsBlocks = () => {
  try {
    const cardwrappers = browser.querySelectorAll('.feed__row .feed__item > div[class^="card-wrapper"]');
    [...cardwrappers].forEach(card => {
      const adBlock = getParent(card, 2);
      if (!card.className.includes('is-desktop')
      || elementContains(card.querySelector('div[class$="subtitle-text"]'), /промо/)) {
        hideViaPositionProperty(adBlock);
      }
    });
  } catch (_unused) {}
};
if (isMatchingHostnames('zen.yandex.ru', 'zen.yandex.kz', 'zen.yandex.by', 'zen.yandex.ua', 'zen.yandex.md')) {
  const hideArticletAds = () => {
    try {
      const articleBlocks = browser.document.querySelectorAll('div.article-render__block');
      [...articleBlocks].forEach(block => {
        if (block.firstElementChild.classList.length >= 3 && !block.querySelector('div.yandex-forms-embed')) {
          hideViaPositionProperty(block);
        }
      });
      const mozSidebarAds = browser.document.querySelector('div[class^="article-ad"]');
      hideViaPositionProperty(mozSidebarAds);
      const sidebarAds = browser.document.querySelector('.article-right-ad-block');
      hideViaPositionProperty(sidebarAds);
    } catch (_unused2) {}
  };
  const hideStickyRightAd = () => {
    const stickyContainer = browser.document.querySelector('div[class$="__main"] > div.sticky-container');
    if (stickyContainer && stickyContainer.querySelector('div[class$="__ad-content"]')) {
      hideViaPositionProperty(stickyContainer);
    }
  };
  const hideUnderCommentsAd = () => {
    const commentSection = browser.document.getElementById('article__comments');
    const commentsWrapper = getParent(commentSection, 2);
    const underCommentsAd = commentsWrapper === null || commentsWrapper === void 0 ? void 0 : commentsWrapper.previousSibling;
    if (underCommentsAd && underCommentsAd.classList.contains('article__content_limited')) {
      hideViaPositionProperty(underCommentsAd);
    }
  };
  removeFromShadowRoots('div > div[data-container="outer"]');
  const removeShadowLeftovers = () => {
    const leftovers = browser.document.querySelectorAll('.card-wrapersome, #article__bottom-embed');
    [...leftovers].forEach(node => {
      hideViaPositionProperty(node);
    });
  };
  observeDomChanges(() => {
    hideArticletAds();
    hideFeedsAdsBlocks();
    hideStickyRightAd();
    hideUnderCommentsAd();
    removeShadowLeftovers();
  });
}if (isMatchingHostnames('yandex.ru', 'yandex.kz', 'yandex.by', 'yandex.ua', 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com', 'yandex.lv', 'yandex.ee', 'yandex.uz')) {
  if (browser.location.pathname.startsWith('/sport')) {
    const hideSportAds = () => {
      var _browser$document$que;
      const adsCard = (_browser$document$que = browser.document.querySelector('div[class^="mg-grid__col"] div[class^="neo-"][class$="mg-grid__item_type_card"]')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.parentNode;
      if (adsCard) {
        removeNode(adsCard);
      }
    };
    const hideStickyAds = () => {
      var _browser$document$que2;
      const adsSticky = (_browser$document$que2 = browser.document.querySelector('div[class="mg-sticky__inner"] div[class^="neo-"][class$="__column-item"]')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.parentNode;
      if (!adsSticky) {
        return;
      }
      const adsClassName = adsSticky.classList[0];
      if (adsClassName) {
        injectHidingRuleForClassname(adsClassName);
      }
    };
    const mobileLeftovers = () => {
      if (!navigator.userAgent.match('Mobile')) {
        return;
      }
      const inbetweenAds = browser.querySelectorAll('[class*="_banner_more"], [class*="_banner_main"], [class*="_banner_top"]');
      [...inbetweenAds].forEach(ad => {
        if (ad.querySelector('[class="root123"]')) {
          hideViaPositionProperty(ad);
        }
      });
    };
    observeDomChanges(() => {
      hideStickyAds();
      hideSportAds();
      mobileLeftovers();
    });
  }
  if (browser.location.pathname.startsWith('/video/')) {
    const adBelowPlayer = () => {
      const videoInfo = browser.querySelector('.VideoViewer-Info');
      const adElement = videoInfo === null || videoInfo === void 0 ? void 0 : videoInfo.nextElementSibling;
      if (adElement && !(adElement !== null && adElement !== void 0 && adElement.className.startsWith('RelatedSnippets'))) {
        hideViaPositionProperty(adElement);
      }
    };
    const hideVideoListAds = () => {
      const videoList = browser.querySelectorAll('[id^="direct"]');
      if (!videoList.length) {
        return;
      }
      [...videoList].forEach(listItem => {
        hideViaDisplayProperty(listItem);
      });
    };
    const hideSidebarAds = () => {
      const adElements = browser.querySelectorAll('.Viewer-ScrollContainer > div[role="button"]');
      if (adElements) {
        [...adElements].forEach(element => {
          if (element && !element.querySelector('a[href^="https://yandex.ru/video/"]')) {
            hideViaDisplayProperty(element);
          }
        });
      }
    };
    observeDomChanges(() => {
      adBelowPlayer();
      hideVideoListAds();
      hideSidebarAds();
    });
  }
  if (browser.location.pathname.startsWith('/pogoda/') || browser.location.pathname.startsWith('/weather/') || browser.location.pathname.startsWith('/hava/')) {
    const hideAdsByClassName = className => {
      const adsBlocks = browser.document.getElementsByClassName(className);
      [...adsBlocks].forEach(ads => {
        hideViaPositionProperty(ads);
      });
    };
    const weatherAds = () => {
      const adElements = browser.querySelectorAll('div[id]');
      if (adElements.length) {
        [...adElements].forEach(adElement => {
          const scriptSibling = adElement.parentNode.querySelector('script[nonce]:not([src])');
          if (adElement.id !== 'root' && !(adElement !== null && adElement !== void 0 && adElement.className.startsWith('content')) && elementContains(scriptSibling, /xored=data|renderTo/)) {
            hideViaPositionProperty(adElement);
          }
        });
      }
    };
    const weatherSelfPromoPopup = () => {
      const weatherRemains = browser.querySelectorAll('.b-statcounter ~ div[class]');
      [...weatherRemains].forEach(weatherRemain => {
        if (weatherRemain.innerText.includes('Закрыть')) {
          removeNode(weatherRemain);
        }
      });
    };
    const hideMonthForecastAds = () => {
      var _contentSections$, _contentSections$$chi, _contentSections$$chi2;
      const contentSections = browser.document.querySelectorAll('.content__section');
      const adsClassName = (_contentSections$ = contentSections[0]) === null || _contentSections$ === void 0 ? void 0 : (_contentSections$$chi = _contentSections$.children[1]) === null || _contentSections$$chi === void 0 ? void 0 : (_contentSections$$chi2 = _contentSections$$chi.firstElementChild) === null || _contentSections$$chi2 === void 0 ? void 0 : _contentSections$$chi2.classList[0];
      if (!adsClassName) {
        return;
      }
      hideAdsByClassName(adsClassName);
    };
    const hideMapForecastAds = () => {
      const adsElements = browser.document.querySelectorAll('div[data-bem] > div');
      const adsDirect = [...adsElements].find(adsElement => {
        var _adsElement$querySele;
        return ((_adsElement$querySele = adsElement.querySelector('div')) === null || _adsElement$querySele === void 0 ? void 0 : _adsElement$querySele.innerText) === 'Скрыть рекламу';
      });
      if (adsDirect) {
        hideViaPositionProperty(adsDirect);
      }
      const horizontalBarLeftover = browser.document.querySelector('div[class$="__content"] > div[class$="__content"] ~ div[class$="__ad"]');
      if (horizontalBarLeftover) {
        removeNode(horizontalBarLeftover);
      }
    };
    const removeMobileLeftovers = () => {
      if (navigator.userAgent.match('Mobile')) {
        const leftovers = browser.document.querySelectorAll('div[class*="Advert_fullScreenContainer__"]');
        [...leftovers].forEach(leftover => {
          hideViaPositionProperty(leftover);
        });
      }
    };
    observeDomChanges(() => {
      weatherAds();
      weatherSelfPromoPopup();
      hideMonthForecastAds();
      hideMapForecastAds();
      removeMobileLeftovers();
    });
  }
  if (browser.location.pathname.startsWith('/maps/')) {
    const hideSidebarDirect = () => {
      var _yandexDirectHeader$p, _yandexDirectHeader$p2;
      const yandexDirectHeader = browser.querySelector('.sidebar-container a[href^="https://direct.yandex.ru/"]');
      if (!yandexDirectHeader) {
        return;
      }
      const adsContainer = (_yandexDirectHeader$p = yandexDirectHeader.parentNode) === null || _yandexDirectHeader$p === void 0 ? void 0 : (_yandexDirectHeader$p2 = _yandexDirectHeader$p.parentNode) === null || _yandexDirectHeader$p2 === void 0 ? void 0 : _yandexDirectHeader$p2.parentNode;
      if (!adsContainer || adsContainer.className.startsWith('masstransit')) {
        return;
      }
      hideViaDisplayProperty(adsContainer);
    };
    const hideSidebarSocialAds = () => {
      const socialAdAnchors = browser.querySelectorAll('.sidebar-container a[href*="socialads"][target="_parent"]');
      [...socialAdAnchors].forEach(anchor => {
        if (anchor.innerText.indexOf('реклама') === -1) {
          return;
        }
        const container = getParent(anchor, 2);
        if (container && container.classList.length === 1 && container.tagName === 'DIV' && getComputedStyle(container).order === '2') {
          hideViaDisplayProperty(container);
        }
      });
    };
    observeDomChanges(() => {
      hideSidebarDirect();
      hideSidebarSocialAds();
    });
  }
  if (browser.location.pathname.startsWith('/q/')) {
    const xhrFilter = request => {
      const {
        responseURL,
        withCredentials
      } = request;
      if (responseURL !== null && responseURL !== void 0 && responseURL.match(/context.js|static-mon/)) {
        return true;
      }
      if (responseURL !== null && responseURL !== void 0 && responseURL.includes('q/_crpd') && withCredentials === true) {
        return true;
      }
      if (responseURL !== null && responseURL !== void 0 && responseURL.match(/\/webvisor|\/watch|jstracer/) && withCredentials === true) {
        return true;
      }
      return false;
    };
    const removeFeedLeftovers = () => {
      const feedLeftovers = browser.querySelectorAll('div[data-id][class] + div[data-id][class] + div[data-id][class] + div[class]');
      [...feedLeftovers].forEach(element => {
        if (element.classList.length === 3 && !element.textContent) {
          hideViaDisplayProperty(element);
        }
      });
      const onScrollLeftovers = browser.querySelectorAll('script + section[class*="_"] > div div[id]');
      [...onScrollLeftovers].forEach(element => {
        const leftoverContainer = getParent(element, 3);
        if (element.querySelector('div[style*="width: 100%"]') || !element.textContent) {
          hideViaDisplayProperty(leftoverContainer);
        }
      });
    };
    const removeRightColumnLeftover = () => {
      var _browser$querySelecto;
      const mainColumn = (_browser$querySelecto = browser.querySelector('#page > div[class] > div[class] > script[type="application/ld+json"]')) === null || _browser$querySelecto === void 0 ? void 0 : _browser$querySelecto.parentNode;
      const rightColumn = mainColumn === null || mainColumn === void 0 ? void 0 : mainColumn.nextElementSibling;
      const incognitoAd = rightColumn === null || rightColumn === void 0 ? void 0 : rightColumn.querySelector('div[style^="will-change: position"] > div > div:last-child');
      if (incognitoAd) {
        hideViaDisplayProperty(incognitoAd);
      }
    };
    preventXHR(xhrFilter);
    observeDomChanges(() => {
      removeFeedLeftovers();
      removeRightColumnLeftover();
    });
  }
  if (browser.location.pathname.startsWith('/search/')) {
    const adSearchElements = () => {
      var _firstSearchResult$qu, _firstSearchResult$at;
      const searchResultAds = browser.document.querySelectorAll('.organic[data-bem]');
      [...searchResultAds].forEach(ads => {
        var _ads$parentNode$attri;
        if (ads && ads.parentNode && ((_ads$parentNode$attri = ads.parentNode.attributes) === null || _ads$parentNode$attri === void 0 ? void 0 : _ads$parentNode$attri.length) > 5) {
          hideViaPositionProperty(ads.parentNode);
        }
      });
      const firstSearchResult = browser.document.querySelector('#search-result > [data-first-snippet], #search-result > [data-log-node]:first-of-type');
      if (firstSearchResult !== null && firstSearchResult !== void 0 && firstSearchResult.querySelector('div[class^="serp-adv__"]')
      || firstSearchResult !== null && firstSearchResult !== void 0 && (_firstSearchResult$qu = firstSearchResult.querySelector('.label_theme_direct')) !== null && _firstSearchResult$qu !== void 0 && _firstSearchResult$qu.innerText || (firstSearchResult === null || firstSearchResult === void 0 ? void 0 : firstSearchResult.classList.value) === 'organic bno' || (firstSearchResult === null || firstSearchResult === void 0 ? void 0 : (_firstSearchResult$at = firstSearchResult.attributes) === null || _firstSearchResult$at === void 0 ? void 0 : _firstSearchResult$at.length) === 7) {
        hideViaPositionProperty(firstSearchResult);
      }
    };
    observeDomChanges(() => {
      adSearchElements();
    });
  }
  if (browser.location.pathname.startsWith('/turbo')) {
    const removeTurboAds = () => {
      const turboAdBlocks = browser.document.querySelectorAll('div[data-bem*="extParams"], div[data-bem*="ownerId"]');
      [...turboAdBlocks].forEach(adBlock => {
        const adContainer = adBlock === null || adBlock === void 0 ? void 0 : adBlock.parentNode;
        if (adContainer && adContainer.getAttribute('data-log-node')) {
          hideViaPositionProperty(adContainer);
        }
      });
    };
    const removeTurboLeftovers = () => {
      const turboLeftovers = browser.document.querySelectorAll('#recommendations > div[class*="_type_adfox"]');
      [...turboLeftovers].forEach(leftover => {
        hideViaPositionProperty(leftover);
      });
    };
    observeDomChanges(() => {
      removeTurboAds();
      removeTurboLeftovers();
    });
  }
  if (browser.location.pathname.startsWith('/images')) {
    const removeImagesAds = () => {
      if (navigator.userAgent.match('Mobile')) {
        const elements = browser.querySelectorAll('div[data-bem*="adultDirectId"]');
        if (elements.length) {
          [...elements].forEach(element => {
            if (browser.getAttribute(element, 'data-bem').indexOf('config') === -1) {
              hideViaPositionProperty(element);
            }
          });
        }
      }
    };
    observeDomChanges(() => {
      removeImagesAds();
    });
  }
  if (isMatchingHostnames('yandex.ru', 'yandex.by') && browser.location.pathname === '/') {
    const adUnderSearch = () => {
      const elements = browser.document.querySelectorAll('.widgets[role="main"] *:not(div) > div[class]:not([class*="widget"]) *:not(div) > div[class] > div[class]');
      [...elements].forEach(el => {
        if (!el.className.startsWith('home') && !el.className.startsWith('services') && !el.className.startsWith('input') && !el.className.startsWith('search')) {
          hideViaDisplayProperty(el);
        }
      });
    };
    const subscriptionFeedPromo = () => {
      const feedItems = browser.document.querySelectorAll('div.feed > [id^="zen-row-"]');
      [...feedItems].forEach(item => {
        const promoSpan = item.querySelector('span.zen-ui-channel-info__subtitle-text');
        if (promoSpan && promoSpan.textContent === 'промо') {
          hideViaPositionProperty(item);
        }
      });
    };
    observeDomChanges(() => {
      adUnderSearch();
      subscriptionFeedPromo();
    });
  }
  const addedRules = {};
  const hideMainPageAds = () => {
    function getMainSelector(x) {
      if (x.banner && x.banner.cls) {
        let parentPath = x.banner.cls.banner__parent;
        if (!parentPath) {
          parentPath = x.banner.cls['b-banner__content_direct'];
        }
        return parentPath;
      }
      if (x.banner && x.banner.refresh) {
        const containerPath = x.banner.refresh.bannerContainer;
        if (!containerPath) {
          return null;
        }
        return containerPath;
      }
      return null;
    }
    function removeBanner(x) {
      let selector = getMainSelector(x);
      if (selector) {
        selector = `.${selector}`;
        if (addedRules[selector]) {
          return;
        }
        addedRules[selector] = true;
        [...browser.querySelectorAll(selector)].forEach(banner => {
          browser.setAttribute(banner, 'style', 'display:none!important');
        });
        [...browser.document.styleSheets].forEach(sheet => {
          try {
            if (sheet.disabled) {
              return;
            }
            const cssRules = safeGetStylesheetRules(sheet);
            for (let i = 0; i < cssRules.length; i += 1) {
              const rule = cssRules[i];
              if (rule.cssText.includes(' 728px 90px')) {
                sheet.disabled = true;
                continue;
              }
            }
          } catch (_unused) {}
        });
        return;
      }
      if (addedRules['div-hidden-by-size']) {
        return;
      }
      const divCollection = browser.querySelectorAll('div.main div');
      [...divCollection].forEach(elem => {
        if (elem.clientWidth === 728 && elem.clientHeight === 90) {
          elem.remove();
          addedRules['div-hidden-by-size'] = true;
        }
      });
    }
    if (browser.window.home && browser.window.home.export) {
      removeBanner(browser.window.home.export);
    }
  };
  const findAds = () => {
    const adIds = [];
    if (!browser.window.Ya) {
      return adIds;
    }
    Object.keys(browser.window.Ya).forEach(key => {
      const value = browser.window.Ya[key];
      if (!value || !value.adUsageStorageVars || !value.adUsageStorageVars.ads || !value.adUsageStorageVars.ads.list) {
        return;
      }
      value.adUsageStorageVars.ads.list.forEach(el => {
        if (el.renderTo && !adIds.includes(el.renderTo)) {
          adIds.push(el.renderTo);
        }
      });
    });
    return adIds;
  };
  const hideYaDirectAds = () => {
    const adIds = findAds();
    if (!adIds || adIds.length === 0) {
      return;
    }
    const styleSheet = [...browser.document.styleSheets].find(sheet => {
      if (safeGetStylesheetRules(sheet).length > 0 && !sheet.disabled) {
        return true;
      }
      return false;
    });
    if (!styleSheet) {
      return;
    }
    adIds.forEach(id => {
      const el = browser.document.getElementById(id);
      if (el) {
        navigator.userAgent.match('Mobile') ? hideViaPositionProperty(el) : removeNode(el);
      }
    });
  };
  const hideYandexBrowserAds = () => {
    const adsContainer = browser.querySelector('.container__banner');
    if (adsContainer && adsContainer.querySelector('[class^="direct"]')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  const oneDirectZenFeed = () => {
    const zenCategories = browser.querySelectorAll('.placeholder-card__container');
    [...zenCategories].forEach(zenCategorie => {
      var _zenCategorie$firstEl;
      const zenChildAttributes = (_zenCategorie$firstEl = zenCategorie.firstElementChild) === null || _zenCategorie$firstEl === void 0 ? void 0 : _zenCategorie$firstEl.attributes;
      if (!zenChildAttributes) {
        return;
      }
      for (let i = 0; i < zenChildAttributes.length; i += 1) {
        if (zenChildAttributes[i] && /^[a-zA-Z0-9]{2}_[a-zA-Z0-9]{2}$/.test(zenChildAttributes[i].value)) {
          hideViaPositionProperty(zenCategorie);
        }
      }
    });
  };
  removeFromShadowRoots('div[data-ssr][data-rmp-send-beacon]');
  const removeShadowLeftovers = () => {
    const leftovers = browser.document.querySelectorAll('.card-wrapersome,  div[data-blockname].zen-insert');
    [...leftovers].forEach(node => {
      hideViaPositionProperty(node);
    });
  };
  browser.document.addEventListener('DOMContentLoaded', () => {
    hideMainPageAds();
    hideYaDirectAds();
  }, false);
  observeDomChanges(() => {
    hideYandexBrowserAds();
    hideMainPageAds();
    hideYaDirectAds();
    hideFeedsAdsBlocks();
    oneDirectZenFeed();
    removeShadowLeftovers();
  });
}if (isMatchingHostnames('kinopoisk.ru')) {
  const hideAdblockWarning = () => {
    const node = browser.querySelector('div[class^="toaster-container"], div[class*="adBlockWarningRoot"]');
    if (node && node.querySelector('a[href*="adblock.html"]')) {
      hideViaDisplayProperty(node);
    }
  };
  const hideBrandingAds = () => {
    const probeStyles = browser.querySelectorAll('style[id]');
    [...probeStyles].forEach(styleEl => {
      if (styleEl.sheet && styleEl.sheet.rules.length <= 10) {
        removeNode(styleEl);
      }
    });
    iterateCSSRules(rule => {
      if (rule.selectorText && rule.selectorText.indexOf('.kinopoisk-header-branding__link') === 0) {
        hideViaDisplayProperty(rule);
      } else if (rule.selectorText && rule.selectorText.indexOf('.kinopoisk-header-branding__image') === 0) {
        rule.style.visibility = 'hidden';
      }
    });
    [...browser.querySelectorAll('.page-content > div[id]:not([class])')].forEach(probe => {
      if (probe.querySelector(':scope > div[id][style]')) {
        removeNode(probe);
      }
    });
  };
  const hideAdsByStylesheet = () => {
    const adsSheet = browser.querySelector('.mb-style-tag');
    if (!adsSheet || !adsSheet.sheet || adsSheet.sheet.cssRules.length !== 1) {
      return;
    }
    hideViaDisplayProperty(adsSheet.sheet.cssRules[0]);
  };
  const hideTopBanner = () => {
    const bannerMain = browser.querySelector('.desktop-layout-with-sidebar__middle > .desktop-layout-with-sidebar__wrapper > div[class*="media"]:first-child');
    if (bannerMain) {
      removeNode(bannerMain);
    }
    const bannerSub = browser.querySelector('div.media-post-page > div[class$="abbreviated"]:first-child, div.media-post-page > div[class$="rendered"]:first-child');
    if (bannerSub) {
      removeNode(bannerSub);
    }
    const bannerContainer = browser.querySelector('.page-content > div[style="min-height: 0px;"]');
    const bannerScript = browser.querySelector('.page-content > div[style="min-height: 0px;"] script');
    if (bannerContainer && bannerScript && bannerScript.innerText.includes('xored=data')) {
      removeNode(bannerContainer);
    }
  };
  const hideinArticleSideAd = () => {
    const sidebarAd = browser.querySelector('div[class$="__sidebar-content"] > div[class][data-tid] > div[id][class$="__container"] > div[id][class]:not([data-id])');
    if (sidebarAd) {
      removeNode(sidebarAd);
    }
  };
  const hideFilmAds = () => {
    const filmAds = browser.querySelectorAll('div[class*="styles_rootRendered__"] div[style="min-width:1px"] > div[class][data-tid]');
    [...filmAds].forEach(ad => {
      if (ad.querySelector('div[id][class^="styles_container__"] > div[id][class]:not([data-tid])')) {
        removeNode(ad);
      }
    });
    const topBanner = browser.querySelector('div[class^="styles_rootWithBranding__"] + div > div[class^="styles_abbreviated__"]');
    if (topBanner && topBanner.querySelector('div[class^="styles_themeTopBanner__"] > div[data-tid] > div[id][class]:not([data-tid])')) {
      removeNode(topBanner);
    }
  };
  observeDomChanges(() => {
    hideAdblockWarning();
    hideBrandingAds();
    hideAdsByStylesheet();
    hideTopBanner();
    hideinArticleSideAd();
    hideFilmAds();
  });
}if (isMatchingHostnames('yandex.ru', 'yandex.kz', 'yandex.by', 'yandex.ua', 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com') && browser.location.pathname.startsWith('/news')) {
  const hideSidebarAds = () => {
    const pageWrapper = browser.document.querySelector('div[id$="-page"] > div > div > div.mg-grid__row');
    const columns = pageWrapper === null || pageWrapper === void 0 ? void 0 : pageWrapper.childNodes;
    if (!columns || columns.length === 1) {
      return;
    }
    for (let i = 1; i < columns.length; i += 1) {
      const column = columns[i];
      const usefulElementsSelector = ['.news-search-story',
      '[class^="news-search__filter"]',
      '.news-top-flexible-stories', '.news-story',
      '[class$="__inner"] > .news-widget', '.news-top-rubric-heading'];
      const elements = column.querySelectorAll(usefulElementsSelector.join(', '));
      const visible = [];
      elements.forEach(el => {
        if (el.offsetHeight > 0 && el.offsetWidth > 0) {
          visible.push(el);
        }
      });
      if (visible.length === 0) {
        hideViaPositionProperty(column);
      }
    }
  };
  const hideGridAds = () => {
    var _browser$document$que;
    const cards = (_browser$document$que = browser.document.querySelector('.news-feed > div.mg-grid__row')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.childNodes;
    if (!cards) {
      return;
    }
    [...cards].forEach(card => {
      if (card.querySelector('div[class*="_type_native"] > div[id]')) {
        hideViaDisplayProperty(card);
      }
    });
    const underStoryBanners = browser.querySelectorAll('div.mg-grid__col > article.mg-story + div, .mg-grid__col > div.mg-grid__row > div.mg-grid__col > div[class]');
    [...underStoryBanners].forEach(underStoryBanner => {
      if (underStoryBanner.className.includes('_type_partner') || underStoryBanner.className.includes('banger')) {
        hideViaDisplayProperty(underStoryBanner);
      }
    });
  };
  const hideMobileGridAds = () => {
    if (navigator.userAgent.match('Mobile')) {
      var _browser$document$que2;
      const mobileCards = (_browser$document$que2 = browser.document.querySelector('.mg-layout')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.childNodes;
      if (!mobileCards) {
        return;
      }
      [...mobileCards].forEach(card => {
        if (card.className.includes('_banner_')) {
          hideViaPositionProperty(card);
        }
      });
    }
  };
  const hideRubricAds = () => {
    const banners = browser.document.querySelectorAll('[class*="_type_native"]:not([class*="news-feed__"])');
    if (!banners) {
      return;
    }
    [...banners].forEach(banner => {
      hideViaDisplayProperty(banner);
    });
    const headers = browser.document.querySelectorAll('.news-top-rubric-heading');
    [...headers].forEach(header => {
      const span = header.querySelector('span');
      if (span && span.innerText === 'Реклама') {
        hideViaDisplayProperty(header);
      }
    });
  };
  const mobileDirect = () => {
    if (navigator.userAgent.match('Mobile')) {
      const mobileAds = browser.querySelectorAll('.mg-layout > div[class][data-log-id]');
      [...mobileAds].forEach(mobileAd => {
        if (mobileAd.querySelector('div[style*="width: 100%"]') || !mobileAd.querySelector('h1.mg-story__title')) {
          hideViaPositionProperty(mobileAd);
        }
      });
    }
  };
  const hideYaDirectAds = () => {
    const containers = document.querySelectorAll('.root123');
    containers.forEach(el => {
      if (el.parentNode.tagName !== 'BODY') {
        hideViaDisplayProperty(el);
      }
    });
  };
  observeDomChanges(() => {
    hideSidebarAds();
    hideRubricAds();
    hideGridAds();
    hideMobileGridAds();
    mobileDirect();
    hideYaDirectAds();
  });
}if (isMatchingHostnames('mail.yandex.ru', 'mail.yandex.kz', 'mail.yandex.by', 'mail.yandex.ua', 'mail.yandex.md', 'mail.yandex.com.tr', 'mail.yandex.com', 'mail.yandex.fr', 'mail.yandex.ee', 'mail.yandex.kg', 'mail.yandex.lv', 'mail.yandex.lt')) {
  const removeHeaderAds = () => {
    const infolineBox = browser.document.querySelector('.ns-view-infoline-box');
    if (!infolineBox) {
      return;
    }
    const adsBox = infolineBox.nextElementSibling;
    if (adsBox && adsBox.nextElementSibling && adsBox.nextElementSibling.classList[0] === 'ns-view-right-box') {
      hideViaPositionProperty(adsBox);
    }
  };
  const removeMailAds = function removeMailAds() {
    [...browser.document.styleSheets].forEach(sheet => {
      if (!sheet.href || browser.location.hostname !== new URL(sheet.href).hostname) {
        return;
      }
      const rules = [...safeGetStylesheetRules(sheet)];
      if (rules.length > 60) {
        return;
      }
      rules.forEach(rule => {
        if (rule.selectorText && /^\..[a-zA-Z0-9_]{5,}$/.test(rule.selectorText) && rule.style.display !== 'none') {
          rule.style.display = 'none';
          const rightHeader = browser.querySelector('div.PSHeader');
          if (rightHeader) {
            rightHeader.style.top = '0';
          }
        }
      });
    });
  };
  const removeSiderbarAds = () => {
    var _adsIframe$parentNode;
    const adsIframe = document.querySelector('.mail-Layout-Aside iframe');
    if (!adsIframe) {
      return;
    }
    const adsContainer = (_adsIframe$parentNode = adsIframe.parentNode) === null || _adsIframe$parentNode === void 0 ? void 0 : _adsIframe$parentNode.parentNode;
    if (adsContainer && adsContainer.classList.length > 0 && !adsContainer.classList[0].startsWith('ns-view-')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  const leftSiderbarAds = () => {
    const elementsLeftSidebar = browser.document.querySelectorAll('.mail-Layout-Aside .mail-Layout-Aside-Inner-Box > div[class^="ns-view-"]');
    if (elementsLeftSidebar) {
      [...elementsLeftSidebar].forEach(element => {
        if (element
        && !element.querySelector('a[href]')
        && element.querySelector('div[style*="width: 100%"]')) {
          removeNode(element);
        }
        if (element && (element !== null && element !== void 0 && element.textContent.includes('Отключить рекламу') || element !== null && element !== void 0 && element.textContent.includes('Скрыть рекламу'))) {
          removeNode(element === null || element === void 0 ? void 0 : element.nextElementSibling);
        }
      });
    }
    const directPostSendWindow = browser.document.querySelector('.ComposeDoneDirect');
    if (directPostSendWindow) {
      hideViaPositionProperty(directPostSendWindow);
    }
  };
  observeDomChanges(() => {
    removeMailAds();
    removeHeaderAds();
    removeSiderbarAds();
    leftSiderbarAds();
  });
}if (isMatchingHostnames('afisha.yandex.ru', 'afisha.yandex.kz', 'afisha.yandex.by', 'afisha.yandex.ua', 'afisha.yandex.md')) {
  const isNoindex = element => {
    if (!element) {
      return false;
    }
    return !!(element.previousSibling && element.nextSibling && element.previousSibling.textContent === 'noindex' && element.nextSibling.textContent === '/noindex');
  };
  const footerBannerMobile = () => {
    if (navigator.userAgent.match('Mobile')) {
      try {
        var _browser$document$que;
        const footerBanner = (_browser$document$que = browser.document.querySelector('.page-content + div[class]')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.firstElementChild;
        if (isNoindex(footerBanner)) {
          hideViaPositionProperty(footerBanner);
        }
        const suspectItems = browser.querySelectorAll('span[data-component] > div[class^="Item-"]');
        [...suspectItems].forEach(suspectItem => {
          if (suspectItem.querySelector('div[data-banner-id]')) {
            hideViaPositionProperty(suspectItem);
          }
        });
      } catch (_unused) {}
    }
  };
  const hideDataBemBanners = () => {
    const banners = document.querySelectorAll('div[data-bem*="metrikaEntry"][data-bem*="R-A-"]');
    [...banners].forEach(banner => {
      hideViaPositionProperty(banner);
    });
  };
  const hideMainSidebarBanner = () => {
    const sideSticker = document.querySelector('.yabs_type_banners');
    if (sideSticker && sideSticker.querySelector('a[data-bem][target="_blank"]')) {
      hideViaPositionProperty(sideSticker);
    }
  };
  const hideYaBrowserBanners = () => {
    if (navigator.userAgent.match('YaBrowser')) {
      const mainHeaderBanner = browser.querySelector('.grid__inner > div[class*="afisha-profit_"][class*="content-event-emotional__"]');
      if (mainHeaderBanner) {
        hideViaPositionProperty(mainHeaderBanner);
      }
      const mainSideBanner = browser.document.querySelector('.grid__inner > div.grid__margin-right > div.grid__sidebar_type_cinema');
      if (mainSideBanner && mainSideBanner.querySelector('[id^="ya_partner_R-A-"]')) {
        hideViaPositionProperty(mainSideBanner);
      }
      const middleBanner = browser.querySelector('.rubric-type-landing > div[class*="afisha-profit"]');
      if (middleBanner) {
        hideViaPositionProperty(middleBanner);
      }
      const adfoxBanners = browser.document.querySelectorAll('.top-branding-holder, .adfox_type_branding');
      [...adfoxBanners].forEach(banner => {
        hideViaPositionProperty(banner);
      });
    }
  };
  const hideTopMobile = () => {
    if (navigator.userAgent.match('Mobile')) {
      const mobileHeader = browser.document.querySelector('[class^="WrapperAdfoxContainer-"]');
      if (mobileHeader) {
        removeNode(mobileHeader);
      }
    }
  };
  const hideMiddleMobile = () => {
    if (navigator.userAgent.match('Mobile')) {
      const mobileMiddle = browser.document.querySelector('[data-component="EventContentTouch"] > div[class^="Item-sc-"]');
      if (mobileMiddle && mobileMiddle.querySelector('[id^="adfox-"]')) {
        removeNode(mobileMiddle);
      }
    }
  };
  const hideBottomMobile = () => {
    if (navigator.userAgent.match('Mobile')) {
      const mobileBottom = browser.document.querySelector('[data-banner-id^="R-A-"]');
      if (mobileBottom) {
        removeNode(mobileBottom);
      }
    }
  };
  observeDomChanges(() => {
    hideDataBemBanners();
    hideMainSidebarBanner();
    footerBannerMobile();
    hideYaBrowserBanners();
    hideTopMobile();
    hideMiddleMobile();
    hideBottomMobile();
  });
}if (isMatchingHostnames('tv.yandex.ru', 'tv.yandex.kz', 'tv.yandex.by', 'tv.yandex.ua', 'tv.yandex.md')) {
  const hideSimilarAds = adsBlock => {
    var _adsBlock$firstElemen;
    const adsClassNames = adsBlock === null || adsBlock === void 0 ? void 0 : (_adsBlock$firstElemen = adsBlock.firstElementChild) === null || _adsBlock$firstElemen === void 0 ? void 0 : _adsBlock$firstElemen.classList;
    if (!adsClassNames) {
      return;
    }
    [...adsClassNames].forEach(className => {
      if (className.endsWith('__wrapper')) {
        const adsElements = browser.document.getElementsByClassName(className);
        [...adsElements].forEach(ads => {
          hideViaPositionProperty(ads);
        });
      }
    });
  };
  const hideHeaderBanner = () => {
    var _adsContainer$firstEl;
    const header = browser.document.querySelector('header');
    const adsContainer = header === null || header === void 0 ? void 0 : header.previousElementSibling;
    if (adsContainer !== null && adsContainer !== void 0 && (_adsContainer$firstEl = adsContainer.firstElementChild) !== null && _adsContainer$firstEl !== void 0 && _adsContainer$firstEl.className.endsWith('__wrapper')) {
      hideViaPositionProperty(adsContainer);
    }
  };
  const hidePageBanner = () => {
    var _ads$style;
    const contentHeader = browser.document.querySelector('.content__header');
    const ads = contentHeader === null || contentHeader === void 0 ? void 0 : contentHeader.previousElementSibling;
    if (ads !== null && ads !== void 0 && (_ads$style = ads.style) !== null && _ads$style !== void 0 && _ads$style.backgroundImage && ads !== null && ads !== void 0 && ads.querySelector('a[target="_blank"]')) {
      hideViaPositionProperty(ads);
    }
  };
  const hideGridAds = () => {
    try {
      const grid = browser.document.querySelectorAll('[class^="grid__"]');
      const adGrid = [...grid].filter(elem => getComputedStyle(elem)['grid-row-start'] === 'adv' || getComputedStyle(elem)['grid-row-start'] === 'wide');
      [...adGrid].forEach(ad => {
        hideViaPositionProperty(ad);
        hideSimilarAds(ad);
      });
    } catch (_unused) {}
  };
  const hideChannelPageAds = () => {
    const stickyAd = browser.querySelectorAll('div[class*="channel-controller__"] > div[class]:not([class*="channel"]) > div[class][id]');
    if (stickyAd.length === 1) {
      hideViaPositionProperty(stickyAd[0]);
    }
    const bottomBanner = browser.querySelectorAll('div[class^="content__"] > div[class$="__wrapper"] > div[class][id]');
    if (bottomBanner.length === 1) {
      hideViaPositionProperty(bottomBanner[0]);
    }
  };
  const hideProgramPageAds = () => {
    const stickyAd = browser.querySelectorAll('div[class^="content__"] > div[class*="__wrapper"] > div[class][id]');
    if (stickyAd.length === 2) {
      hideViaPositionProperty(stickyAd[0]);
    }
  };
  observeDomChanges(() => {
    hideGridAds();
    hideHeaderBanner();
    hidePageBanner();
    hideChannelPageAds();
    hideProgramPageAds();
  });
}if (isMatchingHostnames('e.mail.ru', 'octavius.mail.ru')) {
  const adRightColumn = () => {
    const adColumn = browser.querySelector('.application-mail__layout_main > span > div:last-child');
    if (adColumn && adColumn.classList.length !== 1) {
      hideViaPositionProperty(adColumn);
    }
  };
  const fixStylingLeftover = () => {
    const twoPane = browser.querySelector('.layout_type_2pane .ReactVirtualized__Grid__innerScrollContainer');
    if (twoPane) {
      twoPane.style.marginTop = '-40px';
    }
    const threePane = browser.querySelector('.layout_type_3pane .ReactVirtualized__Grid__innerScrollContainer');
    if (threePane) {
      threePane.style.marginTop = '-90px';
    }
  };
  const adTopBanner = () => {
    var _adBanner$parentEleme, _adBanner$parentEleme2;
    const adBanner = browser.querySelector('.ReactVirtualized__Grid__innerScrollContainer .letter-list-item-adv_rounded');
    const bannerContainer = adBanner === null || adBanner === void 0 ? void 0 : (_adBanner$parentEleme = adBanner.parentElement) === null || _adBanner$parentEleme === void 0 ? void 0 : (_adBanner$parentEleme2 = _adBanner$parentEleme.parentElement) === null || _adBanner$parentEleme2 === void 0 ? void 0 : _adBanner$parentEleme2.parentElement;
    if (adBanner) {
      hideViaPositionProperty(adBanner);
    }
    if (bannerContainer && bannerContainer.style.height !== '0px') {
      fixStylingLeftover();
    }
  };
  const xhrFilter = request => {
    if (request.response.includes('puny_domain')) {
      return true;
    }
    return false;
  };
  preventXHR(xhrFilter);
  const oldDesignAds = () => {
    const headAds = browser.querySelectorAll('div[class="b-datalist__head"], div[class="b-letter__rb-line"]');
    [...headAds].forEach(ad => {
      if (ad.querySelector('#adman-line')) {
        hideViaPositionProperty(ad);
      }
    });
    const sideAds = browser.querySelector('.b-layout_main > div.b-layout__col > div:last-child:not([id])');
    if (sideAds && !sideAds.querySelector('[class*="content"], [class*="login"]')) {
      hideViaPositionProperty(sideAds);
    }
  };
  observeDomChanges(() => {
    adRightColumn();
    adTopBanner();
    oldDesignAds();
  });
}
if (isMatchingHostnames('go.mail.ru') && browser.location.pathname === '/search') {
  const pageTopBanner = () => {
    const banner = browser.querySelector('.tb-rb-banner-wrapper');
    if (banner) {
      hideViaDisplayProperty(banner);
    }
  };
  observeDomChanges(() => {
    pageTopBanner();
  });
}
if (isMatchingHostnames('mail.ru') && browser.location.pathname === '/') {
  const hideGridAds = () => {
    const adsItems = browser.querySelectorAll('span.pl_cs');
    [...adsItems].forEach(ads => {
      const adsContainer = ads.parentNode.parentNode.parentNode.parentNode.parentNode;
      if (adsContainer && ads.innerText === 'Реклама' && adsContainer.id.startsWith('_pcard')) {
        hideViaDisplayProperty(adsContainer);
      }
    });
  };
  const rightSquareAd = () => {
    const blocks = browser.querySelectorAll('.tabs ~ div[class] > div[class]');
    [...blocks].forEach(block => {
      const content = block.firstElementChild;
      if (!content.hasAttribute('data-testid')) {
        hideViaPositionProperty(block);
      }
    });
  };
  const horizontalBanner = () => {
    var _anchor$parentElement;
    const anchor = browser.querySelector('ul[data-testid="news-content"]');
    const siblings = anchor === null || anchor === void 0 ? void 0 : (_anchor$parentElement = anchor.parentElement) === null || _anchor$parentElement === void 0 ? void 0 : _anchor$parentElement.children;
    if (siblings) {
      [...siblings].forEach(sibling => {
        if (sibling.querySelector('div[data-mnemo]')) {
          hideViaDisplayProperty(sibling);
        }
      });
    }
    const banner = browser.querySelector('div[data-bem] > div > div[data-testid="search-container"] + div.stripe-wrapper');
    if (banner) {
      hideViaDisplayProperty(banner);
    }
  };
  const underSearchBanner = () => {
    const search = document.querySelector('[id="search:container"]');
    const tabs = document.querySelector('[data-testid="news-tabs"]');
    if (!search || !tabs) {
      return;
    }
    const bannerBelow = search.nextElementSibling;
    const bannerAbove = tabs.previousElementSibling;
    if (bannerBelow === bannerAbove) {
      const divs = bannerBelow.querySelectorAll('div');
      const hasDirectAd = [...divs].some(div => div.innerText === 'Директ' || div.innerText === 'myTarget');
      if (hasDirectAd) {
        hideViaPositionProperty(bannerBelow);
      }
    }
  };
  observeDomChanges(() => {
    hideGridAds();
    rightSquareAd();
    horizontalBanner();
    underSearchBanner();
  });
}
if (isMatchingHostnames('otvet.mail.ru')) {
  const hideAnswersBanner = () => {
    const banner = browser.querySelector('div[class^="list_"] > div[class^="layoutBlock_"] > div[class^="wrapper_"] > div[class^="wrapper__inner_"] + div[class]');
    if (banner && banner.classList.length === 1 && banner.innerText.includes('Реклама')) {
      hideViaPositionProperty(banner);
    }
  };
  const xhrFilter = request => {
    if (request.response.includes('ads')) {
      return true;
    }
    return false;
  };
  preventXHR(xhrFilter);
  observeDomChanges(() => {
    hideAnswersBanner();
  });
}
if (isMatchingHostnames('tv.mail.ru')) {
  const rightSideBanner = () => {
    const videoWrapper = browser.querySelector('[class="cols__wrapper margin_off_sides-hor"]');
    if (!videoWrapper) {
      return;
    }
    const sideBanner = videoWrapper.querySelector('[class="cols__column cols__column_small_12 cols__column_sidebar"]');
    if (sideBanner) {
      hideViaDisplayProperty(sideBanner);
    }
  };
  const bottomHorizontal = () => {
    var _browser$querySelecto;
    const wrapper = (_browser$querySelecto = browser.querySelector('div.js-counters.counters')) === null || _browser$querySelecto === void 0 ? void 0 : _browser$querySelecto.parentElement;
    if (!wrapper) {
      return;
    }
    const blocks = wrapper.querySelectorAll('div[class][id]');
    [...blocks].forEach(block => {
      if (block.classList.length === 3) {
        hideViaPositionProperty(block);
      }
    });
  };
  const modalSideBanner = () => {
    const modal = browser.querySelector('.overlay.overlay_banner');
    if (!modal) {
      return;
    }
    const blocks = modal.querySelectorAll('div[class][id]');
    [...blocks].forEach(block => {
      if (block.classList.length === 2) {
        hideViaPositionProperty(block);
      }
    });
  };
  observeDomChanges(() => {
    rightSideBanner();
    bottomHorizontal();
    modalSideBanner();
  });
}const hideSmallAdsNearArticle = () => {
  if (navigator.userAgent.match('Mobile')) {
    const smallAds = browser.querySelectorAll('.wrapper_with-article-swipe-navigation > div[class]:not([style]), .wrapper_with-article-swipe-navigation > span');
    if (smallAds) {
      [...smallAds].forEach(smallAd => {
        if (smallAd
        && smallAd.__smokedElement === true) {
          hideViaPositionProperty(smallAd);
        }
      });
    }
  }
};
const hidePulseAds = () => {
  const pulseLenta = browser.querySelector('.pulse-lenta-root');
  if (!pulseLenta) {
    return;
  }
  const pulseCardLinks = pulseLenta.querySelectorAll('a[rel="noopener nofollow"][target="_blank"]');
  if (!pulseCardLinks.length) {
    return;
  }
  pulseCardLinks.forEach(cardLink => {
    const spans = cardLink.querySelectorAll('span');
    spans.forEach(span => {
      if (span && span.innerText === 'Реклама') {
        hideViaDisplayProperty(cardLink.parentNode);
      }
    });
  });
};
const hideNewsLeftovers = () => {
  const wrapper = browser.querySelector('[data-module="FixedPanel.Rubric"] > div.block_collapse_bottom > .wrapper');
  if (!wrapper) {
    return;
  }
  const containers = wrapper.children;
  if (!containers || containers.length === 0) {
    return;
  }
  [...containers].forEach(container => {
    if (container.nodeName !== 'DIV') {
      return;
    }
    const subContainers = container.querySelectorAll('[class*="fixed-panel"] div[class]');
    [...subContainers].forEach(el => {
      const classes = [...el.classList];
      if (!classes.includes('box') && getComputedStyle(el).minHeight === '400px') {
        removeNode(el);
      }
    });
  });
};
const hideDesktopNewsLeftovers = () => {
  const panel = document.querySelector('.m-fixed-panel');
  if (!panel) {
    return;
  }
  [...panel.children].forEach(el => {
    const block = el.querySelector('div');
    if (block && getComputedStyle(block).minHeight === '400px') {
      removeNode(el);
    }
  });
};
if (isMatchingHostnames('news.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/, \.p-directhack|\.cols_experiment-1|\.js-smoky-single/);
    hideNewsLeftovers();
    hideDesktopNewsLeftovers();
  });
}
if (isMatchingHostnames('mail.ru')
&& !isMatchingHostnames('lady.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/\.spring_side|\.p-directhack|\.rb-direct-mimic_index|\.deti-slot_box|\.health-slot_box|\.spring|\.rb-direct-wrapper|\.rb_body|\.rb-direct-side|\.news-item__link|\.notify/);
    hidePulseAds();
  });
}
if (isMatchingHostnames('auto.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/\.rb_main-240x400|\.trg-banners|\.rb_hide_by_parallax/);
  });
}
if (isMatchingHostnames('sportmail.ru')) {
  const removeLeftovers = () => {
    const sidebarAd = browser.querySelector('.js-fixed-panel > div[class*="experiment"]');
    if (sidebarAd) {
      hideViaPositionProperty(sidebarAd);
    }
  };
  observeDomChanges(() => {
    hideSmallAdsNearArticle();
    hideCssRulesBySelectorText(/\.cols_experiment-1|\.p-spring/);
    removeLeftovers();
  });
}
if (isMatchingHostnames('horo.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/\.incut_full|\.cols__column_sidebar/);
  });
}
if (isMatchingHostnames('hi-tech.mail.ru')) {
  observeDomChanges(() => {
    hideCssRulesBySelectorText(/\.sticky-springs__item|\.cols__column_asd|\.viewbox__side/);
  });
}
if (isMatchingHostnames('lady.mail.ru')) {
  observeDomChanges(() => {
    hidePulseAds();
  });
}if (isMatchingHostnames('music.yandex.ru', 'music.yandex.kz', 'music.yandex.by', 'music.yandex.ua', 'music.yandex.md')) {
  const removeHeaderAds = () => {
    var _browser$document$que;
    const headerAdsBlock = (_browser$document$que = browser.document.querySelector('.adfox-brick')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.previousElementSibling;
    if (headerAdsBlock && headerAdsBlock.querySelector('.d-overhead__close')) {
      hideViaPositionProperty(headerAdsBlock);
    }
  };
  observeDomChanges(() => {
    removeHeaderAds();
  });
}if (isMatchingHostnames('realty.yandex.ru')) {
  const hideFeedLeftovers = () => {
    const leftovers = browser.document.querySelectorAll('ol > li[class$="__list-item_type_promo"]');
    [...leftovers].forEach(leftover => {
      hideViaDisplayProperty(leftover);
    });
  };
  const hideBuyLeftovers = () => {
    const leftovers = browser.document.querySelectorAll('ol > li[class$="__list-item_type_ad"]');
    [...leftovers].forEach(leftover => {
      hideViaDisplayProperty(leftover);
    });
  };
  const hideNovostroykaLeftovers = () => {
    const leftover = browser.document.querySelector('div.ContentWidth > div[class="SitesSearchPage__topAd SitesSearchPage__topAd_special"]');
    if (leftover) {
      hideViaDisplayProperty(leftover);
    }
  };
  observeDomChanges(() => {
    blockProperty('AD');
    hideFeedLeftovers();
    hideBuyLeftovers();
    hideNovostroykaLeftovers();
  });
}if (isMatchingHostnames('ok.ru')) {
  const mimicBannerSelectors = ['#RightColumnBannerInner', '#hook_Block_ViewportHeightAwareBanner'];
  const isMimicAdStyle = selectorText => {
    if (mimicBannerSelectors.some(mimicStyle => selectorText.includes(mimicStyle))) {
      return true;
    }
    return false;
  };
  const removeOkAds = () => {
    [...browser.document.styleSheets].forEach(sheet => {
      [...safeGetStylesheetRules(sheet)].forEach(rule => {
        if (rule.selectorText && isMimicAdStyle(rule.selectorText) && rule.style.display !== 'none') {
          rule.style.display = 'none';
        }
      });
    });
  };
  const removeOkFeedAds = () => {
    const feedItems = document.querySelectorAll('.feed-list > .feed-w > [data-feed-id]');
    feedItems.forEach(item => {
      if (item.style.display === 'none') {
        return;
      }
      const feedTopItems = item.querySelectorAll('.feed_top .feed_ava+div > div[class]');
      feedTopItems.forEach(topItem => {
        if (topItem.innerText === 'Реклама' || topItem.innerText === 'Ad') {
          item.style.display = 'none';
        }
      });
      const adMarker = item.querySelector('.feed_top .feed_count > div');
      if (!adMarker) {
        return;
      }
      if (adMarker.innerText === 'Реклама' || adMarker.innerText === 'Ad') {
        item.style.display = 'none';
      }
    });
  };
  observeDomChanges(() => {
    removeOkAds();
    removeOkFeedAds();
  });
}function isInsideCircumventionScript() {
  if (!document.currentScript || !document.currentScript.innerText) {
    return false;
  }
  const scriptText = document.currentScript.innerText;
  if (scriptText.length > 100000 && scriptText.indexOf('window.Adf') > 0 && scriptText.indexOf('checkAdPlace') > 0) {
    return true;
  }
  return false;
}
const hasSimilarAttributes = children => {
  if (children.length === 1) {
    return false;
  }
  for (let i = 1; i < children.length; i += 1) {
    var _children, _children$attributes$, _children$i, _children$i$attribute;
    if (((_children = children[i - 1]) === null || _children === void 0 ? void 0 : (_children$attributes$ = _children.attributes[0]) === null || _children$attributes$ === void 0 ? void 0 : _children$attributes$.value) !== ((_children$i = children[i]) === null || _children$i === void 0 ? void 0 : (_children$i$attribute = _children$i.attributes[0]) === null || _children$i$attribute === void 0 ? void 0 : _children$i$attribute.value)) {
      return false;
    }
  }
  return true;
};
const hideYandexDirectByLink = () => {
  const adsImg = browser.document.querySelectorAll('a[target="_blank"][style^="background-image: url(\'//"]');
  [...adsImg].forEach(img => {
    var _img$parentNode, _img$parentNode2, _img$parentNode2$pare;
    const adsBlockType1 = img === null || img === void 0 ? void 0 : (_img$parentNode = img.parentNode) === null || _img$parentNode === void 0 ? void 0 : _img$parentNode.parentNode;
    const adsBlockType2 = img === null || img === void 0 ? void 0 : (_img$parentNode2 = img.parentNode) === null || _img$parentNode2 === void 0 ? void 0 : (_img$parentNode2$pare = _img$parentNode2.parentNode) === null || _img$parentNode2$pare === void 0 ? void 0 : _img$parentNode2$pare.parentNode;
    if (hasSimilarAttributes(adsBlockType1 === null || adsBlockType1 === void 0 ? void 0 : adsBlockType1.children)) {
      hideViaDisplayProperty(adsBlockType1);
    }
    if (hasSimilarAttributes(adsBlockType2 === null || adsBlockType2 === void 0 ? void 0 : adsBlockType2.children)) {
      hideViaDisplayProperty(adsBlockType2);
    }
  });
};
const hideYandexDirectByStyle = () => {
  const styleSheets = browser.document.getElementsByTagName('style');
  [...styleSheets].forEach(styleSheet => {
    const rules = [...safeGetStylesheetRules(styleSheet.sheet)];
    const firstRule = rules[0];
    if (rules.length > 50 || !firstRule) {
      return;
    }
    if (firstRule.selectorText && /[a-zA-Z0-9]{2,8}\[[a-zA-Z0-9]{2,8}\*="[a-zA-Z0-9]{2,10}"]/.test(firstRule.selectorText)) {
      hideViaPositionProperty(firstRule);
    }
  });
};
const removeAnnoyance = () => {
  const modalButton = browser.querySelector('button[data-cerber*="::adblock_screen::"]');
  const fixedBody = browser.querySelector('body[style]');
  if (modalButton) {
    const modal = getParent(modalButton, 4);
    removeNode(modal);
  } else if (fixedBody) {
    fixedBody.removeAttribute('style');
  }
};
const removeAdScript = () => {
  const scripts = browser.document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i += 1) {
    const script = scripts[i];
    if (script && script.innerText.indexOf('getYaClickUrl') > 0) {
      removeNode(script);
    }
  }
};
if (isMatchingHostnames('rambler.ru', 'championat.com', 'gazeta.ru', 'lenta.ru', 'quto.ru', 'rns.online', 'passion.ru', 'wmj.ru', 'eda.ru', 'letidor.ru', 'motor.ru')) {
  const realUA = navigator.userAgent;
  const getUserAgent = () => {
    if (isInsideCircumventionScript()) {
      return 'MSIE ';
    }
    return realUA;
  };
  Object.defineProperty(browser.window.navigator, 'userAgent', {
    get: getUserAgent
  });
  let realPromise = browser.window.Promise;
  Object.defineProperty(browser.window, 'Promise', {
    get: () => {
      if (isInsideCircumventionScript()) {
        throw new TypeError('Failed to fetch');
      }
      return realPromise;
    },
    set: value => {
      realPromise = value;
    }
  });
  const removeLeftovers = () => {
    const anchors = browser.querySelectorAll(`
            [id^="desktop_"][data-banner],
            [id^="hedux-"],
            div[id^="adfox-"][style="display:block"],
            div[id^="adfox-"][style="display: block;"],
            div[data-rnet] > [id^="rnet_kino_"],
            div[data-rnet] > [id^="rnet_news_"],
            div[data-rnet] > div[id^="rnet_sport_"],
            div[data-rnet] > div[id^="rnet_finance_"],
            div[data-rnet] > div[id^="rnet_weekend_"],
            div[data-rnet] > div[id^="rnet_travel_"],
            div[data-rnet] > div[id^="rnet_woman_"],
            div[data-rnet] > div[id^="rnet_doctor_"],
            div[data-rnet] > div[id^="rnet_auto_"],
            div[data-rnet="rnet_news_comments"] > div[id^="rnet_rambler_"],
            div[style="display:block"] > [id^="__ban_"],
            div[style^="height"] > div > [id][style="display: block;"],
            [class^="banner--container"] > [id][class^="banner banner--desktop"],
            [style*="min-"] > div > div[id][style*="display"]
        `);
    [...anchors].forEach(anchor => {
      var _anchor$nextElementSi;
      const parent = getParent(anchor, 5);
      if (parent && parent instanceof Element && parent.classList.value && parent.classList[0].indexOf('rui__') !== -1) {
        return;
      }
      const newsBlock = (_anchor$nextElementSi = anchor.nextElementSibling) === null || _anchor$nextElementSi === void 0 ? void 0 : _anchor$nextElementSi.querySelector('article > a[data-blocks]');
      if (newsBlock) {
        return;
      }
      for (let i = 5; i >= 1; i -= 1) {
        const container = getParent(anchor, i);
        if (container && container instanceof Element && (getComputedStyle(container).backgroundColor === 'rgb(239, 245, 255)' || getComputedStyle(container).backgroundColor === 'rgb(243, 244, 247)')) {
          hideViaPositionProperty(container);
        }
      }
    });
  };
  const removeHoroscopeLeftovers = () => {
    if (navigator.userAgent.match('Mobile')) {
      return;
    }
    const anchors = browser.querySelectorAll('[id^="horoscope-main-"] + div[class] > div > div > [id^="hedux-"]');
    [...anchors].forEach(anchor => {
      const container = getParent(anchor, 6);
      hideViaPositionProperty(container);
    });
  };
  const removeKinoLeftovers = () => {
    const stickyNews = browser.querySelectorAll('[class^="comments__right-sticky"] > [class="comments__partners"]');
    [...stickyNews].forEach(block => {
      hideViaPositionProperty(block);
    });
    const headers = browser.querySelectorAll('[class="comments__read-also"], div[data-traffic-blocks] > [class^="traffic-blocks--"]');
    [...headers].forEach(header => {
      hideViaPositionProperty(header);
    });
    const mobileBanner = browser.document.getElementById('mobile_top_banner');
    if (mobileBanner) {
      hideViaPositionProperty(mobileBanner.parentNode);
    }
  };
  const removeMobileLeftovers = () => {
    if (navigator.userAgent.match('Mobile')) {
      const blueLeftovers = browser.querySelectorAll('[style="min-height: 250px;"], [style="min-height:250px"]');
      [...blueLeftovers].forEach(leftover => {
        if (getComputedStyle(leftover).backgroundColor === 'rgb(239, 245, 255)') {
          const wrapper = getParent(leftover, 1);
          hideViaPositionProperty(wrapper);
        }
      });
      const inArticleLeftovers = browser.querySelectorAll('div:not([class]) > [data-rnet] > [id^="rnet_"][id*="finance"]');
      [...inArticleLeftovers].forEach(leftover => {
        const wrapper = getParent(leftover, 3);
        if (getComputedStyle(wrapper).backgroundColor === 'rgb(239, 245, 255)') {
          hideViaPositionProperty(wrapper);
        }
      });
    }
  };
  observeDomChanges(() => {
    hideYandexDirectByLink();
    hideYandexDirectByStyle();
    removeAdScript();
    removeAnnoyance();
    removeLeftovers();
    removeMobileLeftovers();
    removeHoroscopeLeftovers();
    removeKinoLeftovers();
  });
}const hideTopBanner = () => {
  const container = browser.querySelector('body > div[class$="-body"] > div[class][data-role]');
  const script = container === null || container === void 0 ? void 0 : container.querySelector('div[class] > script');
  if (container && script && script.innerText.includes('adfox')) {
    hideViaPositionProperty(container);
  }
};
const hideAdsContainer = adsContainer => {
  if (adsContainer && adsContainer.querySelector('div[class] > div[id] > div[class][id]')) {
    hideViaOpacity(adsContainer);
  }
};
const hideMidBanner = () => {
  var _browser$document$que, _browser$document$que2;
  const dromBlock = browser.document.querySelector('.js-page > div[class] > div[data-target][data-role]');
  const carsMidBanner1 = dromBlock === null || dromBlock === void 0 ? void 0 : dromBlock.previousElementSibling;
  hideAdsContainer(carsMidBanner1);
  const carsMidBanner2 = dromBlock === null || dromBlock === void 0 ? void 0 : dromBlock.nextElementSibling;
  hideAdsContainer(carsMidBanner2);
  const newsMidBanner = (_browser$document$que = browser.document.querySelector('.js-page > div[class] > .js-gallery')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.nextElementSibling;
  hideAdsContainer(newsMidBanner);
  const marketMidBanner = (_browser$document$que2 = browser.document.querySelector('.js-page > div[class] > .offer')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.nextElementSibling;
  hideAdsContainer(marketMidBanner);
  const journalMidBanner = browser.document.querySelector('.js-page > div[class] > div[itemtype$="BlogPosting"] + div[class]');
  hideAdsContainer(journalMidBanner);
};
const hideRightSticky = () => {
  const adFrames = browser.querySelectorAll(`
        iframe,
        img[src*="adfox"]
    `);
  [...adFrames].forEach(frame => {
    for (let i = 0; i <= 10; i += 1) {
      const container = getParent(frame, i);
      const prevSibling = container === null || container === void 0 ? void 0 : container.previousElementSibling;
      const id = prevSibling === null || prevSibling === void 0 ? void 0 : prevSibling.id;
      const classList = prevSibling === null || prevSibling === void 0 ? void 0 : prevSibling.classList;
      if (container && !id && classList && classList.length === 0 && prevSibling.querySelector('[class*="--content"]')) {
        removeNode(container);
      }
    }
  });
};
const hideinFeedStickyAd = () => {
  const rightColumn = browser.querySelector('.js-page > div > div.g-column-mid + div');
  if (!rightColumn) {
    return;
  }
  const ad = rightColumn.lastElementChild;
  const {
    top
  } = getComputedStyle(ad);
  if (top === '70px' || top === '-9999px') {
    removeNode(ad);
  }
};
const hideContentBanner = () => {
  var _carForm$parentNode;
  const carForm = browser.document.querySelector('.c-exp-cols > .c-exp-form');
  const adsContainer = carForm === null || carForm === void 0 ? void 0 : (_carForm$parentNode = carForm.parentNode) === null || _carForm$parentNode === void 0 ? void 0 : _carForm$parentNode.lastElementChild;
  hideAdsContainer(adsContainer);
};
const hideMobileTopAd = () => {
  const postContainer = browser.querySelector('[data-role="post"]');
  if (!postContainer) {
    return;
  }
  const children = postContainer.childNodes;
  [...children].forEach(child => {
    var _child$previousElemen, _child$nextElementSib;
    const prevClassNames = (_child$previousElemen = child.previousElementSibling) === null || _child$previousElemen === void 0 ? void 0 : _child$previousElemen.classList;
    const nextClassNames = (_child$nextElementSib = child.nextElementSibling) === null || _child$nextElementSib === void 0 ? void 0 : _child$nextElementSib.classList;
    if (!prevClassNames || !nextClassNames) {
      return;
    }
    if (prevClassNames.contains('o-group') && nextClassNames.contains('c-post__body')) {
      hideViaPositionProperty(child);
    }
  });
};
const hideMobileLowerAds = () => {
  const midContainer = browser.querySelector('body > main');
  if (!midContainer) {
    return;
  }
  const children = midContainer.childNodes;
  [...children].forEach(child => {
    if (child.nodeName !== 'DIV') {
      return;
    }
    if (getComputedStyle(child)['z-index'] === '1' && getComputedStyle(child)['line-height'] === '0px') {
      hideViaPositionProperty(child);
    }
  });
};
if (isMatchingHostnames('drive2.ru', 'drive2.com')) {
  const xhrFilter = request => {
    if (request.responseURL.match(/drive2.ru\/.{1,50}\/*/) && request.withCredentials === true) {
      return true;
    }
    if (request.responseURL.includes('partner-code-bundles')) {
      return true;
    }
    if (request.responseURL.includes('adfox')) {
      return true;
    }
    return false;
  };
  removeFromShadowRoots('[data-container="outer"], [style*="width"][style*="height"][style*="!important"], a:not([href*="/l/"]):not([href*="/b/"])');
  preventXHR(xhrFilter);
  observeDomChanges(() => {
    hideTopBanner();
    hideMidBanner();
    hideRightSticky();
    hideinFeedStickyAd();
    hideContentBanner();
    if (navigator.userAgent.match('Mobile')) {
      hideMobileTopAd();
      hideMobileLowerAds();
    }
  });
}if (isMatchingHostnames('eda.ru')) {
  const areEqual = function areEqual() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    for (let i = 1; i < args.length; i += 1) {
      if (args[i] === null || args[i] !== args[i - 1]) {
        return false;
      }
    }
    return true;
  };
  const hideTopBanner = () => {
    try {
      const body = browser.document.querySelector('body');
      const bodyChildren = [...body.children];
      const pageWrapper = browser.document.querySelector('header').parentNode;
      const pageWrapperIndex = bodyChildren.indexOf(pageWrapper);
      if (pageWrapperIndex === -1) {
        return;
      }
      const elementsBeforePageWrapper = bodyChildren.slice(0, pageWrapperIndex);
      let lastScriptIndex;
      elementsBeforePageWrapper.forEach((element, index) => {
        if (element.tagName === 'SCRIPT') {
          lastScriptIndex = index;
        }
      });
      if (lastScriptIndex === 'undefined') {
        return;
      }
      for (let i = lastScriptIndex + 1; i < pageWrapperIndex; i += 1) {
        hideViaDisplayProperty(elementsBeforePageWrapper[i]);
      }
    } catch (_unused) {}
  };
  const hideFooterAds = () => {
    try {
      const footerAds = browser.document.querySelector('#superfooter').previousSibling;
      if (footerAds.children.length === 3 && areEqual(footerAds.children[0].attributes[0].textContent, footerAds.children[1].attributes[0].textContent, footerAds.children[2].attributes[0].textContent)) {
        hideViaDisplayProperty(footerAds);
      }
    } catch (_unused2) {}
  };
  observeDomChanges(() => {
    hideTopBanner();
    hideFooterAds();
  });
}const hideHeaderBanner$1 = () => {
  var _adsContainer$firstEl;
  const header = browser.document.querySelector('header');
  const adsContainer = header === null || header === void 0 ? void 0 : header.previousElementSibling;
  if (!adsContainer) {
    return;
  }
  const ignoredNodeTypes = ['DIV', 'SCRIPT', 'STYLE'];
  if (ignoredNodeTypes.some(nodeType => adsContainer.nodeName === nodeType)) {
    return;
  }
  if ((_adsContainer$firstEl = adsContainer.firstElementChild) !== null && _adsContainer$firstEl !== void 0 && _adsContainer$firstEl.className) {
    removeNode(adsContainer);
  }
};
const hideSidebarAds$2 = () => {
  const layoutSidebar = browser.querySelector('.LayoutSidebar');
  if (layoutSidebar) {
    [...layoutSidebar.children].forEach(child => {
      if (child.className !== 'LayoutSidebar__content') {
        hideViaPositionProperty(child.firstElementChild);
      }
    });
  }
  const scrollableSidebar = browser.querySelector('.ScrollableSidebar');
  const hidingWrapper = scrollableSidebar === null || scrollableSidebar === void 0 ? void 0 : scrollableSidebar.firstChild;
  if (hidingWrapper) {
    [...hidingWrapper.children].forEach(child => {
      const {
        nodeName
      } = child;
      if (nodeName.includes('RTB') || nodeName.includes('ADFOX')) {
        hideViaPositionProperty(child);
      }
    });
  }
};
const hideFilterBanner = () => {
  const priceRange = browser.document.querySelector('#priceRange');
  if (!priceRange) {
    return;
  }
  const filterBanner = priceRange.nextElementSibling;
  if (filterBanner && !filterBanner.className) {
    hideViaPositionProperty(filterBanner);
  }
};
const hideMiniBanner = () => {
  var _miniBannerLink$paren, _miniBannerLink$paren2;
  const miniBannerLink = browser.document.querySelector('a[target$="_blank"][href^="https://an.yandex.ru"]');
  if (!miniBannerLink) {
    return;
  }
  const miniBanner = miniBannerLink === null || miniBannerLink === void 0 ? void 0 : (_miniBannerLink$paren = miniBannerLink.parentNode) === null || _miniBannerLink$paren === void 0 ? void 0 : (_miniBannerLink$paren2 = _miniBannerLink$paren.parentNode) === null || _miniBannerLink$paren2 === void 0 ? void 0 : _miniBannerLink$paren2.parentNode;
  if (miniBanner && getComputedStyle(miniBanner).width === '240px') {
    hideViaPositionProperty(miniBanner);
  }
};
const hideYandexDirectByRemoveScript = () => {
  const adScript = browser.document.getElementsByTagName('script');
  for (let i = 0; i < adScript.length; i += 1) {
    const element = adScript[i];
    if (element && element.innerText.indexOf('onError') > 0 && element.innerText.indexOf('direct') > 0) {
      removeNode(element);
    }
  }
};
const hideVertisadsBanners = () => {
  const mainContainer = browser.querySelector('[class$="__content"] > [class$="container"]');
  const mainNodes = mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.children;
  if (mainNodes) {
    [...mainNodes].forEach(node => {
      if (node.tagName.includes('ADS-')) {
        removeNode(node);
      }
    });
  }
  const sideContainer = browser.querySelector('[class$="__sidebar"] > [class$="__sidebarStickyContent"]');
  const sideNodes = sideContainer === null || sideContainer === void 0 ? void 0 : sideContainer.children;
  if (sideNodes) {
    [...sideNodes].forEach(node => {
      if (node.tagName.includes('ADS-')) {
        removeNode(node);
      }
    });
  }
  const brandBanner = browser.querySelector('.Index  > .Index__block > [class$="place_brand"]');
  if (brandBanner && brandBanner.tagName.includes('ADS-BRAND')) {
    removeNode(brandBanner);
  }
};
const XHRfilter = request => {
  const {
    responseURL,
    response
  } = request;
  if (responseURL && responseURL.includes('yandex.ru/ads')) {
    return true;
  }
  if (response && response.includes('rtbAuctionInfo')) {
    return true;
  }
  return false;
};
if (isMatchingHostnames('media.auto.ru')) {
  observeDomChanges(() => {
    hideHeaderBanner$1();
  });
}
if (isMatchingHostnames('auto.ru')) {
  preventXHR(XHRfilter);
  observeDomChanges(() => {
    hideFilterBanner();
    hideMiniBanner();
    hideHeaderBanner$1();
    hideSidebarAds$2();
    hideYandexDirectByRemoveScript();
    hideVertisadsBanners();
  });
}if (isMatchingHostnames('wp.pl')) {
  const hideAdsByStylesheet = () => {
    var _browser$querySelecto, _browser$querySelecto2;
    const adsSheetRules = (_browser$querySelecto = browser.querySelector('style[data-id=wpcss]')) === null || _browser$querySelecto === void 0 ? void 0 : (_browser$querySelecto2 = _browser$querySelecto.sheet) === null || _browser$querySelecto2 === void 0 ? void 0 : _browser$querySelecto2.cssRules;
    if (!adsSheetRules) {
      return;
    }
    [...adsSheetRules].forEach(rule => {
      var _rule$style, _rule$style2;
      if ((rule === null || rule === void 0 ? void 0 : (_rule$style = rule.style) === null || _rule$style === void 0 ? void 0 : _rule$style.width) === '320px' && (rule === null || rule === void 0 ? void 0 : (_rule$style2 = rule.style) === null || _rule$style2 === void 0 ? void 0 : _rule$style2.height) === '40px') {
        hideViaDisplayProperty(rule);
      }
    });
  };
  const hidePolecaneAds = () => {
    browser.querySelectorAll('span').forEach(element => {
      if ((element === null || element === void 0 ? void 0 : element.textContent) === 'REKLAMA') {
        hideViaDisplayProperty(element === null || element === void 0 ? void 0 : element.parentNode);
      }
    });
  };
  observeDomChanges(() => {
    hidePolecaneAds();
    hideAdsByStylesheet();
  });
}const hideSidebarAds$1 = () => {
  iterateCSSRules(rule => {
    if (rule.cssText.includes('{ content: url("data:image/jpeg;base64')) {
      var _adsImage$parentNode, _adsImage$parentNode$, _adsImage$parentNode$2, _adsImage$parentNode$3;
      const adsImage = browser.querySelector(rule.selectorText);
      const adsBlock = adsImage === null || adsImage === void 0 ? void 0 : (_adsImage$parentNode = adsImage.parentNode) === null || _adsImage$parentNode === void 0 ? void 0 : (_adsImage$parentNode$ = _adsImage$parentNode.parentNode) === null || _adsImage$parentNode$ === void 0 ? void 0 : (_adsImage$parentNode$2 = _adsImage$parentNode$.parentNode) === null || _adsImage$parentNode$2 === void 0 ? void 0 : (_adsImage$parentNode$3 = _adsImage$parentNode$2.parentNode) === null || _adsImage$parentNode$3 === void 0 ? void 0 : _adsImage$parentNode$3.parentNode;
      if (!adsBlock || adsBlock.children.length < 3) {
        return;
      }
      hideViaDisplayProperty(adsBlock);
    }
  });
};
if (isMatchingHostnames('minigames.mail.ru')) {
  observeDomChanges(() => {
    hideSidebarAds$1();
  });
}const hideSidebarAds = () => {
  const spanElements = browser.querySelectorAll('span');
  [...spanElements].forEach(span => {
    if (span.innerText === 'PropellerAds') {
      var _span$parentNode, _span$parentNode$pare, _span$parentNode$pare2;
      const adsBlock = span === null || span === void 0 ? void 0 : (_span$parentNode = span.parentNode) === null || _span$parentNode === void 0 ? void 0 : (_span$parentNode$pare = _span$parentNode.parentNode) === null || _span$parentNode$pare === void 0 ? void 0 : (_span$parentNode$pare2 = _span$parentNode$pare.parentNode) === null || _span$parentNode$pare2 === void 0 ? void 0 : _span$parentNode$pare2.parentNode;
      hideViaPositionProperty(adsBlock);
    }
  });
};
if (isMatchingHostnames('vidstream.online')) {
  observeDomChanges(() => {
    hideSidebarAds();
  });
}const hideDirectAds = () => {
  const elementsWithAd = browser.querySelectorAll('header + div > div[class$="-direct"] > div[class], header + div > div[class]');
  [...elementsWithAd].forEach(elementWithAd => {
    var _elementWithAd$classL;
    if ((elementWithAd === null || elementWithAd === void 0 ? void 0 : (_elementWithAd$classL = elementWithAd.classList) === null || _elementWithAd$classL === void 0 ? void 0 : _elementWithAd$classL.length) >= 3
    && elementWithAd.querySelector('div[style*="width: 100%"]') && !elementWithAd.querySelector('.js-doc-page') && !elementWithAd.querySelector('input[type="number"]')) {
      hideViaPositionProperty(elementWithAd);
    }
  });
  const elementsWithAdBottom = browser.querySelectorAll('.js-doc-html > div[class]');
  [...elementsWithAdBottom].forEach(elementWithAdBottom => {
    var _elementWithAdBottom$;
    if ((elementWithAdBottom === null || elementWithAdBottom === void 0 ? void 0 : (_elementWithAdBottom$ = elementWithAdBottom.classList) === null || _elementWithAdBottom$ === void 0 ? void 0 : _elementWithAdBottom$.length) >= 3 && !(elementWithAdBottom !== null && elementWithAdBottom !== void 0 && elementWithAdBottom.className.startsWith('js-doc-page'))) {
      hideViaPositionProperty(elementWithAdBottom);
    }
  });
};
const hideHeaderBanner = () => {
  const headerElems = browser.querySelectorAll('div[class^="html"] > div[class^="pages_"] > div');
  [...headerElems].forEach(elem => {
    if (elem.classList.length === 3 && getComputedStyle(elem).margin === '0px -10px') {
      hideViaPositionProperty(elem);
    }
  });
};
const hideMailIframeAds = () => {
  const banners = browser.querySelectorAll('div[style="width: 100%;"]');
  [...banners].forEach(banner => {
    if (!banner.childElementCount) {
      hideViaPositionProperty(banner.parentElement);
    }
  });
};
if (isMatchingHostnames('docviewer.yandex.ru', 'docviewer.yandex.kz', 'docviewer.yandex.by', 'docviewer.yandex.ua', 'docviewer.yandex.md', 'docviewer.yandex.com.tr', 'docviewer.yandex.com.am')) {
  observeDomChanges(() => {
    hideDirectAds();
    hideHeaderBanner();
    hideMailIframeAds();
  });
}const hideLiveDirectByStyle = () => {
  const styleSheets = browser.document.getElementsByTagName('style');
  [...styleSheets].forEach(styleSheet => {
    const rules = [...safeGetStylesheetRules(styleSheet.sheet)];
    const firstStyleRule = rules[0];
    if (rules.length > 50 || !firstStyleRule) {
      return;
    }
    if (firstStyleRule.selectorText && /\s*"[.a-z0-9]+"/.test(firstStyleRule.selectorText)) {
      hideViaPositionProperty(firstStyleRule);
    }
  });
};
const leftovers = () => {
  const remainBlocks = browser.querySelectorAll('.cat-widget__card-wrap');
  [...remainBlocks].forEach(remainBlock => {
    const leftover = remainBlock.firstElementChild;
    if (!leftover) {
      return;
    }
    if (leftover && /ngIf:\sdirective\./.test(leftover.innerHTML)) {
      hideViaPositionProperty(remainBlock);
    }
  });
};
if (isMatchingHostnames('livejournal.com')) {
  observeDomChanges(() => {
    hideLiveDirectByStyle();
    leftovers();
  });
}
if (isMatchingHostnames('varlamov.ru', 'lena-miro.ru', 'olegmakarenko.ru', 'periskop.su', 'levik.blog', 'vadimrazumov.ru')) {
  observeDomChanges(() => {
    hideLiveDirectByStyle();
  });
}const hideOtzovikAds = () => {
  const nodeElements = browser.querySelectorAll('div[id]');
  [...nodeElements].forEach(nodeElement => {
    var _nodeElement$parentNo, _nodeElement$parentNo2, _nodeElement$parentNo3, _nodeElement$previous, _nodeElement$previous2;
    const adElementTextContent = nodeElement === null || nodeElement === void 0 ? void 0 : (_nodeElement$parentNo = nodeElement.parentNode) === null || _nodeElement$parentNo === void 0 ? void 0 : (_nodeElement$parentNo2 = _nodeElement$parentNo.previousSibling) === null || _nodeElement$parentNo2 === void 0 ? void 0 : (_nodeElement$parentNo3 = _nodeElement$parentNo2.previousSibling) === null || _nodeElement$parentNo3 === void 0 ? void 0 : _nodeElement$parentNo3.textContent;
    const adElementTextContentWithoutParent = nodeElement === null || nodeElement === void 0 ? void 0 : (_nodeElement$previous = nodeElement.previousSibling) === null || _nodeElement$previous === void 0 ? void 0 : (_nodeElement$previous2 = _nodeElement$previous.previousSibling) === null || _nodeElement$previous2 === void 0 ? void 0 : _nodeElement$previous2.textContent;
    const regexAd = /Yandex\.|\.RTB|OTZOAD/;
    if (regexAd.test(adElementTextContent) || regexAd.test(adElementTextContentWithoutParent)) {
      hideViaPositionProperty(nodeElement);
    }
  });
};
if (isMatchingHostnames('otzovik.com')) {
  observeDomChanges(() => {
    hideOtzovikAds();
  });
}const TEST_PAGE = '/test.html';
const NEW_ISSUE_PAGE = '/new_issue.html';
const ADGUARD_HOSTNAMES = ['adguard.com'
];
const testExtra = () => {
  const testElement = browser.document.querySelector('.extra-test');
  hideViaDisplayProperty(testElement);
};
if (isMatchingHostnames(...ADGUARD_HOSTNAMES)) {
  if (browser.location.pathname.endsWith(TEST_PAGE) || browser.location.pathname.endsWith(NEW_ISSUE_PAGE)) {
    observeDomChanges(() => {
      testExtra();
    });
  }
}const changeLinks = () => {
  const buttons = document.querySelectorAll('.panel-footer > form[action] > button[link]');
  const forms = document.querySelectorAll('.panel-footer > form[action]');
  if (buttons.length === forms.length) {
    for (let a = 0; a < forms.length; a += 1) {
      const buttonsAttribute = buttons[a].getAttribute('link');
      forms[a].setAttribute('action', buttonsAttribute);
      forms[a].setAttribute('target', '_blank');
    }
  }
};
if (isMatchingHostnames('multiup.org')) {
  observeDomChanges(() => {
    changeLinks();
  });
}const hideLentaAds = () => {
  const feedTitles = browser.querySelectorAll('#lentaFeed > tr > td.newshead');
  for (let i = 0; i < feedTitles.length; i += 1) {
    const feedTitle = feedTitles[i];
    const adTopTitle = feedTitle === null || feedTitle === void 0 ? void 0 : feedTitle.parentNode;
    const adContent = adTopTitle === null || adTopTitle === void 0 ? void 0 : adTopTitle.nextElementSibling;
    const adBottomTitle = adContent === null || adContent === void 0 ? void 0 : adContent.nextElementSibling;
    if (feedTitle.querySelector('.rating-short-value') === null) {
      hideViaPositionProperty(adTopTitle);
      hideViaPositionProperty(adContent);
      hideViaPositionProperty(adBottomTitle);
    }
  }
};
if (isMatchingHostnames('yaplakal.com', 'yap.ru')) {
  observeDomChanges(() => {
    hideLentaAds();
  });
}if (isMatchingHostnames('pravda.com.ua', 'epravda.com.ua', 'glianec.com', 'ostro.org', 'nashamama.com', 'bilshe.com', 'zdorovia.com.ua', 'i.factor.ua', 'gismeteo.ua', '1777.ru', 'cn.ru', 'finance.i.ua', 'glavcom.ua', 'hvylya.net', 'kp.ua', 'love.i.ua', 'newsone.ua', 'peers.tv', 'radio.i.ua', 'real-vin.com', 'viks.bz', 'vsetv.com', 'gismeteo.ua', 'tv.ua', 'isport.ua', 'eurointegration.com.ua', 'u-news.com.ua', 'strana.ua', '4mama.ua', 'bigmir.net', 'dengi.ua', 'enovosty.com', 'facenews.ua', 'football24.ua', 'gorod.dp.ua', 'inforesist.org', 'kolobok.ua', 'liga.net', 'nnovosti.info', 'smak.ua', 'tochka.net', 'ukr.net', 'nv.ua', 'meteo.ua', 'besplatka.ua', 'lifedon.com.ua', 'zv.zp.ua')) {
  disableScripts(/ShadowRoot|AdnetAttachScript|zmctrack/);
}if (isMatchingHostnames('sheee.co.il', 'walla.co.il')) {
  disableScripts(/function[\s\S]*?static[\s\S]*?switch/);
}if (isMatchingHostnames('sinoptik.ua')) {
  replaceScripts(/e&&\(o\(de\),n\(e\)\)/, '');
}if (isMatchingHostnames('kakprosto.ru')) {
  const xhrFilter = request => {
    if (request !== null && request !== void 0 && request.responseText.includes('isYandexPage')) {
      return true;
    }
    return false;
  };
  const removeLeftovers = () => {
    const links = browser.querySelectorAll('a[href*="advertising"]');
    [...links].forEach(element => {
      const leftover = element.closest('.block__content');
      hideViaPositionProperty(leftover);
    });
  };
  preventXHR(xhrFilter);
  observeDomChanges(() => {
    removeLeftovers();
  });
}if (isMatchingHostnames('24smi.org')) {
  blockProperty('ya');
}if (isMatchingHostnames('youtube.com')) {
  const skipClick = () => {
    const skipButton = browser.querySelector('.ytp-ad-skip-button-slot');
    if (skipButton) {
      skipButton.click();
    }
  };
  const rewindAd = () => {
    const videoAd = browser.querySelector('div.ad-showing');
    const player = browser.querySelector('video.html5-main-video');
    if (videoAd && player && player.duration) {
      player.currentTime = player.duration;
      skipClick();
    }
  };
  observeDomChanges(() => {
    rewindAd();
  });
}if (isMatchingHostnames('echo.msk.ru')) {
  const xhrFilter = request => {
    const {
      responseURL,
      withCredentials
    } = request;
    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/adfox|alfasense|securepubads|webvisor|watch|jstracer|static-mon|bidder.criteo/)) {
      return true;
    }
    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/recostream.go|ad.outstream|rb.infox|kraken.rambler|cdn-plus.roxot-panel|.giraff|nativeroll|an.yandex.ru\/newscount/)) {
      return true;
    }
    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/viadata.store|an.yandex.ru\/meta/)) {
      return true;
    }
    if (responseURL !== null && responseURL !== void 0 && responseURL.includes('echomsk.static-storage') && withCredentials === true) {
      return true;
    }
    return false;
  };
  const removeNakedAds = () => {
    const ads = browser.querySelectorAll('div.ad, div[id*="adfox"], div[id^="yandex_rtb_"], div[class^="y-dir-"], a[href^="https://relap.io"]');
    [...ads].forEach(ad => {
      removeNode(ad);
    });
  };
  const removeArticleTeaser = () => {
    const teaser = browser.querySelector('div[id^="under_article"]');
    if (teaser && teaser.querySelector('div[id^="smi_teaser"]')) {
      removeNode(teaser);
    }
  };
  preventXHR(xhrFilter);
  observeDomChanges(() => {
    removeNakedAds();
    removeArticleTeaser();
  });
}if (isMatchingHostnames('soft98.ir')) {
  const hideHeaderBanner = () => {
    let headerAd;
    let navbar;
    if (navigator.userAgent.match('Mobile')) {
      headerAd = browser.querySelector('[id="logo_____wrap"] > div.row > div >  [id*="-header"]');
      navbar = browser.querySelector('[id="logo_____wrap"] > div.row > [id*="logo"]');
    } else {
      headerAd = browser.querySelector('[id="logo_____wrap"]');
      navbar = browser.querySelector('header#header > div#navbar__wrap');
    }
    if (headerAd && navbar) {
      headerAd.style.marginTop = `-${getComputedStyle(navbar).height}`;
    }
  };
  const hideMainBlock = () => {
    const namedContainers = browser.querySelectorAll('body > div.container[id]');
    [...namedContainers].forEach(container => {
      if (container.querySelector('img[src^="https://redlini.ga/"]')) {
        hideViaPositionProperty(container);
      }
    });
  };
  const hideSidebarAds = () => {
    const sidebarAd = browser.querySelector('aside#sidebar  > section.card:not([id])');
    if (sidebarAd && sidebarAd.querySelector('a[onclick*="asiatech"]')) {
      removeNode(sidebarAd);
    }
  };
  const hideInArticleFrame = () => {
    const container = browser.querySelector('main#main > div.text-center:not([id])');
    if (container && container.querySelector('iframe[src*="kaprila"]')) {
      hideViaPositionProperty(container);
    }
  };
  const hideForumBanner = () => {
    const banner = browser.querySelector('center > a > img[oncontextmenu]');
    hideViaPositionProperty(banner);
  };
  observeDomChanges(() => {
    hideHeaderBanner();
    hideMainBlock();
    hideSidebarAds();
    hideInArticleFrame();
    hideForumBanner();
  });
}let disabledVideo = null;
let originalVolume = 0;
let foundAdContainer = false;
let foundAdBanner = false;
let notifyAdsWatchedReloadNextTime = 0;
let twitchMainWorker = null;
function declareOptions(scope) {
  scope.OPT_MODE_MUTE_BLACK = false;
  scope.OPT_MODE_VIDEO_SWAP = false;
  scope.OPT_MODE_LOW_RES = false;
  scope.OPT_MODE_EMBED = false;
  scope.OPT_MODE_STRIP_AD_SEGMENTS = true;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED = true;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS = 0;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST = true;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_AND_RELOAD = false;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION = 10000;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_MIN_REQUESTS = true;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT = false;
  scope.OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT_DELAY = 0;
  scope.OPT_MODE_PROXY_M3U8 = '';
  scope.OPT_MODE_PROXY_M3U8_OBFUSCATED = false;
  scope.OPT_MODE_PROXY_M3U8_FULL_URL = false;
  scope.OPT_MODE_PROXY_M3U8_PARTIAL_URL = false;
  scope.OPT_VIDEO_SWAP_PLAYER_TYPE = 'picture-by-picture';
  scope.OPT_BACKUP_PLAYER_TYPE = 'picture-by-picture';
  scope.OPT_REGULAR_PLAYER_TYPE = 'site';
  scope.OPT_INITIAL_M3U8_ATTEMPTS = 1;
  scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = '';
  scope.OPT_ACCESS_TOKEN_TEMPLATE = true;
  scope.AD_SIGNIFIER = 'stitched-ad';
  scope.LIVE_SIGNIFIER = ',live';
  scope.CLIENT_ID = 'kimne78kx3ncx6brgo4mv6wki5h1ko';
  if (!scope.OPT_ACCESS_TOKEN_PLAYER_TYPE && scope.OPT_MODE_LOW_RES) {
    scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = 'thunderdome';
  }
  if (!scope.OPT_ACCESS_TOKEN_PLAYER_TYPE && scope.OPT_MODE_EMBED) {
    scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = 'embed';
  }
  if (scope.OPT_MODE_PROXY_M3U8 && scope.OPT_MODE_PROXY_M3U8_OBFUSCATED) {
    let newStr = '';
    scope.OPT_MODE_PROXY_M3U8 = atob(scope.OPT_MODE_PROXY_M3U8);
    for (let i = 0; i < scope.OPT_MODE_PROXY_M3U8.length; i += 1) {
      newStr += String.fromCharCode(scope.OPT_MODE_PROXY_M3U8.charCodeAt(i) ^ scope.CLIENT_ID.charCodeAt(i % scope.CLIENT_ID.length));
    }
    scope.OPT_MODE_PROXY_M3U8 = newStr;
  }
  scope.StreamInfos = [];
  scope.StreamInfosByUrl = [];
  scope.CurrentChannelNameFromM3U8 = null;
  scope.gql_device_id = null;
}
const getWasmWorkerUrl = twitchBlobUrl => {
  const req = new XMLHttpRequest();
  req.open('GET', twitchBlobUrl, false);
  req.send();
  return req.responseText.split("'")[1];
};
function parseAttributes(str) {
  return Object.fromEntries(str.split(/(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))/).filter(Boolean).map(x => {
    const idx = x.indexOf('=');
    const key = x.substring(0, idx);
    const value = x.substring(idx + 1);
    const num = Number(value);
    return [key, Number.isNaN(num) ? value.startsWith('"') ? JSON.parse(value) : value : num];
  }));
}
function getFinalSegUrl(lines) {
  for (let i = lines.length - 1; i >= 0; i -= 1) {
    if (lines[i].startsWith('http')) {
      return lines[i];
    }
  }
  return null;
}
function gqlRequest(body, realFetch) {
  const fetchFunc = realFetch || fetch;
  return fetchFunc('https://gql.twitch.tv/gql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'client-id': CLIENT_ID,
      'X-Device-Id': gql_device_id
    }
  });
}
function makeGraphQlPacket(event, radToken, payload) {
  return [{
    operationName: 'ClientSideAdEventHandling_RecordAdEvent',
    variables: {
      input: {
        eventName: event,
        eventPayload: JSON.stringify(payload),
        radToken
      }
    },
    extensions: {
      persistedQuery: {
        version: 1,
        sha256Hash: '7e6c69e6eb59f8ccb97ab73686f3d8b7d85a72a0298745ccd8bfc68e4054ca5b'
      }
    }
  }];
}
async function tryNotifyAdsWatchedM3U8(streamM3u8) {
  if (!streamM3u8.includes(AD_SIGNIFIER)) {
    return 1;
  }
  const matches = streamM3u8.match(/#EXT-X-DATERANGE:(ID="stitched-ad-[^\n]+)\n/);
  if (matches.length > 1) {
    const attrString = matches[1];
    const attr = parseAttributes(attrString);
    const podLength = parseInt(attr['X-TV-TWITCH-AD-POD-LENGTH'] ? attr['X-TV-TWITCH-AD-POD-LENGTH'] : '1', 10);
    const radToken = attr['X-TV-TWITCH-AD-RADS-TOKEN'];
    const rollType = attr['X-TV-TWITCH-AD-ROLL-TYPE'].toLowerCase();
    const baseData = {
      stitched: true,
      roll_type: rollType,
      player_mute: false,
      player_volume: 0.5,
      visible: true
    };
    for (let position = 0; position < podLength; position += 1) {
      if (OPT_MODE_NOTIFY_ADS_WATCHED_MIN_REQUESTS) {
        await gqlRequest(makeGraphQlPacket('video_ad_pod_complete', radToken, baseData));
      }
    }
  }
  return 0;
}
function getAccessToken(channelName, playerType, realFetch) {
  let body = null;
  if (OPT_ACCESS_TOKEN_TEMPLATE) {
    const templateQuery = 'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}';
    body = {
      operationName: 'PlaybackAccessToken_Template',
      query: templateQuery,
      variables: {
        isLive: true,
        login: channelName,
        isVod: false,
        vodID: '',
        playerType
      }
    };
  } else {
    body = {
      operationName: 'PlaybackAccessToken',
      variables: {
        isLive: true,
        login: channelName,
        isVod: false,
        vodID: '',
        playerType
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '0828119ded1c13477966434e15800ff57ddacf13ba1911c129dc2200705b0712'
        }
      }
    };
  }
  return gqlRequest(body, realFetch);
}
function getSegmentInfosLines(streamInfo, lines) {
  const result = {
    segs: [],
    targetDuration: 0,
    elapsedSecs: 0,
    totalSecs: 0,
    hasPrefetch: false,
    hasLiveBeforeAd: true
  };
  let hasLive = false;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.startsWith('#EXT-X-TARGETDURATION')) {
      result.targetDuration = parseInt(line.split(':')[1], 10);
    }
    if (line.startsWith('#EXT-X-TWITCH-ELAPSED-SECS')) {
      result.elapsedSecs = line.split(':')[1];
    }
    if (line.startsWith('#EXT-X-TWITCH-TOTAL-SECS')) {
      result.totalSecs = line.split(':')[1];
    }
    if (line.startsWith('#EXT-X-DATERANGE')) {
      const attr = parseAttributes(line);
      if (attr.CLASS && attr.CLASS.includes('stitched-ad')) {
        streamInfo.IsMidroll = attr['X-TV-TWITCH-AD-ROLL-TYPE'] === 'MIDROLL';
      }
    }
    if (line.startsWith('http')) {
      const segInfo = {
        urlLineIndex: i,
        urlLine: lines[i],
        url: lines[i],
        isPrefetch: false
      };
      if (i >= 1 && lines[i - 1].startsWith('#EXTINF')) {
        const splitted = lines[i - 1].split(':')[1].split(',');
        segInfo.extInfLineIndex = i - 1;
        segInfo.extInfLine = lines[i - 1];
        segInfo.extInfLen = splitted[0];
        segInfo.extInfType = splitted[1].split('|')[0];
        segInfo.isAd = segInfo.extInfType !== 'live';
        if (segInfo.isAd && !hasLive && result.hasLiveBeforeAd) {
          result.hasLiveBeforeAd = false;
        }
        hasLive = !segInfo.isAd;
      } else if (i >= 2 && lines[i - 2].startsWith('#EXT-X-PROGRAM-DATE-TIME')) {
        segInfo.dateTimeLineIndex = i - 2;
        segInfo.dateTimeLine = lines[i - 2];
        segInfo.dateTime = new Date(lines[i - 2].substr(lines[i - 2].indexOf(':')));
      }
      result.segs.push(segInfo);
    }
    if (lines[i].startsWith('#EXT-X-TWITCH-PREFETCH:')) {
      const segInfo = {
        urlLineIndex: i,
        urlLine: lines[i],
        url: lines[i].substr(lines[i].indexOf(':') + 1),
        isPrefetch: true
      };
      result.hasPrefetch = true;
      result.segs.push(segInfo);
    }
  }
  return result;
}
function getSegmentInfos(streamInfo, lines, backupLines) {
  const result = {
    segs: [],
    main: getSegmentInfosLines(streamInfo, lines),
    backup: getSegmentInfosLines(streamInfo, backupLines)
  };
  for (let i = 0; i < result.backup.segs.length; i += 1) {
    const seg = {
      backup: result.backup.segs[i]
    };
    result.segs.push(seg);
  }
  for (let i = result.main.segs.length - 1, j = result.segs.length - 1; i >= 0 && j >= 0; i -= 1, j -= 1) {
    while (result.main.segs[i].isPrefetch) {
      if (result.segs[j].backup.isPrefetch) {
        result.segs[j].main = result.main.segs[i];
        j -= 1;
      }
      i -= 1;
    }
    if (!result.main.segs[i].isAd) {
      result.segs[j].main = result.main.segs[i];
    } else {
      break;
    }
  }
  streamInfo.SegmentCache.length = 0;
  for (let i = 0; i < result.segs.length; i += 1) {
    if (result.segs[i].main != null) {
      streamInfo.SegmentCache[result.segs[i].main.url] = result.segs[i];
    }
    if (result.segs[i].backup != null) {
      streamInfo.SegmentCache[result.segs[i].backup.url] = result.segs[i];
    }
  }
  return result;
}
async function processM3U8(url, textStr, realFetch) {
  const haveAdTags = textStr.includes(AD_SIGNIFIER);
  if (OPT_MODE_STRIP_AD_SEGMENTS) {
    const si = StreamInfosByUrl[url];
    if (si != null) {
      const lines = textStr.replace('\r', '').split('\n');
      for (let i = 0; i < lines.length; i += 1) {
        if (lines[i].startsWith('#EXT-X-MEDIA-SEQUENCE:')) {
          const oldRealSeq = si.RealSeqNumber;
          si.RealSeqNumber = parseInt(/#EXT-X-MEDIA-SEQUENCE:([0-9]*)/.exec(lines[i])[1], 10);
          if (!haveAdTags && si.FakeSeqNumber > 0) {
            const finalSegUrl = getFinalSegUrl(lines);
            if (finalSegUrl !== si.FinalSegUrl) {
              si.FinalSegUrl = finalSegUrl;
              const jump = Math.max(0, si.RealSeqNumber - oldRealSeq);
              if (jump <= 3) {
                si.FakeSeqNumber += Math.max(0, si.RealSeqNumber - oldRealSeq);
              } else if (jump > 0) {
                si.FakeSeqNumber += 1;
              }
            }
            lines[i] = `#EXT-X-MEDIA-SEQUENCE:${si.FakeSeqNumber}`;
            console.debug(`No ad, but modifying sequence realSeq:${si.RealSeqNumber} fakeSeq:${si.FakeSeqNumber}`);
          }
          break;
        }
      }
      textStr = lines.join('\n');
    }
  }
  if (haveAdTags) {
    const si = StreamInfosByUrl[url];
    if (OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST && si != null && !si.NotifyObservedNoAds) {
      let noAds = false;
      const encodingsM3u8Response = await realFetch(si.RootM3U8Url);
      if (encodingsM3u8Response.status === 200) {
        const encodingsM3u8 = await encodingsM3u8Response.text();
        const streamM3u8Url = encodingsM3u8.match(/^https:.*\.m3u8$/m)[0];
        const streamM3u8Response = await realFetch(streamM3u8Url);
        if (streamM3u8Response.status === 200) {
          noAds = (await tryNotifyAdsWatchedM3U8(await streamM3u8Response.text())) === 1;
          console.debug(`Notify ad watched. Response has ads: ${!noAds}`);
        }
      }
      if (si.NotifyFirstTime === 0) {
        si.NotifyFirstTime = Date.now();
      }
      if (noAds && !si.NotifyObservedNoAds && Date.now() >= si.NotifyFirstTime + OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION) {
        si.NotifyObservedNoAds = true;
      }
      if (noAds && OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_AND_RELOAD && Date.now() >= si.NotifyFirstTime + OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION) {
        console.debug('Reload player');
        postMessage({
          key: 'hideAdBanner'
        });
        postMessage({
          key: 'reloadPlayer'
        });
        return '';
      }
    }
    postMessage({
      key: 'foundAdSegment',
      hasLiveSeg: textStr.includes(LIVE_SIGNIFIER),
      streamM3u8: textStr
    });
  }
  if (!OPT_MODE_STRIP_AD_SEGMENTS) {
    return textStr;
  }
  if (haveAdTags) {
    const streamInfo = StreamInfosByUrl[url];
    if (streamInfo === null) {
      console.debug(`Unknown stream url ${url}`);
      postMessage({
        key: 'hideAdBanner'
      });
      return textStr;
    }
    if (!streamInfo.BackupFailed && streamInfo.BackupUrl === null) {
      streamInfo.BackupFailed = true;
      const accessTokenResponse = await getAccessToken(streamInfo.ChannelName, OPT_BACKUP_PLAYER_TYPE);
      if (accessTokenResponse.status === 200) {
        const accessToken = await accessTokenResponse.json();
        const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${streamInfo.ChannelName}.m3u8${streamInfo.RootM3U8Params}`);
        urlInfo.searchParams.set('sig', accessToken.data.streamPlaybackAccessToken.signature);
        urlInfo.searchParams.set('token', accessToken.data.streamPlaybackAccessToken.value);
        const encodingsM3u8Response = await realFetch(urlInfo.href);
        if (encodingsM3u8Response.status === 200) {
          const encodingsM3u8 = await encodingsM3u8Response.text();
          const streamM3u8Url = encodingsM3u8.match(/^https:.*\.m3u8$/m)[0];
          const streamM3u8Response = await realFetch(streamM3u8Url);
          if (streamM3u8Response.status === 200) {
            streamInfo.BackupFailed = false;
            streamInfo.BackupUrl = streamM3u8Url;
            console.debug(`Fetched backup url: ${streamInfo.BackupUrl}`);
          } else {
            console.debug(`Backup url request (streamM3u8) failed with ${streamM3u8Response.status}`);
          }
        } else {
          console.debug(`Backup url request (encodingsM3u8) failed with ${encodingsM3u8Response.status}`);
        }
      } else {
        console.debug(`Backup url request (accessToken) failed with ${accessTokenResponse.status}`);
      }
    }
    let backupM3u8 = null;
    if (streamInfo.BackupUrl != null) {
      const backupM3u8Response = await realFetch(streamInfo.BackupUrl);
      if (backupM3u8Response.status === 200) {
        backupM3u8 = await backupM3u8Response.text();
      } else {
        console.debug(`Backup m3u8 failed with ${backupM3u8Response.status}`);
      }
    }
    const lines = textStr.replace('\r', '').split('\n');
    const newLines = [];
    if (backupM3u8 != null) {
      const backupLines = backupM3u8.replace('\r', '').split('\n');
      const segInfos = getSegmentInfos(streamInfo, lines, backupLines);
      newLines.push('#EXTM3U');
      newLines.push('#EXT-X-VERSION:3');
      newLines.push(`#EXT-X-TARGETDURATION:${segInfos.backup.targetDuration}`);
      newLines.push('');
      let pushedLiveSegs = 0;
      let pushedBackupSegs = 0;
      let pushedPrefetchSegs = 0;
      for (let i = 0; i < segInfos.segs.length; i += 1) {
        const seg = segInfos.segs[i];
        let segData = null;
        if (seg.main != null && !seg.main.isAd) {
          pushedLiveSegs += 1;
          segData = seg.main;
        } else if (seg.backup != null) {
          pushedBackupSegs += 1;
          segData = seg.backup;
        }
        if (segData != null) {
          if (segData.isPrefetch) {
            pushedPrefetchSegs += 1;
            newLines.push(segData.urlLine);
          } else {
            newLines.push(segData.extInfLine);
            newLines.push(segData.urlLine);
          }
        }
      }
      const finalSegUrl = getFinalSegUrl(newLines);
      if (finalSegUrl !== streamInfo.FinalSegUrl) {
        streamInfo.FinalSegUrl = finalSegUrl;
        streamInfo.FakeSeqNumber += 1;
      }
      newLines[3] = `#EXT-X-MEDIA-SEQUENCE:${streamInfo.FakeSeqNumber}`;
      if (pushedLiveSegs > 0 || pushedBackupSegs > 0) {
        console.debug(`liveSegs:${pushedLiveSegs} backupSegs:${pushedBackupSegs} prefetch:${pushedPrefetchSegs} realSeq:${streamInfo.RealSeqNumber} fakeSeq:${streamInfo.FakeSeqNumber}`);
      } else {
        console.debug('TODO: If theres no backup data then we need to provide our own .ts file, otherwise the player will spam m3u8 requests (denial-of-service)');
      }
    }
    textStr = newLines.length > 0 ? newLines.join('\n') : lines.join('\n');
  }
  return textStr;
}
function hookWorkerFetch() {
  const realFetch = fetch;
  fetch = async function fetch(url, options) {
    if (typeof url === 'string') {
      if (OPT_MODE_STRIP_AD_SEGMENTS && url.endsWith('.ts')) {
        let shownAdBanner = false;
        for (const [channelName, streamInfo] of Object.entries(StreamInfos)) {
          const seg = streamInfo.SegmentCache[url];
          if (seg && !seg.isPrefetch) {
            if (seg.main === null && seg.backup != null) {
              shownAdBanner = true;
              postMessage({
                key: 'showAdBanner',
                isMidroll: streamInfo.IsMidroll
              });
            }
            break;
          }
        }
        if (!shownAdBanner) {
          postMessage({
            key: 'hideAdBanner'
          });
        }
      }
      if (url.endsWith('m3u8')) {
        return new Promise((resolve, reject) => {
          const processAfter = async function processAfter(response) {
            const str = await processM3U8(url, await response.text(), realFetch);
            resolve(new Response(str));
          };
          const send = function send() {
            return realFetch(url, options).then(response => {
              processAfter(response);
            }).catch(err => {
              console.debug(`fetch hook err ${err}`);
              reject(err);
            });
          };
          send();
        });
      }
      if (url.includes('/api/channel/hls/') && !url.includes('picture-by-picture')) {
        const channelName = new URL(url).pathname.match(/([^/]+)(?=\.\w+$)/)[0];
        if (CurrentChannelNameFromM3U8 !== channelName) {
          postMessage({
            key: 'channelNameM3U8Changed',
            value: channelName
          });
        }
        CurrentChannelNameFromM3U8 = channelName;
        if (OPT_MODE_PROXY_M3U8) {
          if (OPT_MODE_PROXY_M3U8_FULL_URL || OPT_MODE_PROXY_M3U8_PARTIAL_URL) {
            if (OPT_MODE_PROXY_M3U8_FULL_URL) {
              url = OPT_MODE_PROXY_M3U8 + url;
            } else {
              url = OPT_MODE_PROXY_M3U8 + url.split('.m3u8')[0];
            }
            if (!OPT_MODE_PROXY_M3U8_OBFUSCATED) {
              console.debug(`proxy-m3u8: ${url}`);
            }
            const opt2 = {};
            opt2.headers = [];
            opt2.headers['Access-Control-Allow-Origin'] = '*';
            return realFetch(url, opt2);
          }
          url = OPT_MODE_PROXY_M3U8 + channelName;
          console.debug(`proxy-m3u8: ${url}`);
        } else if (OPT_MODE_STRIP_AD_SEGMENTS) {
          return new Promise(async resolve => {
            const maxAttempts = OPT_INITIAL_M3U8_ATTEMPTS <= 0 ? 1 : OPT_INITIAL_M3U8_ATTEMPTS;
            let attempts = 0;
            while (true) {
              const encodingsM3u8Response = await realFetch(url, options);
              if (encodingsM3u8Response.status === 200) {
                const encodingsM3u8 = await encodingsM3u8Response.text();
                const streamM3u8Url = encodingsM3u8.match(/^https:.*\.m3u8$/m)[0];
                const streamM3u8Response = await realFetch(streamM3u8Url);
                const streamM3u8 = await streamM3u8Response.text();
                if (!streamM3u8.includes(AD_SIGNIFIER) || ++attempts >= maxAttempts) {
                  if (maxAttempts > 1 && attempts >= maxAttempts) {
                    console.debug(`max skip ad attempts reached (attempt #${attempts})`);
                  }
                  let streamInfo = StreamInfos[channelName];
                  if (!streamInfo) {
                    StreamInfos[channelName] = streamInfo = {};
                  }
                  streamInfo.ChannelName = channelName;
                  streamInfo.Urls = [];
                  streamInfo.RootM3U8Url = url;
                  streamInfo.RootM3U8Params = new URL(url).search;
                  streamInfo.BackupUrl = null;
                  streamInfo.BackupFailed = false;
                  streamInfo.SegmentCache = [];
                  streamInfo.IsMidroll = false;
                  streamInfo.NotifyFirstTime = 0;
                  streamInfo.NotifyObservedNoAds = false;
                  streamInfo.RealSeqNumber = -1;
                  streamInfo.BackupSeqNumber = -1;
                  streamInfo.FakeSeqNumber = 0;
                  streamInfo.FinalSegUrl = null;
                  const lines = encodingsM3u8.replace('\r', '').split('\n');
                  for (let i = 0; i < lines.length; i += 1) {
                    if (!lines[i].startsWith('#') && lines[i].includes('.m3u8')) {
                      streamInfo.Urls.push(lines[i]);
                      StreamInfosByUrl[lines[i]] = streamInfo;
                    }
                  }
                  resolve(new Response(encodingsM3u8));
                  break;
                }
                console.debug(`attempt to skip ad (attempt #${attempts})`);
              } else {
                resolve(encodingsM3u8Response);
                break;
              }
            }
          });
        }
      }
    }
    return realFetch.apply(this, arguments);
  };
}
const tryNotifyAdsWatchedSigTok = async (realFetch, i, sig, token) => {
  const tokInfo = JSON.parse(token);
  const channelName = tokInfo.channel;
  const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${channelName}.m3u8`);
  urlInfo.searchParams.set('sig', sig);
  urlInfo.searchParams.set('token', token);
  const encodingsM3u8Response = await realFetch(urlInfo.href);
  if (encodingsM3u8Response.status === 200) {
    const encodingsM3u8 = await encodingsM3u8Response.text();
    const streamM3u8Url = encodingsM3u8.match(/^https:.*\.m3u8$/m)[0];
    const streamM3u8Response = await realFetch(streamM3u8Url);
    const streamM3u8 = await streamM3u8Response.text();
    const res = await tryNotifyAdsWatchedM3U8(streamM3u8);
    if (i >= 0) {
      if (res === 1) {
        console.debug(`no ad at req ${i}`);
      } else {
        console.debug(`ad at req ${i}`);
      }
    }
    return res;
  }
  return 2;
};
const hookFetch = () => {
  const realFetch = browser.window.fetch;
  browser.window.fetch = function (url, init) {
    if (typeof url === 'string') {
      if (url.includes('/access_token') || url.includes('gql')) {
        if (OPT_ACCESS_TOKEN_PLAYER_TYPE) {
          if (url.includes('gql') && init && typeof init.body === 'string' && init.body.includes('PlaybackAccessToken')) {
            const newBody = JSON.parse(init.body);
            newBody.variables.playerType = OPT_ACCESS_TOKEN_PLAYER_TYPE;
            init.body = JSON.stringify(newBody);
          }
        }
        let deviceId = init.headers['X-Device-Id'];
        if (typeof deviceId !== 'string') {
          deviceId = init.headers['Device-ID'];
        }
        if (typeof deviceId === 'string') {
          gql_device_id = deviceId;
        }
        if (gql_device_id && twitchMainWorker) {
          twitchMainWorker.postMessage({
            key: 'updateDeviceId',
            value: gql_device_id
          });
        }
        if (OPT_MODE_NOTIFY_ADS_WATCHED && OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS > 0) {
          if (url.includes('gql') && init && typeof init.body === 'string' && init.body.includes('PlaybackAccessToken')) {
            return new Promise(async resolve => {
              const response = await realFetch(url, init);
              if (response.status === 200) {
                for (let i = 0; i < OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS; i += 1) {
                  const cloned = response.clone();
                  const responseStr = await cloned.text();
                  const responseData = JSON.parse(responseStr);
                  if (responseData && responseData.data && responseData.data.streamPlaybackAccessToken && responseData.data.streamPlaybackAccessToken.value && responseData.data.streamPlaybackAccessToken.signature) {
                    if ((await tryNotifyAdsWatchedSigTok(realFetch, i, responseData.data.streamPlaybackAccessToken.signature, responseData.data.streamPlaybackAccessToken.value)) === 1) {
                      resolve(new Response(responseStr));
                      return;
                    }
                  } else {
                    console.debug('malformed');
                    console.debug(responseData);
                    break;
                  }
                }
              }
              resolve(response);
            });
          }
        }
      }
    }
    return realFetch.apply(this, arguments);
  };
};
const reloadTwitchPlayer = isPausePlay => {
  const findReactNode = (root, constraint) => {
    if (root.stateNode && constraint(root.stateNode)) {
      return root.stateNode;
    }
    let node = root.child;
    while (node) {
      const result = findReactNode(node, constraint);
      if (result) {
        return result;
      }
      node = node.sibling;
    }
    return null;
  };
  let reactRootNode = null;
  const rootNode = document.querySelector('#root');
  if (rootNode && rootNode._reactRootContainer && rootNode._reactRootContainer._internalRoot && rootNode._reactRootContainer._internalRoot.current) {
    reactRootNode = rootNode._reactRootContainer._internalRoot.current;
  }
  if (!reactRootNode) {
    console.debug('Could not find react root');
    return;
  }
  let player = findReactNode(reactRootNode, node => node.setPlayerActive && node.props && node.props.mediaPlayerInstance);
  player = player && player.props && player.props.mediaPlayerInstance ? player.props.mediaPlayerInstance : null;
  const playerState = findReactNode(reactRootNode, node => node.setSrc && node.setInitialPlaybackSettings);
  if (!player) {
    console.debug('Could not find player');
    return;
  }
  if (!playerState) {
    console.debug('Could not find player state');
    return;
  }
  if (player.paused) {
    return;
  }
  if (isPausePlay) {
    player.pause();
    player.play();
    return;
  }
  const sink = player.mediaSinkManager || (player.core ? player.core.mediaSinkManager : null);
  if (sink && sink.video && sink.video._ffz_compressor) {
    const {
      video
    } = sink;
    const volume = video.volume ? video.volume : player.getVolume();
    const muted = player.isMuted();
    const newVideo = document.createElement('video');
    newVideo.volume = muted ? 0 : volume;
    newVideo.playsInline = true;
    video.replaceWith(newVideo);
    player.attachHTMLVideoElement(newVideo);
    setImmediate(() => {
      player.setVolume(volume);
      player.setMuted(muted);
    });
  }
  playerState.setSrc({
    isNewMediaPlayerInstance: true,
    refreshAccessToken: true
  });
};
const onFoundAd = (hasLiveSeg, streamM3u8) => {
  if (OPT_MODE_NOTIFY_ADS_WATCHED && OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT && Date.now() >= notifyAdsWatchedReloadNextTime) {
    console.debug('OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT');
    notifyAdsWatchedReloadNextTime = Date.now() + OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT_DELAY;
    if (streamM3u8) {
      tryNotifyAdsWatchedM3U8(streamM3u8);
    }
    reloadTwitchPlayer();
    return;
  }
  if (hasLiveSeg || !OPT_MODE_MUTE_BLACK && !OPT_MODE_VIDEO_SWAP || OPT_MODE_VIDEO_SWAP && typeof Hls === 'undefined') {
    return;
  }
  if (!foundAdContainer) {
    const adContainers = document.querySelectorAll('[data-test-selector="sad-overlay"]');
    for (let i = 0; i < adContainers.length; i += 1) {
      adContainers[i].style.display = 'none';
    }
    foundAdContainer = adContainers.length > 0;
  }
  if (disabledVideo) {
    disabledVideo.volume = 0;
  } else {
    let liveVid = document.getElementsByTagName('video');
    if (liveVid.length) {
      [disabledVideo] = liveVid;
      [liveVid] = liveVid;
      if (!disabledVideo) {
        return;
      }
      originalVolume = liveVid.volume;
      liveVid.volume = 0;
      liveVid.style.filter = 'brightness(0%)';
      if (OPT_MODE_VIDEO_SWAP) {
        const createTempStream = async () => {
          const channelName = window.location.pathname.substr(1);
          const accessTokenResponse = await getAccessToken(channelName, OPT_VIDEO_SWAP_PLAYER_TYPE);
          if (accessTokenResponse.status === 200) {
            const accessToken = await accessTokenResponse.json();
            const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${channelName}.m3u8?allow_source=true`);
            urlInfo.searchParams.set('sig', accessToken.data.streamPlaybackAccessToken.signature);
            urlInfo.searchParams.set('token', accessToken.data.streamPlaybackAccessToken.value);
          } else {
            console.debug(`Backup url request (accessToken) failed with ${accessTokenResponse.status}`);
          }
        };
        createTempStream();
      }
    }
  }
};
const pollForAds = () => {
  const adBanner = document.querySelectorAll('span.tw-c-text-overlay');
  let foundAd = false;
  for (let i = 0; i < adBanner.length; i += 1) {
    if (adBanner[i].attributes['data-test-selector']) {
      foundAd = true;
      foundAdBanner = true;
      break;
    }
  }
  if (foundAd) {
    onFoundAd(false);
  } else if (foundAdBanner && disabledVideo) {
    disabledVideo.volume = originalVolume;
    disabledVideo.style.filter = '';
    disabledVideo = null;
    foundAdContainer = false;
    foundAdBanner = false;
  }
};
const pollForAdsObserver = () => {
  pollForAds();
  const vids = document.getElementsByClassName('video-player');
  for (let i = 0; i < vids.length; i += 1) {
    const observer = new MutationObserver(pollForAds);
    observer.observe(vids[i], {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });
  }
};
const onContentLoaded = () => {
  if (!OPT_MODE_VIDEO_SWAP && !OPT_MODE_MUTE_BLACK) {
    return;
  }
  pollForAdsObserver();
};
const isWorkerIntact = () => {
  const iframe = browser.window.document.createElement('iframe');
  browser.window.document.body.append(iframe);
  const cleanWindow = iframe.contentWindow;
  if (cleanWindow.Worker.toString() === browser.window.Worker.toString()) {
    iframe.remove();
    return true;
  }
  iframe.remove();
  return false;
};
if (isMatchingHostnames('twitch.tv')) {
  browser.window.addEventListener('DOMContentLoaded', () => {
    if (!isWorkerIntact()) {
      return;
    }
    declareOptions(browser.window);
    const oldWorker = browser.window.Worker;
    browser.window.Worker = class Worker extends oldWorker {
      constructor(twitchBlobUrl) {
        if (twitchMainWorker) {
          super(twitchBlobUrl);
          return;
        }
        let jsURL;
        if (twitchBlobUrl.startsWith('blob:')) {
          jsURL = getWasmWorkerUrl(twitchBlobUrl);
        } else {
          jsURL = twitchBlobUrl;
        }
        if (typeof jsURL !== 'string') {
          super(twitchBlobUrl);
          return;
        }
        const newBlobStr = `
                    ${processM3U8.toString()}
                    ${hookWorkerFetch.toString()}
                    ${gqlRequest.toString()}
                    ${tryNotifyAdsWatchedM3U8.toString()}
                    ${getSegmentInfos.toString()}
                    ${getSegmentInfosLines.toString()}
                    ${getFinalSegUrl.toString()}
                    ${declareOptions.toString()}
                    ${getAccessToken.toString()}
                    ${makeGraphQlPacket.toString()}
                    ${parseAttributes.toString()}
                    declareOptions(self);
                    self.addEventListener('message', function(e) {
                        if (e.data.key == 'updateDeviceId') {
                            gql_device_id = e.data.value;
                        }
                    });
                    hookWorkerFetch();
                    importScripts('${jsURL}');
                `;
        super(URL.createObjectURL(new Blob([newBlobStr])));
        twitchMainWorker = this;
        const getAdDiv = () => {
          const playerRootDiv = document.querySelector('.video-player');
          let adDiv = null;
          if (playerRootDiv != null) {
            adDiv = playerRootDiv.querySelector('.ubo-overlay');
            if (adDiv === null) {
              adDiv = document.createElement('div');
              adDiv.className = 'ubo-overlay';
              adDiv.innerHTML = '<div class="player-ad-notice" style="color: white; background-color: rgba(0, 0, 0, 0.8); position: absolute; top: 0px; left: 0px; padding: 10px;"><p></p></div>';
              adDiv.style.display = 'none';
              adDiv.P = adDiv.querySelector('p');
              playerRootDiv.appendChild(adDiv);
            }
          }
          return adDiv;
        };
        let adDiv = null;
        this.onmessage = e => {
          switch (e.data.key) {
            case 'showAdBanner':
              if (adDiv === null) {
                adDiv = getAdDiv();
              }
              adDiv.P.textContent = `Waiting for${e.data.isMidroll ? ' midroll' : ''} ads to finish...`;
              adDiv.style.display = 'block';
              break;
            case 'hideAdBanner':
              if (adDiv === null) {
                adDiv = getAdDiv();
              }
              adDiv.style.display = 'none';
              break;
            case 'foundAdSegment':
              onFoundAd(e.data.hasLiveSeg, e.data.streamM3u8);
              break;
            case 'channelNameM3U8Changed':
              notifyAdsWatchedReloadNextTime = 0;
              break;
            case 'reloadPlayer':
              reloadTwitchPlayer();
              break;
            case 'PauseResumePlayer':
              reloadTwitchPlayer(true);
              break;
          }
        };
      }
    };
    browser.window.reloadTwitchPlayer = reloadTwitchPlayer;
    hookFetch();
    onContentLoaded();
  });
}if (isMatchingHostnames('ppss.kr')) {
  const path = document.location.pathname;
  observeDomChanges(() => {
    const leftWing = browser.querySelector('div#ppss_wing_banner_left');
    hideViaOverlay(leftWing);
    if (path === '/') {
      const container = browser.querySelector('main#genesis-content');
      const content = container === null || container === void 0 ? void 0 : container.querySelectorAll('.home-top.widget-area');
      exposeContent(container, content);
    } else if (path.includes('archives')) {
      const container = browser.querySelector('main#genesis-content');
      const content = container === null || container === void 0 ? void 0 : container.querySelectorAll('article.type-post, section.author-box, section.comments');
      exposeContent(container, content);
    }
    const menus = browser.querySelectorAll('ul.sub-menu');
    [...menus].forEach(menu => {
      menu.style.zIndex = '999';
    });
  });
}
if (isMatchingHostnames('ygosu.com')) {
  const path = document.location.pathname;
  observeDomChanges(() => {
    const leftNav = browser.querySelector('div#left_nav');
    const rightBan = browser.querySelector('#right_nav');
    hideViaOverlay(leftNav);
    hideViaOverlay(rightBan);
    const menu = browser.querySelector('body > .gnb');
    if (menu) {
      menu.style.zIndex = '1000';
    }
    let container;
    let content;
    if (path === '/') {
      container = browser.querySelector('.main_wrap');
      content = browser.querySelectorAll('.main_preview, .notice-main, .main_cat');
    } else if (path.includes('community')) {
      container = browser.querySelector('.board_body');
      content = browser.querySelectorAll('.board_top, .board_body > .container, .option');
    }
    if (container && content) {
      container.style.position = 'relative';
      exposeContent(container, content);
    }
    if (navigator.userAgent.match('Mobile')) {
      document.body.style.marginTop = '-55px';
      let banners;
      if (path === '/') {
        banners = browser.querySelectorAll('[style*="overflow"][style*="margin"], [style*="text-align"][style*="padding"]');
      } else if (path.includes('board')) {
        banners = browser.querySelectorAll('.container > .row > script:first-of-type + div, .container > .row + div[style] + div');
      }
      [...banners].forEach(banner => {
        banner.style.position = 'relative';
        hideViaOverlay(banner);
      });
    }
  });
}if (isMatchingHostnames('pussyspace.net', 'pussyspace.com')) {
  const hideVideoPlayerAds = () => {
    var _container$firstChild;
    const container = browser.document.querySelector('.contentspacebox > div[id]');
    const adWrapper = container === null || container === void 0 ? void 0 : (_container$firstChild = container.firstChild) === null || _container$firstChild === void 0 ? void 0 : _container$firstChild.nextSibling;
    const adStyle = adWrapper === null || adWrapper === void 0 ? void 0 : adWrapper.querySelector('style');
    if (adWrapper && adStyle && adStyle.innerHTML.includes('margin:0px auto;text-align:center;')) {
      removeNode(adWrapper);
    }
  };
  observeDomChanges(() => {
    hideVideoPlayerAds();
  });
}if (isMatchingHostnames('techpowerup.com')) {
  const removeAds = () => {
    const ads = browser.querySelectorAll('a[href][data-width][class]');
    [...ads].forEach(ad => {
      let step = 1;
      let targetWrapper;
      while (!targetWrapper) {
        const nextParent = getParent(ad, step);
        if (!nextParent || nextParent.tagName === 'BODY') {
          break;
        }
        if (nextParent && nextParent.tagName !== 'DIV' && nextParent.parentElement.tagName !== 'DIV' && nextParent.attributes.length === 2 && nextParent.classList.length === 1) {
          targetWrapper = nextParent;
        } else {
          step += 1;
        }
      }
      removeNode(targetWrapper);
    });
  };
  observeDomChanges(() => {
    removeAds();
  });
}const removeWarningOverlay = () => {
  const overlays = browser.querySelectorAll('body > div[style], body > div[id^="di"]');
  [...overlays].forEach(overlay => {
    if (getComputedStyle(overlay).backgroundColor.indexOf('0.95') !== -1) {
      removeNode(overlay);
    }
  });
};
if (isMatchingHostnames('rjno1.com')) {
  observeDomChanges(() => {
    removeWarningOverlay();
  });
}if (isMatchingHostnames('liveinternet.ru')) {
  const mainSearchAds = () => {
    const adBanner = browser.querySelector('.allpageinner > div:not([class]) div[align="center"]');
    if (!adBanner) {
      return;
    }
    const adContainer = getParent(adBanner, 2);
    const {
      marginBottom,
      marginTop
    } = getComputedStyle(adContainer);
    if (marginBottom === '-20px' && marginTop === '-5px') {
      hideViaPositionProperty(adContainer);
    }
    const longHorizontal = browser.querySelector('.allpageinner > div > div[id] > div');
    if (longHorizontal && longHorizontal.childElements.length === 0) {
      hideViaPositionProperty(longHorizontal);
    }
  };
  const squareAds = () => {
    const ads = browser.querySelectorAll('[style="display: inline-block; width: 50%; vertical-align: top;"]');
    [...ads].forEach(ad => {
      const adContainer = getParent(ad, 1);
      if (adContainer.style['font-size'] === '0px') {
        hideViaPositionProperty(adContainer);
      }
    });
  };
  const leftoverAds = () => {
    const pageHeaderAd = browser.querySelector('#bantop_span');
    if (pageHeaderAd) {
      const headerWrapper = getParent(pageHeaderAd, 1);
      if (headerWrapper.id === 'BlWrapper') {
        hideViaPositionProperty(headerWrapper);
      }
    }
    const sidebarAds = browser.querySelectorAll('div.Bo + div[id]:not([class])');
    [...sidebarAds].forEach(ad => {
      if (ad.id && !/[^A-Za-z0-9]+/.test(ad.id)) {
        hideViaPositionProperty(ad);
      }
    });
    const bottomPopup = browser.querySelector('.myblockbottom__close');
    const parent = bottomPopup === null || bottomPopup === void 0 ? void 0 : bottomPopup.parentElement;
    if (bottomPopup && (parent.nodeName === 'BODY' || (parent === null || parent === void 0 ? void 0 : parent.parentElement.id) === 'BlWrapper')) {
      removeNode(bottomPopup);
    }
  };
  const userProfileAds = () => {
    const userProfileAd = browser.querySelector('div.Inner > div > script + div > div[id] > div');
    if (userProfileAd && userProfileAd.childElements.length === 0) {
      hideViaPositionProperty(userProfileAd);
    }
  };
  observeDomChanges(() => {
    mainSearchAds();
    userProfileAds();
    squareAds();
    leftoverAds();
  });
}