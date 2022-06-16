(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([[757],{

/***/ 7302:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _src_pages_blocking_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6017);

_src_pages_blocking_pages__WEBPACK_IMPORTED_MODULE_0__/* .adBlocked.init */ .U.init();

/***/ }),

/***/ 4568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CI": () => (/* binding */ ANTIBANNER_GROUPS_ID),
/* harmony export */   "Jn": () => (/* binding */ STEALTH_ACTIONS),
/* harmony export */   "Oi": () => (/* binding */ FULLSCREEN_USER_RULES_EDITOR),
/* harmony export */   "Qp": () => (/* binding */ NOTIFIER_TYPES),
/* harmony export */   "TJ": () => (/* binding */ NAVIGATION_TAGS),
/* harmony export */   "XR": () => (/* binding */ TRUSTED_TAG),
/* harmony export */   "XS": () => (/* binding */ WASTE_CHARACTERS),
/* harmony export */   "du": () => (/* binding */ FILTERING_LOG),
/* harmony export */   "gu": () => (/* binding */ ANTIBANNER_FILTERS_ID),
/* harmony export */   "nn": () => (/* binding */ SCROLLBAR_WIDTH),
/* harmony export */   "oK": () => (/* binding */ MESSAGE_TYPES)
/* harmony export */ });
/* unused harmony exports CUSTOM_FILTERS_GROUP_DISPLAY_NUMBER, CUSTOM_FILTERS_START_ID */
/**
 * Filter ids used in the code on the background page and filtering log page
 */
const ANTIBANNER_FILTERS_ID = {
  STEALTH_MODE_FILTER_ID: -1,
  USER_FILTER_ID: 0,
  RUSSIAN_FILTER_ID: 1,
  ENGLISH_FILTER_ID: 2,
  TRACKING_FILTER_ID: 3,
  SOCIAL_FILTER_ID: 4,
  SEARCH_AND_SELF_PROMO_FILTER_ID: 10,
  URL_TRACKING_FILTER_ID: 17,
  ALLOWLIST_FILTER_ID: 100,
  EASY_PRIVACY: 118,
  FANBOY_ANNOYANCES: 122,
  FANBOY_SOCIAL: 123,
  FANBOY_ENHANCED: 215,
  MOBILE_ADS_FILTER_ID: 11
};
/**
 * Group ids used in the code on the multiple entry points
 */

const ANTIBANNER_GROUPS_ID = {
  // custom filters group identifier
  CUSTOM_FILTERS_GROUP_ID: 0,
  PRIVACY_FILTERS_GROUP_ID: 2,
  // other filters group identifier
  OTHER_FILTERS_GROUP_ID: 6,
  // language-specific group identifier
  LANGUAGE_FILTERS_GROUP_ID: 7
};
/**
 * Stealth action bitwise masks used o the background page and on the filtering log page
 */

const STEALTH_ACTIONS = {
  HIDE_REFERRER: 1 << 0,
  HIDE_SEARCH_QUERIES: 1 << 1,
  BLOCK_CHROME_CLIENT_DATA: 1 << 2,
  SEND_DO_NOT_TRACK: 1 << 3,
  STRIPPED_TRACKING_URL: 1 << 4,
  FIRST_PARTY_COOKIES: 1 << 5,
  THIRD_PARTY_COOKIES: 1 << 6
};
/**
 * Message types used for message passing between background page and
 * other pages (popup, filtering log, content scripts)
 */

const MESSAGE_TYPES = {
  CREATE_EVENT_LISTENER: 'createEventListener',
  REMOVE_LISTENER: 'removeListener',
  OPEN_EXTENSION_STORE: 'openExtensionStore',
  ADD_AND_ENABLE_FILTER: 'addAndEnableFilter',
  APPLY_SETTINGS_JSON: 'applySettingsJson',
  OPEN_FILTERING_LOG: 'openFilteringLog',
  SET_FILTERING_LOG_WINDOW_STATE: 'setFilteringLogWindowState',
  OPEN_FULLSCREEN_USER_RULES: 'openFullscreenUserRules',
  RESET_BLOCKED_ADS_COUNT: 'resetBlockedAdsCount',
  RESET_SETTINGS: 'resetSettings',
  GET_USER_RULES: 'getUserRules',
  SAVE_USER_RULES: 'saveUserRules',
  GET_ALLOWLIST_DOMAINS: 'getAllowlistDomains',
  SAVE_ALLOWLIST_DOMAINS: 'saveAllowlistDomains',
  CHECK_ANTIBANNER_FILTERS_UPDATE: 'checkAntiBannerFiltersUpdate',
  DISABLE_FILTERS_GROUP: 'disableFiltersGroup',
  DISABLE_ANTIBANNER_FILTER: 'disableAntiBannerFilter',
  LOAD_CUSTOM_FILTER_INFO: 'loadCustomFilterInfo',
  SUBSCRIBE_TO_CUSTOM_FILTER: 'subscribeToCustomFilter',
  REMOVE_ANTIBANNER_FILTER: 'removeAntiBannerFilter',
  GET_TAB_INFO_FOR_POPUP: 'getTabInfoForPopup',
  CHANGE_APPLICATION_FILTERING_DISABLED: 'changeApplicationFilteringDisabled',
  OPEN_SETTINGS_TAB: 'openSettingsTab',
  OPEN_ASSISTANT: 'openAssistant',
  OPEN_ABUSE_TAB: 'openAbuseTab',
  OPEN_SITE_REPORT_TAB: 'openSiteReportTab',
  RESET_CUSTOM_RULES_FOR_PAGE: 'resetCustomRulesForPage',
  REMOVE_ALLOWLIST_DOMAIN: 'removeAllowlistDomainPopup',
  ADD_ALLOWLIST_DOMAIN_POPUP: 'addAllowlistDomainPopup',
  GET_STATISTICS_DATA: 'getStatisticsData',
  ON_OPEN_FILTERING_LOG_PAGE: 'onOpenFilteringLogPage',
  GET_FILTERING_LOG_DATA: 'getFilteringLogData',
  INITIALIZE_FRAME_SCRIPT: 'initializeFrameScript',
  ON_CLOSE_FILTERING_LOG_PAGE: 'onCloseFilteringLogPage',
  GET_FILTERING_INFO_BY_TAB_ID: 'getFilteringInfoByTabId',
  SYNCHRONIZE_OPEN_TABS: 'synchronizeOpenTabs',
  CLEAR_EVENTS_BY_TAB_ID: 'clearEventsByTabId',
  REFRESH_PAGE: 'refreshPage',
  OPEN_TAB: 'openTab',
  CONTENT_SCRIPT_ADD_USER_RULE: 'contentScriptAddUserRule',
  FILTERING_LOG_ADD_USER_RULE: 'filteringLogAddUserRule',
  DEVTOOLS_ADD_USER_RULE: 'devtoolsAddUserRule',
  UN_ALLOWLIST_FRAME: 'unAllowlistFrame',
  REMOVE_USER_RULE: 'removeUserRule',
  GET_TAB_FRAME_INFO_BY_ID: 'getTabFrameInfoById',
  ENABLE_FILTERS_GROUP: 'enableFiltersGroup',
  NOTIFY_LISTENERS: 'notifyListeners',
  ADD_LONG_LIVED_CONNECTION: 'addLongLivedConnection',
  GET_OPTIONS_DATA: 'getOptionsData',
  CHANGE_USER_SETTING: 'changeUserSetting',
  CHECK_REQUEST_FILTER_READY: 'checkRequestFilterReady',
  OPEN_THANKYOU_PAGE: 'openThankYouPage',
  OPEN_SAFEBROWSING_TRUSTED: 'openSafebrowsingTrusted',
  GET_SELECTORS_AND_SCRIPTS: 'getSelectorsAndScripts',
  CHECK_PAGE_SCRIPT_WRAPPER_REQUEST: 'checkPageScriptWrapperRequest',
  PROCESS_SHOULD_COLLAPSE: 'processShouldCollapse',
  PROCESS_SHOULD_COLLAPSE_MANY: 'processShouldCollapseMany',
  ADD_FILTERING_SUBSCRIPTION: 'addFilterSubscription',
  SET_NOTIFICATION_VIEWED: 'setNotificationViewed',
  SAVE_CSS_HITS_STATS: 'saveCssHitStats',
  GET_COOKIE_RULES: 'getCookieRules',
  SAVE_COOKIE_LOG_EVENT: 'saveCookieRuleEvent',
  LOAD_SETTINGS_JSON: 'loadSettingsJson',
  ADD_URL_TO_TRUSTED: 'addUrlToTrusted',
  SET_PRESERVE_LOG_STATE: 'setPreserveLogState',
  GET_USER_RULES_EDITOR_DATA: 'getUserRulesEditorData',
  GET_EDITOR_STORAGE_CONTENT: 'getEditorStorageContent',
  SET_EDITOR_STORAGE_CONTENT: 'setEditorStorageContent',
  CONVERT_RULES_TEXT: 'convertRulesText'
};
const NOTIFIER_TYPES = {
  ADD_RULES: 'event.add.rules',
  REMOVE_RULE: 'event.remove.rule',
  UPDATE_FILTER_RULES: 'event.update.filter.rules',
  FILTER_GROUP_ENABLE_DISABLE: 'filter.group.enable.disable',
  // enabled or disabled filter group
  FILTER_ENABLE_DISABLE: 'event.filter.enable.disable',
  // Enabled or disabled
  FILTER_ADD_REMOVE: 'event.filter.add.remove',
  // Added or removed
  ADS_BLOCKED: 'event.ads.blocked',
  START_DOWNLOAD_FILTER: 'event.start.download.filter',
  SUCCESS_DOWNLOAD_FILTER: 'event.success.download.filter',
  ERROR_DOWNLOAD_FILTER: 'event.error.download.filter',
  ENABLE_FILTER_SHOW_POPUP: 'event.enable.filter.show.popup',
  LOG_EVENT: 'event.log.track',
  UPDATE_TAB_BUTTON_STATE: 'event.update.tab.button.state',
  REQUEST_FILTER_UPDATED: 'event.request.filter.updated',
  APPLICATION_INITIALIZED: 'event.application.initialized',
  APPLICATION_UPDATED: 'event.application.updated',
  CHANGE_PREFS: 'event.change.prefs',
  UPDATE_FILTERS_SHOW_POPUP: 'event.update.filters.show.popup',
  USER_FILTER_UPDATED: 'event.user.filter.updated',
  UPDATE_ALLOWLIST_FILTER_RULES: 'event.update.allowlist.filter.rules',
  SETTING_UPDATED: 'event.update.setting.value',
  FILTERS_UPDATE_CHECK_READY: 'event.update.filters.check',
  // Log events
  TAB_ADDED: 'log.tab.added',
  TAB_CLOSE: 'log.tab.close',
  TAB_UPDATE: 'log.tab.update',
  TAB_RESET: 'log.tab.reset',
  LOG_EVENT_ADDED: 'log.event.added',
  // Sync events
  SETTINGS_UPDATED: 'event.sync.finished',
  // Fullscreen user rules events
  FULLSCREEN_USER_RULES_EDITOR_UPDATED: 'event.user.rules.editor.updated'
};
const FULLSCREEN_USER_RULES_EDITOR = 'fullscreen_user_rules_editor';
const FILTERING_LOG = 'filtering-log';
const NAVIGATION_TAGS = {
  REGULAR: 'regular',
  PARTY: 'party'
};
/**
 * Trusted tag for custom filters
 */

const TRUSTED_TAG = 'trusted';
/**
 * Custom filters group display number
 *
 * @type {number}
 */

const CUSTOM_FILTERS_GROUP_DISPLAY_NUMBER = 99;
/**
 * Custom filters identifiers starts from this number
 *
 * @type {number}
 */

const CUSTOM_FILTERS_START_ID = 1000; // Unnecessary characters that will be replaced

const WASTE_CHARACTERS = /[.*+?^${}()|[\]\\]/g; // Custom scrollbar width

const SCROLLBAR_WIDTH = 12;

/***/ }),

/***/ 9224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ log)
/* harmony export */ });
/**
 * This file is part of Adguard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * Adguard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adguard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adguard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable no-console */

/**
 * Simple logger with log levels
 */
const log = (() => {
  // Redefine if you need it
  const CURRENT_LEVEL = 'INFO';
  const LEVELS = {
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    DEBUG: 4
  };
  /**
   * Pretty-print javascript error
   */

  const errorToString = function (error) {
    return `${error.toString()}\nStack trace:\n${error.stack}`;
  };

  const getLocalTimeString = date => {
    const ONE_MINUTE_MS = 60 * 1000;
    const timeZoneOffsetMs = date.getTimezoneOffset() * ONE_MINUTE_MS;
    const localTime = new Date(date - timeZoneOffsetMs);
    return localTime.toISOString().replace('Z', '');
  };
  /**
   * Prints log message
   */


  const print = function (level, method, args) {
    // check log level
    if (LEVELS[CURRENT_LEVEL] < LEVELS[level]) {
      return;
    }

    if (!args || args.length === 0 || !args[0]) {
      return;
    }

    const str = `${args[0]}`;
    args = Array.prototype.slice.call(args, 1);
    let formatted = str.replace(/{(\d+)}/g, (match, number) => {
      if (typeof args[number] !== 'undefined') {
        let value = args[number];

        if (value instanceof Error) {
          value = errorToString(value);
        } else if (value && value.message) {
          value = value.message;
        } else if (typeof value === 'object') {
          value = JSON.stringify(value);
        }

        return value;
      }

      return match;
    });
    formatted = `${getLocalTimeString(new Date())}: ${formatted}`;
    console[method](formatted);
  };
  /**
   * Expose public API
   */


  return {
    debug(...args) {
      print('DEBUG', 'log', args);
    },

    info(...args) {
      print('INFO', 'info', args);
    },

    warn(...args) {
      print('WARN', 'info', args);
    },

    error(...args) {
      print('ERROR', 'error', args);
    }

  };
})();

/***/ }),

/***/ 7122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);

const i18n = {
  getMessage: (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().i18n.getMessage),
  getUILanguage: (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().i18n.getUILanguage),
  getBaseMessage: key => key,
  getBaseUILanguage: () => 'en'
};

/***/ }),

/***/ 8647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ reactTranslator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(846);
/* harmony import */ var _adguard_translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8396);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7122);



/**
 * Retrieves localised messages by key, formats and converts into react components or string
 */

const reactTranslator = _adguard_translate__WEBPACK_IMPORTED_MODULE_1__/* .translate.createReactTranslator */ .Iu.createReactTranslator(_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .a, react__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ 6017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ adBlocked),
  "d": () => (/* binding */ safeBrowsing)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(846);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6644);
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.js
var reactTranslator = __webpack_require__(8647);
// EXTERNAL MODULE: ./Extension/src/common/constants.js
var constants = __webpack_require__(4568);
;// CONCATENATED MODULE: ./Extension/src/pages/blocking-pages/getParams.js
const getParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlSearchParams.entries());
};
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(7916);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5491);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(9532);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(8190);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(7630);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(664);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(2563);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/blocking-pages/styles/index.pcss
var styles = __webpack_require__(3621);
;// CONCATENATED MODULE: ./Extension/src/pages/blocking-pages/styles/index.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const blocking_pages_styles = (styles/* default */.Z && styles/* default.locals */.Z.locals ? styles/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/blocking-pages/components/AdBlocked/AdBlocked.jsx
/* eslint-disable jsx-a11y/control-has-associated-label */

/* eslint-disable jsx-a11y/anchor-has-content */






const AdBlocked = () => {
  const {
    rule,
    url
  } = getParams();
  const handleGoBack = (0,react.useCallback)(e => {
    e.preventDefault();
    window.history.back();
  }, []);
  const handleProceed = (0,react.useCallback)(e => {
    e.preventDefault();
    messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.ADD_URL_TO_TRUSTED */.oK.ADD_URL_TO_TRUSTED, {
      url
    });
  }, [url]);
  return /*#__PURE__*/react.createElement("div", {
    className: "alert alert--gold",
    id: "app"
  }, /*#__PURE__*/react.createElement("div", {
    className: "alert__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "alert__header alert__header--gold"
  }, /*#__PURE__*/react.createElement("div", {
    className: "alert__header-title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_rule_header_title'))), /*#__PURE__*/react.createElement("div", {
    className: "alert__body"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://adguard.com",
    className: "alert__logo"
  }), /*#__PURE__*/react.createElement("div", {
    className: "hero hero--green"
  }), /*#__PURE__*/react.createElement("div", {
    className: "alert__body-title"
  }, /*#__PURE__*/react.createElement("span", null, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_rule_content_title'))), /*#__PURE__*/react.createElement("div", {
    className: "alert__rule"
  }, rule), /*#__PURE__*/react.createElement("div", {
    className: "alert__btns"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: handleGoBack,
    className: "button button--green alert__btn"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_btn_go_back')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: handleProceed,
    className: "button button--white alert__btn"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_btn_proceed'))))));
};
;// CONCATENATED MODULE: ./Extension/src/pages/blocking-pages/components/AdBlocked/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/blocking-pages/components/SafeBrowsing/SafeBrowsing.jsx
/* eslint-disable jsx-a11y/control-has-associated-label */

/* eslint-disable jsx-a11y/anchor-has-content */






const SafeBrowsing = () => {
  const [advanced, setAdvanced] = (0,react.useState)(false);
  const {
    host,
    url,
    malware
  } = getParams();
  const handleGoBack = (0,react.useCallback)(e => {
    e.preventDefault();
    window.history.back();
  }, []);
  const handleEnableAdvanced = (0,react.useCallback)(e => {
    e.preventDefault();
    setAdvanced(true);
  }, []);
  const handleProceed = (0,react.useCallback)(e => {
    e.preventDefault();
    messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.OPEN_SAFEBROWSING_TRUSTED */.oK.OPEN_SAFEBROWSING_TRUSTED, {
      url
    });
  }, [url]);
  return /*#__PURE__*/react.createElement("div", {
    className: "alert alert--red",
    id: "app"
  }, /*#__PURE__*/react.createElement("div", {
    className: "alert__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "alert__header alert__header--red"
  }, /*#__PURE__*/react.createElement("div", {
    className: "alert__header-title"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_safe_header_title'))), /*#__PURE__*/react.createElement("div", {
    className: "alert__body"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://adguard.com",
    className: "alert__logo"
  }), /*#__PURE__*/react.createElement("div", {
    className: "hero hero--red"
  }), /*#__PURE__*/react.createElement("div", {
    className: "alert__body-title"
  }, malware === 'true' ?
  /*#__PURE__*/
  // query param is string
  react.createElement("p", {
    className: "malware"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_malware', {
    host
  })) : /*#__PURE__*/react.createElement("p", {
    className: "phishing"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_phishing', {
    host
  }))), /*#__PURE__*/react.createElement("div", {
    className: "alert__btns"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: handleGoBack,
    className: "button button--green alert__btn"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_btn_go_back')), advanced ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("a", {
    href: `https://reports.adguard.com/${host}/report.html`,
    className: "button button--white alert__btn"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_more_info_button')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: handleProceed,
    className: "button button--white alert__btn"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_btn_proceed'))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: handleEnableAdvanced,
    className: "button button--white alert__btn"
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_advanced_button')))))));
};
;// CONCATENATED MODULE: ./Extension/src/pages/blocking-pages/components/SafeBrowsing/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/blocking-pages/index.js





const adBlocked = {
  init: () => {
    document.title = reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_page_title');
    react_dom.render( /*#__PURE__*/react.createElement(AdBlocked, null), document.getElementById('root'));
  }
};
const safeBrowsing = {
  init: () => {
    document.title = reactTranslator/* reactTranslator.getMessage */._.getMessage('blocking_pages_page_title');
    react_dom.render( /*#__PURE__*/react.createElement(SafeBrowsing, null), document.getElementById('root'));
  }
};

/***/ }),

/***/ 7916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ messenger)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3679);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2380);
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9224);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4568);





class Messenger {
  constructor() {
    this.onMessage = (webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage);

    this.createLongLivedConnection = (page, events, callback) => {
      const eventListener = (...args) => {
        callback(...args);
      };

      const port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.connect({
        name: `${page}_${(0,nanoid__WEBPACK_IMPORTED_MODULE_3__/* .nanoid */ .x0)()}`
      });
      port.postMessage({
        type: _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ADD_LONG_LIVED_CONNECTION */ .oK.ADD_LONG_LIVED_CONNECTION,
        data: {
          events
        }
      });
      port.onMessage.addListener(message => {
        if (message.type === _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.NOTIFY_LISTENERS */ .oK.NOTIFY_LISTENERS) {
          const [type, ...data] = message.data;
          eventListener({
            type,
            data
          });
        }
      });
      port.onDisconnect.addListener(() => {
        if ((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.lastError)) {
          _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.error */ .c.error((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.lastError.message));
        }
      });

      const onUnload = () => {
        port.disconnect();
      };

      window.addEventListener('beforeunload', onUnload);
      window.addEventListener('unload', onUnload);
      return onUnload;
    };

    this.createEventListener = async (events, callback, onUnloadCallback) => {
      const eventListener = (...args) => {
        callback(...args);
      };

      let {
        listenerId
      } = await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CREATE_EVENT_LISTENER */ .oK.CREATE_EVENT_LISTENER, {
        events
      });
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage.addListener(message => {
        if (message.type === _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.NOTIFY_LISTENERS */ .oK.NOTIFY_LISTENERS) {
          const [type, ...data] = message.data;
          eventListener({
            type,
            data
          });
        }
      });

      const onUnload = async () => {
        if (listenerId) {
          const type = _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REMOVE_LISTENER */ .oK.REMOVE_LISTENER;
          this.sendMessage(type, {
            listenerId
          });
          listenerId = null;

          if (typeof onUnloadCallback === 'function') {
            onUnloadCallback();
          }
        }
      };

      window.addEventListener('beforeunload', onUnload);
      window.addEventListener('unload', onUnload);
      return onUnload;
    };

    this.openExtensionStore = async () => {
      return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_EXTENSION_STORE */ .oK.OPEN_EXTENSION_STORE);
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async sendMessage(type, data) {
    _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */ .c.debug('Request type:', type);

    if (data) {
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */ .c.debug('Request data:', data);
    }

    const response = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
      type,
      data
    });

    if (response) {
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */ .c.debug('Response type:', type);
      _common_log__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */ .c.debug('Response data:', response);
    }

    return response;
  }
  /**
   * Creates long lived connections between popup and background page
   * @param {string} page
   * @param events
   * @param callback
   * @returns {function}
   */


  async getOptionsData() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_OPTIONS_DATA */ .oK.GET_OPTIONS_DATA);
  } // eslint-disable-next-line class-methods-use-this


  async changeUserSetting(settingId, value) {
    // FIXME refactor message handler to use common message format { type, data }
    await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
      type: _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CHANGE_USER_SETTING */ .oK.CHANGE_USER_SETTING,
      key: settingId,
      value
    });
  }

  async enableFilter(filterId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ADD_AND_ENABLE_FILTER */ .oK.ADD_AND_ENABLE_FILTER, {
      filterId
    });
  }

  async disableFilter(filterId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.DISABLE_ANTIBANNER_FILTER */ .oK.DISABLE_ANTIBANNER_FILTER, {
      filterId
    });
  }

  async applySettingsJson(json) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.APPLY_SETTINGS_JSON */ .oK.APPLY_SETTINGS_JSON, {
      json
    });
  }

  async openFilteringLog() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_FILTERING_LOG */ .oK.OPEN_FILTERING_LOG);
  }

  async resetStatistics() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.RESET_BLOCKED_ADS_COUNT */ .oK.RESET_BLOCKED_ADS_COUNT);
  }

  async setFilteringLogWindowState(windowState) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SET_FILTERING_LOG_WINDOW_STATE */ .oK.SET_FILTERING_LOG_WINDOW_STATE, {
      windowState
    });
  }

  async resetSettings() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.RESET_SETTINGS */ .oK.RESET_SETTINGS);
  }

  async getUserRules() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_USER_RULES */ .oK.GET_USER_RULES);
  }

  async saveUserRules(value) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SAVE_USER_RULES */ .oK.SAVE_USER_RULES, {
      value
    });
  }

  async getAllowlist() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_ALLOWLIST_DOMAINS */ .oK.GET_ALLOWLIST_DOMAINS);
  }

  async saveAllowlist(value) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SAVE_ALLOWLIST_DOMAINS */ .oK.SAVE_ALLOWLIST_DOMAINS, {
      value
    });
  }

  async updateFilters() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CHECK_ANTIBANNER_FILTERS_UPDATE */ .oK.CHECK_ANTIBANNER_FILTERS_UPDATE);
  }

  async updateGroupStatus(id, data) {
    const type = data ? _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ENABLE_FILTERS_GROUP */ .oK.ENABLE_FILTERS_GROUP : _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.DISABLE_FILTERS_GROUP */ .oK.DISABLE_FILTERS_GROUP;
    const groupId = id - 0;
    await this.sendMessage(type, {
      groupId
    });
  }

  async updateFilterStatus(filterId, data) {
    const type = data ? _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ADD_AND_ENABLE_FILTER */ .oK.ADD_AND_ENABLE_FILTER : _common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.DISABLE_ANTIBANNER_FILTER */ .oK.DISABLE_ANTIBANNER_FILTER;
    await this.sendMessage(type, {
      filterId
    });
  }

  async checkCustomUrl(url) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.LOAD_CUSTOM_FILTER_INFO */ .oK.LOAD_CUSTOM_FILTER_INFO, {
      url
    });
  }

  async addCustomFilter(filter) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SUBSCRIBE_TO_CUSTOM_FILTER */ .oK.SUBSCRIBE_TO_CUSTOM_FILTER, {
      filter
    });
  }

  async removeCustomFilter(filterId) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REMOVE_ANTIBANNER_FILTER */ .oK.REMOVE_ANTIBANNER_FILTER, {
      filterId
    });
  }

  async getTabInfoForPopup(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_TAB_INFO_FOR_POPUP */ .oK.GET_TAB_INFO_FOR_POPUP, {
      tabId
    });
  }

  async changeApplicationFilteringDisabled(state) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CHANGE_APPLICATION_FILTERING_DISABLED */ .oK.CHANGE_APPLICATION_FILTERING_DISABLED, {
      state
    });
  }

  async openSettingsTab() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_SETTINGS_TAB */ .oK.OPEN_SETTINGS_TAB);
  }

  async openAssistant() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_ASSISTANT */ .oK.OPEN_ASSISTANT);
  }

  async openAbuseSite(url) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_ABUSE_TAB */ .oK.OPEN_ABUSE_TAB, {
      url
    });
  }

  async checkSiteSecurity(url) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_SITE_REPORT_TAB */ .oK.OPEN_SITE_REPORT_TAB, {
      url
    });
  }

  async resetCustomRulesForPage(url) {
    const [currentTab] = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().tabs.query({
      active: true,
      currentWindow: true
    });
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.RESET_CUSTOM_RULES_FOR_PAGE */ .oK.RESET_CUSTOM_RULES_FOR_PAGE, {
      url,
      tabId: currentTab === null || currentTab === void 0 ? void 0 : currentTab.id
    });
  }

  async removeAllowlistDomain(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REMOVE_ALLOWLIST_DOMAIN */ .oK.REMOVE_ALLOWLIST_DOMAIN, {
      tabId
    });
  }

  async addAllowlistDomain(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ADD_ALLOWLIST_DOMAIN_POPUP */ .oK.ADD_ALLOWLIST_DOMAIN_POPUP, {
      tabId
    });
  }

  async getStatisticsData() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_STATISTICS_DATA */ .oK.GET_STATISTICS_DATA);
  }

  async onOpenFilteringLogPage() {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ON_OPEN_FILTERING_LOG_PAGE */ .oK.ON_OPEN_FILTERING_LOG_PAGE);
  }

  async getFilteringLogData() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_FILTERING_LOG_DATA */ .oK.GET_FILTERING_LOG_DATA);
  }

  async onCloseFilteringLogPage() {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.ON_CLOSE_FILTERING_LOG_PAGE */ .oK.ON_CLOSE_FILTERING_LOG_PAGE);
  }

  async getFilteringInfoByTabId(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_FILTERING_INFO_BY_TAB_ID */ .oK.GET_FILTERING_INFO_BY_TAB_ID, {
      tabId
    });
  }

  async synchronizeOpenTabs() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SYNCHRONIZE_OPEN_TABS */ .oK.SYNCHRONIZE_OPEN_TABS);
  }

  async clearEventsByTabId(tabId, ignorePreserveLog) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CLEAR_EVENTS_BY_TAB_ID */ .oK.CLEAR_EVENTS_BY_TAB_ID, {
      tabId,
      ignorePreserveLog
    });
  }

  async refreshPage(tabId, preserveLogEnabled) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REFRESH_PAGE */ .oK.REFRESH_PAGE, {
      tabId,
      preserveLogEnabled
    });
  }

  async openTab(url, options) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.OPEN_TAB */ .oK.OPEN_TAB, {
      url,
      options
    });
  }

  async filteringLogAddUserRule(ruleText) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.FILTERING_LOG_ADD_USER_RULE */ .oK.FILTERING_LOG_ADD_USER_RULE, {
      ruleText
    });
  }

  async unAllowlistFrame(frameInfo) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.UN_ALLOWLIST_FRAME */ .oK.UN_ALLOWLIST_FRAME, {
      frameInfo
    });
  }

  async removeUserRule(ruleText) {
    await this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.REMOVE_USER_RULE */ .oK.REMOVE_USER_RULE, {
      ruleText
    });
  }

  async getTabFrameInfoById(tabId) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_TAB_FRAME_INFO_BY_ID */ .oK.GET_TAB_FRAME_INFO_BY_ID, {
      tabId
    });
  }

  async setPreserveLogState(state) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SET_PRESERVE_LOG_STATE */ .oK.SET_PRESERVE_LOG_STATE, {
      state
    });
  }

  async getEditorStorageContent() {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.GET_EDITOR_STORAGE_CONTENT */ .oK.GET_EDITOR_STORAGE_CONTENT);
  }

  async setEditorStorageContent(content) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.SET_EDITOR_STORAGE_CONTENT */ .oK.SET_EDITOR_STORAGE_CONTENT, {
      content
    });
  }

  async convertRuleText(content) {
    return this.sendMessage(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGE_TYPES.CONVERT_RULES_TEXT */ .oK.CONVERT_RULES_TEXT, {
      content
    });
  }

}

const messenger = new Messenger();


/***/ }),

/***/ 3621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-size: 11px;\n    font-family: Arial, sans-serif;\n}\n\n.button {\n    text-decoration: none;\n    text-align: center;\n    font-size: 15px;\n    display: inline-block;\n    outline: none;\n    border: 0;\n    background-color: transparent;\n    cursor: pointer;\n    border-radius: 3px;\n    min-width: 180px;\n    padding: 0 15px;\n    line-height: 42px;\n}\n\n.button:focus {\n        box-shadow: 0 0 2px 1px rgba(74, 74, 74, .36);\n    }\n\n.button--green {\n        background-color: #66b574;\n        color: #fff;\n        transition: 0.3s ease background-color;\n    }\n\n.button--green:hover {\n            background-color: #58a273;\n        }\n\n.button--white {\n        background-color: #fff;\n        color: #232323;\n        box-shadow: inset 0 0 0 1px #c4c4c4;\n        transition: 0.3s ease background-color;\n    }\n\n.button--white:hover {\n            background-color: #f1f1f1;\n        }\n\n.alert {\n    width: 100vw;\n    min-height: 100vh;\n    position: relative;\n    z-index: 5;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 0;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEDWlDQ1BJQ0MgUHJvZmlsZQAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VVBg/m8AAAFFSURBVGgF7djbDYMwDAXQBjEMYqyqY1WMxTppLiJIQIA8ariWkp8IPuweO60am67r7MstY8wwjuPH7dMz3uUua63p+/7r9rePIRW/9QmQzCV9ub0YgSIgzhxvQkjFb1EZBAdEKolkfJTqtnb7bv/zOJm58moRE0AzYgFoRawAGhE7gDZEEKAJcQjQgjgFaEBcAtgRUQBmRDSAFZEEYEQkA9gQWQAmRDaABVEEYEAUAx5H4EaGOyw+SMl66mbXzNOD4k6gCPNUY/CFwF1YOn5zRxJJRINqaUbUuZA/79sd3wm3xIdbdS60rXzo2XVCbO60/HxKJgFKKv4CkEziuyKBWAE0InYAbYggQBPiEKAFcQrQgLgEsCOiAMyIaAArIgnAiEgGsCGyAEyIbAALogjAgCgGPI7AX9w6F3JtqHMhnMWLFSrSD9jOnakVHpZYAAAAAElFTkSuQmCC\");\n    background-size: 15px;\n}\n\n.alert--red {\n        background-color: #94392D;\n    }\n\n.alert--gold {\n        background-color: #b38237;\n    }\n\n@media (max-width: 797px) {\n\n.alert {\n        display: block;\n        padding: 0\n}\n    }\n\n.alert__in {\n        width: 760px;\n        background: #fff;\n        box-shadow: 0 2px 15px rgba(0,0,0,0.3);\n    }\n\n@media (max-width: 797px) {\n\n.alert__in {\n            width: 100%;\n            height: 100%;\n            min-height: 100%\n    }\n        }\n\n.alert__header {\n        padding: 15px 70px;\n        position: relative;\n    }\n\n.alert__header:before {\n            content: \"\";\n            width: 33px;\n            height: 33px;\n            display: block;\n            position: absolute;\n            left: 25px;\n            top: calc(50% - 17px);\n            background-repeat: no-repeat;\n            background-size: 100%;\n            background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='35' viewBox='0 0 36 35' width='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate%282 2%29'%3E%3Cpath d='m31.781 8.428c.43.422.672.995.674 1.597v11.559c0 .6-.243 1.174-.673 1.597l-8.317 8.173a2.29 2.29 0 0 1 -1.605.654h-11.763a2.29 2.29 0 0 1 -1.606-.655l-8.317-8.172a2.24 2.24 0 0 1 -.674-1.597v-11.559c0-.6.243-1.175.673-1.597l8.317-8.173a2.291 2.291 0 0 1 1.606-.655h11.764c.6 0 1.178.236 1.605.655l8.317 8.173z' stroke='%23fff' stroke-width='1.6'/%3E%3Cpath d='m10.097 31.208a1.49 1.49 0 0 1 -1.045-.425l-8.318-8.173a1.44 1.44 0 0 1 -.433-1.026v-11.559c0-.385.156-.754.433-1.027l8.317-8.172a1.491 1.491 0 0 1 1.045-.426h6.202v30.808z' opacity='.059'/%3E%3Cpath d='m15.113 21.689 8.568-11.357c-.627-.495-1.178-.145-1.481.125l-.011.001-7.145 7.309-2.692-3.186c-1.284-1.459-3.03-.346-3.438-.052z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\");\n        }\n\n@media (max-width: 797px) {\n\n.alert__header:before {\n                left: 15px;\n                width: 26px;\n                height: 26px;\n                top: calc(50% - 13px)\n        }\n            }\n\n.alert__header--red {\n            background-color: #ea2c13;\n        }\n\n.alert__header--gold {\n            background-color: #f5a623;\n        }\n\n.alert__header-title {\n            font-size: 18px;\n            font-weight: 700;\n            color: #fff;\n            line-height: 30px;\n            text-align: center;\n        }\n\n@media (max-width: 797px) {\n\n.alert__header-title {\n                font-size: 14px;\n                line-height: 24px\n        }\n            }\n\n@media (max-width: 797px) {\n\n.alert__header {\n            padding: 15px 45px\n    }\n        }\n\n.alert__logo {\n        display: block;\n        width: 125px;\n        height: 29px;\n        margin: 0 auto 20px;\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='125' height='29' viewBox='0 0 125 29' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EGroup 2%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M98.549 21.266l-.95-2.519h-4.73l-.898 2.519H88.76l5.127-12.829h2.866l5.077 12.829h-3.28zm-3.28-9.404l-1.554 4.403h3.073l-1.52-4.403zm-6.993 4.566c0 .773-.124 1.477-.371 2.11a4.603 4.603 0 0 1-1.062 1.632 4.86 4.86 0 0 1-1.666 1.06c-.65.253-1.373.38-2.167.38-.806 0-1.53-.127-2.175-.38a4.696 4.696 0 0 1-1.64-1.06 4.623 4.623 0 0 1-1.036-1.631c-.242-.634-.363-1.338-.363-2.111v-7.99h2.935v7.735c0 .35.043.683.13.997.086.314.218.595.397.842.178.248.414.444.708.59.293.144.647.217 1.061.217.415 0 .769-.073 1.062-.218.294-.145.533-.34.717-.589.184-.247.316-.528.397-.842.08-.314.12-.646.12-.997V8.437h2.953v7.991zm-12.114 4.059c-.598.326-1.297.592-2.097.797-.8.205-1.672.308-2.616.308-.978 0-1.88-.163-2.702-.49a6.196 6.196 0 0 1-2.124-1.376 6.298 6.298 0 0 1-1.39-2.13c-.333-.827-.5-1.748-.5-2.763 0-1.026.17-1.956.51-2.79a6.221 6.221 0 0 1 1.406-2.129 6.189 6.189 0 0 1 2.107-1.35 7.115 7.115 0 0 1 2.606-.471 7.67 7.67 0 0 1 2.693.462c.829.308 1.502.722 2.02 1.241l-1.865 2.229a3.239 3.239 0 0 0-1.139-.86c-.472-.224-1.007-.336-1.606-.336a3.415 3.415 0 0 0-2.572 1.133 3.795 3.795 0 0 0-.751 1.268 4.648 4.648 0 0 0-.268 1.603c0 .592.08 1.136.242 1.631.16.496.4.921.716 1.278.317.356.708.634 1.174.833.466.2.999.3 1.597.3.346 0 .674-.028.985-.082a3.54 3.54 0 0 0 .863-.263v-2.338H71.12v-2.499h5.041v6.795zm48.799-5.672c0 1.124-.199 2.093-.596 2.909-.397.815-.921 1.485-1.571 2.01a6.437 6.437 0 0 1-2.202 1.16 8.53 8.53 0 0 1-2.486.372h-4.558V8.437h4.42c.863 0 1.715.106 2.555.317a6.27 6.27 0 0 1 2.245 1.051c.656.49 1.185 1.145 1.588 1.966.403.822.605 1.836.605 3.044zm-3.074 0c0-.724-.112-1.325-.336-1.803a3.007 3.007 0 0 0-.898-1.141 3.514 3.514 0 0 0-1.278-.607 5.998 5.998 0 0 0-1.476-.181h-1.468v7.501h1.399c.53 0 1.039-.063 1.528-.19.49-.127.92-.335 1.295-.625.374-.29.673-.677.898-1.16.224-.483.336-1.08.336-1.794zm-58.45 0c0 1.124-.198 2.093-.595 2.909-.397.815-.92 1.485-1.571 2.01a6.437 6.437 0 0 1-2.201 1.16 8.53 8.53 0 0 1-2.487.372h-4.558V8.437h4.42c.864 0 1.715.106 2.556.317a6.27 6.27 0 0 1 2.244 1.051c.656.49 1.186 1.145 1.589 1.966.402.822.604 1.836.604 3.044zm-3.072 0c0-.724-.113-1.325-.337-1.803a3.007 3.007 0 0 0-.898-1.141 3.514 3.514 0 0 0-1.278-.607 5.998 5.998 0 0 0-1.476-.181h-1.467v7.501h1.398c.53 0 1.039-.063 1.528-.19a3.53 3.53 0 0 0 1.295-.625c.374-.29.673-.677.898-1.16.224-.483.337-1.08.337-1.794zm-12.553 6.45l-.95-2.518h-4.73l-.899 2.519h-3.211L43.15 8.437h2.866l5.076 12.829h-3.28zm-3.28-9.402l-1.556 4.402h3.073l-1.517-4.403zm64.773 9.404l-2.641-5.094h-1.002v5.092h-2.9V8.437h4.662c.587 0 1.16.064 1.717.19a4.351 4.351 0 0 1 1.503.644c.443.302.797.7 1.061 1.196.265.495.397 1.111.397 1.848 0 .87-.224 1.6-.673 2.192-.449.592-1.07 1.015-1.865 1.269l3.195 5.49h-3.454zm-.12-8.897c0-.302-.06-.546-.182-.734a1.264 1.264 0 0 0-.466-.434 1.957 1.957 0 0 0-.639-.209 4.494 4.494 0 0 0-.682-.054h-1.57v2.99h1.398c.241 0 .489-.022.742-.064s.484-.118.69-.226a1.34 1.34 0 0 0 .51-.472c.132-.205.199-.47.199-.797z' fill='%23121212'/%3E%3Cpath d='M13.897.66C9.82.66 4.904 1.648.854 3.821c0 4.695-.056 16.39 13.043 24.38 13.1-7.99 13.044-19.685 13.044-24.38C22.892 1.648 17.974.66 13.897.66z' fill='%2368BC71'/%3E%3Cpath d='M13.884 28.194C.798 20.203.854 8.514.854 3.82 4.898 1.65 9.81.662 13.884.66v27.534z' fill='%2367B279'/%3E%3Cpath d='M13.421 19.037l7.888-10.95c-.578-.477-1.085-.14-1.364.12l-.01.001-6.577 7.047-2.478-3.072c-1.182-1.406-2.789-.333-3.164-.05l5.705 6.904' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E\");\n    }\n\n.alert__body {\n        padding: 20px 30px;\n    }\n\n.alert__body-title {\n            text-align: center;\n            line-height: 27px;\n            font-size: 18px;\n            max-width: 395px;\n            margin: 0 auto 20px;\n        }\n\n@media (max-width: 797px) {\n\n.alert__body-title {\n                max-width: 100%;\n                font-size: 16px\n        }\n            }\n\n.alert__btns {\n        display: flex;\n        justify-content: center;\n    }\n\n@media (max-width: 797px) {\n\n.alert__btns {\n            width: 100%;\n            display: block\n    }\n        }\n\n.alert__btn {\n        margin-right: 15px;\n    }\n\n.alert__btn:last-child {\n            margin-right: 0;\n        }\n\n@media (max-width: 797px) {\n\n.alert__btn {\n            width: 100%;\n            margin: 0 0 15px\n    }\n\n            .alert__btn:last-child {\n                margin: 0;\n            }\n        }\n\n.alert__rule {\n        font-family: 'Courier', arial;\n        border: 1px solid #e8e8e8;\n        font-size: 14px;\n        font-weight: 700;\n        padding: 12px;\n        text-align: center;\n        max-width: 374px;\n        margin: 0 auto 28px;\n        overflow-x: auto;\n    }\n\n.hero {\n    margin: 0 auto;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.hero--green {\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='297' height='265' viewBox='0 0 297 265' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EGroup 12%3C/title%3E%3Cdefs%3E%3Cpath d='M218.11 26.284L201.17 9.64a3.036 3.036 0 0 0-2.127-.866h-23.955c-.8 0-1.564.312-2.13.866l-16.937 16.644a2.932 2.932 0 0 0-.882 2.092v23.538c0 .785.318 1.536.882 2.091l16.939 16.644c.563.555 1.33.867 2.129.867h23.955c.797 0 1.562-.31 2.127-.866l16.94-16.644a2.936 2.936 0 0 0 .882-2.092V28.376a2.942 2.942 0 0 0-.884-2.092z' id='a'/%3E%3Cpath d='M33.695 0C23.163 0 10.46 2.512 0 8.04c0 11.942-.144 41.69 33.695 62.016C67.535 49.73 67.392 19.982 67.392 8.041 56.932 2.51 44.228 0 33.695 0z' id='b'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cellipse fill='%23FFF' cx='2.949' cy='4.603' rx='2.054' ry='2.053'/%3E%3Cg transform='translate%2873%29'%3E%3Cg transform='translate%28115.938 90.328%29' fill-rule='nonzero'%3E%3Cpath d='M16.235 23.545a12.87 12.87 0 0 1 .003 0h-.003zm.484-.174c1.375-.086 3.204-.331 5.327-.727 4.67-.872 10.239-2.368 15.61-4.227C48.613 14.626 56.92 9.76 57.849 7.872 60.916 1.626 68.466-.95 74.712 2.118c6.246 3.068 8.822 10.619 5.754 16.865-4.892 9.96-17.5 17.342-34.568 23.248-14.534 5.03-28.77 7.685-36.257 5.636C2.93 46.03-1.022 39.099.815 32.387c1.778-6.497 8.33-10.408 14.835-8.984.253.005.617-.003 1.069-.032z' fill='%23D8D8D8'/%3E%3Cpath d='M16.235 23.545a12.87 12.87 0 0 1 .003 0h-.003zM79.04 5.608c-4.829.991-9.148 3.96-11.497 8.44-1.238 2.361-12.317 8.44-26.926 13.176-7.163 2.323-14.589 4.193-20.817 5.282-2.83.495-5.27.8-7.103.909a18.95 18.95 0 0 1-1.426.04A17.753 17.753 0 0 0 .411 34.65c.064-.752.198-1.509.404-2.263 1.778-6.497 8.33-10.408 14.835-8.984.253.005.617-.003 1.069-.032 1.375-.086 3.204-.331 5.327-.727 4.67-.872 10.239-2.368 15.61-4.227C48.613 14.626 56.92 9.76 57.849 7.872 60.916 1.626 68.466-.95 74.712 2.118a12.55 12.55 0 0 1 4.33 3.49z' fill='%23FFF' opacity='.278'/%3E%3C/g%3E%3Cpath d='M168.128 102.328c4.588-2.394 8.791-6.033 10.183-8.948h9.345a5.043 5.043 0 0 1 5.043 5.043v.572a5.043 5.043 0 0 1-5.043 5.043 5.043 5.043 0 0 1 5.043 5.043v.572a5.043 5.043 0 0 1-5.043 5.043 5.043 5.043 0 0 1 5.043 5.043v.572a5.043 5.043 0 0 1-5.043 5.043h-15.744a5.043 5.043 0 0 1-5.043-5.043v-.572a5.043 5.043 0 0 1 5.043-5.043 5.043 5.043 0 0 1-5.043-5.043v-.572a5.043 5.043 0 0 1 5.043-5.043 5.03 5.03 0 0 1-3.784-1.71z' fill='%233D3D3D' opacity='.188'/%3E%3Cpath d='M180.31 67.695c0-2.983 2.686-5.4 6-5.4 3.313 0 6 2.417 6 5.4v62.503c0 2.983-2.687 5.4-6 5.4-3.314 0-6-2.417-6-5.4V67.695z' fill='%23979797' fill-rule='nonzero'/%3E%3Cpath d='M186.408 62.34v73.214a5.4 5.4 0 0 1-6.098-5.355V67.694a5.4 5.4 0 0 1 6.098-5.356z' fill='%23151515' fill-rule='nonzero' opacity='.083'/%3E%3Cpath d='M192.31 82.188h-12V67.695c0-2.983 2.686-5.4 6-5.4 3.313 0 6 2.417 6 5.4v14.493z' fill='%23202020' fill-rule='nonzero' opacity='.376'/%3E%3Cg fill-rule='nonzero'%3E%3Cuse fill='%23F5A623' fill-rule='evenodd' xlink:href='%23a'/%3E%3Cpath stroke='%23E8E8E8' stroke-width='4.8' d='M219.792 24.572a5.346 5.346 0 0 1 1.602 3.804v23.538c0 1.43-.578 2.798-1.6 3.804l-16.94 16.644a5.435 5.435 0 0 1-3.809 1.554H175.09a5.434 5.434 0 0 1-3.811-1.555L154.34 55.717a5.33 5.33 0 0 1-1.6-3.803V28.376c0-1.43.577-2.8 1.6-3.804l16.938-16.643a5.437 5.437 0 0 1 3.81-1.555h23.956c1.425 0 2.795.558 3.81 1.555l16.938 16.643z'/%3E%3C/g%3E%3Cpath d='M187.718 71.516H175.09c-.8 0-1.566-.312-2.13-.867l-16.938-16.644a2.931 2.931 0 0 1-.882-2.09v-23.54c0-.785.318-1.537.882-2.091L172.96 9.64a3.037 3.037 0 0 1 2.129-.866h12.629v62.742z' fill='%23474747' fill-rule='nonzero' opacity='.059'/%3E%3Cg transform='rotate%28-180 101.119 60.108%29'%3E%3Crect fill='%23E0D9BA' width='31.89' height='10.658' rx='5.329'/%3E%3Crect fill='%23F8F0CF' x='6.06' width='25.83' height='10.658' rx='5.329'/%3E%3Cg transform='translate%280 10.658%29'%3E%3Crect fill='%23E0D9BA' width='31.89' height='10.658' rx='5.329'/%3E%3Crect fill='%23F8F0CF' x='6.06' width='25.83' height='10.658' rx='5.329'/%3E%3C/g%3E%3Cg transform='translate%280 21.316%29'%3E%3Crect fill='%23E0D9BA' width='31.89' height='10.658' rx='5.329'/%3E%3Crect fill='%23F8F0CF' x='6.06' width='25.83' height='10.658' rx='5.329'/%3E%3C/g%3E%3C/g%3E%3Cellipse fill='%23FFF' cx='134.208' cy='3.128' rx='2.465' ry='2.464'/%3E%3Cpath d='M61.463 114.679l1.232 22.766c-.914.05-2.302.802-4.12 2.687-2.334 2.42-4.702 6.123-6.82 10.712-4.057 8.793-6.662 19.817-6.593 26.565l-22.799.232c-.105-10.301 3.28-24.623 8.69-36.35 7.172-15.545 17.154-25.895 30.41-26.612z' fill='%23CDCDCD' fill-rule='nonzero'/%3E%3Cpath d='M46.154 168.328c-.665 3.401-1.018 6.543-.992 9.08l-22.799.233c-.029-2.844.208-5.995.68-9.313h23.111z' fill='%23000' fill-rule='nonzero' opacity='.107'/%3E%3Cpath d='M61.713 119.303c-9.928 3.306-17.707 12.565-23.594 25.324-4.836 10.482-8.053 23.037-8.606 32.941l-7.15.073c-.105-10.301 3.28-24.623 8.69-36.35 7.172-15.545 17.154-25.895 30.41-26.612l.25 4.624z' fill='%23949494' fill-rule='nonzero' opacity='.151'/%3E%3Cg transform='translate%2857.693 178.881%29'%3E%3Crect fill='%235C855F' x='2.246' width='32.566' height='67.267' rx='16.283'/%3E%3Cpath d='M34.811 62.745H2.246V37.308H34.81v25.437z' fill='%23B4BFB5'/%3E%3Cpath fill='%23000' opacity='.155' d='M2.246 7.349H15.721V68.964H2.246z'/%3E%3Cpath fill='%234A4A4A' d='M1.841 65.014H35.204V68.707H1.841z'/%3E%3Cpath d='M.251 65.114c-.025-.354-.037-.71-.037-1.07 0-9.157 8.195-16.58 18.304-16.58 10.11 0 18.304 7.423 18.304 16.58 0 .36-.012.716-.037 1.07H.25z' fill='%23D0DCD1'/%3E%3Cpath d='M15.543 47.681c-3.512 4.202-5.565 9.28-5.565 14.749 0 .906.057 1.801.167 2.684H.25c-.025-.354-.037-.71-.037-1.07 0-8.24 6.635-15.075 15.329-16.363z' fill='%23393939' opacity='.278'/%3E%3C/g%3E%3Cg transform='translate%28104.171 178.881%29'%3E%3Crect fill='%235C855F' x='2.246' width='32.566' height='67.267' rx='16.283'/%3E%3Cpath d='M34.811 62.745H2.246V37.308H34.81v25.437z' fill='%23B4BFB5'/%3E%3Cpath fill='%23000' opacity='.155' d='M2.246 7.349H15.721V68.964H2.246z'/%3E%3Cpath fill='%234A4A4A' d='M1.841 65.014H35.204V68.707H1.841z'/%3E%3Cpath d='M.251 65.114c-.025-.354-.037-.71-.037-1.07 0-9.157 8.195-16.58 18.304-16.58 10.11 0 18.304 7.423 18.304 16.58 0 .36-.012.716-.037 1.07H.25z' fill='%23D0DCD1'/%3E%3Cpath d='M15.543 47.681c-3.512 4.202-5.565 9.28-5.565 14.749 0 .906.057 1.801.167 2.684H.25c-.025-.354-.037-.71-.037-1.07 0-8.24 6.635-15.075 15.329-16.363z' fill='%23393939' opacity='.278'/%3E%3C/g%3E%3Crect fill='%235C855F' x='56.437' y='166.969' width='82.28' height='38.243' rx='19.122'/%3E%3Cpath d='M126.258 111.172l-63.086 1.8c-1.344 0-24.612 38.092-8.77 81.583h91.942s4.422-12.782 3.542-28.451c-.88-15.669-9.797-54.932-23.628-54.932z' fill='%23D8D8D8'/%3E%3Cpath d='M95.538 194.555H54.402c-15.842-43.491 7.426-81.584 8.77-81.584l32.366-.923v82.507z' fill='%234B4B4B' opacity='.071'/%3E%3Cpath d='M59.75 157.21c-1.837 12.869-.078 21.281 5.59 37.345H54.402c-5.835-16.02-6.364-31.306-4.637-44.227l9.984 6.881z' fill='%234B4B4B' opacity='.216'/%3E%3Cpath d='M144.194 136.648c3.31 10.795 5.3 22.47 5.692 29.456.88 15.669-3.542 28.45-3.542 28.45l-15.114-.492c1.93-7.674 2.966-15.81 2.966-24.236 0-7.53-.828-14.828-2.38-21.771 5.325-2.687 9.648-6.656 12.378-11.407z' fill='%23EDEDED'/%3E%3Cg transform='translate%2847.538 7.528%29'%3E%3Cg transform='translate%28.105 57.25%29'%3E%3Cellipse fill='%23BCB7A4' cx='9.107' cy='9.091' rx='9.107' ry='9.091'/%3E%3Cpath d='M9.107 0v18.181c-5.03 0-9.107-4.07-9.107-9.09C0 4.07 4.077 0 9.107 0z' fill='%23EEE7CB'/%3E%3C/g%3E%3Cellipse fill='%23F8F0CF' cx='89.608' cy='66.341' rx='9.107' ry='9.091'/%3E%3Cpath d='M90.55 57.25v18.181c-4.856 0-8.793-4.07-8.793-9.09s3.937-9.09 8.793-9.09z' fill='%23000' opacity='.231'/%3E%3Cpath d='M88.038 44.084v50.142c0 11.434-9.27 20.703-20.703 20.703H32.113c-11.433 0-20.702-9.27-20.702-20.703V44.084h76.627z' fill='%23EEE7CB'/%3E%3Cpath d='M49.096 114.302V43.457H87.41V93.6c0 11.434-9.27 20.703-20.703 20.703H49.096z' fill='%23F8F0CF'/%3E%3Cellipse fill='%23FFF' opacity='.477' cx='26.799' cy='87.657' rx='9.735' ry='9.718'/%3E%3Cpath d='M30.946 125.106c-10.89-.605-19.535-9.628-19.535-20.67V53.9h4.54v23.397C15.951 88.731 25.221 98 36.654 98h26.14c11.434 0 20.703-9.269 20.703-20.703V53.9h4.54v50.536c0 10.862-8.365 19.77-19.004 20.634a9.58 9.58 0 0 1-.81.413c-9.097 4.105-14.979 6.157-17.647 6.157-2.537 0-8.889-2.092-19.056-6.276a9.596 9.596 0 0 1-.574-.258z' fill='%23000' opacity='.174'/%3E%3Cellipse fill='%23FFF' opacity='.477' cx='72.021' cy='87.657' rx='9.735' ry='9.718'/%3E%3Cpath d='M30.946 120.306c-10.89-.605-19.535-9.628-19.535-20.67V49.1h4.54v23.397c0 11.434 9.27 20.703 20.703 20.703h26.14c11.434 0 20.703-9.269 20.703-20.703V49.1h4.54v50.536c0 10.862-8.365 19.77-19.004 20.634a9.58 9.58 0 0 1-.81.413c-9.097 4.105-14.979 6.157-17.647 6.157-2.537 0-8.889-2.092-19.056-6.276a9.596 9.596 0 0 1-.574-.258z' fill='%23CA9342'/%3E%3Cpath d='M49.096 93.246v33.577c-3.025-.46-8.937-2.518-17.736-6.175a9.593 9.593 0 0 1-.611-.28c-10.798-.702-19.338-9.683-19.338-20.658V49.1h4.5v23.443c0 11.434 9.268 20.703 20.702 20.703h12.483z' fill='%23B5853C'/%3E%3Cpath d='M11.41 54.713V39.29c0-2.775.668-5.526 2.006-8.252 1.339-2.727 2.995-5.147 4.97-7.26 1.976-2.115 4.33-4.172 7.063-6.172 2.735-2.002 5.258-3.662 7.574-4.986a100.212 100.212 0 0 1 7.242-3.75c2.515-1.177 4.302-1.977 5.36-2.396a73.262 73.262 0 0 1 2.542-.968c.48-.193.998-.29 1.558-.29s1.077.097 1.557.29c.638.226 1.486.548 2.544.968 1.057.419 2.843 1.22 5.358 2.396a100.02 100.02 0 0 1 7.243 3.75c2.314 1.324 4.839 2.984 7.573 4.986 2.734 2 5.088 4.057 7.064 6.171 1.975 2.114 3.632 4.534 4.968 7.26 1.338 2.727 2.006 5.478 2.006 8.253v15.453c-11.66-1.781-24.677-2.777-38.41-2.777-13.657 0-26.607.985-38.217 2.748z' fill='%23050505' opacity='.07'/%3E%3Cpath d='M11.41 50.325V34.9c0-2.776.668-5.526 2.006-8.253 1.339-2.727 2.995-5.147 4.97-7.26 1.976-2.114 4.33-4.172 7.063-6.172 2.735-2.001 5.258-3.661 7.574-4.985a100.212 100.212 0 0 1 7.242-3.75c2.515-1.178 4.302-1.978 5.36-2.396a73.262 73.262 0 0 1 2.542-.968c.48-.194.998-.291 1.558-.291s1.077.097 1.557.29c.638.226 1.486.548 2.544.969 1.057.418 2.843 1.219 5.358 2.396a100.02 100.02 0 0 1 7.243 3.75c2.314 1.323 4.839 2.984 7.573 4.985 2.734 2 5.088 4.058 7.064 6.172 1.975 2.113 3.632 4.533 4.968 7.26 1.338 2.727 2.006 5.477 2.006 8.253v15.453c-11.66-1.782-24.677-2.778-38.41-2.778-13.657 0-26.607.985-38.217 2.749z' fill='%2372D97B'/%3E%3Cpath d='M11.41 50.325V34.9c0-2.776.668-5.526 2.006-8.253 1.339-2.727 2.995-5.147 4.97-7.26 1.976-2.114 4.33-4.172 7.063-6.172 2.735-2.001 5.258-3.661 7.574-4.985a100.212 100.212 0 0 1 7.242-3.75c2.515-1.178 4.302-1.978 5.36-2.396a73.262 73.262 0 0 1 2.542-.968c.48-.194.998-.291 1.558-.291s1.077.097 1.557.29c.638.226 1.486.548 2.544.969 1.057.418 2.843 1.219 5.358 2.396a100.02 100.02 0 0 1 7.243 3.75c2.314 1.323 4.839 2.984 7.573 4.985 2.734 2 5.088 4.058 7.064 6.172 1.975 2.113 3.632 4.533 4.968 7.26 1.338 2.727 2.006 5.477 2.006 8.253v15.453c-11.66-1.782-24.677-2.778-38.41-2.778-13.657 0-26.607.985-38.217 2.749z' fill='%2368BD72'/%3E%3Cpath d='M49.724.826v46.778c-13.691 0-26.674.985-38.313 2.75V34.92c0-2.777.669-5.529 2.01-8.257 1.342-2.729 3.002-5.15 4.983-7.265 1.98-2.115 4.341-4.174 7.08-6.175 2.742-2.003 5.272-3.664 7.593-4.989a100.532 100.532 0 0 1 7.26-3.752c2.521-1.178 4.313-1.979 5.373-2.398 1.06-.42 1.91-.743 2.55-.968.452-.183.94-.28 1.464-.29z' fill='%23689E87' opacity='.417'/%3E%3Cpath d='M11.41 44.61c11.61-1.778 24.561-2.77 38.219-2.77 13.732 0 26.75 1.003 38.409 2.799V39.71v10.643c-11.66-1.796-24.677-2.799-38.41-2.799-13.657 0-26.607.993-38.217 2.77v-5.716z' fill='%23FFF'/%3E%3Cpath d='M65.99 102.968c.666-.657.673-1.73.015-2.396a1.697 1.697 0 0 0-2.398-.015c-8.15 8.042-19.564 7.152-26.576.946a1.697 1.697 0 0 0-2.394.145c-.621.7-.556 1.771.145 2.392 8.248 7.299 21.664 8.344 31.208-1.072z' fill='%23434343' fill-rule='nonzero'/%3E%3Cpath d='M39.108 63.533l2.39-4.487c-5.474-2.908-15.506-2.237-19.767 1.255l3.227 3.93c2.62-2.149 10.436-2.671 14.15-.698z' fill='%23B5853C' fill-rule='nonzero'/%3E%3Cpath d='M37.45 72.547a1.977 1.977 0 0 0 .68-3.894c-2.501-.437-8.273-.14-11.952.437a1.977 1.977 0 1 0 .614 3.905c3.284-.515 8.684-.792 10.658-.448z' fill='%23434343' fill-rule='nonzero'/%3E%3Cpath d='M60.425 72.547a1.977 1.977 0 0 1-.68-3.894c2.502-.437 8.274-.14 11.952.437a1.977 1.977 0 1 1-.613 3.905c-3.284-.515-8.685-.792-10.66-.448z' fill='%23434343' fill-rule='nonzero'/%3E%3Cpath d='M56.067 59.046l2.389 4.487c3.714-1.973 11.529-1.45 14.15.697l3.227-3.93c-4.261-3.491-14.293-4.162-19.766-1.254z' fill='%23B5853C' fill-rule='nonzero'/%3E%3Cpath d='M57.261 9.916c4.083.627 19.157 10.345 21.67 15.674' stroke='%23FFF' stroke-width='2.949'/%3E%3Cellipse fill='%23FFF' cx='81.129' cy='29.665' rx='1.884' ry='1.881'/%3E%3C/g%3E%3Cpath d='M189.559 47.625h-4.657l-.665-12.973V28.11h5.95v6.542l-.628 12.973zm.85 4.804c0 1.885-1.035 2.883-3.179 2.883-2.143 0-3.178-.96-3.178-2.883 0-1.885 1.035-2.883 3.178-2.883 2.107 0 3.179.998 3.179 2.883z' fill='%23FFF'/%3E%3Cg transform='translate%28.076 161.91%29'%3E%3Cg opacity='.654' transform='translate%28.025 85.708%29'/%3E%3Cg transform='translate%282.275%29'%3E%3Cg transform='translate%28.414 17.856%29'%3E%3Cuse fill='%2368BC71' xlink:href='%23b'/%3E%3Cpath stroke='%23FFF' stroke-width='4.096' d='M33.695-2.048C45.38-2.048 58.208.87 68.35 6.23l1.09.577v1.385c.001 6.934-.222 11.186-1.2 16.804-1.392 8.01-4.084 15.608-8.46 22.771-5.643 9.238-13.857 17.335-25.03 24.045l-1.054.633-1.054-.633c-11.172-6.71-19.386-14.807-25.029-24.045-4.375-7.163-7.067-14.76-8.46-22.77-.977-5.618-1.2-9.87-1.2-16.804V6.807l1.09-.577C9.184.87 22.013-2.048 33.696-2.048z'/%3E%3Cpath d='M33.66 70.036C-.143 49.71 0 19.978 0 8.04 10.447 2.518 23.135.005 33.66 0v70.036z' fill='%2367B279'/%3E%3Cpath d='M32.466 46.744L52.842 18.89c-1.493-1.214-2.803-.357-3.524.306l-.026.002-16.99 17.925-6.4-7.812c-3.054-3.579-7.206-.85-8.176-.128l14.74 17.56' fill='%23FFF'/%3E%3C/g%3E%3Cg opacity='.223' transform='translate%2818.49 8.206%29' fill='%23353535'%3E%3Crect transform='rotate%2890 24.276 10.615%29' x='13.9' y='5.768' width='20.75' height='9.695' rx='4.847'/%3E%3Crect transform='rotate%2890 14.58 10.615%29' x='4.206' y='5.768' width='20.75' height='9.695' rx='4.847'/%3E%3Crect transform='rotate%2890 4.886 10.615%29' x='-5.489' y='5.768' width='20.75' height='9.695' rx='4.847'/%3E%3C/g%3E%3Cg transform='rotate%2890 23.655 23.958%29'%3E%3Crect fill='%23E0D9BA' width='25.619' height='9.695' rx='4.847'/%3E%3Crect fill='%23F8F0CF' x='4.869' width='20.75' height='9.695' rx='4.847'/%3E%3Cg transform='translate%280 9.695%29'%3E%3Crect fill='%23E0D9BA' width='25.619' height='9.695' rx='4.847'/%3E%3Crect fill='%23F8F0CF' x='4.869' width='20.75' height='9.695' rx='4.847'/%3E%3C/g%3E%3Cg transform='translate%280 19.39%29'%3E%3Crect fill='%23E0D9BA' width='25.619' height='9.695' rx='4.847'/%3E%3Crect fill='%23F8F0CF' x='4.869' width='20.75' height='9.695' rx='4.847'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n        width: 297px;\n        height: 265px;\n        background-position: -22px center;\n    }\n\n.hero--red {\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='265' viewBox='0 0 284 265' width='284' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate%28.5%29'%3E%3Cg fill-rule='nonzero'%3E%3Cpath d='M138.173 113.873a12.87 12.87 0 0 1 .003 0zm.484-.174c1.375-.086 3.204-.331 5.327-.727 4.67-.872 10.239-2.368 15.61-4.227 10.957-3.791 19.264-8.657 20.193-10.545 3.067-6.246 10.617-8.822 16.863-5.754s8.822 10.619 5.754 16.865c-4.892 9.96-17.5 17.342-34.568 23.248-14.534 5.03-28.77 7.685-36.257 5.636-6.711-1.837-10.663-8.768-8.826-15.48 1.778-6.497 8.33-10.408 14.835-8.984.253.005.617-.003 1.069-.032z' fill='%23d8d8d8'/%3E%3Cpath d='M138.173 113.873a12.87 12.87 0 0 1 .003 0zm62.805-17.937c-4.829.991-9.148 3.96-11.497 8.44-1.238 2.361-12.317 8.44-26.926 13.176-7.163 2.323-14.589 4.193-20.817 5.282-2.83.495-5.27.8-7.103.909a18.95 18.95 0 0 1-1.426.04 17.753 17.753 0 0 0-10.86 1.195c.064-.752.198-1.509.404-2.263 1.778-6.497 8.33-10.408 14.835-8.984.253.005.617-.003 1.069-.032 1.375-.086 3.204-.331 5.327-.727 4.67-.872 10.239-2.368 15.61-4.227 10.957-3.791 19.264-8.657 20.193-10.545 3.067-6.246 10.617-8.822 16.863-5.754a12.55 12.55 0 0 1 4.33 3.49z' fill='%23fff' opacity='.278'/%3E%3C/g%3E%3Cellipse cx='140.208' cy='3.128' fill='%23fff' rx='2.465' ry='2.464'/%3E%3Cg fill-rule='nonzero'%3E%3Cpath d='M67.463 114.679l1.232 22.766c-.914.05-2.302.802-4.12 2.687-2.334 2.42-4.702 6.123-6.82 10.712-4.057 8.793-6.662 19.817-6.593 26.565l-22.799.232c-.105-10.301 3.28-24.623 8.69-36.35 7.172-15.545 17.154-25.895 30.41-26.612z' fill='%23cdcdcd'/%3E%3Cpath d='M52.154 168.328c-.665 3.401-1.018 6.543-.992 9.08l-22.799.233c-.029-2.844.208-5.995.68-9.313z' fill='%23000' opacity='.107'/%3E%3Cpath d='M67.713 119.303c-9.928 3.306-17.707 12.565-23.594 25.324-4.836 10.482-8.053 23.037-8.606 32.941l-7.15.073c-.105-10.301 3.28-24.623 8.69-36.35 7.172-15.545 17.154-25.895 30.41-26.612z' fill='%23949494' opacity='.151'/%3E%3C/g%3E%3Cg transform='translate%2863.693 178.881%29'%3E%3Crect fill='%233e3e3e' height='67.267' rx='16.283' width='32.566' x='2.246'/%3E%3Cpath d='M34.811 62.745H2.246V37.308H34.81v25.437z' fill='%23bbb'/%3E%3Cpath d='M2.246 7.349h13.475v61.615H2.246z' fill='%23000' opacity='.155'/%3E%3Cpath d='M1.841 65.014h33.363v3.693H1.841z' fill='%234a4a4a'/%3E%3Cpath d='M.251 65.114c-.025-.354-.037-.71-.037-1.07 0-9.157 8.195-16.58 18.304-16.58 10.11 0 18.304 7.423 18.304 16.58 0 .36-.012.716-.037 1.07H.25z' fill='%23d8d8d8'/%3E%3Cpath d='M15.543 47.681c-3.512 4.202-5.565 9.28-5.565 14.749 0 .906.057 1.801.167 2.684H.25c-.025-.354-.037-.71-.037-1.07 0-8.24 6.635-15.075 15.329-16.363z' fill='%23393939' opacity='.278'/%3E%3C/g%3E%3Cg transform='translate%28110.171 178.881%29'%3E%3Crect fill='%233e3e3e' height='67.267' rx='16.283' width='32.566' x='2.246'/%3E%3Cpath d='M34.811 62.745H2.246V37.308H34.81v25.437z' fill='%23d8d8d8'/%3E%3Cpath d='M2.246 7.349h13.475v61.615H2.246z' fill='%23000' opacity='.155'/%3E%3Cpath d='M1.841 65.014h33.363v3.693H1.841z' fill='%234a4a4a'/%3E%3Cpath d='M.251 65.114c-.025-.354-.037-.71-.037-1.07 0-9.157 8.195-16.58 18.304-16.58 10.11 0 18.304 7.423 18.304 16.58 0 .36-.012.716-.037 1.07H.25z' fill='%23d8d8d8'/%3E%3Cpath d='M15.543 47.681c-3.512 4.202-5.565 9.28-5.565 14.749 0 .906.057 1.801.167 2.684H.25c-.025-.354-.037-.71-.037-1.07 0-8.24 6.635-15.075 15.329-16.363z' fill='%23393939' opacity='.278'/%3E%3C/g%3E%3Crect fill='%233e3e3e' height='38.243' rx='19.122' width='82.28' x='62.437' y='166.969'/%3E%3Cpath d='M132.258 111.172l-63.086 1.8c-1.344 0-24.612 38.092-8.77 81.583h91.942s4.422-12.782 3.542-28.451-9.797-54.932-23.628-54.932z' fill='%23d8d8d8'/%3E%3Cpath d='M101.538 194.555H60.402c-15.842-43.491 7.426-81.584 8.77-81.584l32.366-.923z' fill='%234b4b4b' opacity='.071'/%3E%3Cpath d='M65.75 157.21c-1.837 12.869-.078 21.281 5.59 37.345H60.402c-5.835-16.02-6.364-31.306-4.637-44.227l9.984 6.881z' fill='%234b4b4b' opacity='.216'/%3E%3Cpath d='M150.194 136.648c3.31 10.795 5.3 22.47 5.692 29.456.88 15.669-3.542 28.45-3.542 28.45l-15.114-.492c1.93-7.674 2.966-15.81 2.966-24.236 0-7.53-.828-14.828-2.38-21.771 5.325-2.687 9.648-6.656 12.378-11.407z' fill='%23ededed'/%3E%3Cpath d='M104.184 5.929c21.525-.156 38.529 16.162 38.529 31.552v10.294c0 16.845-13.655 30.5-30.5 30.5h-16c-16.845 0-30.5-13.655-30.5-30.5V37.476c0-15.388 16.945-31.392 38.47-31.547z' fill='%23474747'/%3E%3Cpath d='M103 78.275h-6.787c-16.845 0-30.5-13.655-30.5-30.5V37.476C65.713 22.371 82.04 6.673 103 5.953z' fill='%23252424'/%3E%3Cg transform='translate%2853.643 64.778%29'%3E%3Cellipse cx='9.107' cy='9.091' fill='%23bcb7a4' rx='9.107' ry='9.091'/%3E%3Cpath d='M9.107 0v18.181c-5.03 0-9.107-4.07-9.107-9.09C0 4.07 4.077 0 9.107 0z' fill='%23eee7cb'/%3E%3C/g%3E%3Cellipse cx='143.146' cy='73.869' fill='%23f8f0cf' rx='9.107' ry='9.091'/%3E%3Cpath d='M144.088 64.778V82.96c-4.856 0-8.793-4.07-8.793-9.09s3.937-9.09 8.793-9.09z' fill='%23000' opacity='.231'/%3E%3Cpath d='M141.576 51.613v50.14c0 11.435-9.27 20.704-20.703 20.704H85.652c-11.434 0-20.703-9.27-20.703-20.703V51.613z' fill='%23eee7cb'/%3E%3Cpath d='M102.634 121.83V50.986h38.314v50.14c0 11.435-9.27 20.704-20.703 20.704h-17.61z' fill='%23f8f0cf'/%3E%3Cellipse cx='80.337' cy='95.185' fill='%23fff' opacity='.477' rx='9.735' ry='9.718'/%3E%3Crect fill='%23fff' height='69' rx='5' width='58.544' x='11.246' y='185.711'/%3E%3Cpath d='M16.864 192.633h47.307v50.094H16.864z' fill='%23ea2c13'/%3E%3Cellipse cx='40.518' cy='247.863' fill='%23aca6a6' rx='2.661' ry='2.5'/%3E%3Cpath d='M41.314 185.71v69H16.246a5 5 0 0 1-5-5v-59a5 5 0 0 1 5-5z' fill='%23010101' opacity='.054'/%3E%3Cpath d='M46.837 222.103c0 2.798-1.754 4.367-4.343 4.89v2.302h-3.452v-2.118c-1.754-.079-3.647-.393-4.844-.942v-4.184h3.035l.362 1.83c.083.366.167.471.529.576.39.13 1.14.235 2.06.235 1.865 0 2.811-.654 2.811-1.857 0-3.373-8.63-1.255-8.63-7.165 0-2.825 1.977-4.394 4.677-4.917v-2.04h3.48v1.91c1.53.104 2.84.391 3.98.758v4.472l-3.062-.288-.334-1.726c-.083-.392-.194-.47-.556-.575-.446-.105-1.03-.131-1.587-.131-1.615 0-2.756.523-2.756 1.752 0 3.19 8.63 1.334 8.63 7.218z' fill='%23fff'/%3E%3Cpath d='M84.485 132.634c-10.891-.605-19.536-9.628-19.536-20.67V61.428h4.54v23.397c0 11.434 9.27 20.703 20.704 20.703h26.14c11.433 0 20.702-9.269 20.702-20.703V61.428h4.54v50.536c0 10.862-8.364 19.77-19.004 20.634a9.58 9.58 0 0 1-.81.413c-9.096 4.105-14.979 6.157-17.647 6.157-2.537 0-8.888-2.092-19.056-6.276a9.596 9.596 0 0 1-.573-.258z' fill='%23000' opacity='.174'/%3E%3Cellipse cx='125.56' cy='95.185' fill='%23fff' opacity='.477' rx='9.735' ry='9.718'/%3E%3Cpath d='M64.949 107.164V53.628h4.54v26.397c0 11.434 9.27 20.703 20.704 20.703h26.14c11.433 0 20.702-9.269 20.702-20.703V53.628h4.54v53.536c0 10.862-8.364 19.77-19.004 20.634a9.58 9.58 0 0 1-.81.413c-9.096 4.105-14.979 6.157-17.647 6.157-2.537 0-8.888-2.092-19.056-6.276a9.596 9.596 0 0 1-.573-.258c-13.024-6.419-19.536-13.309-19.536-20.67z' fill='%23ca9342'/%3E%3Cpath d='M102 100.728v33.361c-3.271-.696-8.919-2.695-16.942-5.997a9.596 9.596 0 0 1-.573-.258c-13.024-6.419-19.536-13.309-19.536-20.67V53.628h4.54v26.397c0 11.434 9.27 20.703 20.704 20.703z' fill='%23000' opacity='.107'/%3E%3Cpath d='M119.528 110.496c.667-.657.673-1.73.015-2.396a1.697 1.697 0 0 0-2.398-.015c-8.15 8.042-19.563 7.152-26.576.946a1.697 1.697 0 0 0-2.394.145c-.621.7-.556 1.771.145 2.392 8.248 7.299 21.664 8.345 31.208-1.072z' fill='%23434343' fill-rule='nonzero'/%3E%3Cg transform='translate%28256.828 23.87%29'%3E%3Cpath d='M.8.444c4.082.627 19.156 10.345 21.669 15.674' stroke='%23fff' stroke-width='2.949'/%3E%3Cellipse cx='24.667' cy='20.193' fill='%23fff' rx='1.884' ry='1.881'/%3E%3C/g%3E%3Cpath d='M34.481 185.593a5.043 5.043 0 0 1 5.043-5.043h.055a5.043 5.043 0 0 1 5.043 5.043 5.043 5.043 0 0 1 5.043-5.043h.055a5.043 5.043 0 0 1 5.043 5.043v11.619a5.043 5.043 0 0 1-5.043 5.043h-.055a5.043 5.043 0 0 1-5.043-5.043 5.043 5.043 0 0 1-5.043 5.043h-.055a5.043 5.043 0 0 1-5.043-5.043 5.043 5.043 0 0 1-5.043 5.043h-.055a5.043 5.043 0 0 1-5.043-5.043v-11.62a5.043 5.043 0 0 1 5.043-5.042h.055a5.043 5.043 0 0 1 5.043 5.043z' fill='%23000' opacity='.244'/%3E%3Cg transform='rotate%2890 -58.688 113.451%29'%3E%3Crect fill='%23e0d9ba' height='10.141' rx='5.07' width='26.797'/%3E%3Crect fill='%23f8f0cf' height='10.141' rx='5.07' width='21.705' x='5.093'/%3E%3Crect fill='%23e0d9ba' height='10.141' rx='5.07' width='26.797' y='10.141'/%3E%3Crect fill='%23f8f0cf' height='10.141' rx='5.07' width='21.705' x='5.093' y='10.141'/%3E%3Crect fill='%23e0d9ba' height='10.141' rx='5.07' width='26.797' y='20.282'/%3E%3Crect fill='%23f8f0cf' height='10.141' rx='5.07' width='21.705' x='5.093' y='20.282'/%3E%3C/g%3E%3Cg fill-rule='nonzero'%3E%3Cpath d='M189.481 67.552c0-2.982 2.686-5.4 6-5.4s6 2.418 6 5.4v62.504c0 2.983-2.686 5.4-6 5.4s-6-2.417-6-5.4z' fill='%23979797'/%3E%3Cpath d='M195.58 62.197v73.214a5.4 5.4 0 0 1-6.098-5.355V67.552a5.4 5.4 0 0 1 6.098-5.355z' fill='%23151515' opacity='.083'/%3E%3Cpath d='M201.481 82.046h-12V67.552c0-2.982 2.686-5.4 6-5.4s6 2.418 6 5.4z' fill='%23202020' opacity='.376'/%3E%3Cpath d='M227.281 26.141L210.343 9.498a3.036 3.036 0 0 0-2.127-.866H184.26c-.8 0-1.565.312-2.13.866l-16.935 16.643a2.932 2.932 0 0 0-.882 2.092v23.54c0 .783.317 1.535.882 2.09l16.939 16.644c.563.555 1.33.867 2.129.867h23.955c.797 0 1.562-.311 2.127-.866l16.94-16.644a2.936 2.936 0 0 0 .881-2.092V28.233a2.942 2.942 0 0 0-.884-2.092z' fill='%23ea2c13' fill-rule='evenodd'/%3E%3Cpath d='M228.963 24.43a5.346 5.346 0 0 1 1.602 3.803v23.54a5.335 5.335 0 0 1-1.6 3.803l-16.94 16.644a5.435 5.435 0 0 1-3.808 1.554h-23.955a5.434 5.434 0 0 1-3.812-1.555l-16.938-16.644a5.33 5.33 0 0 1-1.6-3.803V28.233a5.33 5.33 0 0 1 1.6-3.803L180.45 7.786a5.437 5.437 0 0 1 3.81-1.554h23.956c1.425 0 2.795.558 3.809 1.554z' stroke='%23e8e8e8' stroke-width='4.8'/%3E%3Cpath d='M196.89 71.374h-12.628c-.8 0-1.566-.312-2.13-.867l-16.937-16.644a2.931 2.931 0 0 1-.882-2.09v-23.54c0-.785.317-1.537.882-2.092l16.937-16.643a3.037 3.037 0 0 1 2.128-.866h12.63z' fill='%23474747' opacity='.059'/%3E%3C/g%3E%3Cpath d='M194.942 50.656l14.58-19.324c-1.068-.842-2.005-.248-2.521.212l-.019.001-12.157 12.436-4.58-5.42c-2.186-2.483-5.156-.589-5.85-.088l10.547 12.182' fill='%23fff'/%3E%3Cg transform='rotate%28180 105.705 60.037%29'%3E%3Crect fill='%23e0d9ba' height='10.658' rx='5.329' width='31.89'/%3E%3Crect fill='%23f8f0cf' height='10.658' rx='5.329' width='25.83' x='6.06'/%3E%3Crect fill='%23e0d9ba' height='10.658' rx='5.329' width='31.89' y='10.658'/%3E%3Crect fill='%23f8f0cf' height='10.658' rx='5.329' width='25.83' x='6.06' y='10.658'/%3E%3Crect fill='%23e0d9ba' height='10.658' rx='5.329' width='31.89' y='21.316'/%3E%3Crect fill='%23f8f0cf' height='10.658' rx='5.329' width='25.83' x='6.06' y='21.316'/%3E%3C/g%3E%3Cpath d='M141.55 67.761v12.754c-6.69 2.35-13.141 5.484-18.254 5.51-9.688.048-15.417-3.928-18.935-3.52-3.519.41-5.047 3.242-15.552 3.52-10.505.277-23.578-7.7-23.809-7.85V67.678c3.823-1.398 14.549-6.99 19.515-6.969 5.188.022 15.546 4.553 19.846 4.15 4.3-.404 14.401-4.02 18.935-4.15 2.436-.07 8.52 2.28 18.255 7.052z' fill='%23000'/%3E%3Cg transform='translate%2877 66%29'%3E%3Cpath d='M8.755 14.257c3.866 0 8.563-3.351 8.563-7.217S12.621.257 8.755.257C4.889.257.28 3.492.28 7.358s4.608 6.899 8.474 6.899z' fill='%23fff'/%3E%3Ccircle cx='8.8' cy='7.5' fill='%23000' r='2.5'/%3E%3C/g%3E%3Cg transform='translate%28113.639 66%29'%3E%3Cpath d='M8.755 14.257c3.866 0 8.563-3.351 8.563-7.217S12.621.257 8.755.257C4.889.257.28 3.492.28 7.358s4.608 6.899 8.474 6.899z' fill='%23fff'/%3E%3Ccircle cx='8.8' cy='7.5' fill='%23000' r='2.5'/%3E%3C/g%3E%3Crect fill='%234e4e4e' height='19.355' rx='9.678' width='94.953' x='56.195' y='35.767'/%3E%3Cpath d='M103 35.767v19.355H65.873c-5.345 0-9.678-4.333-9.678-9.678s4.333-9.677 9.678-9.677z' fill='%23000'/%3E%3C/g%3E%3C/svg%3E\");\n        height: 265px;\n        width: 284px;\n        background-position: 30px center;\n    }", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iu": () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony exports Translator, validator */
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var NODE_TYPES;

(function (NODE_TYPES) {
  NODE_TYPES["PLACEHOLDER"] = "placeholder";
  NODE_TYPES["TEXT"] = "text";
  NODE_TYPES["TAG"] = "tag";
  NODE_TYPES["VOID_TAG"] = "void_tag";
})(NODE_TYPES || (NODE_TYPES = {}));

var isTextNode = function isTextNode(node) {
  return node.type === NODE_TYPES.TEXT;
};
var isTagNode = function isTagNode(node) {
  return node.type === NODE_TYPES.TAG;
};
var isPlaceholderNode = function isPlaceholderNode(node) {
  return node.type === NODE_TYPES.PLACEHOLDER;
};
var isVoidTagNode = function isVoidTagNode(node) {
  return node.type === NODE_TYPES.VOID_TAG;
};
var placeholderNode = function placeholderNode(value) {
  return {
    type: NODE_TYPES.PLACEHOLDER,
    value: value
  };
};
var textNode = function textNode(str) {
  return {
    type: NODE_TYPES.TEXT,
    value: str
  };
};
var tagNode = function tagNode(tagName, children) {
  var value = tagName.trim();
  return {
    type: NODE_TYPES.TAG,
    value: value,
    children: children
  };
};
var voidTagNode = function voidTagNode(tagName) {
  var value = tagName.trim();
  return {
    type: NODE_TYPES.VOID_TAG,
    value: value
  };
};
/**
 * Checks if target is node
 * @param target
 */

var isNode = function isNode(target) {
  if (typeof target === 'string') {
    return false;
  }

  return !!target.type;
};

var STATE;

(function (STATE) {
  /**
   * Parser function switches to the text state when parses simple text,
   * or content between open and close tags
   */
  STATE["TEXT"] = "text";
  /**
   * Parser function switches to the tag state when meets open tag brace ("<"), and switches back,
   * when meets closing tag brace (">")
   */

  STATE["TAG"] = "tag";
  /**
   * Parser function switches to the placeholder state when meets in the text
   * open placeholders brace ("{") and switches back to the text state,
   * when meets close placeholder brace ("}")
   */

  STATE["PLACEHOLDER"] = "placeholder";
})(STATE || (STATE = {}));

var CONTROL_CHARS = {
  TAG_OPEN_BRACE: '<',
  TAG_CLOSE_BRACE: '>',
  CLOSING_TAG_MARK: '/',
  PLACEHOLDER_MARK: '%'
};
/**
 * Checks if text length is enough to create text node
 * If text node created, then if stack is not empty it is pushed into stack,
 * otherwise into result
 * @param context
 */

var createTextNodeIfPossible = function createTextNodeIfPossible(context) {
  var text = context.text;

  if (text.length > 0) {
    var node = textNode(text);

    if (context.stack.length > 0) {
      context.stack.push(node);
    } else {
      context.result.push(node);
    }
  }

  context.text = '';
};
/**
 * Checks if lastFromStack tag has any attributes
 * @param lastFromStack
 */


var hasAttributes = function hasAttributes(lastFromStack) {
  // e.g. "a class" or "a href='#'"
  var tagStrParts = lastFromStack.split(' ');
  return tagStrParts.length > 1;
};
/**
 * Handles text state
 */


var textStateHandler = function textStateHandler(context) {
  var currChar = context.currChar,
      currIdx = context.currIdx; // switches to the tag state

  if (currChar === CONTROL_CHARS.TAG_OPEN_BRACE) {
    context.lastTextStateChangeIdx = currIdx;
    return STATE.TAG;
  } // switches to the placeholder state


  if (currChar === CONTROL_CHARS.PLACEHOLDER_MARK) {
    context.lastTextStateChangeIdx = currIdx;
    return STATE.PLACEHOLDER;
  } // remains in the text state


  context.text += currChar;
  return STATE.TEXT;
};
/**
 * Handles placeholder state
 * @param context
 */


var placeholderStateHandler = function placeholderStateHandler(context) {
  var currChar = context.currChar,
      currIdx = context.currIdx,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx,
      placeholder = context.placeholder,
      stack = context.stack,
      result = context.result,
      str = context.str;

  if (currChar === CONTROL_CHARS.PLACEHOLDER_MARK) {
    // if distance between current index and last state change equal to 1,
    // it means that placeholder mark was escaped by itself e.g. "%%",
    // so we return to the text state
    if (currIdx - lastTextStateChangeIdx === 1) {
      context.text += str.substring(lastTextStateChangeIdx, currIdx);
      return STATE.TEXT;
    }

    createTextNodeIfPossible(context);
    var node = placeholderNode(placeholder); // push node to the appropriate stack

    if (stack.length > 0) {
      stack.push(node);
    } else {
      result.push(node);
    }

    context.placeholder = '';
    return STATE.TEXT;
  }

  context.placeholder += currChar;
  return STATE.PLACEHOLDER;
};
/**
 * Switches current state to the tag state and returns tag state handler
 */


var tagStateHandler = function tagStateHandler(context) {
  var currChar = context.currChar,
      text = context.text,
      stack = context.stack,
      result = context.result,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx,
      currIdx = context.currIdx,
      str = context.str;
  var tag = context.tag; // if found tag end ">"

  if (currChar === CONTROL_CHARS.TAG_CLOSE_BRACE) {
    // if the tag is close tag e.g. </a>
    if (tag.indexOf(CONTROL_CHARS.CLOSING_TAG_MARK) === 0) {
      // remove slash from tag
      tag = tag.substring(1);
      var children = [];

      if (text.length > 0) {
        children.push(textNode(text));
        context.text = '';
      }

      var pairTagFound = false; // looking for the pair to the close tag

      while (!pairTagFound && stack.length > 0) {
        var lastFromStack = stack.pop(); // if tag from stack equal to close tag

        if (lastFromStack === tag) {
          // create tag node
          var node = tagNode(tag, children); // and add it to the appropriate stack

          if (stack.length > 0) {
            stack.push(node);
          } else {
            result.push(node);
          }

          children = [];
          pairTagFound = true;
        } else if (isNode(lastFromStack)) {
          // add nodes between close tag and open tag to the children
          children.unshift(lastFromStack);
        } else {
          if (typeof lastFromStack === 'string' && hasAttributes(lastFromStack)) {
            throw new Error("Tags in string should not have attributes: ".concat(str));
          } else {
            throw new Error("String has unbalanced tags: ".concat(str));
          }
        }

        if (stack.length === 0 && children.length > 0) {
          throw new Error("String has unbalanced tags: ".concat(str));
        }
      }

      context.tag = '';
      return STATE.TEXT;
    } // if the tag is void tag e.g. <img/>


    if (tag.lastIndexOf(CONTROL_CHARS.CLOSING_TAG_MARK) === tag.length - 1) {
      tag = tag.substring(0, tag.length - 1);
      createTextNodeIfPossible(context);

      var _node = voidTagNode(tag); // add node to the appropriate stack


      if (stack.length > 0) {
        stack.push(_node);
      } else {
        result.push(_node);
      }

      context.tag = '';
      return STATE.TEXT;
    }

    createTextNodeIfPossible(context);
    stack.push(tag);
    context.tag = '';
    return STATE.TEXT;
  } // If we meet open tag "<" it means that we wrongly moved into tag state


  if (currChar === CONTROL_CHARS.TAG_OPEN_BRACE) {
    context.text += str.substring(lastTextStateChangeIdx, currIdx);
    context.lastTextStateChangeIdx = currIdx;
    context.tag = '';
    return STATE.TAG;
  }

  context.tag += currChar;
  return STATE.TAG;
};
/**
 * Parses string into AST (abstract syntax tree) and returns it
 * e.g.
 * parse("String to <a>translate</a>") ->
 * ```
 *      [
 *           { type: 'text', value: 'String to ' },
 *           { type: 'tag', value: 'a', children: [{ type: 'text', value: 'translate' }] }
 *      ];
 * ```
 * Empty string is parsed into empty AST (abstract syntax tree): "[]"
 * If founds unbalanced tags, it throws error about it
 *
 * @param {string} str - message in simplified ICU like syntax without plural support
 */


var parser = function parser() {
  var _STATE_HANDLERS;

  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = {
    /**
     * Stack is used to keep and search nested tag nodes
     */
    stack: [],

    /**
     * Result is stack where function allocates nodes
     */
    result: [],

    /**
     * Current char index
     */
    currIdx: 0,

    /**
     * Saves index of the last state change from the text state,
     * used to restore parsed text if we moved into other state wrongly
     */
    lastTextStateChangeIdx: 0,

    /**
     * Accumulated tag value
     */
    tag: '',

    /**
     * Accumulated text value
     */
    text: '',

    /**
     * Accumulated placeholder value
     */
    placeholder: '',

    /**
     * Parsed string
     */
    str: str
  };
  var STATE_HANDLERS = (_STATE_HANDLERS = {}, _defineProperty(_STATE_HANDLERS, STATE.TEXT, textStateHandler), _defineProperty(_STATE_HANDLERS, STATE.PLACEHOLDER, placeholderStateHandler), _defineProperty(_STATE_HANDLERS, STATE.TAG, tagStateHandler), _STATE_HANDLERS); // Start from text state

  var currentState = STATE.TEXT;

  while (context.currIdx < str.length) {
    context.currChar = str[context.currIdx];
    var currentStateHandler = STATE_HANDLERS[currentState];
    currentState = currentStateHandler(context);
    context.currIdx += 1;
  }

  var result = context.result,
      text = context.text,
      stack = context.stack,
      lastTextStateChangeIdx = context.lastTextStateChangeIdx; // Means that tag or placeholder nodes were not closed, so we consider them as text

  if (currentState !== STATE.TEXT) {
    var restText = str.substring(lastTextStateChangeIdx);

    if ((restText + text).length > 0) {
      result.push(textNode(text + restText));
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (text.length > 0) {
      result.push(textNode(text));
    }
  }

  if (stack.length > 0) {
    throw new Error("String has unbalanced tags: ".concat(context.str));
  }

  return result;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Helper functions used by default to assemble strings from tag nodes
 * @param tagName
 * @param children
 */

var createStringElement = function createStringElement(tagName, children) {
  if (children) {
    return "<".concat(tagName, ">").concat(children, "</").concat(tagName, ">");
  }

  return "<".concat(tagName, "/>");
};
/**
 * Creates map with default values for tag converters
 */


var createDefaultValues = function createDefaultValues() {
  return {
    p: function p(children) {
      return createStringElement('p', children);
    },
    b: function b(children) {
      return createStringElement('b', children);
    },
    strong: function strong(children) {
      return createStringElement('strong', children);
    },
    tt: function tt(children) {
      return createStringElement('tt', children);
    },
    s: function s(children) {
      return createStringElement('s', children);
    },
    i: function i(children) {
      return createStringElement('i', children);
    }
  };
};
/**
 * This function accepts an AST (abstract syntax tree) which is a result
 * of the parser function call, and converts tree nodes into array of strings replacing node
 * values with provided values.
 * Values is a map with functions or strings, where each key is related to placeholder value
 * or tag value
 * e.g.
 * string "text <tag>tag text</tag> %placeholder%" is parsed into next AST
 *
 *      [
 *          { type: 'text', value: 'text ' },
 *          {
 *              type: 'tag',
 *              value: 'tag',
 *              children: [{ type: 'text', value: 'tag text' }],
 *          },
 *          { type: 'text', value: ' ' },
 *          { type: 'placeholder', value: 'placeholder' }
 *      ];
 *
 * this AST after format and next values
 *
 *      {
 *          // here used template strings, but it can be react components as well
 *          tag: (chunks) => `<b>${chunks}</b>`,
 *          placeholder: 'placeholder text'
 *      }
 *
 * will return next array
 *
 * [ 'text ', '<b>tag text</b>', ' ', 'placeholder text' ]
 *
 * as you can see, <tag> was replaced by <b>, and placeholder was replaced by placeholder text
 *
 * @param ast - AST (abstract syntax tree)
 * @param values
 */


var format = function format() {
  var ast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var result = [];

  var tmplValues = _objectSpread(_objectSpread({}, createDefaultValues()), values);

  var i = 0;

  while (i < ast.length) {
    var currentNode = ast[i]; // if current node is text node, there is nothing to change, append value to the result

    if (isTextNode(currentNode)) {
      result.push(currentNode.value);
    } else if (isTagNode(currentNode)) {
      var children = _toConsumableArray(format(currentNode.children, tmplValues));

      var value = tmplValues[currentNode.value];

      if (value) {
        // TODO consider using strong typing
        if (typeof value === 'function') {
          result.push(value(children.join('')));
        } else {
          result.push(value);
        }
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    } else if (isVoidTagNode(currentNode)) {
      var _value = tmplValues[currentNode.value]; // TODO consider using strong typing

      if (_value && typeof _value === 'string') {
        result.push(_value);
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    } else if (isPlaceholderNode(currentNode)) {
      var _value2 = tmplValues[currentNode.value]; // TODO consider using strong typing

      if (_value2 && typeof _value2 === 'string') {
        result.push(_value2);
      } else {
        throw new Error("Value ".concat(currentNode.value, " wasn't provided"));
      }
    }

    i += 1;
  }

  return result;
};
/**
 * Function gets AST (abstract syntax tree) or string and formats messages,
 * replacing values accordingly
 * e.g.
 *      const message = formatter('<a>some text</a>', {
 *          a: (chunks) => `<a href="#">${chunks}</a>`,
 *      });
 *      console.log(message); // ['<a href="#">some text</a>']
 * @param message
 * @param [values]
 */


var formatter = function formatter(message, values) {
  var ast = parser(message);
  var preparedValues = {}; // convert values to strings if not a function

  if (values) {
    Object.keys(values).forEach(function (key) {
      var value = values[key]; // TODO consider using strong typing

      if (typeof value === 'function') {
        preparedValues[key] = value;
      } else {
        preparedValues[key] = String(value);
      }
    });
  }

  return format(ast, preparedValues);
};

var _pluralFormsCount;

var AvailableLocales;

(function (AvailableLocales) {
  AvailableLocales["az"] = "az";
  AvailableLocales["bo"] = "bo";
  AvailableLocales["dz"] = "dz";
  AvailableLocales["id"] = "id";
  AvailableLocales["ja"] = "ja";
  AvailableLocales["jv"] = "jv";
  AvailableLocales["ka"] = "ka";
  AvailableLocales["km"] = "km";
  AvailableLocales["kn"] = "kn";
  AvailableLocales["ko"] = "ko";
  AvailableLocales["ms"] = "ms";
  AvailableLocales["th"] = "th";
  AvailableLocales["tr"] = "tr";
  AvailableLocales["vi"] = "vi";
  AvailableLocales["zh"] = "zh";
  AvailableLocales["af"] = "af";
  AvailableLocales["bn"] = "bn";
  AvailableLocales["bg"] = "bg";
  AvailableLocales["ca"] = "ca";
  AvailableLocales["da"] = "da";
  AvailableLocales["de"] = "de";
  AvailableLocales["el"] = "el";
  AvailableLocales["en"] = "en";
  AvailableLocales["eo"] = "eo";
  AvailableLocales["es"] = "es";
  AvailableLocales["et"] = "et";
  AvailableLocales["eu"] = "eu";
  AvailableLocales["fa"] = "fa";
  AvailableLocales["fi"] = "fi";
  AvailableLocales["fo"] = "fo";
  AvailableLocales["fur"] = "fur";
  AvailableLocales["fy"] = "fy";
  AvailableLocales["gl"] = "gl";
  AvailableLocales["gu"] = "gu";
  AvailableLocales["ha"] = "ha";
  AvailableLocales["he"] = "he";
  AvailableLocales["hu"] = "hu";
  AvailableLocales["is"] = "is";
  AvailableLocales["it"] = "it";
  AvailableLocales["ku"] = "ku";
  AvailableLocales["lb"] = "lb";
  AvailableLocales["ml"] = "ml";
  AvailableLocales["mn"] = "mn";
  AvailableLocales["mr"] = "mr";
  AvailableLocales["nah"] = "nah";
  AvailableLocales["nb"] = "nb";
  AvailableLocales["ne"] = "ne";
  AvailableLocales["nl"] = "nl";
  AvailableLocales["nn"] = "nn";
  AvailableLocales["no"] = "no";
  AvailableLocales["oc"] = "oc";
  AvailableLocales["om"] = "om";
  AvailableLocales["or"] = "or";
  AvailableLocales["pa"] = "pa";
  AvailableLocales["pap"] = "pap";
  AvailableLocales["ps"] = "ps";
  AvailableLocales["pt"] = "pt";
  AvailableLocales["so"] = "so";
  AvailableLocales["sq"] = "sq";
  AvailableLocales["sv"] = "sv";
  AvailableLocales["sw"] = "sw";
  AvailableLocales["ta"] = "ta";
  AvailableLocales["te"] = "te";
  AvailableLocales["tk"] = "tk";
  AvailableLocales["ur"] = "ur";
  AvailableLocales["zu"] = "zu";
  AvailableLocales["am"] = "am";
  AvailableLocales["bh"] = "bh";
  AvailableLocales["fil"] = "fil";
  AvailableLocales["fr"] = "fr";
  AvailableLocales["gun"] = "gun";
  AvailableLocales["hi"] = "hi";
  AvailableLocales["hy"] = "hy";
  AvailableLocales["ln"] = "ln";
  AvailableLocales["mg"] = "mg";
  AvailableLocales["nso"] = "nso";
  AvailableLocales["xbr"] = "xbr";
  AvailableLocales["ti"] = "ti";
  AvailableLocales["wa"] = "wa";
  AvailableLocales["be"] = "be";
  AvailableLocales["bs"] = "bs";
  AvailableLocales["hr"] = "hr";
  AvailableLocales["ru"] = "ru";
  AvailableLocales["sr"] = "sr";
  AvailableLocales["uk"] = "uk";
  AvailableLocales["cs"] = "cs";
  AvailableLocales["sk"] = "sk";
  AvailableLocales["ga"] = "ga";
  AvailableLocales["lt"] = "lt";
  AvailableLocales["sl"] = "sl";
  AvailableLocales["mk"] = "mk";
  AvailableLocales["mt"] = "mt";
  AvailableLocales["lv"] = "lv";
  AvailableLocales["pl"] = "pl";
  AvailableLocales["cy"] = "cy";
  AvailableLocales["ro"] = "ro";
  AvailableLocales["ar"] = "ar";
})(AvailableLocales || (AvailableLocales = {}));

var getPluralFormId = function getPluralFormId(locale, number) {
  var _supportedForms;

  if (number === 0) {
    return 0;
  }

  var slavNum = number % 10 === 1 && number % 100 !== 11 ? 1 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 2 : 3;
  var supportedForms = (_supportedForms = {}, _defineProperty(_supportedForms, AvailableLocales.az, 1), _defineProperty(_supportedForms, AvailableLocales.bo, 1), _defineProperty(_supportedForms, AvailableLocales.dz, 1), _defineProperty(_supportedForms, AvailableLocales.id, 1), _defineProperty(_supportedForms, AvailableLocales.ja, 1), _defineProperty(_supportedForms, AvailableLocales.jv, 1), _defineProperty(_supportedForms, AvailableLocales.ka, 1), _defineProperty(_supportedForms, AvailableLocales.km, 1), _defineProperty(_supportedForms, AvailableLocales.kn, 1), _defineProperty(_supportedForms, AvailableLocales.ko, 1), _defineProperty(_supportedForms, AvailableLocales.ms, 1), _defineProperty(_supportedForms, AvailableLocales.th, 1), _defineProperty(_supportedForms, AvailableLocales.tr, 1), _defineProperty(_supportedForms, AvailableLocales.vi, 1), _defineProperty(_supportedForms, AvailableLocales.zh, 1), _defineProperty(_supportedForms, AvailableLocales.af, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.bn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.bg, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ca, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.da, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.de, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.el, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.en, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.eo, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.es, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.et, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.eu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fa, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fi, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fo, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fur, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.fy, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.gl, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.gu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ha, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.he, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.hu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.is, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.it, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ku, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.lb, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ml, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mr, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nah, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nb, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ne, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nl, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.nn, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.no, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.oc, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.om, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.or, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pa, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pap, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ps, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pt, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.so, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sq, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sv, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.sw, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ta, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.te, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.tk, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.ur, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.zu, number === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.am, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.bh, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.fil, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.fr, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.gun, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.hi, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.hy, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.ln, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.mg, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.nso, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.xbr, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.ti, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.wa, number === 0 || number === 1 ? 0 : 1), _defineProperty(_supportedForms, AvailableLocales.be, slavNum), _defineProperty(_supportedForms, AvailableLocales.bs, slavNum), _defineProperty(_supportedForms, AvailableLocales.hr, slavNum), _defineProperty(_supportedForms, AvailableLocales.ru, slavNum), _defineProperty(_supportedForms, AvailableLocales.sr, slavNum), _defineProperty(_supportedForms, AvailableLocales.uk, slavNum), _defineProperty(_supportedForms, AvailableLocales.cs, number === 1 ? 1 : number >= 2 && number <= 4 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.sk, number === 1 ? 1 : number >= 2 && number <= 4 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ga, number === 1 ? 1 : number === 2 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.lt, number % 10 === 1 && number % 100 !== 11 ? 1 : number % 10 >= 2 && (number % 100 < 10 || number % 100 >= 20) ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.sl, number % 100 === 1 ? 1 : number % 100 === 2 ? 2 : number % 100 === 3 || number % 100 === 4 ? 3 : 4), _defineProperty(_supportedForms, AvailableLocales.mk, number % 10 === 1 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.mt, number === 1 ? 1 : number === 0 || number % 100 > 1 && number % 100 < 11 ? 2 : number % 100 > 10 && number % 100 < 20 ? 3 : 4), _defineProperty(_supportedForms, AvailableLocales.lv, number === 0 ? 0 : number % 10 === 1 && number % 100 !== 11 ? 1 : 2), _defineProperty(_supportedForms, AvailableLocales.pl, number === 1 ? 1 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 12 || number % 100 > 14) ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.cy, number === 1 ? 0 : number === 2 ? 1 : number === 8 || number === 11 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ro, number === 1 ? 1 : number === 1 || number % 100 > 0 && number % 100 < 20 ? 2 : 3), _defineProperty(_supportedForms, AvailableLocales.ar, number === 0 ? 0 : number === 1 ? 1 : number === 2 ? 2 : number % 100 >= 3 && number % 100 <= 10 ? 3 : number % 100 >= 11 && number % 100 <= 99 ? 4 : 5), _supportedForms);
  return supportedForms[locale];
};

var pluralFormsCount = (_pluralFormsCount = {}, _defineProperty(_pluralFormsCount, AvailableLocales.az, 2), _defineProperty(_pluralFormsCount, AvailableLocales.bo, 2), _defineProperty(_pluralFormsCount, AvailableLocales.dz, 2), _defineProperty(_pluralFormsCount, AvailableLocales.id, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ja, 2), _defineProperty(_pluralFormsCount, AvailableLocales.jv, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ka, 2), _defineProperty(_pluralFormsCount, AvailableLocales.km, 2), _defineProperty(_pluralFormsCount, AvailableLocales.kn, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ko, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ms, 2), _defineProperty(_pluralFormsCount, AvailableLocales.th, 2), _defineProperty(_pluralFormsCount, AvailableLocales.tr, 2), _defineProperty(_pluralFormsCount, AvailableLocales.vi, 2), _defineProperty(_pluralFormsCount, AvailableLocales.zh, 2), _defineProperty(_pluralFormsCount, AvailableLocales.af, 3), _defineProperty(_pluralFormsCount, AvailableLocales.bn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.bg, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ca, 3), _defineProperty(_pluralFormsCount, AvailableLocales.da, 3), _defineProperty(_pluralFormsCount, AvailableLocales.de, 3), _defineProperty(_pluralFormsCount, AvailableLocales.el, 3), _defineProperty(_pluralFormsCount, AvailableLocales.en, 3), _defineProperty(_pluralFormsCount, AvailableLocales.eo, 3), _defineProperty(_pluralFormsCount, AvailableLocales.es, 3), _defineProperty(_pluralFormsCount, AvailableLocales.et, 3), _defineProperty(_pluralFormsCount, AvailableLocales.eu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fa, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fi, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fo, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fur, 3), _defineProperty(_pluralFormsCount, AvailableLocales.fy, 3), _defineProperty(_pluralFormsCount, AvailableLocales.gl, 3), _defineProperty(_pluralFormsCount, AvailableLocales.gu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ha, 3), _defineProperty(_pluralFormsCount, AvailableLocales.he, 3), _defineProperty(_pluralFormsCount, AvailableLocales.hu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.is, 3), _defineProperty(_pluralFormsCount, AvailableLocales.it, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ku, 3), _defineProperty(_pluralFormsCount, AvailableLocales.lb, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ml, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mr, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nah, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nb, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ne, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nl, 3), _defineProperty(_pluralFormsCount, AvailableLocales.nn, 3), _defineProperty(_pluralFormsCount, AvailableLocales.no, 3), _defineProperty(_pluralFormsCount, AvailableLocales.oc, 3), _defineProperty(_pluralFormsCount, AvailableLocales.om, 3), _defineProperty(_pluralFormsCount, AvailableLocales.or, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pa, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pap, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ps, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pt, 3), _defineProperty(_pluralFormsCount, AvailableLocales.so, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sq, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sv, 3), _defineProperty(_pluralFormsCount, AvailableLocales.sw, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ta, 3), _defineProperty(_pluralFormsCount, AvailableLocales.te, 3), _defineProperty(_pluralFormsCount, AvailableLocales.tk, 3), _defineProperty(_pluralFormsCount, AvailableLocales.ur, 3), _defineProperty(_pluralFormsCount, AvailableLocales.zu, 3), _defineProperty(_pluralFormsCount, AvailableLocales.am, 2), _defineProperty(_pluralFormsCount, AvailableLocales.bh, 2), _defineProperty(_pluralFormsCount, AvailableLocales.fil, 2), _defineProperty(_pluralFormsCount, AvailableLocales.fr, 2), _defineProperty(_pluralFormsCount, AvailableLocales.gun, 2), _defineProperty(_pluralFormsCount, AvailableLocales.hi, 2), _defineProperty(_pluralFormsCount, AvailableLocales.hy, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ln, 2), _defineProperty(_pluralFormsCount, AvailableLocales.mg, 2), _defineProperty(_pluralFormsCount, AvailableLocales.nso, 2), _defineProperty(_pluralFormsCount, AvailableLocales.xbr, 2), _defineProperty(_pluralFormsCount, AvailableLocales.ti, 2), _defineProperty(_pluralFormsCount, AvailableLocales.wa, 2), _defineProperty(_pluralFormsCount, AvailableLocales.be, 4), _defineProperty(_pluralFormsCount, AvailableLocales.bs, 4), _defineProperty(_pluralFormsCount, AvailableLocales.hr, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ru, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sr, 4), _defineProperty(_pluralFormsCount, AvailableLocales.uk, 4), _defineProperty(_pluralFormsCount, AvailableLocales.cs, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sk, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ga, 4), _defineProperty(_pluralFormsCount, AvailableLocales.lt, 4), _defineProperty(_pluralFormsCount, AvailableLocales.sl, 5), _defineProperty(_pluralFormsCount, AvailableLocales.mk, 3), _defineProperty(_pluralFormsCount, AvailableLocales.mt, 5), _defineProperty(_pluralFormsCount, AvailableLocales.lv, 3), _defineProperty(_pluralFormsCount, AvailableLocales.pl, 4), _defineProperty(_pluralFormsCount, AvailableLocales.cy, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ro, 4), _defineProperty(_pluralFormsCount, AvailableLocales.ar, 6), _pluralFormsCount);
var PLURAL_STRING_DELIMITER = '|';

var checkForms = function checkForms(str, locale, key) {
  var forms = str.split(PLURAL_STRING_DELIMITER);

  if (forms.length !== pluralFormsCount[locale]) {
    throw new Error("Invalid plural string \"".concat(key, "\" for locale ").concat(locale, ": ").concat(forms.length, " given; need: ").concat(pluralFormsCount[locale]));
  }
};
/**
 * Checks if plural forms are valid
 * @param str - message string
 * @param locale - message locale
 * @param key - message key, used for clearer log message
 */


var isPluralFormValid = function isPluralFormValid(str, locale, key) {
  try {
    checkForms(str, locale, key);
    return true;
  } catch (error) {
    return false;
  }
};
/**
 * Returns plural form corresponding to number
 * @param str
 * @param number
 * @param locale - current locale
 * @param key - message key
 */

var getForm = function getForm(str, number, locale, key) {
  checkForms(str, locale, key);
  var forms = str.split(PLURAL_STRING_DELIMITER);
  var currentForm = getPluralFormId(locale, number);
  return forms[currentForm].trim();
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultMessageConstructor = function defaultMessageConstructor(formatted) {
  return formatted.join('');
};

var Translator = /*#__PURE__*/function () {
  function Translator(i18n, messageConstructor, values) {
    _classCallCheck(this, Translator);

    this.i18n = i18n;
    this.messageConstructor = messageConstructor || defaultMessageConstructor;
    this.values = values || {};
  }
  /**
   * Retrieves message and translates it, substituting parameters where necessary
   * @param key - translation message key
   * @param params - values used to substitute placeholders and tags
   */


  _createClass(Translator, [{
    key: "getMessage",
    value: function getMessage(key) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var message = this.i18n.getMessage(key);

      if (!message) {
        message = this.i18n.getBaseMessage(key);

        if (!message) {
          throw new Error("Was unable to find message for key: \"".concat(key, "\""));
        }
      }

      var formatted = formatter(message, _objectSpread$1(_objectSpread$1({}, this.values), params));
      return this.messageConstructor(formatted);
    }
    /**
     * Retrieves correct plural form and translates it
     * @param key - translation message key
     * @param number - plural form number
     * @param params - values used to substitute placeholders or tags if necessary,
     * if params has "count" property it will be overridden by number (plural form number)
     */

  }, {
    key: "getPlural",
    value: function getPlural(key, number) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var message = this.i18n.getMessage(key);
      var language = this.i18n.getUILanguage();

      if (!message) {
        message = this.i18n.getBaseMessage(key);

        if (!message) {
          throw new Error("Was unable to find message for key: \"".concat(key, "\""));
        }

        language = this.i18n.getBaseUILanguage();
      }

      var form = getForm(message, number, language, key);
      var formatted = formatter(form, _objectSpread$1(_objectSpread$1(_objectSpread$1({}, this.values), params), {}, {
        count: number
      }));
      return this.messageConstructor(formatted);
    }
  }]);

  return Translator;
}();

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Creates translation function for strings used in the React components
 * We do not import React directly, because translator module can be used
 * in the modules without React too
 *
 * e.g.
 * const translateReact = createReactTranslator(getMessage, React);
 * in locales folder you should have messages.json file
 * ```
 * message:
 *     "popup_auth_agreement_consent": {
 *          "message": "You agree to our <eula>EULA</eula>",
 *      },
 * ```
 *
 * this message can be retrieved and translated into react components next way:
 *
 * const component = translateReact('popup_auth_agreement_consent', {
 *          eula: (chunks) => (
 *              <button
 *                  className="auth__privacy-link"
 *                  onClick={handleEulaClick}
 *              >
 *                  {chunks}
 *              </button>
 *          ),
 *       });
 *
 * Note how functions in the values argument can be used with handlers
 *
 * @param i18n - object with methods which get translated message by key and return current locale
 * @param React - instance of react library
 */

var createReactTranslator = function createReactTranslator(i18n, react, defaults) {
  /**
   * Helps to build nodes without values
   *
   * @param tagName
   * @param children
   */
  var createReactElement = function createReactElement(tagName, children) {
    if (children) {
      return react.createElement(tagName, null, react.Children.toArray(children));
    }

    return react.createElement(tagName, null);
  };
  /**
   * Function creates default values to be used if user didn't provide function values for tags
   */


  var createDefaultValues = function createDefaultValues() {
    var externalDefaults = {};

    if (defaults) {
      defaults.tags.forEach(function (t) {
        externalDefaults[t.key] = function (children) {
          return createReactElement(t.createdTag, children);
        };
      });
    }

    if (defaults !== null && defaults !== void 0 && defaults.override) {
      return externalDefaults;
    }

    return _objectSpread$2({
      p: function p(children) {
        return createReactElement('p', children);
      },
      b: function b(children) {
        return createReactElement('b', children);
      },
      strong: function strong(children) {
        return createReactElement('strong', children);
      },
      tt: function tt(children) {
        return createReactElement('tt', children);
      },
      s: function s(children) {
        return createReactElement('s', children);
      },
      i: function i(children) {
        return createReactElement('i', children);
      }
    }, externalDefaults);
  };

  var reactMessageConstructor = function reactMessageConstructor(formatted) {
    var reactChildren = react.Children.toArray(formatted); // if there is only strings in the array we join them

    if (reactChildren.every(function (child) {
      return typeof child === 'string';
    })) {
      return reactChildren.join('');
    }

    return reactChildren;
  };

  var defaultValues = createDefaultValues();
  return new Translator(i18n, reactMessageConstructor, defaultValues);
};

var r,
    f;

function A(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    A(n, l);
  }) : l.push(n)), l;
}

r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = 0;

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Creates translation function for strings used in the Preact components
 * We do not import Preact directly, because translator module can be used
 * in the modules without Preact too
 *
 * e.g.
 * const translatePreact = createPreactTranslator(getMessage, Preact);
 * in locales folder you should have messages.json file
 * ```
 * message:
 *     "popup_auth_agreement_consent": {
 *          "message": "You agree to our <eula>EULA</eula>",
 *      },
 * ```
 *
 * this message can be retrieved and translated into preact components next way:
 *
 * const component = translatePreact('popup_auth_agreement_consent', {
 *          eula: (chunks) => (
 *              <button
 *                  className="auth__privacy-link"
 *                  onClick={handleEulaClick}
 *              >
 *                  {chunks}
 *              </button>
 *          ),
 *       });
 *
 * Note how functions in the values argument can be used with handlers
 *
 * @param i18n - object with methods which get translated message by key and return current locale
 * @param Preact - instance of preact library
 */

var createPreactTranslator = function createPreactTranslator(i18n, preact, defaults) {
  /**
   * Helps to build nodes without values
   *
   * @param tagName
   * @param children
   */
  var createPreactElement = function createPreactElement(tagName, children) {
    if (children) {
      return preact.createElement(tagName, null, A(children));
    }

    return preact.createElement(tagName, null);
  };
  /**
   * Function creates default values to be used if user didn't provide function values for tags
   */


  var createDefaultValues = function createDefaultValues() {
    var externalDefaults = {};

    if (defaults) {
      defaults.tags.forEach(function (t) {
        externalDefaults[t.key] = function (children) {
          return createPreactElement(t.createdTag, children);
        };
      });
    }

    if (defaults !== null && defaults !== void 0 && defaults.override) {
      return externalDefaults;
    }

    return _objectSpread$3({
      p: function p(children) {
        return createPreactElement('p', children);
      },
      b: function b(children) {
        return createPreactElement('b', children);
      },
      strong: function strong(children) {
        return createPreactElement('strong', children);
      },
      tt: function tt(children) {
        return createPreactElement('tt', children);
      },
      s: function s(children) {
        return createPreactElement('s', children);
      },
      i: function i(children) {
        return createPreactElement('i', children);
      }
    }, externalDefaults);
  };

  var preactMessageConstructor = function preactMessageConstructor(formatted) {
    var preactChildren = A(formatted); // if there is only strings in the array we join them

    if (preactChildren.every(function (child) {
      return typeof child === 'string';
    })) {
      return preactChildren.join('');
    }

    return preactChildren;
  };

  var defaultValues = createDefaultValues();
  return new Translator(i18n, preactMessageConstructor, defaultValues);
};

/**
 * Creates translator instance strings, by default for simple strings
 * @param i18n - function which returns translated message by key
 * @param messageConstructor - function that will collect messages
 * @param values - map with default values for tag converters
 */

var createTranslator = function createTranslator(i18n, messageConstructor, values) {
  return new Translator(i18n, messageConstructor, values);
};

var translate = {
  createTranslator: createTranslator,
  createReactTranslator: createReactTranslator,
  createPreactTranslator: createPreactTranslator
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Compares two AST (abstract syntax tree) structures,
 * view tests for examples
 * @param baseAst
 * @param targetAst
 */

var areAstStructuresSame = function areAstStructuresSame(baseAst, targetAst) {
  var textNodeFilter = function textNodeFilter(node) {
    return !isTextNode(node);
  };

  var filteredBaseAst = baseAst.filter(textNodeFilter);
  var filteredTargetAst = targetAst.filter(textNodeFilter); // if AST structures have different lengths, they are not equal

  if (filteredBaseAst.length !== filteredTargetAst.length) {
    return false;
  }

  var _loop = function _loop(i) {
    var baseNode = filteredBaseAst[i];
    var targetNode = filteredTargetAst.find(function (node) {
      return node.type === baseNode.type && node.value === baseNode.value;
    });

    if (!targetNode) {
      return {
        v: false
      };
    }

    if (targetNode.children && baseNode.children) {
      var areChildrenSame = areAstStructuresSame(baseNode.children, targetNode.children);

      if (!areChildrenSame) {
        return {
          v: false
        };
      }
    }
  };

  for (var i = 0; i < filteredBaseAst.length; i += 1) {
    var _ret = _loop(i);

    if (_typeof(_ret) === "object") return _ret.v;
  }

  return true;
};
/**
 * Validates translation against base string by AST (abstract syntax tree) structure
 * @param baseMessage - base message
 * @param translatedMessage - translated message
 */


var isTranslationValid = function isTranslationValid(baseMessage, translatedMessage) {
  var baseMessageAst = parser(baseMessage);
  var translatedMessageAst = parser(translatedMessage);
  return areAstStructuresSame(baseMessageAst, translatedMessageAst);
};
var validator = {
  isTranslationValid: isTranslationValid,
  isPluralFormValid: isPluralFormValid
};




/***/ }),

/***/ 9633:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 1389:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 5491:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 8190:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 664:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 7630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 9532:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 2563:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 3679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      });

      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */


        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {}
          /* wrappers */
          , {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      }); // Keep track if the deprecation warning has been logged at least once.

      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});


/***/ }),

/***/ 2380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x0": () => (/* binding */ nanoid)
/* harmony export */ });
/* unused harmony exports customAlphabet, customRandom, random */

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [374], () => (__webpack_exec__(7302)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);