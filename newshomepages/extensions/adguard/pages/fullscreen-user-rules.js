(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([[632],{

/***/ 120:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(846);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6644);
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.js
var reactTranslator = __webpack_require__(8647);
// EXTERNAL MODULE: ./Extension/src/common/translators/i18n.js
var i18n = __webpack_require__(7122);
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 17 modules
var mobxreact_esm = __webpack_require__(2497);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/UserRulesEditor/index.js + 3 modules
var UserRulesEditor = __webpack_require__(3322);
// EXTERNAL MODULE: ./Extension/src/common/constants.js
var constants = __webpack_require__(4568);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(7916);
// EXTERNAL MODULE: ./Extension/src/common/log.js
var log = __webpack_require__(9224);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js
var initializerDefineProperty = __webpack_require__(5497);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js
var applyDecoratedDescriptor = __webpack_require__(6813);
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(1056);
;// CONCATENATED MODULE: ./Extension/src/pages/fullscreen-user-rules/stores/FullscreenUserRulesStore.js




var _class, _descriptor;





let FullscreenUserRulesStore = (_class = class FullscreenUserRulesStore {
  constructor() {
    (0,initializerDefineProperty/* default */.Z)(this, "settings", _descriptor, this);

    (0,mobx_esm/* makeObservable */.rC)(this);
  }

  async getFullscreenUserRulesData() {
    const {
      settings
    } = await messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.GET_USER_RULES_EDITOR_DATA */.oK.GET_USER_RULES_EDITOR_DATA);
    (0,mobx_esm/* runInAction */.z)(() => {
      this.settings = settings;
    });
  }

  get appearanceTheme() {
    if (!this.settings) {
      return null;
    }

    return this.settings.values[this.settings.names.APPEARANCE_THEME];
  }

}, (_descriptor = (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "settings", [mobx_esm/* observable */.LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "getFullscreenUserRulesData", [mobx_esm/* action */.aD], Object.getOwnPropertyDescriptor(_class.prototype, "getFullscreenUserRulesData"), _class.prototype), (0,applyDecoratedDescriptor/* default */.Z)(_class.prototype, "appearanceTheme", [mobx_esm/* computed */.Fl], Object.getOwnPropertyDescriptor(_class.prototype, "appearanceTheme"), _class.prototype)), _class);
const fullscreenUserRulesStore = /*#__PURE__*/(0,react.createContext)(new FullscreenUserRulesStore());
// EXTERNAL MODULE: ./Extension/src/pages/common/hooks/useAppearanceTheme.js
var useAppearanceTheme = __webpack_require__(2730);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icons.jsx
var Icons = __webpack_require__(8241);
// EXTERNAL MODULE: ./Extension/src/pages/options/styles/styles.pcss
var styles = __webpack_require__(8575);
// EXTERNAL MODULE: ./Extension/src/pages/options/components/UserRules/styles.pcss
var UserRules_styles = __webpack_require__(6433);
;// CONCATENATED MODULE: ./Extension/src/pages/fullscreen-user-rules/components/fullscreen-user-rules/FullscreenUserRules.jsx











const FullscreenUserRules = (0,mobxreact_esm/* observer */.Pi)(() => {
  const store = (0,react.useContext)(fullscreenUserRulesStore);
  (0,useAppearanceTheme/* useAppearanceTheme */.D)(store.appearanceTheme); // append message listeners

  (0,react.useEffect)(() => {
    store.getFullscreenUserRulesData();

    let removeListenerCallback = async () => {};

    (async () => {
      const events = [constants/* NOTIFIER_TYPES.SETTING_UPDATED */.Qp.SETTING_UPDATED];
      removeListenerCallback = messenger/* messenger.createLongLivedConnection */.d.createLongLivedConnection(constants/* FULLSCREEN_USER_RULES_EDITOR */.Oi, events, async message => {
        const {
          type
        } = message;

        switch (type) {
          case constants/* NOTIFIER_TYPES.SETTING_UPDATED */.Qp.SETTING_UPDATED:
            {
              await store.getFullscreenUserRulesData();
              break;
            }

          default:
            {
              log/* log.debug */.c.debug('There is no listener for type:', type);
              break;
            }
        }
      });
    })();

    return () => {
      removeListenerCallback();
    };
  }, [store]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Icons/* Icons */.P, null), /*#__PURE__*/react.createElement(UserRulesEditor/* UserRulesEditor */.R, {
    fullscreen: true
  }));
});
;// CONCATENATED MODULE: ./Extension/src/pages/fullscreen-user-rules/components/fullscreen-user-rules/index.js

;// CONCATENATED MODULE: ./Extension/src/pages/fullscreen-user-rules/index.jsx





const fullscreenUserRulesPage = {
  init: () => {
    document.title = reactTranslator/* reactTranslator.getMessage */._.getMessage('fullscreen_user_rules_title');
    document.documentElement.lang = i18n/* i18n.getUILanguage */.a.getUILanguage();
    react_dom.render( /*#__PURE__*/react.createElement(FullscreenUserRules, null), document.getElementById('root'));
  }
};
;// CONCATENATED MODULE: ./Extension/pages/fullscreen-user-rules/index.js

fullscreenUserRulesPage.init();

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

/***/ 9089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ AttachmentPortal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(846);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6644);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/AttachmentPortal/AttacmentPortal.jsx


const TOOLTIP_EDGE_PADDING = 4; // px

const getCssString = (position, visible) => {
  const {
    x,
    y
  } = position;
  let css = `z-index:999;position:absolute;top:${y}px;left:${x}px;`;

  if (!visible) {
    css += 'visibility:hidden;';
  }

  return css;
};

const AttachmentPortal = ({
  rootId,
  position,
  children
}) => {
  const parent = document.getElementById(rootId);
  const ref = (0,react.useRef)(document.createElement('div'));
  (0,react.useEffect)(() => {
    const el = ref.current;
    el.setAttribute('style', getCssString(position, false));
    parent.appendChild(el);
    const rect = el.getBoundingClientRect();
    const offsetEdge = {
      top: rect.y,
      right: window.innerWidth - rect.right,
      bottom: window.innerHeight - rect.bottom,
      left: rect.x
    };
    const nextPosition = { ...position
    };

    if (offsetEdge.right < TOOLTIP_EDGE_PADDING) {
      nextPosition.x = rect.x + offsetEdge.right - TOOLTIP_EDGE_PADDING;
    }

    if (offsetEdge.left < TOOLTIP_EDGE_PADDING) {
      nextPosition.x = rect.x - offsetEdge.left + TOOLTIP_EDGE_PADDING;
    }

    if (offsetEdge.top < TOOLTIP_EDGE_PADDING) {
      nextPosition.y = rect.y - offsetEdge.top + TOOLTIP_EDGE_PADDING;
    }

    if (offsetEdge.bottom < TOOLTIP_EDGE_PADDING) {
      nextPosition.y = rect.y + offsetEdge.bottom - TOOLTIP_EDGE_PADDING;
    }

    el.setAttribute('style', getCssString(nextPosition, true));
    return () => {
      parent.removeChild(el);
    };
  }, [ref, parent, position]);
  return /*#__PURE__*/(0,react_dom.createPortal)(children, ref.current);
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/AttachmentPortal/index.js


/***/ }),

/***/ 5797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FP": () => (/* binding */ EVENTS),
/* harmony export */   "PO": () => (/* binding */ STATES),
/* harmony export */   "iO": () => (/* binding */ createSavingService)
/* harmony export */ });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9989);
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9224);


const STATES = {
  IDLE: 'idle',
  SAVING: 'saving',
  SAVED: 'saved'
};
const EVENTS = {
  SAVE: 'save',
  SUCCESS: 'success',
  ERROR: 'error',
  TIMEOUT: 'timeout'
};
const SAVED_DISPLAY_TIMEOUT_MS = 1000;
const savingStateMachine = {
  initial: 'idle',
  states: {
    [STATES.IDLE]: {
      on: {
        [EVENTS.SAVE]: STATES.SAVING
      }
    },
    [STATES.SAVING]: {
      invoke: {
        src: 'saveData',
        onDone: {
          target: STATES.SAVED
        },
        onError: {
          target: STATES.SAVED,
          actions: (context, event) => {
            const {
              data: error
            } = event;
            _common_log__WEBPACK_IMPORTED_MODULE_0__/* .log.error */ .c.error(error.message);
          }
        }
      }
    },
    [STATES.SAVED]: {
      after: [{
        delay: SAVED_DISPLAY_TIMEOUT_MS,
        target: STATES.IDLE
      }]
    }
  }
};
const createSavingService = ({
  id,
  services
}) => {
  return (0,xstate__WEBPACK_IMPORTED_MODULE_1__/* .interpret */ .kJ)((0,xstate__WEBPACK_IMPORTED_MODULE_2__/* .Machine */ .J)({ ...savingStateMachine,
    id
  }, {
    services
  })).start().onEvent(event => {
    _common_log__WEBPACK_IMPORTED_MODULE_0__/* .log.debug */ .c.debug(id, event);
  }).onTransition(state => {
    _common_log__WEBPACK_IMPORTED_MODULE_0__/* .log.debug */ .c.debug(id, {
      currentState: state.value
    });
  });
};

/***/ }),

/***/ 4952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ SavingButton)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(846);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/savingFSM.js
var savingFSM = __webpack_require__(5797);
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.js
var reactTranslator = __webpack_require__(8647);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.jsx
var Icon = __webpack_require__(7235);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/SavingButton/SavingButton.jsx






const renderSavingState = savingRulesState => {
  const indicatorTextMap = {
    [savingFSM/* STATES.SAVED */.PO.SAVED]: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_indicator_saved'),
    [savingFSM/* STATES.SAVING */.PO.SAVING]: reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_indicator_saving')
  };
  const indicatorText = indicatorTextMap[savingRulesState] || '';

  if (indicatorText === '') {
    return null;
  }

  const indicatorClassnames = classnames_default()('editor__label', {
    'editor__label--saved': savingRulesState === savingFSM/* STATES.SAVED */.PO.SAVED
  });
  return /*#__PURE__*/react.createElement("div", {
    className: indicatorClassnames
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    id: "#tick",
    classname: "icon--checked editor__icon"
  }), indicatorText);
};

const SavingButton = ({
  onClick,
  savingState,
  contentChanged
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "actions__saving"
  }, renderSavingState(savingState), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--green actions__btn",
    onClick: onClick,
    disabled: !contentChanged
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_save')));
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/SavingButton/index.js


/***/ }),

/***/ 3135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ userRulesEditorStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5497);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6813);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(846);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1056);
/* harmony import */ var _services_messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7916);
/* harmony import */ var _Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5797);




var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;





const savingService = (0,_Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .createSavingService */ .iO)({
  id: 'userRules',
  services: {
    saveData: (_, e) => _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger.saveUserRules */ .d.saveUserRules(e.value)
  }
});
let UserRulesEditorStore = (_class = class UserRulesEditorStore {
  constructor() {
    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "settings", _descriptor, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "userRulesEditorContentChanged", _descriptor2, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "userRulesEditorWrap", _descriptor3, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "savingUserRulesState", _descriptor4, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "userRulesExportAvailable", _descriptor5, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "userRulesEditorPrefsDropped", _descriptor6, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "setUserRulesEditorContentChangedState", _descriptor7, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "setUserRulesExportAvailableState", _descriptor8, this);

    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "setUserRulesEditorPrefsDropped", _descriptor9, this);

    (0,mobx__WEBPACK_IMPORTED_MODULE_4__/* .makeObservable */ .rC)(this);
    savingService.onTransition(state => {
      (0,mobx__WEBPACK_IMPORTED_MODULE_4__/* .runInAction */ .z)(() => {
        this.savingUserRulesState = state.value;

        if (state.value === _Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .STATES.SAVING */ .PO.SAVING) {
          this.userRulesEditorContentChanged = false;
        }
      });
    });
  }

  async requestSettingsData() {
    const data = await _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger.getOptionsData */ .d.getOptionsData();
    (0,mobx__WEBPACK_IMPORTED_MODULE_4__/* .runInAction */ .z)(() => {
      this.settings = data.settings;
    });
  }

  updateSetting(settingId, value) {
    if (this.settings) {
      this.settings.values[settingId] = value;
    }

    _services_messenger__WEBPACK_IMPORTED_MODULE_1__/* .messenger.changeUserSetting */ .d.changeUserSetting(settingId, value);
  }

  async toggleUserRulesEditorWrapMode() {
    this.userRulesEditorWrap = !this.userRulesEditorWrap;

    if (this.settings) {
      await this.updateSetting(this.settings.names.USER_RULES_EDITOR_WRAP, this.userRulesEditorWrap);
    }
  }

  setUserRulesEditorWrapMode(value) {
    this.userRulesEditorWrap = value;
  }

  get userRulesEditorWrapState() {
    if (this.settings) {
      this.setUserRulesEditorWrapMode(this.settings.values[this.settings.names.USER_RULES_EDITOR_WRAP]);
    }

    return this.userRulesEditorWrap;
  } // eslint-disable-next-line class-methods-use-this


  async saveUserRules(value) {
    savingService.send(_Editor_savingFSM__WEBPACK_IMPORTED_MODULE_2__/* .EVENTS.SAVE */ .FP.SAVE, {
      value
    });
  }

}, (_descriptor = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "settings", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesEditorContentChanged", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesEditorWrap", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor4 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "savingUserRulesState", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return savingService.initialState.value;
  }
}), _descriptor5 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesExportAvailable", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesEditorPrefsDropped", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .observable */ .LO], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "requestSettingsData", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], Object.getOwnPropertyDescriptor(_class.prototype, "requestSettingsData"), _class.prototype), _descriptor7 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "setUserRulesEditorContentChangedState", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return state => {
      this.userRulesEditorContentChanged = state;
    };
  }
}), _descriptor8 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "setUserRulesExportAvailableState", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return state => {
      this.userRulesExportAvailable = state;
    };
  }
}), _descriptor9 = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "setUserRulesEditorPrefsDropped", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return state => {
      this.userRulesEditorPrefsDropped = state;
    };
  }
}), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "updateSetting", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], Object.getOwnPropertyDescriptor(_class.prototype, "updateSetting"), _class.prototype), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "toggleUserRulesEditorWrapMode", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], Object.getOwnPropertyDescriptor(_class.prototype, "toggleUserRulesEditorWrapMode"), _class.prototype), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "setUserRulesEditorWrapMode", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .action */ .aD], Object.getOwnPropertyDescriptor(_class.prototype, "setUserRulesEditorWrapMode"), _class.prototype), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_class.prototype, "userRulesEditorWrapState", [mobx__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .Fl], Object.getOwnPropertyDescriptor(_class.prototype, "userRulesEditorWrapState"), _class.prototype)), _class);
const userRulesEditorStore = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(new UserRulesEditorStore());

/***/ }),

/***/ 3322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* reexport */ UserRulesEditor)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(846);
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 17 modules
var mobxreact_esm = __webpack_require__(2497);
// EXTERNAL MODULE: ./node_modules/ace-builds/src-noconflict/ace.js
var ace = __webpack_require__(350);
// EXTERNAL MODULE: ./node_modules/@adguard/tsurlfilter/dist/es/simple-regex.js + 1 modules
var simple_regex = __webpack_require__(4942);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesEditorStore.js
var UserRulesEditorStore = __webpack_require__(3135);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/Editor/index.js + 3 modules
var Editor = __webpack_require__(4340);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/SavingButton/index.js + 1 modules
var SavingButton = __webpack_require__(4952);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesSavingButton.jsx




const UserRulesSavingButton = (0,mobxreact_esm/* observer */.Pi)(({
  onClick
}) => {
  const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.O);
  return /*#__PURE__*/react.createElement(SavingButton/* SavingButton */.Z, {
    onClick: onClick,
    contentChanged: store.userRulesEditorContentChanged,
    savingState: store.savingUserRulesState
  });
});
// EXTERNAL MODULE: ./Extension/src/common/translators/reactTranslator.js
var reactTranslator = __webpack_require__(8647);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Popover/index.js + 1 modules
var Popover = __webpack_require__(3657);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Icon.jsx
var Icon = __webpack_require__(7235);
// EXTERNAL MODULE: ./Extension/src/pages/services/messenger.js
var messenger = __webpack_require__(7916);
// EXTERNAL MODULE: ./Extension/src/common/constants.js
var constants = __webpack_require__(4568);
// EXTERNAL MODULE: ./Extension/src/pages/helpers.js + 1 modules
var helpers = __webpack_require__(2707);
// EXTERNAL MODULE: ./Extension/src/common/log.js
var log = __webpack_require__(9224);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/ToggleWrapButton.jsx







/**
 * This button is extracted in the separate file
 * to stop editor re-renderings on wrap mode changes
 */

const ToggleWrapButton = (0,mobxreact_esm/* observer */.Pi)(({
  onClick
}) => {
  const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.O);
  const lineBreakClassNames = classnames_default()('actions__btn actions__btn--icon', {
    'actions__btn--active': store.userRulesEditorWrapState
  });
  const tooltipText = store.userRulesEditorWrapState ? reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_line_break_on') : reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_line_break_off');
  return /*#__PURE__*/react.createElement(Popover/* Popover */.J, {
    text: tooltipText
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: lineBreakClassNames,
    onClick: onClick
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    classname: "icon--extend",
    id: "#line-break"
  })));
});
// EXTERNAL MODULE: ./Extension/src/pages/common/utils/export.js + 3 modules
var utils_export = __webpack_require__(8665);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/UserRulesEditor.jsx
















/**
 * This module is placed in the common directory because it is used in the options page
 * and fullscreen-user-rules page
 */

const UserRulesEditor = (0,mobxreact_esm/* observer */.Pi)(({
  fullscreen,
  uiStore
}) => {
  const store = (0,react.useContext)(UserRulesEditorStore/* userRulesEditorStore */.O);
  const editorRef = (0,react.useRef)(null);
  const inputRef = (0,react.useRef)(null);
  let shouldResetSize = false;

  if (store.userRulesEditorPrefsDropped) {
    store.setUserRulesEditorPrefsDropped(false);
    shouldResetSize = true;
  }

  (0,react.useEffect)(() => {
    (async () => {
      await store.requestSettingsData();
    })();
  }, [store]); // Get initial storage content and set to the editor

  (0,react.useEffect)(() => {
    (async () => {
      let editorContent = await messenger/* messenger.getEditorStorageContent */.d.getEditorStorageContent(); // clear editor content from storage after reading it

      await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(null);
      let resetInfoThatContentChanged = false;

      if (!editorContent) {
        const {
          content
        } = await messenger/* messenger.getUserRules */.d.getUserRules();
        editorContent = content;
        resetInfoThatContentChanged = true;
      }

      editorRef.current.editor.setValue(editorContent, 1);
      editorRef.current.editor.session.getUndoManager().reset();

      if (resetInfoThatContentChanged) {
        store.setUserRulesEditorContentChangedState(false);
      } // initial export button state


      const {
        userRules
      } = await messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.GET_USER_RULES_EDITOR_DATA */.oK.GET_USER_RULES_EDITOR_DATA);

      if (userRules.length > 0) {
        store.setUserRulesExportAvailableState(true);
      } else {
        store.setUserRulesExportAvailableState(false);
      }
    })();
  }, [store]);
  /**
   * One of the reasons for request filter to update
   * may be adding user rules from other places like assistant and others
   * @return {Promise<void>}
   */

  const handleUserFilterUpdated = (0,react.useCallback)(async () => {
    const {
      userRules
    } = await messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.GET_USER_RULES_EDITOR_DATA */.oK.GET_USER_RULES_EDITOR_DATA);

    if (!store.userRulesEditorContentChanged) {
      if (editorRef.current) {
        editorRef.current.editor.setValue(userRules, 1);
      }

      store.setUserRulesEditorContentChangedState(false);
      await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(null);
    } // disable or enable export button


    if (userRules.length > 0) {
      store.setUserRulesExportAvailableState(true);
    } else {
      store.setUserRulesExportAvailableState(false);
    }
  }, [store]); // Append listeners

  (0,react.useEffect)(() => {
    let removeListenerCallback = () => {};

    (async () => {
      // Subscribe to events of request filter update
      // to have actual user rules in the editor
      const events = [constants/* NOTIFIER_TYPES.USER_FILTER_UPDATED */.Qp.USER_FILTER_UPDATED];
      removeListenerCallback = await messenger/* messenger.createEventListener */.d.createEventListener(events, async message => {
        const {
          type
        } = message;

        switch (type) {
          case constants/* NOTIFIER_TYPES.USER_FILTER_UPDATED */.Qp.USER_FILTER_UPDATED:
            {
              await handleUserFilterUpdated();
              break;
            }

          default:
            {
              log/* log.debug */.c.debug('Undefined message type:', type);
              break;
            }
        }
      });
    })();

    return () => {
      removeListenerCallback();
    };
  }, [handleUserFilterUpdated]); // save editor content to the storage after close of fullscreen

  (0,react.useEffect)(() => {
    if (fullscreen) {
      const beforeUnloadListener = async () => {
        if (store.userRulesEditorContentChanged) {
          // send content to the storage only before switching editors
          const content = editorRef.current.editor.session.getValue();
          await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(content);
        }
      };

      window.addEventListener('beforeunload', beforeUnloadListener);
    }
  }, [store.userRulesEditorContentChanged, fullscreen]); // subscribe to editor changes, to update editor storage content

  (0,react.useEffect)(() => {
    const changeHandler = () => {
      store.setUserRulesEditorContentChangedState(true);
    };

    editorRef.current.editor.session.on('change', changeHandler);
  }, [store]); // set initial wrap mode

  (0,react.useEffect)(() => {
    editorRef.current.editor.session.setUseWrapMode(store.userRulesEditorWrapState);
  }, [store.userRulesEditorWrapState]);

  const inputChangeHandler = async event => {
    event.persist();
    const file = event.target.files[0];

    try {
      const rawNewRules = await (0,helpers/* handleFileUpload */.$p)(file, 'txt');
      const trimmedNewRules = rawNewRules.trim();

      if (trimmedNewRules.length < 0) {
        return;
      }

      const oldRulesString = editorRef.current.editor.getValue();
      const oldRules = oldRulesString.split('\n');
      const newRules = trimmedNewRules.split('\n');
      const uniqNewRules = newRules.filter(newRule => {
        const trimmedNewRule = newRule.trim();

        if (trimmedNewRule.length === 0) {
          return true;
        }

        const isInOldRules = oldRules.some(oldRule => oldRule === trimmedNewRule);
        return !isInOldRules;
      });
      const rulesUnion = [...oldRules, ...uniqNewRules];
      const rulesUnionString = rulesUnion.join('\n').trim();

      if (oldRulesString !== rulesUnionString) {
        editorRef.current.editor.setValue(rulesUnionString, 1);
        await store.saveUserRules(rulesUnionString);
      }
    } catch (e) {
      log/* log.debug */.c.debug(e.message);

      if (uiStore !== null && uiStore !== void 0 && uiStore.addNotification) {
        uiStore.addNotification({
          description: e.message
        });
      }
    } // eslint-disable-next-line no-param-reassign


    event.target.value = '';
  };

  const importClickHandler = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const saveClickHandler = async () => {
    if (store.userRulesEditorContentChanged) {
      const value = editorRef.current.editor.getValue();
      await store.saveUserRules(value);
    }
  };

  const shortcuts = [{
    name: 'save',
    bindKey: {
      win: 'Ctrl-S',
      mac: 'Command-S'
    },
    exec: saveClickHandler
  }, {
    name: 'togglecomment',
    bindKey: {
      win: 'Ctrl-/',
      mac: 'Command-/'
    },
    exec: editor => {
      const selection = editor.getSelection();
      const ranges = selection.getAllRanges();
      const rowsSelected = ranges.map(range => {
        const [start, end] = [range.start.row, range.end.row];
        return Array.from({
          length: end - start + 1
        }, (_, idx) => idx + start);
      }).flat();
      const allRowsCommented = rowsSelected.every(row => {
        const rowLine = editor.session.getLine(row);
        return rowLine.trim().startsWith(simple_regex/* SimpleRegex.MASK_COMMENT */.H.MASK_COMMENT);
      });
      rowsSelected.forEach(row => {
        const rawLine = editor.session.getLine(row); // if all lines start with comment mark we remove it

        if (allRowsCommented) {
          const lineWithRemovedComment = rawLine.replace(simple_regex/* SimpleRegex.MASK_COMMENT */.H.MASK_COMMENT, '');
          editor.session.replace(new ace.Range(row, 0, row), lineWithRemovedComment); // otherwise we add it
        } else {
          editor.session.insert({
            row,
            column: 0
          }, simple_regex/* SimpleRegex.MASK_COMMENT */.H.MASK_COMMENT);
        }
      });
    }
  }];

  const exportClickHandler = () => {
    (0,utils_export/* exportData */.u)(utils_export/* ExportTypes.USER_FILTER */.I.USER_FILTER);
  }; // We set wrap mode directly in order to avoid editor re-rendering
  // Otherwise editor would remove all unsaved content


  const toggleWrap = () => {
    const toggledWrapMode = !store.userRulesEditorWrapState;
    editorRef.current.editor.session.setUseWrapMode(toggledWrapMode);
    store.toggleUserRulesEditorWrapMode(toggledWrapMode);
  };

  const openEditorFullscreen = async () => {
    // send dirty content to the storage only before switching editors
    if (store.userRulesEditorContentChanged) {
      const content = editorRef.current.editor.session.getValue();
      await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(content);
    }

    await messenger/* messenger.sendMessage */.d.sendMessage(constants/* MESSAGE_TYPES.OPEN_FULLSCREEN_USER_RULES */.oK.OPEN_FULLSCREEN_USER_RULES);
  };

  const closeEditorFullscreen = async () => {
    // send dirty content to the storage only before switching editors
    if (store.userRulesEditorContentChanged) {
      const content = editorRef.current.editor.session.getValue();
      await messenger/* messenger.setEditorStorageContent */.d.setEditorStorageContent(content);
    }

    window.close();
  };

  const fullscreenTooltipText = fullscreen ? reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_close_fullscreen_button_tooltip') : reactTranslator/* reactTranslator.getMessage */._.getMessage('options_editor_open_fullscreen_button_tooltip');
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Editor/* Editor */.M, {
    name: "user-rules",
    editorRef: editorRef,
    shortcuts: shortcuts,
    fullscreen: fullscreen,
    shouldResetSize: shouldResetSize,
    highlightRules: true
  }), /*#__PURE__*/react.createElement("div", {
    className: "actions actions--divided"
  }, /*#__PURE__*/react.createElement("div", {
    className: "actions__group"
  }, /*#__PURE__*/react.createElement(UserRulesSavingButton, {
    onClick: saveClickHandler
  }), /*#__PURE__*/react.createElement("input", {
    type: "file",
    id: "inputEl",
    accept: "text/plain",
    ref: inputRef,
    onChange: inputChangeHandler,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--transparent actions__btn",
    onClick: importClickHandler
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_import')), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "button button--m button--transparent actions__btn",
    onClick: exportClickHandler,
    disabled: !store.userRulesExportAvailable
  }, reactTranslator/* reactTranslator.getMessage */._.getMessage('options_userfilter_export'))), /*#__PURE__*/react.createElement("div", {
    className: "actions__group"
  }, /*#__PURE__*/react.createElement(ToggleWrapButton, {
    onClick: toggleWrap
  }), /*#__PURE__*/react.createElement(Popover/* Popover */.J, {
    text: fullscreenTooltipText
  }, fullscreen ? /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "actions__btn actions__btn--icon",
    onClick: closeEditorFullscreen
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    classname: "icon--extend",
    id: "#reduce"
  })) : /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "actions__btn actions__btn--icon",
    onClick: openEditorFullscreen
  }, /*#__PURE__*/react.createElement(Icon/* Icon */.J, {
    classname: "icon--extend",
    id: "#extend"
  }))))));
});
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/UserRulesEditor/index.js


/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(846);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const Icon = ({
  id,
  classname,
  title
}) => {
  const iconClassname = classnames__WEBPACK_IMPORTED_MODULE_1___default()('icon', classname);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: iconClassname
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: id
  }));
};

/***/ }),

/***/ 8241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(846);
/* eslint-disable max-len */

const Icons = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    display: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-left",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15 18L9 12L15 6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "cross",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.42857 6.42857L17.6043 17.6043",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.42871 17.5714L17.6045 6.39563",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-0",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 21C11.8929 21 11.7857 20.9571 11.7 20.8714L3.12857 12.3C2.95714 12.1286 2.95714 11.8714 3.12857 11.7L11.7 3.12857C11.8714 2.95714 12.1286 2.95714 12.3 3.12857L15.2571 6.08571C15.3643 6.19286 15.4071 6.38571 15.3643 6.53571C15.3 6.68571 15.1714 6.79286 15 6.81429C14.8286 6.83571 14.6571 6.87857 14.4857 6.94286C14.2286 7.05 13.9929 7.2 13.8 7.39286C13.4143 7.77857 13.2214 8.27143 13.2214 8.80714C13.2214 9.34286 13.4357 9.83571 13.8 10.2214C14.5714 10.9929 15.8357 10.9929 16.6286 10.2214C16.8214 10.0286 16.9714 9.79286 17.0786 9.53571C17.1429 9.36429 17.1857 9.19286 17.2071 9.02143C17.2286 8.85 17.3357 8.72143 17.4857 8.65714C17.6357 8.59286 17.8071 8.63571 17.9357 8.76429L20.8929 11.7214C20.9571 11.7857 21 11.8929 21 12C21 12.1071 20.9571 12.2143 20.8714 12.3L18.4071 14.7857C18.8143 14.9143 19.2 15.15 19.5214 15.4714C20.6357 16.5857 20.6357 18.3857 19.5214 19.5C18.9857 20.0357 18.2571 20.3357 17.5071 20.3357C16.7357 20.3357 16.0286 20.0357 15.4929 19.5C15.1714 19.1786 14.9357 18.8143 14.8071 18.3857L12.3 20.8714C12.2143 20.9571 12.1071 21 12 21Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-1",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8V16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16V8Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 21L20 3",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-2",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.3918 9.16765C18.2612 9.86669 19.1306 10.7348 20 11.772C17.3333 15.1053 14.6667 16.772 12 16.772C11.5607 16.772 11.1214 16.7267 10.682 16.6363M8.17168 15.613C7.16728 14.9541 5.77672 13.6737 4 11.772C6.66667 8.59065 9.33333 7 12 7C13.0715 7 14.143 7.25682 15.2145 7.77047M4 21L20 3M10.5858 13.4142C10.2239 13.0523 10 12.5523 10 12C10 10.8954 10.8954 10 12 10C12.4707 10 12.9035 10.1626 13.2451 10.4348L10.5858 13.4142Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-3",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.4329 3.11422C19.2819 3.59182 20.3776 5.42998 19.8801 7.21987C19.3826 9.00972 17.4803 10.0735 15.6312 9.59596C14.9631 9.42336 14.3933 9.07313 13.9615 8.6117C13.9409 8.58968 13.5387 8.09486 13.5187 8.07234L9.57868 10.5162C9.58906 10.544 9.55928 10.4771 9.75726 10.9627C9.94902 11.4331 9.95505 12.5639 9.70219 13.2307C9.69399 13.2524 9.47622 13.7721 9.46747 13.7927L13.4484 16.0226C13.4643 16.0026 13.8177 15.5521 13.8341 15.5325C14.2784 14.9999 14.8951 14.5942 15.6312 14.4041C17.4803 13.9264 19.3826 14.9903 19.8801 16.7802C20.3776 18.57 19.2819 20.4082 17.4329 20.8858C15.5838 21.3634 13.6815 20.2996 13.184 18.5097C13.0032 17.8591 13.0328 17.2021 13.2327 16.6064C13.241 16.5817 13.4395 16.0471 13.4484 16.0226L9.46747 13.7927C9.45298 13.809 9.07024 14.2391 9.05542 14.2552C8.62165 14.7256 8.0457 15.0828 7.3688 15.2576C5.51972 15.7352 3.61746 14.6714 3.11993 12.8815C2.62243 11.0917 3.71807 9.25349 5.56713 8.7759C6.90126 8.43129 8.26309 8.88914 9.10499 9.84317C9.13404 9.8761 9.55089 10.4821 9.57868 10.5162L13.5187 8.07234C13.5079 8.04686 13.3019 7.58131 13.2918 7.55557C13.0401 6.9182 12.9866 6.20046 13.184 5.49031C13.6815 3.70043 15.5838 2.63662 17.4329 3.11422Z",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    fill: "none",
    id: "setting-4",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 6.21997C21 5.1154 20.1046 4.21997 19 4.21997H5C3.89543 4.21997 3 5.1154 3 6.21997V15.2353C3 16.3398 3.89543 17.2353 5 17.2353H14.0317L18.18 21.5737V17.2353H19C20.1046 17.2353 21 16.3398 21 15.2353V6.21997Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 7.5V11",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.997 13.5955C12.009 13.5975 11.997 13.4045 11.997 13.4045",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-5",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9 11L12 14L16 9",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9998 3C9.18674 3 5.79348 3.6454 3 5.06597C3 8.13403 2.96144 15.7775 11.9998 21C21.0384 15.7775 21 8.13403 21 5.06597C18.2063 3.6454 14.8131 3 11.9998 3V3Z",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-6",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 6H20",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 10H16",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 14H20",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 18H12",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "setting-7",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13 14C13 14 15.5308 13.4189 17.0263 11.6741C18.5218 9.92934 19 7 19 7",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M20 14C20 14 17.4692 13.4189 15.9737 11.6741C14.4782 9.92934 14 7 14 7",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3 20L7.00509 11L11 20",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 17.5H9.5",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.5 6.5H21.5",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16.5 6V4.5",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-back",
    viewBox: "0 0 10 18"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m442 124 8-8 8 8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.32",
    transform: "matrix(0 -1 1 0 -115 459)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "checked",
    viewBox: "0 0 12 9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m4.05 8.12903226 4.47096774 4.47096774 5.42903226-7.02580645",
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: "1.08",
    transform: "translate(-3 -5)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "code",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "matrix(1 0 0 -1 0 24)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v24h-24z",
    fill: "#878787",
    fillOpacity: ".01",
    fillRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m9 19 5-13m3 10 2-3.5-2-3.5m-10.5 7-2-3.5 2-3.5",
    stroke: "#67b279",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "empty",
    viewBox: "0 0 81 104"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 2)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    fill: "#99eaa8",
    fillRule: "nonzero",
    height: "10.424528",
    rx: "5.212264",
    width: "40",
    x: "12.573151",
    y: "90.69107"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "7.701977",
    cy: "61.254354",
    fill: "#3b3b3b",
    fillRule: "nonzero",
    rx: "1.607724",
    ry: "1.632159"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "66.099384",
    cy: "45.782087",
    fill: "#3b3b3b",
    fillRule: "nonzero",
    rx: "1.607724",
    ry: "1.632159"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    stroke: "#3b3b3b",
    strokeWidth: "2.4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "61.676972",
    cy: "7.966934",
    rx: "7.734348",
    ry: "7.8519"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "76.103476",
    cy: "27.32482",
    rx: "2.572358",
    ry: "2.611454"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m8.25989762 35.9026387h49.24320728",
    strokeLinecap: "square"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m25.7687677 54.0385167c.0168909-.1011429.2411898.2687114 0 .9658067v28.2082899c0 1.1045695.8954305 2 2 2 .3835033 0 .7589206-.1102607 1.0815152-.317643l11.1497171-6.8949703v-1l-.7099385-21.9956766c-.2414363-.6970953-.0171374-1.0669496 0-.9658067l24.4467768-23.6037845c.7946289-.7672279.8168418-2.033363.0496139-2.8279919-.3768878-.390348-.8962019-.610811-1.4388029-.610811h-59.63646934c-1.1045695 0-2 .8954305-2 2 0 .5426011.22046295 1.0619152.61081097 1.4388029z",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "like",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v24h-24z",
    fill: "#878787",
    fillOpacity: ".01",
    fillRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m8.52086095 12.7600465c-.06262152-.5082327-.06262152-1.0164654.12524303-1.4611691.25048607-.69882.06262152-4.38350731-.06262152-5.27291459-.06262151-.25411637-.25048606-.63529092-.43835061-.95293638l-.17925468-.36160511c-.2663414-.55930421-.45265335-1.16886847.36711923-1.48073855 2.8805897-1.01646547 3.4441834 1.5246982 3.8199125 3.74821641.1878645.7623491.125243 1.01646547.4383506 1.27058184l.3483031-.31159728c1.0201765-.90742216 2.3147593-1.97545003 3.6594739-1.97545003 1.4402949 0 1.816024.95293638 1.8786455 1.52469821 1.0019443.25411636 1.5655379 1.5246982 1.3150519 2.47763458.7514581.5082327.9393227 1.5246982.6262151 2.3505764.3131076.4447036.9393228 1.6517564.3131076 2.6046928-.5009721.69882-7.5145819 4.5105655-8.3286617 4.8282109-.0626215.4447037-.375729.8258782-.7514581 1.0799946l-1.6281595.9529364c-.75145816.4447036-1.6907809.1905872-2.06651-.5717619l-3.06845429-5.2729146c-.3757291-.7623491-.12524303-1.7152855.56359365-2.1599891l1.69078093-.9529364c.43835062-.2541163.93932275-.2541163 1.37767336-.0635291zm3.97913905 6.7399535-3.97913905-6.7399535",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "link",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "translate(1 1)",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "rotate(-180 6 3.5)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 1.16666667L0 7 5.71428571 7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M.079 6.96L6.869.03"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.76672046 1L0 1 0 12 11 12 11 9.29613954"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "logo",
    viewBox: "0 0 160 35"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m125.470968 24.653125-1.21659-3.040625h-6.06083l-1.15023 3.040625h-4.114286l6.569585-15.4875h3.67189l6.503226 15.4875zm-4.202765-11.353125-1.990784 5.315625h3.937328z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m112.309677 18.8125c0 .933338-.158523 1.7828087-.475576 2.5484375-.317052.7656288-.770504 1.4218723-1.360368 1.96875-.589865.5468777-1.301379.973436-2.134563 1.2796875-.833183.3062515-1.75852.459375-2.776036.459375-1.032264 0-1.961287-.1531235-2.787097-.459375-.825811-.3062515-1.526265-.7328098-2.101383-1.2796875s-1.0175096-1.2031212-1.3271886-1.96875c-.3096789-.7656288-.4645161-1.6150995-.4645161-2.5484375v-9.646875h3.7603687v9.340625c0 .4229188.055299.8239564.165899 1.203125.110599.3791686.280183.7182277.508755 1.0171875.228573.2989598.530874.5359366.906913.7109375s.82949.2625 1.360368.2625c.530879 0 .98433-.0874991 1.360369-.2625s.682027-.4119777.917972-.7109375c.235946-.2989598.40553-.6380189.508756-1.0171875.103227-.3791686.154839-.7802062.154839-1.203125v-9.340625h3.782488z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m96.7889401 23.7125c-.7668241.393752-1.6626677.7145821-2.6875576.9625s-2.1419295.371875-3.3511521.371875c-1.2534625 0-2.407368-.196873-3.4617511-.590625-1.0543832-.393752-1.9612866-.9479131-2.7207374-1.6625s-1.3529932-1.5713492-1.7806451-2.5703125-.6414747-2.1109314-.6414747-3.3359375c0-1.2395895.2175094-2.362495.6525346-3.36875s1.0359408-1.8630173 1.802765-2.5703125c.7668241-.7072952 1.6663542-1.25051894 2.6986175-1.6296875 1.0322632-.37916856 2.1456161-.56875 3.3400921-.56875 1.2387159 0 2.3889348.18593564 3.4506913.5578125 1.0617564.37187686 1.9244206.871351 2.5880184 1.4984375l-2.3889401 2.690625c-.3686654-.4229188-.8552965-.7692695-1.4599078-1.0390625s-1.2903188-.4046875-2.0571429-.4046875c-.6635978 0-1.2755732.1203113-1.8359447.3609375-.5603714.2406262-1.0470025.5760395-1.4599078 1.00625s-.7336394.940622-.962212 1.53125-.3428571 1.235934-.3428571 1.9359375c0 .7145869.1032247 1.3708303.3096774 1.96875.2064526.5979197.5124404 1.111977.9179723 1.5421875.405532.4302105.9069095.7656238 1.5041475 1.00625s1.2792588.3609375 2.0460829.3609375c.4423986 0 .8626709-.0328122 1.2608295-.0984375.3981587-.0656253.7668186-.1713534 1.1059908-.3171875v-2.821875h-2.9861751v-3.01875h6.4589862z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m159.306912 16.865625c0 1.3562568-.254375 2.5265576-.763133 3.5109375-.508759.9843799-1.17972 1.7937468-2.012903 2.428125-.833184.6343782-1.773267 1.1010402-2.820277 1.4s-2.10875.4484375-3.185253.4484375h-5.839632v-15.4875h5.662673c1.105996 0 2.19723.12760289 3.273733.3828125s2.035019.678122 2.875576 1.26875 1.518891 1.3817659 2.035023 2.3734375c.516131.9916716.774193 2.2166594.774193 3.675zm-3.937327 0c0-.8750044-.143777-1.600518-.431336-2.1765625s-.670966-1.035415-1.150231-1.378125-1.024881-.5869784-1.636866-.7328125-1.242393-.21875-1.891244-.21875h-1.880185v9.05625h1.791706c.678344 0 1.330872-.0765617 1.957603-.2296875s1.179721-.4046858 1.658986-.7546875c.479265-.3500018.862672-.8166638 1.150231-1.4.287559-.5833363.431336-1.305204.431336-2.165625z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m80.4866359 16.865625c0 1.3562568-.2543753 2.5265576-.7631336 3.5109375s-1.1797193 1.7937468-2.0129032 2.428125-1.7732667 1.1010402-2.8202765 1.4c-1.0470099.2989598-2.1087504.4484375-3.1852535.4484375h-5.8396313v-15.4875h5.6626728c1.1059963 0 2.1972296.12760289 3.2737327.3828125s2.0350189.678122 2.8755761 1.26875c.8405571.590628 1.5188914 1.3817659 2.035023 2.3734375s.7741935 2.2166594.7741935 3.675zm-3.9373271 0c0-.8750044-.1437774-1.600518-.4313365-2.1765625-.287559-.5760445-.6709653-1.035415-1.1502304-1.378125-.479265-.34271-1.0248817-.5869784-1.6368663-.7328125-.6119847-.1458341-1.2423931-.21875-1.8912443-.21875h-1.8801843v9.05625h1.7917051c.6783444 0 1.3308724-.0765617 1.9576037-.2296875.6267312-.1531258 1.1797211-.4046858 1.6589861-.7546875.4792651-.3500018.8626714-.8166638 1.1502304-1.4.2875591-.5833363.4313365-1.305204.4313365-2.165625z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m60.4682028 24.653125-1.2165899-3.040625h-6.0608295l-1.1502304 3.040625h-4.1142857l6.5695852-15.4875h3.6718894l6.5032258 15.4875zm-4.202765-11.353125-1.9907834 5.315625h3.9373272z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m139.251613 24.653125-3.384332-6.146875h-1.282949v6.146875h-3.716129v-15.4875h5.97235c.752077 0 1.485711.07656173 2.200922.2296875s1.356679.41197734 1.924424.7765625c.567744.3645852 1.021196.8458303 1.360368 1.44375s.508756 1.3416622.508756 2.23125c0 1.0500052-.287555 1.9322881-.862673 2.646875s-1.371423 1.2249985-2.38894 1.53125l4.092166 6.628125zm-.154839-10.740625c0-.3645852-.077418-.6598947-.232258-.8859375-.154839-.2260428-.353916-.401041-.597235-.525s-.516127-.2078123-.818433-.2515625-.593547-.065625-.873733-.065625h-2.012903v3.609375h1.791705c.309679 0 .626727-.0255206.951152-.0765625.324426-.0510419.619354-.1421868.884793-.2734375s.482948-.3208321.652534-.56875.254378-.568748.254378-.9625z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m17.1543031 0c-5.3619081 0-11.8297098 1.25180851-17.15429784 4.00712766 0 5.95074468-.07349775 20.77585104 17.15429784 30.90537234 17.2281765-10.1295213 17.1550595-24.95462766 17.1550595-30.90537234-5.3249688-2.75531915-11.7927705-4.00712766-17.1550595-4.00712766z",
    fill: "#68bc71"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m17.1367803 34.9021919c-17.21022294-10.1292683-17.13677504-24.9463378-17.13677504-30.89506424 5.31878904-2.75231834 11.77830294-4.00439919 17.13677504-4.00712321v34.90219085z",
    fill: "#67b279"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m16.5285819 23.2947567 10.3734917-13.88033502c-.7601484-.60488994-1.4269071-.17797112-1.7939502.15254668l-.0133931.00105935-8.6494027 8.93280849-3.2588648-3.8934714c-1.5546844-1.7832424-3.66825892-.4230346-4.1619934-.0635611z",
    fill: "#fff"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "magnifying",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "9.5",
    cy: "9.5",
    r: "5.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14 14L19 19",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "tick",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0l-306.704 306.707-117.892-117.892c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0l324.806-324.806c9.998-9.997 9.997-26.206 0-36.204z",
    fill: "#5ba575"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "trash",
    viewBox: "0 0 14 17"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "currentColor",
    transform: "translate(1 1)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m.54 3.5.888 11.538a.5.5 0 0 0 .498.462h8.148a.5.5 0 0 0 .498-.462l.888-11.538z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    strokeLinecap: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 1.5h12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m4 0v1h4v-1",
    strokeLinejoin: "round",
    transform: "matrix(-1 0 0 -1 12 1)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m7.5 6v7zm-3 0v7z",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "reload",
    viewBox: "0 0 22 18"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(-1 -3)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v24h-24z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m18.2914876 16.0083773 1.3630986.8811449c-1.6728314 2.5741257-4.5051373 4.1104778-7.5761878 4.1104778-4.81798368 0-8.7658011-3.7849237-9.01152001-8.5303624l-.86406377.9492119-1.20281462-1.0890722 2.78585217-3.06015904 3.0683106 2.77882364-1.09209788 1.199619-1.07615668-.9745507c.14496544 3.9426702 3.40419703 7.1060476 7.39236569 7.1060476 2.5184631 0 4.8411482-1.2599851 6.2132137-3.3711805zm3.3921166-6.91004447-.7710318 1.06360927c-.8533533-4.08414531-4.4900679-7.1619421-8.834174-7.1619421-2.76281212 0-5.33619776 1.23700627-7.06046453 3.39403517l1.27044025 1.0100748c1.41403574-1.76924563 3.52450339-2.78379199 5.79002428-2.78379199 3.5634847 0 6.5466094 2.52568384 7.2446603 5.87661822l-1.1577308-.83506311-.951865 1.31314691 3.3584905 2.4217202 2.4280466-3.3493196z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "menu",
    viewBox: "0 0 24 27"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 .5)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v26h-24z",
    fill: "#878787",
    fillOpacity: ".01",
    fillRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m4 13h16m-16-5.41666667h16m-16 10.83333337h16",
    stroke: "#888",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "select",
    viewBox: "0 0 14 8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m6 10 6 6 6-6",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "1.5",
    transform: "translate(-5 -9)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-bottom",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.0354 10.9305L11.965 14.9997L16.0342 11.0702",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "filters",
    viewBox: "0 0 14 13"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(-5 -6)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m0 0h24v24h-24z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    stroke: "#67b279",
    strokeLinecap: "square"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m5.5 6.5h13"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m10.5 12.25h8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m15.5 18.25h3"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "extend",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: "24",
    height: "24",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 10V6H10M6 14V18H10M18 10V6H14M18 14V18H14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "line-break",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.08398 4.73584C3.66977 4.73584 3.33398 5.07163 3.33398 5.48584C3.33398 5.90005 3.66977 6.23584 4.08398 6.23584H19.6176C20.0318 6.23584 20.3676 5.90005 20.3676 5.48584C20.3676 5.07163 20.0318 4.73584 19.6176 4.73584H4.08398ZM4 8.95654C3.58579 8.95654 3.25 9.29233 3.25 9.70654C3.25 10.1208 3.58579 10.4565 4 10.4565H12C12.026 10.4565 12.0517 10.4552 12.077 10.4526H15.5396C17.3324 10.4526 18.7857 11.906 18.7857 13.6987C18.7857 15.4833 17.3456 16.9316 15.5641 16.9447L16.2941 16.2144C16.5869 15.9215 16.5868 15.4466 16.2939 15.1538C16.0009 14.861 15.5261 14.8611 15.2332 15.154L13.2915 17.0966C12.9988 17.3894 12.9988 17.8641 13.2915 18.157L15.2332 20.0996C15.5261 20.3925 16.0009 20.3926 16.2939 20.0998C16.5868 19.807 16.5869 19.3321 16.2941 19.0391L15.6975 18.4422C18.2456 18.359 20.2857 16.2671 20.2857 13.6987C20.2857 11.0775 18.1608 8.95264 15.5396 8.95264H10V8.95654H4ZM3.33398 13.7417C3.33398 13.3275 3.66977 12.9917 4.08398 12.9917H10.8799C11.2941 12.9917 11.6299 13.3275 11.6299 13.7417C11.6299 14.1559 11.2941 14.4917 10.8799 14.4917H4.08398C3.66977 14.4917 3.33398 14.1559 3.33398 13.7417ZM3.33398 17.6265C3.33398 17.2123 3.66977 16.8765 4.08398 16.8765H10.8799C11.2941 16.8765 11.6299 17.2123 11.6299 17.6265C11.6299 18.0407 11.2941 18.3765 10.8799 18.3765H4.08398C3.66977 18.3765 3.33398 18.0407 3.33398 17.6265Z",
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "info",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 16V10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.997 7.59552C12.009 7.59745 11.997 7.40446 11.997 7.40446",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "reduce",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: "24",
    height: "24",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 6V10H6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 18V14H6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14 6V10H18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14 18V14H18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "ban",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 14C11.3137 14 14 11.3137 14 8C14 6.34315 13.3284 4.84315 12.2426 3.75736C11.69 3.20469 11.03 2.75934 10.2966 2.45524C9.58921 2.1619 8.81351 2 8 2C4.68629 2 2 4.68629 2 8C2 8.81351 2.1619 9.58921 2.45524 10.2966C2.75934 11.03 3.20469 11.69 3.75736 12.2426C4.84315 13.3284 6.34315 14 8 14Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.21513 13.8442L13.5485 2.51087",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-status",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.7038 4.66663L14.6667 7.99996L1.33341 7.99996",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.7038 11.3334L14.6667 8.00004",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "profile-status",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "7.99992",
    cy: "5.33329",
    rx: "2.66667",
    ry: "2.66667",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.66675 13.3334V13.3334C2.66675 11.1242 4.45761 9.33337 6.66675 9.33337H9.33341C11.5426 9.33337 13.3334 11.1242 13.3334 13.3334V13.3334H2.66675Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "transfer-status",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.3333 2.66663L12.3333 4.66663",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.3333 6.66663L12.3333 4.66663",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.3334 4.66671H3.66675",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.66675 9.33337L3.66675 11.3334",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.66675 13.3334L3.66675 11.3334",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M3.66659 11.3333H12.3333",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "arrow-scrollbar",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: "32",
    height: "32",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.8958 21.9468L19.9996 16.0524L14.1052 9.9486",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "radio",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9.5 12C9.5 10.6196 10.6188 9.50046 11.9991 9.5C13.3795 9.5021 14.4979 10.6206 14.5 12.0009C14.4995 13.3812 13.3804 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "12.0001",
    cy: "12",
    r: "8.33333",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/***/ }),

/***/ 3657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(3229);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(846);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/AttachmentPortal/index.js + 1 modules
var AttachmentPortal = __webpack_require__(9089);
// EXTERNAL MODULE: ./Extension/src/pages/common/components/ui/Tooltip/index.js + 2 modules
var Tooltip = __webpack_require__(7565);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Popover/Popover.jsx




const TOOLTIP_SHOW_DELAY_MS = 1000;
/*
    Wrap child container for handle tooltips rendering in overlay on hover
*/

const Popover = ({
  text,
  delay,
  children,
  ...props
}) => {
  const [tooltip, setTooltip] = (0,react.useState)({
    visible: false,
    position: null
  });
  const timer = (0,react.useRef)(); // clear timer on unmounting

  (0,react.useEffect)(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleMouseEnter = e => {
    const rect = e.target.getBoundingClientRect();
    timer.current = setTimeout(() => {
      setTooltip({
        visible: true,
        position: {
          x: rect.left + window.scrollX,
          y: rect.bottom + window.scrollY
        }
      });
    }, delay || TOOLTIP_SHOW_DELAY_MS);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer.current);
    setTooltip({
      visible: false,
      position: null
    });
  };

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: "popover"
  }, props, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }), tooltip.visible && /*#__PURE__*/react.createElement(AttachmentPortal/* AttachmentPortal */.g, {
    rootId: "root-portal",
    position: tooltip.position
  }, /*#__PURE__*/react.createElement(Tooltip/* Tooltip */.u, {
    text: text
  })), children);
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Popover/index.js


/***/ }),

/***/ 7565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* reexport */ Tooltip)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(846);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(3660);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8356);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./Extension/src/pages/common/components/ui/Tooltip/tooltip.pcss
var tooltip = __webpack_require__(9970);
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/tooltip.pcss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tooltip/* default */.Z, options);




       /* harmony default export */ const Tooltip_tooltip = (tooltip/* default */.Z && tooltip/* default.locals */.Z.locals ? tooltip/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/Tooltip.jsx




const Tooltip = ({
  text,
  visible
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('tooltip', visible ? 'tooltip--on' : 'tooltip--off')
  }, text);
};
Tooltip.propTypes = {
  text: (prop_types_default()).string.isRequired,
  visible: (prop_types_default()).bool
};
Tooltip.defaultProps = {
  visible: true
};
;// CONCATENATED MODULE: ./Extension/src/pages/common/components/ui/Tooltip/index.js


/***/ }),

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useAppearanceTheme)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9789);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(846);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2155);



const useAppearanceTheme = appearanceTheme => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    const STORAGE_KEY = 'appearance_theme';
    const DARK_THEME_CLASS = 'dark-mode';
    const LIGHT_THEME_CLASS = 'light-mode';
    const SET_TO_STORAGE_TIMEOUT = 500;
    const throttledSetToStorage = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(mode => {
      localStorage.setItem(STORAGE_KEY, mode);
    }, SET_TO_STORAGE_TIMEOUT);
    let theme = appearanceTheme;

    if (!theme) {
      theme = localStorage.getItem(STORAGE_KEY);
    } else {
      throttledSetToStorage(theme);
    }

    switch (theme) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__/* .APPEARANCE_THEMES.DARK */ .cC.DARK:
        {
          document.documentElement.classList.add(DARK_THEME_CLASS);
          document.documentElement.classList.remove(LIGHT_THEME_CLASS);
          break;
        }

      case _constants__WEBPACK_IMPORTED_MODULE_2__/* .APPEARANCE_THEMES.LIGHT */ .cC.LIGHT:
        {
          document.documentElement.classList.add(LIGHT_THEME_CLASS);
          document.documentElement.classList.remove(DARK_THEME_CLASS);
          break;
        }

      default:
        {
          document.documentElement.classList.remove(DARK_THEME_CLASS);
          document.documentElement.classList.remove(LIGHT_THEME_CLASS);
        }
    }
  }, [appearanceTheme]);
};

/***/ }),

/***/ 8665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ ExportTypes),
  "u": () => (/* binding */ exportData)
});

// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 32 modules
var format = __webpack_require__(5285);
// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(3679);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);
;// CONCATENATED MODULE: ./Extension/src/background/extension-api/windows.js
/* eslint-disable no-unused-vars */

/**
 * This function patches if necessary browser.windows implementation for Firefox for Android
 */
const patchWindows = function (browser) {
  // Make compatible with Android WebExt
  if (typeof browser.windows === 'undefined') {
    browser.windows = function () {
      const defaultWindow = {
        id: 1,
        type: 'normal'
      };
      const emptyListener = {
        addListener() {// Doing nothing
        }

      };

      const create = function (createData) {
        return Promise.resolve(defaultWindow);
      };

      const update = function (windowId, data) {
        return Promise.resolve();
      };

      const getAll = function (query) {
        return Promise.resolve(defaultWindow);
      };

      const getLastFocused = function () {
        return Promise.resolve(defaultWindow);
      };

      return {
        onCreated: emptyListener,
        onRemoved: emptyListener,
        onFocusChanged: emptyListener,
        create,
        update,
        getAll,
        getLastFocused
      };
    }();
  }
};
;// CONCATENATED MODULE: ./Extension/src/background/extension-api/browser.js


patchWindows((browser_polyfill_default()));

;// CONCATENATED MODULE: ./Extension/src/common/common-script.js
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

const runtimeImpl = (() => {
  return {
    onMessage: (browser_polyfill_default()).runtime.onMessage,
    sendMessage: (browser_polyfill_default()).runtime.sendMessage
  };
})(); // eslint-disable-next-line prefer-destructuring

const i18n = (browser_polyfill_default()).i18n;
// EXTERNAL MODULE: ./Extension/src/common/constants.js
var constants = __webpack_require__(4568);
;// CONCATENATED MODULE: ./Extension/src/pages/common/utils/export.js
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



/**
 * Export types.
 * @readonly
 * @enum {string}
 */

const ExportTypes = {
  USER_FILTER: 'user_filter',
  ALLOW_LIST: 'allow_list',
  SETTINGS: 'settings'
};
const exportMetadata = {
  [ExportTypes.USER_FILTER]: {
    name: 'user_rules',
    messageType: constants/* MESSAGE_TYPES.GET_USER_RULES */.oK.GET_USER_RULES,
    ext: 'txt'
  },
  [ExportTypes.ALLOW_LIST]: {
    name: 'allowlist',
    messageType: constants/* MESSAGE_TYPES.GET_ALLOWLIST_DOMAINS */.oK.GET_ALLOWLIST_DOMAINS,
    ext: 'txt'
  },
  [ExportTypes.SETTINGS]: {
    name: 'settings',
    messageType: constants/* MESSAGE_TYPES.LOAD_SETTINGS_JSON */.oK.LOAD_SETTINGS_JSON,
    ext: 'json'
  }
};
/**
 * @param {ExportTypes} type
 */

const exportData = async type => {
  const {
    messageType,
    name,
    ext
  } = exportMetadata[type];
  const currentTimeString = (0,format/* default */.Z)(Date.now(), 'yyyyMMdd_HHmmss');
  const {
    content,
    appVersion
  } = await runtimeImpl.sendMessage({
    type: messageType
  });
  const filename = `${currentTimeString}_adg_ext_${name}_${appVersion}.${ext}`;
  const blob = new Blob([content]);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

/***/ }),

/***/ 2155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D2": () => (/* binding */ CHANGELOG_URL),
/* harmony export */   "Kd": () => (/* binding */ GITHUB_URL),
/* harmony export */   "Sb": () => (/* binding */ PRIVACY_URL),
/* harmony export */   "Y0": () => (/* binding */ GLOBAL_PRIVACY_CONTROL_URL),
/* harmony export */   "YH": () => (/* binding */ ACKNOWLEDGMENTS_URL),
/* harmony export */   "Z5": () => (/* binding */ DO_NOT_TRACK_URL),
/* harmony export */   "cC": () => (/* binding */ APPEARANCE_THEMES),
/* harmony export */   "eN": () => (/* binding */ DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN),
/* harmony export */   "l7": () => (/* binding */ HOW_TO_CREATE_RULES_URL),
/* harmony export */   "o6": () => (/* binding */ WEBSITE_URL),
/* harmony export */   "pR": () => (/* binding */ COMPARE_URL),
/* harmony export */   "sn": () => (/* binding */ DISCUSS_URL),
/* harmony export */   "uj": () => (/* binding */ DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN)
/* harmony export */ });
/* eslint-disable max-len */
const PRIVACY_URL = 'https://adguard.com/forward.html?action=privacy&from=options_screen&app=browser_extension';
const ACKNOWLEDGMENTS_URL = 'https://adguard.com/forward.html?action=acknowledgments&from=options_screen&app=browser_extension';
const GITHUB_URL = 'https://adguard.com/forward.html?action=github_options&from=options_screen&app=browser_extension';
const WEBSITE_URL = 'https://adguard.com/forward.html?action=adguard_site&from=options_screen_footer&app=browser_extension';
const DISCUSS_URL = 'https://adguard.com/forward.html?action=discuss&from=options_screen&app=browser_extension';
const COMPARE_URL = 'https://adguard.com/forward.html?action=compare&from=options_screen&app=browser_extension';
const CHANGELOG_URL = 'https://adguard.com/forward.html?action=github_version_popup&from=options_screen&app=browser_extension';
const GLOBAL_PRIVACY_CONTROL_URL = 'https://adguard.com/forward.html?action=global_privacy_control&from=options_screen&app=browser_extension';
const DO_NOT_TRACK_URL = 'https://adguard.com/forward.html?action=do_not_track&from=options_screen&app=browser_extension';
const HOW_TO_CREATE_RULES_URL = 'https://adguard.com/forward.html?action=userfilter_description&from=options&app=browser_extension';
const DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN = 4320;
const DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN = 2880;
const APPEARANCE_THEMES = {
  SYSTEM: 'system',
  DARK: 'dark',
  LIGHT: 'light'
};

/***/ }),

/***/ 2707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ms": () => (/* binding */ containsIgnoreCase),
  "vQ": () => (/* binding */ copyToClipboard),
  "tE": () => (/* binding */ findChunks),
  "$p": () => (/* binding */ handleFileUpload),
  "fg": () => (/* binding */ hoursToMs),
  "fQ": () => (/* binding */ isVerticalScroll),
  "Ux": () => (/* binding */ measureTextWidth),
  "n$": () => (/* binding */ passiveEventSupported),
  "_v": () => (/* binding */ sleep)
});

// UNUSED EXPORTS: getFilenameExtension, indexOfIgnoreCase

// EXTERNAL MODULE: ./node_modules/@adguard/translate/dist/index.esm.js
var index_esm = __webpack_require__(8396);
// EXTERNAL MODULE: ./Extension/src/common/translators/i18n.js
var i18n = __webpack_require__(7122);
;// CONCATENATED MODULE: ./Extension/src/common/translators/translator.js


/**
 * Retrieves localised message by key, formats it and converts into string
 */

const translator = index_esm/* translate.createTranslator */.Iu.createTranslator(i18n/* i18n */.a);
;// CONCATENATED MODULE: ./Extension/src/pages/helpers.js

const getFilenameExtension = filename => {
  if (!filename) {
    return undefined;
  }

  const parts = filename.split('.');

  if (parts.length < 2) {
    return undefined;
  }

  return parts[parts.length - 1];
};
/**
 * Handles file upload
 * @param file
 * @param requiredExtension
 * @returns {Promise<string>}
 */

const handleFileUpload = (file, requiredExtension) => new Promise((resolve, reject) => {
  if (getFilenameExtension(file.name) !== requiredExtension) {
    reject(new Error(translator.getMessage('options_popup_import_settings_wrong_file_ext', {
      extension: requiredExtension
    })));
  }

  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');

  reader.onload = evt => {
    resolve(evt.target.result);
  };

  reader.onerror = () => {
    reject(new Error(translator.getMessage('options_popup_import_error_file_description')));
  };
});
const hoursToMs = hours => {
  const MS_IN_HOUR = 1000 * 60 * 60;
  return hours * MS_IN_HOUR;
};
/**
 * Awaits required period of time
 * @param timeoutMs
 * @returns {Promise<unknown>}
 */

const sleep = timeoutMs => {
  return new Promise(resolve => {
    setTimeout(resolve, timeoutMs);
  });
};
const indexOfIgnoreCase = (str, searchString) => {
  return str.toLowerCase().indexOf(searchString.toLowerCase());
};
const containsIgnoreCase = (str, searchString) => {
  return !!(str && searchString && indexOfIgnoreCase(str, searchString) >= 0);
};
const findChunks = (str, searchString, chunks = []) => {
  const ind = indexOfIgnoreCase(str, searchString);

  if (ind > -1) {
    chunks.push(str.slice(0, ind));
    chunks.push(str.slice(ind, ind + searchString.length));
    const restStr = str.slice(ind + searchString.length);

    if (containsIgnoreCase(restStr, searchString)) {
      findChunks(restStr, searchString, chunks);
    } else {
      chunks.push(restStr);
    }
  }

  return chunks.filter(i => !!i);
};
const passiveEventSupported = (() => {
  let passiveSupported = null;
  return () => {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') {
      return passiveSupported;
    }

    let supported = false;

    try {
      const options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  };
})();
const copyToClipboard = text => {
  const textarea = document.createElement('textarea');
  textarea.innerText = text;
  textarea.style = `
        position: absolute;
        display: hidden;
        width: 0;
        height: 0;
    `;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
};
const measureTextWidth = text => {
  const el = document.createElement('p');
  el.innerText = text;
  el.style = `
        position: absolute;
        display: hidden;
        height: 0;
        white-space: nowrap;
        font-family: Roboto, "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Arial, sans-serif;
        font-size: 14px;
    `;
  document.body.appendChild(el);
  const pxLength = el.clientWidth;
  el.remove();
  return pxLength;
};
/**
 * Сalculate the angle of radius vector of the scroll motion
 * and detect whether scroll is vertical
 *
 * @param {number} deltaY - wheel event deltaY value
 * @param {number} deltaX - wheel event deltaX value
 * @returns {boolean}
 */

const isVerticalScroll = (() => {
  const degToRad = deg => deg * (Math.PI / 180);

  const deg60ToRad = degToRad(60);
  const deg90ToRad = degToRad(90);
  const deg120ToRad = degToRad(120);
  const deg240ToRad = degToRad(240);
  const deg270ToRad = degToRad(270);
  const deg300ToRad = degToRad(300);
  return (deltaY, deltaX) => {
    if (deltaY === 0) {
      return false;
    }

    let angle = Math.atan(deltaX / deltaY);
    angle = deltaY > 0 ? angle + deg90ToRad : angle + deg270ToRad;
    return angle > deg60ToRad && angle < deg120ToRad || angle > deg240ToRad && angle < deg300ToRad;
  };
})();

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

/***/ 9970:
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
___CSS_LOADER_EXPORT___.push([module.id, ".tooltip {\n    white-space: nowrap;\n    visibility: hidden;\n    opacity: 0;\n    padding: 8px 16px;\n    color: var(--gray-base);\n    background-color: var(--white);\n    font-size: 14px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);\n    border-radius: 4px;\n}\n\n    @media (color-index: 48) {.tooltip {\n        color: var(--gray300);\n        background-color: var(--gray700)\n}\n    }\n\n    @media (color: 48842621) {.tooltip {\n        color: var(--gray300);\n        background-color: var(--gray700)\n}\n    }\n\n    @media (prefers-color-scheme: dark) {.tooltip {\n        color: var(--gray300);\n        background-color: var(--gray700)\n}\n    }\n\n    .tooltip--on {\n        visibility: visible;\n        opacity: 1;\n    }\n\n    .tooltip--off {\n        visibility: hidden;\n        opacity: 0;\n    }\n\n.popover {\n    display: inline-block;\n}\n\n.light-mode .tooltip {\n        color: var(--gray-base);\n        background-color: var(--white);\n    }\n\n.dark-mode .tooltip {\n        color: var(--gray300);\n        background-color: var(--gray700);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4381:
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Roboto;\n    src: url('../../../../assets/fonts/Roboto-Regular.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url('../../../../assets/fonts/Roboto-Medium.woff2') format('woff2');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url('../../../../assets/fonts/Roboto-Bold.woff2') format('woff2');\n    font-weight: bold;\n    font-style: normal;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6949:
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
___CSS_LOADER_EXPORT___.push([module.id, ".icon {\n    display: inline-block;\n    vertical-align: middle;\n    flex-shrink: 0;\n}\n\n    .icon--contain {\n        width: 100%;\n        height: 100%;\n    }\n\n    .icon--24 {\n        width: 24px;\n        height: 24px;\n    }\n\n    .icon--setting {\n        width: 24px;\n        height: 24px;\n    }\n\n    .icon--back {\n        width: 10px;\n        height: 18px;\n    }\n\n    .icon--checked {\n        width: 13px;\n        height: 12px;\n    }\n\n    .icon--empty {\n        width: 82px;\n        height: 104px;\n    }\n\n    .icon--link {\n        width: 14px;\n        height: 14px;\n        color: var(--green400);\n    }\n\n    .icon--logo {\n        width: 109px;\n        height: 24px;\n        color: #232323;\n    }\n\n    @media (color-index: 48) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .icon--logo {\n            color: var(--gray300)\n    }\n        }\n\n    .icon--magnifying {\n        width: 20px;\n        height: 20px;\n        color: var(--gray400);\n    }\n\n    @media (color-index: 48) {\n\n    .icon--magnifying {\n            color: var(--gray700)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .icon--magnifying {\n            color: var(--gray700)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .icon--magnifying {\n            color: var(--gray700)\n    }\n        }\n\n    .icon--trash {\n        width: 14px;\n        height: 17px;\n    }\n\n    .icon--reload {\n        width: 22px;\n        height: 15px;\n    }\n\n    .icon--menu {\n        width: 24px;\n        height: 26px;\n    }\n\n    .icon--select {\n        width: 14px;\n        height: 8px;\n    }\n\n    @media (max-width: 640px) {\n\n    .icon--select {\n            width: 10px;\n            height: 6px\n    }\n        }\n\n    .icon--filters {\n        width: 14px;\n        height: 13px;\n    }\n\n    .icon--like {\n        color: var(--gray900);\n    }\n\n    @media (color-index: 48) {\n\n    .icon--like {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .icon--like {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .icon--like {\n            color: var(--gray300)\n    }\n        }\n\n    .icon--extend {\n        width: 24px;\n        height: 24px;\n        color: var(--gray700);\n    }\n\n.light-mode .icon--logo {\n            color: #232323;\n        }\n\n.light-mode .icon--like {\n            color: var(--gray900);\n        }\n\n.light-mode .icon--magnifying {\n            color: var(--gray400);\n        }\n\n.light-mode .icon--extend {\n            color: var(--gray700);\n        }\n\n.dark-mode .icon--logo {\n            color: var(--gray300);\n        }\n\n.dark-mode .icon--like {\n            color: var(--gray300);\n        }\n\n.dark-mode .icon--magnifying {\n            color: var(--gray700);\n        }\n\n.dark-mode .icon--extend {\n            color: var(--gray300);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6834:
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    /*GRAYSCALE*/\n    --white: #ffffff;\n    --gray100: #f3f3f3;\n    --gray300: #d8d8d8;\n    --gray400: #a4a4a4;\n    --gray700: #888888;\n    --gray900: #4d4d4d;\n    --grayDark: #2a2a2a;\n    --black: #131313;\n    /*FEEDBACK*/\n    --red300: #bf4829;\n    --red400: #c23814;\n    --orange400: #eb9300;\n    /*BRAND*/\n    --green400: #67b279;\n    --green700: #4d995f;\n    /*ADDITIONAL*/\n    --purple400: #b267a0;\n    --purple700: #994d87;\n    --slateblue400: #677bb2;\n    --slateblue700: #4d6199;\n    /*EDITOR*/\n    --green-editor: #338033;\n    /* - dark mode*/\n    --cyan-editor: #4093d6;\n    --yellow-editor: #dbdb84;\n    --pink-editor: #c46cbd;\n    --orange-editor: #cf8263;\n    --blueDark-editor: #264f78;\n    /* - light mode*/\n    --blue-editor: #4141e2;\n    --brown-editor: #795e26;\n    --purple-editor: #9e45b4;\n    --red-editor: #a31515;\n    /*FILTERING-LOG*/\n    --regular-row-hover: var(--gray100);\n    --regular-row-active: var(--gray300);\n    --red-row: #ffd3c7;\n    --red-row-hover: #ffb5a1;\n    --red-row-active: #ff967b;\n    --green-row: #dcffe5;\n    --green-row-hover: #c3ffd1;\n    --green-row-active: #a9ffbe;\n    --orange-row: #ffe4b7;\n    --orange-row-hover: #ffdda5;\n    --orange-row-active: #ffcf7d;\n    /*GRADIENTS*/\n}\n    /*FILTERING-LOG-DARK*/\n    @media (color-index: 48) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n}\n    }\n    @media (color: 48842621) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n}\n    }\n    @media (prefers-color-scheme: dark) {:root {\n        --regular-row-hover: #2f2f2f;\n        --regular-row-active: #3b3b3b;\n        --red-row: #46231a;\n        --red-row-hover: #692d1e;\n        --red-row-active: #7a3320;\n        --green-row: #2c4332;\n        --green-row-hover: #3d6246;\n        --green-row-active: #457250;\n        --orange-row: #4d350d;\n        --orange-row-hover: #61410B;\n        --orange-row-active: #744c0a;\n}\n    }\n    :root {\n\n    --switch-btn-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n    --swamp: #547b88;\n    --switch-field-enabled: linear-gradient(90deg, #67B279 0%, #39774C 100%);\n    --switch-field-disabled: linear-gradient(90deg, #732613 0%, #BF4829 100%);\n\n    --greyf7: #f7f7f7;\n    --gray05: rgba(239, 239, 239, 0.5);\n    --greye7: #e7e7e7;\n    --gey6a: #d1d1d1;\n    --grayd8: var(--gray700);\n    --grey78: #787878;\n    --gray-base: var(--gray900);\n    --gray4a: #4a4a4a;\n    --gray88: var(--gray700);\n    --green74: #66b574;\n    --green86: #68bc86;\n    --green75: #5ba575;\n    --red23: #F66F23;\n    --t3: 0.3s ease;\n    --overlay-gray: rgba(137, 137, 137, 0.5);\n    --light-shadow: rgba(0, 0, 0, 0.05);\n    --sidebar-transition: 0.3s ease;\n    --z-idx5: 5;\n    --z-idx6: 6;\n    --z-idx7: 7;\n    --z-idx8: 8;\n}\n\n.dark-mode {\n    --regular-row-hover: #2f2f2f;\n    --regular-row-active: #3b3b3b;\n    --red-row: #46231a;\n    --red-row-hover: #692d1e;\n    --red-row-active: #7a3320;\n    --green-row: #2c4332;\n    --green-row-hover: #3d6246;\n    --green-row-active: #457250;\n    --orange-row: #4d350d;\n    --orange-row-hover: #61410B;\n    --orange-row-active: #744c0a;\n}\n\n.light-mode {\n    --regular-row-hover: var(--gray100);\n    --regular-row-active: var(--gray300);\n    --red-row: #ffd3c7;\n    --red-row-hover: #ffb5a1;\n    --red-row-active: #ff967b;\n    --green-row: #dcffe5;\n    --green-row-hover: #c3ffd1;\n    --green-row-active: #a9ffbe;\n    --orange-row: #ffe4b7;\n    --orange-row-hover: #ffdda5;\n    --orange-row-active: #ffcf7d;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8168:
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
___CSS_LOADER_EXPORT___.push([module.id, ".editor__label {\n    position: absolute;\n    top: -15px;\n    left: 15px;\n    right: 15px;\n    max-width: 200px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 300;\n    font-size: 12px;\n    line-height: 22px;\n}\n\n    @media (max-width: 500px) {.editor__label {\n        right: 0;\n        padding-left: 12px\n}\n    }\n\n    .editor__label .editor__icon {\n        display: none;\n        position: absolute;\n        right: 0;\n        top: 4px;\n    }\n\n    .editor__label--saved {\n        padding-right: 20px;\n    }\n\n    .editor__label--saved .editor__icon {\n            display: block;\n        }\n\n.editor__open {\n    text-align: center;\n    padding: 48px 16px;\n}\n\n.editor__open-title {\n    font-size: 24px;\n    font-weight: 700;\n    margin-bottom: 12px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1258:
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
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n    cursor: pointer;\n    text-decoration: none;\n    text-align: center;\n    display: inline-block;\n    border: 0;\n    outline: none;\n    background-color: transparent;\n    padding: 0;\n}\n\n    .button--s {\n        padding: 0 29px;\n        height: 32px;\n        border-radius: 4px;\n        font-size: 16px;\n    }\n\n    .button--m {\n        padding: 0 35px;\n        height: 40px;\n        line-height: 40px;\n        border-radius: 8px;\n        font-size: 16px;\n    }\n\n    .button:disabled {\n        opacity: 0.5;\n        cursor: default;\n        pointer-events: none;\n    }\n\n    .button--green {\n        color: var(--white);\n        background-color: var(--green86);\n        transition: 0.3s ease background-color;\n    }\n\n    .button--green:hover {\n            background-color: var(--green75);\n        }\n\n    .button--green-bd {\n        color: var(--green86);\n        box-shadow: inset 0 0 0 1px var(--green86);\n        transition: 0.3s ease background-color;\n    }\n\n    @media (color-index: 48) {\n\n    .button--green-bd {\n            color: var(--white);\n            box-shadow: inset 0 0 0 1px var(--white)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .button--green-bd {\n            color: var(--white);\n            box-shadow: inset 0 0 0 1px var(--white)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .button--green-bd {\n            color: var(--white);\n            box-shadow: inset 0 0 0 1px var(--white)\n    }\n        }\n\n    .button--green-bd:hover {\n            background-color: var(--gray05);\n        }\n\n    .button--red-bg {\n        color: var(--white);\n        background-color: var(--red300);\n        transition: 0.3s ease background-color;\n    }\n\n    .button--red-bg:hover {\n            background-color: var(--red400);\n        }\n\n    .button--transparent {\n        box-shadow: 0 0 0 1px var(--gray700);\n        color: var(--gray700);\n        background-color: transparent;\n        transition: var(--t3) box-shadow, var(--t3) color;\n    }\n\n    .button--transparent:hover {\n            box-shadow: 0 0 0 1px var(--gray400);\n            color: var(--gray400);\n        }\n\n    .button--rate {\n        height: 40px;\n        min-width: 121px;\n        font-size: 14px;\n        color: var(--gray-base);\n        border: 1px solid var(--gray-base);\n        border-radius: 6px;\n        padding: 7px 16px;\n        background-size: 20px;\n        background-position: 25px 50%;\n        background-repeat: no-repeat;\n        letter-spacing: 0;\n        line-height: 22px;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n    }\n\n    @media (color-index: 48) {\n\n    .button--rate {\n            border: 1px solid var(--gray300);\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .button--rate {\n            border: 1px solid var(--gray300);\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .button--rate {\n            border: 1px solid var(--gray300);\n            color: var(--gray300)\n    }\n        }\n\n    .button--add-custom-filter {\n        margin: 20px 0 0 15px;\n    }\n\n    .button--empty-custom-filter {\n        display: block;\n        margin: 0 auto;\n    }\n\n    .button__img {\n        margin-right: 7px;\n    }\n\n    .button__label {\n        line-height: 26px;\n        max-height: 26px;\n        overflow: hidden;\n    }\n\n    .button__label--rate {\n            cursor: inherit;\n        }\n\n    .button--list {\n        display: block;\n        font-weight: 500;\n        font-size: 16px;\n        line-height: 20px;\n        color: var(--gray-base);\n        width: 100%;\n        text-align: left;\n        min-height: 52px;\n        padding: 16px;\n        border-radius: 4px;\n        transition: var(--t3) background-color;\n    }\n\n    @media (color-index: 48) {\n\n    .button--list {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .button--list {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .button--list {\n            color: var(--gray300)\n    }\n        }\n\n    .button--list:hover {\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .button--list:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .button--list:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .button--list:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    .button--red {\n        color: var(--red400);\n    }\n\n.light-mode .button--green-bd {\n            color: var(--green86);\n            box-shadow: inset 0 0 0 1px var(--green86);\n        }\n\n.light-mode .button--rate {\n            color: var(--gray-base);\n            border: 1px solid var(--gray-base);\n        }\n\n.light-mode .button--list {\n            color: var(--gray-base);\n        }\n\n.light-mode .button--list:hover {\n                background-color: var(--gray100);\n            }\n\n.light-mode .button--red {\n            color: var(--red400);\n        }\n\n.dark-mode .button--green-bd {\n            color: var(--white);\n            box-shadow: inset 0 0 0 1px var(--white);\n        }\n\n.dark-mode .button--rate {\n            border: 1px solid var(--gray300);\n            color: var(--gray300);\n        }\n\n.dark-mode .button--list {\n            color: var(--gray300);\n        }\n\n.dark-mode .button--list:hover {\n                background-color: var(--gray900);\n            }\n\n.dark-mode .button--red {\n            color: var(--red400);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6843:
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n:root {\n    color-scheme: light dark;\n}\n\nhtml,\n.root {\n    height: 100%;\n}\n\nbody {\n    font-family: Roboto, \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Ubuntu, Arial, sans-serif;\n    margin: 0;\n    height: 100%;\n    font-size: 16px;\n    color: var(--gray-base);\n}\n\n@media (color-index: 48) {\n\nbody {\n        background-color: var(--black);\n        color: var(--gray300)\n}\n    }\n\n@media (color: 48842621) {\n\nbody {\n        background-color: var(--black);\n        color: var(--gray300)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\nbody {\n        background-color: var(--black);\n        color: var(--gray300)\n}\n    }\n\n.options {\n    overflow-y: scroll;\n}\n\nh2 {\n    margin: 0;\n    font-size: inherit;\n}\n\nbutton,\ninput,\ntextarea,\nselect {\n    font-family: inherit;\n}\n\n/* custom checkbox */\nlabel.checkbox-label {\n    cursor: pointer;\n    color: var(--gray900);\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n}\n@media (color-index: 48) {\nlabel.checkbox-label {\n        color: var(--gray300)\n}\n    }\n@media (color: 48842621) {\nlabel.checkbox-label {\n        color: var(--gray300)\n}\n    }\n@media (prefers-color-scheme: dark) {\nlabel.checkbox-label {\n        color: var(--gray300)\n}\n    }\nlabel.checkbox-label input[type=\"checkbox\"] {\n        display: none;\n    }\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox {\n                background-color: var(--green400);\n                border-color: var(--green400);\n            }\n@media (color-index: 48) {\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox {\n                    background-color: var(--green700);\n                    border-color: var(--green700)\n            }\n                }\n@media (color: 48842621) {\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox {\n                    background-color: var(--green700);\n                    border-color: var(--green700)\n            }\n                }\n@media (prefers-color-scheme: dark) {\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox {\n                    background-color: var(--green700);\n                    border-color: var(--green700)\n            }\n                }\nlabel.checkbox-label input[type=\"checkbox\"]:checked + .custom-checkbox .icon {\n                    display: block;\n                }\nlabel.checkbox-label .custom-checkbox {\n        width: 16px;\n        height: 16px;\n        background-color: transparent;\n        border: 2px solid var(--gray700);\n        border-radius: 2px;\n        margin-right: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n    }\n@media (color-index: 48) {\nlabel.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray400)\n    }\n        }\n@media (color: 48842621) {\nlabel.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray400)\n    }\n        }\n@media (prefers-color-scheme: dark) {\nlabel.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray400)\n    }\n        }\nlabel.checkbox-label .custom-checkbox .icon {\n            display: none;\n        }\n\n.inner {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.content {\n    position: relative;\n    padding: 50px 16px;\n    width: 100%;\n    max-width: 100%;\n}\n\n@media (min-width: 640px) {\n\n.content {\n        max-width: 672px\n}\n    }\n\n.content__btn {\n        margin-left: 15px;\n    }\n\n.wrapper {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.page {\n    flex: 1 0 auto;\n    display: flex;\n}\n\n.footer {\n    width: 100%;\n    flex: 0 0 auto;\n}\n\n.title {\n    color: var(--gray-base);\n    font-size: 24px;\n    font-weight: 700;\n    padding: 0;\n    padding-right: 8px;\n    margin-top: -5px;\n    line-height: 30px;\n}\n\n@media (color-index: 48) {\n\n.title {\n        color: var(--gray300)\n}\n    }\n\n@media (color: 48842621) {\n\n.title {\n        color: var(--gray300)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.title {\n        color: var(--gray300)\n}\n    }\n\n.title__container {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        padding: 32px 16px 16px;\n    }\n\n.title__container--sub > .title__inner {\n            padding-top: 0;\n        }\n\n.title__container--control {\n            border-radius: 8px;\n            cursor: pointer;\n            transition: var(--t3) background-color;\n        }\n\n.title__container--control .checkbox__label:hover {\n                background-color: transparent;\n            }\n\n@media (min-width: 1024px) {\n\n.title__container--control:hover {\n                    background-color: var(--gray100)\n            }\n\n                    @media (color-index: 48) {\n\n.title__container--control:hover {\n                        background-color: var(--gray900)\n            }\n                    }\n\n                    @media (color: 48842621) {\n\n.title__container--control:hover {\n                        background-color: var(--gray900)\n            }\n                    }\n\n                    @media (prefers-color-scheme: dark) {\n\n.title__container--control:hover {\n                        background-color: var(--gray900)\n            }\n                    }\n                }\n\n@media (min-width: 640px) {\n\n.title {\n        padding-right: 16px\n}\n\n        .title__container {\n            padding: 16px 0 16px 16px;\n        }\n\n            .title__container--small {\n                padding: 16px;\n            }\n\n            .title__container--back {\n                padding: 0 16px 16px 16px;\n            }\n\n                .title__container--back .title__inner {\n                    padding-top: 16px;\n                }\n                    @media (min-width: 640px) {\n\n                .title__container--back .checkbox__label {\n                        padding: 16px\n                }\n\n                        .title__container--back .checkbox__label:before {\n                            top: 0;\n                        }\n                    }\n\n            .title__container--sub > .title__inner {\n                padding-top: 0;\n            }\n                @media (min-width: 640px) {\n\n            .title__container--about {\n                    padding: 16px 0 16px 16px\n            }\n                }\n    }\n\n.title__desc {\n        font-size: 14px;\n        font-weight: 400;\n        color: var(--gray700);\n        margin-top: 8px;\n    }\n\n.title__desc--back {\n            cursor: pointer;\n        }\n\n.title--back-btn {\n        background-color: transparent;\n        border: 0;\n        cursor: pointer;\n    }\n\n.title--sub {\n        font-size: 20px;\n    }\n\n.subtitle {\n    padding: 0 15px;\n    color: var(--gray4a);\n    font-size: 20px;\n    font-weight: normal;\n    line-height: 28px;\n    margin: 0 0 8px;\n}\n\n.desc {\n    font-size: 16px;\n    margin-bottom: 20px;\n    color: var(--gray-base);\n    line-height: 22px;\n    padding-left: 15px;\n}\n\n@media (color-index: 48) {\n\n.desc {\n        color: var(--gray300)\n}\n    }\n\n@media (color: 48842621) {\n\n.desc {\n        color: var(--gray300)\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.desc {\n        color: var(--gray300)\n}\n    }\n\n.desc--link {\n        color: var(--green74);\n    }\n\n.settings__group {\n    margin-bottom: 24px;\n}\n\n.settings__group--disabled {\n        opacity: 0.5;\n        pointer-events: none;\n    }\n\n.actions {\n    padding: 22px 0;\n    display: inline-block;\n}\n\n.actions--divided {\n        display: inline-block;\n    }\n\n@media (min-width: 500px) {\n\n.actions--divided {\n            display: flex;\n            justify-content: space-between;\n            padding: 24px 5px 24px\n    }\n        }\n\n.actions__group {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n    }\n\n.actions__saving {\n        position: relative;\n    }\n\n.actions__btn {\n        outline: none;\n        margin: 12px;\n        position: relative;\n    }\n\n.actions__btn--icon {\n            background-color: transparent;\n            border: 0;\n            padding: 0;\n            cursor: pointer;\n        }\n\n.actions__btn--active {\n            background-color: var(--gray100);\n        }\n\n@media (color-index: 48) {\n\n.actions__btn--active {\n                background-color: var(--gray900)\n        }\n            }\n\n@media (color: 48842621) {\n\n.actions__btn--active {\n                background-color: var(--gray900)\n        }\n            }\n\n@media (prefers-color-scheme: dark) {\n\n.actions__btn--active {\n                background-color: var(--gray900)\n        }\n            }\n\nselect:focus {\n    outline: none;\n}\n\n.ReactModal__Overlay {\n    z-index: 10;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.5)!important;\n}\n\n.ReactModal__Content--after-open {\n    position: static!important;\n    min-width: 300px;\n}\n\n@media (color-index: 48) {\n\n.ReactModal__Content--after-open {\n        background-color: var(--black)!important;\n        border: 1px solid var(--gray900)!important\n}\n    }\n\n@media (color: 48842621) {\n\n.ReactModal__Content--after-open {\n        background-color: var(--black)!important;\n        border: 1px solid var(--gray900)!important\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.ReactModal__Content--after-open {\n        background-color: var(--black)!important;\n        border: 1px solid var(--gray900)!important\n}\n    }\n\n@media (color-index: 48) {\n\n.ace_cursor {\n        color: var(--gray300)!important\n}\n    }\n\n@media (color: 48842621) {\n\n.ace_cursor {\n        color: var(--gray300)!important\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.ace_cursor {\n        color: var(--gray300)!important\n}\n    }\n\n@media (color-index: 48) {\n\n.ace_content {\n        background-color: var(--black)!important;\n        color: var(--gray300)!important\n}\n    }\n\n@media (color: 48842621) {\n\n.ace_content {\n        background-color: var(--black)!important;\n        color: var(--gray300)!important\n}\n    }\n\n@media (prefers-color-scheme: dark) {\n\n.ace_content {\n        background-color: var(--black)!important;\n        color: var(--gray300)!important\n}\n    }\n\n\n.light-mode {\n    color-scheme: light;\n}\n\n\n.light-mode body {\n        background-color: var(--transparent);\n        color: var(--gray-base);\n    }\n\n\n.light-mode label.checkbox-label {\n        color: var(--gray900);\n    }\n\n\n.light-mode label.checkbox-label input[type=\"checkbox\"] {\n            background-color: var(--green400);\n            border-color: var(--green400);\n        }\n\n\n.light-mode label.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray700);\n        }\n\n\n.light-mode .title {\n        color: var(--gray-base);\n    }\n\n\n.light-mode .title__container--control:hover {\n                    background-color: var(--gray100);\n                }\n\n\n.light-mode .ReactModal__Content--after-open {\n        background-color: var(--white)!important;\n        border: 0!important;\n    }\n\n\n.light-mode .ace_content {\n        background-color: var(--transparent)!important;\n        color: var(--gray-base)!important;\n    }\n\n\n.light-mode .desc {\n        color: var(--gray-base);\n    }\n\n\n.light-mode .ace_cursor {\n        color: var(--black)!important;\n    }\n\n\n.light-mode .actions__btn--active {\n        background-color: var(--gray100);\n    }\n\n.dark-mode {\n    color-scheme: dark;\n}\n\n.dark-mode body {\n        background-color: var(--black);\n        color: var(--gray300)\n    }\n\n.dark-mode label.checkbox-label {\n        color: var(--gray300);\n    }\n\n.dark-mode label.checkbox-label input[type=\"checkbox\"] {\n            background-color: var(--green700);\n            border-color: var(--green700);\n        }\n\n.dark-mode label.checkbox-label .custom-checkbox {\n            border: 2px solid var(--gray400);\n        }\n\n.dark-mode .title {\n        color: var(--gray300);\n    }\n\n.dark-mode .title__container--control:hover {\n                    background-color: var(--gray900);\n                }\n\n.dark-mode .ReactModal__Content--after-open {\n        background-color: var(--black)!important;\n        border: 1px solid var(--gray700)!important;\n    }\n\n.dark-mode .ace_content {\n        background-color: var(--black)!important;\n        color: var(--gray300)!important;\n    }\n\n.dark-mode .desc {\n        color: var(--gray300);\n    }\n\n.dark-mode .ace_cursor {\n        color: var(--gray300)!important;\n    }\n\n.dark-mode .actions__btn--active {\n        background-color: var(--gray900);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9674:
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
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    min-height: 330px;\n}\n\n    .modal__title {\n        font-size: 24px;\n        font-weight: 500;\n        margin-bottom: 15px;\n    }\n\n    .modal__subtitle {\n        font-size: 16px;\n        font-weight: 400;\n        margin-bottom: 15px;\n    }\n\n    .modal__subtitle--confirm {\n            max-width: 300px\n        }\n\n    .modal__close {\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        top: 30px;\n        right: 30px;\n        color: var(--gray700);\n    }\n\n    @media (color-index: 48) {\n\n    .modal__close {\n            color: var(--gray400)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .modal__close {\n            color: var(--gray400)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .modal__close {\n            color: var(--gray400)\n    }\n        }\n\n    .modal__content {\n        width: 100%;\n        margin: auto 0;\n    }\n\n    .modal__content--button {\n            display: flex;\n            justify-content: space-between;\n        }\n\n    .modal__content--center-text {\n            text-align: center;\n        }\n\n    .modal__input {\n        width: 100%;\n        border: 0;\n        line-height: 22px;\n        font-size: 14px;\n        border-bottom: 2px solid var(--green74);\n        margin-bottom: 22px;\n        padding: 7px 8px;\n        outline: none;\n    }\n\n    @media (color-index: 48) {\n\n    .modal__input {\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .modal__input {\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .modal__input {\n            background-color: var(--black);\n            color: var(--gray300)\n    }\n        }\n\n    .modal__desc {\n        font-size: 14px;\n        line-height: 22px;\n        color: rgba(27, 27, 27, 0.9);\n    }\n\n    @media (color-index: 48) {\n\n    .modal__desc {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .modal__desc {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .modal__desc {\n            color: var(--gray300)\n    }\n        }\n\n    .modal__btn {\n        margin: 0 auto;\n        margin-top: 15px;\n        min-width: 175px;\n    }\n\n    .modal__btn--statistic {\n            line-height: 40px;\n            min-width: 100px;\n        }\n\n    .modal__btn--statistic:first-child {\n                margin-right: 25px;\n            }\n\n    .modal__row {\n        display: flex;\n        margin-bottom: 7px;\n    }\n\n    .modal__row--info {\n            color: var(--grayd8);\n            font-size: 12px;\n            line-height: 15px;\n        }\n\n    .modal__cell {\n        font-size: 14px;\n        line-height: 22px;\n    }\n\n    .modal__cell:first-child {\n            width: 160px;\n            padding-right: 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            flex-grow: 0;\n            flex-shrink: 0;\n        }\n\n    .modal__cell--title {\n            padding-top: 7px;\n        }\n\n    .modal__cell--url {\n            word-break: break-all;\n        }\n\n.light-mode .modal__desc {\n        color: rgba(27, 27, 27, 0.9);\n    }\n\n.light-mode .modal__input {\n        color: var(--gray-base);\n        background-color: transparent;\n    }\n\n.dark-mode .modal__desc {\n        color: var(--gray300);\n    }\n\n.dark-mode .modal__input {\n        background-color: var(--black);\n        color: var(--gray300);\n    }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 478:
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
___CSS_LOADER_EXPORT___.push([module.id, ".setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: initial;\n    position: relative;\n    padding: 16px;\n    min-height: 52px;\n}\n\n    .setting.group {\n        padding: 16px;\n    }\n\n    @media (min-width: 640px) {\n\n    .setting.group {\n            justify-content: flex-start;\n            padding: 0 16px 0 0\n    }\n        }\n\n    .setting--disabled .textarea,\n        .setting--disabled .input__in {\n            pointer-events: none;\n            cursor: default;\n            opacity: 0.5;\n        }\n\n    .setting__area {\n        display: flex;\n        width: 80%;\n        border: 0;\n        border-radius: 8px;\n        cursor: pointer;\n        outline: none;\n        text-align: left;\n        background-color: transparent;\n        transition: 0.3s ease background-color;\n    }\n\n    @media (min-width: 640px) {\n\n    .setting__area {\n            padding: 15px 0 15px 16px\n    }\n\n            .setting__area_group {\n                flex-grow: 1;\n                border-radius: 8px;\n            }\n        }\n\n    .setting__area:hover {\n            background-color: var(--gray100);\n        }\n\n    @media (color-index: 48) {\n\n    .setting__area:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (color: 48842621) {\n\n    .setting__area:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    @media (prefers-color-scheme: dark) {\n\n    .setting__area:hover {\n                background-color: var(--gray900)\n        }\n            }\n\n    .setting__inline-control {\n        margin-left: 22px;\n        height: auto;\n    }\n\n    @media (min-width: 640px) {\n            .setting__inline-control_group {\n                margin-left: 0;\n            }\n\n                .setting__inline-control_group .checkbox__label {\n                    padding: 16px;\n                }\n\n                    .setting__inline-control_group .checkbox__label:before {\n                        top: 0;\n                    }\n        }\n\n    .setting__container {\n        display: flex;\n    }\n\n    .setting__container--vertical {\n            flex-direction: column;\n            width: 100%;\n        }\n\n    .setting__container--horizontal {\n            flex-direction: row;\n            justify-content: space-between;\n            width: 100%;\n        }\n\n    .setting__container--inline {\n            display: block;\n        }\n\n    .setting__info {\n        max-width: 530px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n    }\n\n    .setting__title {\n        font-weight: 500;\n        font-size: 16px;\n        color: var(--gray-base);\n        line-height: 20px;\n        word-break: break-word;\n    }\n\n    @media (color-index: 48) {\n\n    .setting__title {\n            color: var(--gray300)\n    }\n        }\n\n    @media (color: 48842621) {\n\n    .setting__title {\n            color: var(--gray300)\n    }\n        }\n\n    @media (prefers-color-scheme: dark) {\n\n    .setting__title {\n            color: var(--gray300)\n    }\n        }\n\n    .setting__desc {\n        line-height: 18px;\n        padding: 4px 0 0;\n        color: var(--gray700);\n        font-size: 14px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        word-break: break-word;\n    }\n\n    .setting__desc a {\n            color: var(--green74);\n            text-decoration: underline;\n        }\n\n    .setting__desc-item {\n        margin-bottom: 13px;\n    }\n\n    .setting__desc-item:last-child {\n            margin-bottom: 0;\n        }\n\n    .setting__tags {\n        display: flex;\n        font-size: 13px;\n        flex-wrap: wrap;\n    }\n\n    .setting__icon {\n        color: var(--green400);\n        margin-right: 20px;\n    }\n\n    .setting__back {\n        color: var(--gray700);\n        position: absolute;\n        padding-top: 16px;\n        left: -8px;\n        top: 33px;\n    }\n\n    @media (min-width: 640px) {\n\n    .setting__back {\n            top: 3px\n    }\n        }\n\n    .setting__alert-desc,\n    .setting__alert-link {\n        color: var(--red400);\n    }\n\n    .setting__checkbox {\n        display: none;\n    }\n\n.setting-checkbox {\n    display: block;\n    border-radius: 8px;\n    cursor: pointer;\n    transition: var(--t3) background-color;\n}\n\n.setting-checkbox:hover {\n        background-color: var(--gray100);\n    }\n\n@media (color-index: 48) {\n\n.setting-checkbox:hover {\n            background-color: var(--gray900)\n    }\n        }\n\n@media (color: 48842621) {\n\n.setting-checkbox:hover {\n            background-color: var(--gray900)\n    }\n        }\n\n@media (prefers-color-scheme: dark) {\n\n.setting-checkbox:hover {\n            background-color: var(--gray900)\n    }\n        }\n\n.setting-checkbox .checkbox__label:hover {\n        background-color: transparent;\n    }\n\n.light-mode .setting--checkbox:hover {\n                background-color: var(--gray100);\n            }\n\n.light-mode .setting__title {\n            color: var(--gray-base);\n        }\n\n.light-mode .setting__area:hover {\n                background-color: var(--gray100);\n            }\n\n.light-mode .setting-checkbox:hover {\n            background-color: var(--gray100);\n        }\n\n.dark-mode .setting--checkbox:hover {\n                background-color: var(--gray900);\n            }\n\n.dark-mode .setting__title {\n            color: var(--gray300)\n        }\n\n.dark-mode .setting__area:hover {\n                background-color: var(--gray900);\n            }\n\n.dark-mode .setting-checkbox:hover {\n            background-color: var(--gray900);\n        }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1389);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9633);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_fonts_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4381);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_vars_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6834);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_icons_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6949);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_pcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6843);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_button_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1258);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_setting_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(478);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_modal_pcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9674);
// Imports









var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_fonts_pcss__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_vars_pcss__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_styles_icons_pcss__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_common_pcss__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_button_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_setting_pcss__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_modal_pcss__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
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

/***/ 4942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* reexport */ SimpleRegex)
});

;// CONCATENATED MODULE: ./node_modules/@adguard/tsurlfilter/dist/es/simple-regex-83c0bb84.js
/**
 * Splits the string by the delimiter, ignoring escaped delimiters.
 *
 * @param str - string to split
 * @param delimiter - delimiter
 * @param escapeCharacter - escape character
 * @param preserveAllTokens - if true, preserve empty parts
 * @param unescape - if true, delete EscapeCharacter
 * @return array of string parts
 */
function splitByDelimiterWithEscapeCharacter(str, delimiter, escapeCharacter, preserveAllTokens, unescape) {
    if (unescape === void 0) { unescape = true; }
    var parts = [];
    if (!str) {
        return parts;
    }
    if (str.startsWith(delimiter)) {
        // eslint-disable-next-line no-param-reassign
        str = str.substring(1);
    }
    if (!str.includes(escapeCharacter)) {
        parts = str.split(delimiter);
        if (!preserveAllTokens) {
            parts = parts.filter(function (x) { return !!x; });
        }
        return parts;
    }
    var sb = [];
    for (var i = 0; i < str.length; i += 1) {
        var c = str.charAt(i);
        if (c === delimiter) {
            if (i > 0 && str.charAt(i - 1) === escapeCharacter) {
                if (unescape) {
                    sb.splice(sb.length - 1, 1);
                }
                sb.push(c);
            }
            else if (preserveAllTokens || sb.length > 0) {
                var part = sb.join('');
                parts.push(part);
                sb = [];
            }
        }
        else {
            sb.push(c);
        }
    }
    if (preserveAllTokens || sb.length > 0) {
        parts.push(sb.join(''));
    }
    return parts;
}
/**
 * Checks if the specified string starts with a substr at the specified index.
 *
 * @param str - String to check
 * @param startIndex - Index to start checking from
 * @param substr - Substring to check
 * @return boolean true if it does start
 */
function startsAtIndexWith(str, startIndex, substr) {
    if (str.length - startIndex < substr.length) {
        return false;
    }
    for (var i = 0; i < substr.length; i += 1) {
        if (str.charAt(startIndex + i) !== substr.charAt(i)) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if str has unquoted substr
 *
 * @param str
 * @param substr
 */
function hasUnquotedSubstring(str, substr) {
    var quotes = ['"', "'", '/'];
    if (!str.includes(substr)) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (indexOfAny(str, quotes) === -1) {
        return true;
    }
    var stack = [];
    for (var i = 0; i < str.length; i += 1) {
        var cursor = str[i];
        if (stack.length === 0) {
            if (startsAtIndexWith(str, i, substr)) {
                return true;
            }
        }
        if (quotes.indexOf(cursor) >= 0
            && (i === 0 || str[i - 1] !== '\\')) {
            var last = stack.pop();
            if (!last) {
                stack.push(cursor);
            }
            else if (last !== cursor) {
                stack.push(last);
                stack.push(cursor);
            }
        }
    }
    return false;
}
/**
 * djb2 hash algorithm
 *
 * @param str string to get hash
 * @param begin index from
 * @param end index to
 * @return {number} hash
 */
function fastHashBetween(str, begin, end) {
    var hash = 5381;
    for (var idx = begin; idx < end; idx += 1) {
        hash = 33 * hash + str.charCodeAt(idx);
    }
    return hash;
}
/**
 * djb2 hash algorithm
 *
 * @param str string to get hash
 * @return {number} hash
 */
function fastHash(str) {
    if (str === '') {
        return 0;
    }
    var len = str.length;
    return fastHashBetween(str, 0, len);
}
/**
 * Look for any symbol from "chars" array starting at "start" index or from the start of the string
 *
 * @param str   String to search
 * @param chars Chars to search for
 * @param start Start index (optional, inclusive)
 * @return int Index of the element found or -1 if not
 */
function indexOfAny(str, chars, start) {
    if (start === void 0) { start = 0; }
    if (str.length <= start) {
        return -1;
    }
    for (var i = start; i < str.length; i += 1) {
        var c = str.charAt(i);
        if (chars.indexOf(c) > -1) {
            return i;
        }
    }
    return -1;
}
/**
 * Replaces all occurences of find with replace in str
 *
 * @param str
 * @param find
 * @param replace
 */
function replaceAll(str, find, replace) {
    if (!str) {
        return str;
    }
    return str.split(find).join(replace);
}
/**
 * Checks if arrays are equal
 *
 * @param left array
 * @param right array
 * @return {boolean} true on equality
 */
function stringArraysEquals(left, right) {
    if (!left || !right) {
        return !left && !right;
    }
    if (left.length !== right.length) {
        return false;
    }
    for (var i = 0; i < left.length; i += 1) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if arrays have an intersection
 *
 * @param left array
 * @param right array
 * @return {boolean} true on equality
 */
function stringArraysHaveIntersection(left, right) {
    if (!left || !right) {
        return true;
    }
    for (var i = 0; i < left.length; i += 1) {
        if (right.includes(left[i])) {
            return true;
        }
    }
    return false;
}

// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/regexp
// should be escaped . * + ? ^ $ { } ( ) | [ ] / \
// except of * | ^
var specialCharacters = ['.', '+', '?', '$', '{', '}', '(', ')', '[', ']', '/', '\\'];
var reSpecialCharacters = new RegExp("[".concat(specialCharacters.join('\\'), "]"), 'g');
var reSpecialCharactersFull = /[.*+?^${}()|[\]\\]/g;
var reEscapedSpecialCharactersFull = /\\[.*+?^${}()|[\]\\]/g;
/**
 * Class with static helper methods for working with basic filtering rules patterns.
 * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules
 */
var SimpleRegex = /** @class */ (function () {
    function SimpleRegex() {
    }
    /**
     * Extracts the shortcut from the rule's pattern.
     * Shortcut is the longest substring of the pattern that does not contain
     * any special characters.
     *
     * Please note, that the shortcut is always lower-case!
     *
     * @param pattern - network rule's pattern.
     * @returns the shortcut or the empty string if we could not extract any.
     */
    SimpleRegex.extractShortcut = function (pattern) {
        if (pattern.startsWith(this.MASK_REGEX_RULE) && pattern.endsWith(this.MASK_REGEX_RULE)) {
            return this.extractRegexpShortcut(pattern);
        }
        return this.extractBasicShortcut(pattern);
    };
    /**
     * Searches for the longest substring of the pattern that
     * does not contain any special characters: *,^,|.
     *
     * @param pattern - network rule's pattern.
     * @returns the shortcut or the empty string
     */
    SimpleRegex.extractBasicShortcut = function (pattern) {
        var longest = '';
        var parts = pattern.split(this.rePatternSpecialCharacters);
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part.length > longest.length) {
                longest = part;
            }
        }
        return (longest || '').toLowerCase();
    };
    /**
     * Searches for a shortcut inside of a regexp pattern.
     * Shortcut in this case is a longest string with no REGEX special characters.
     * Also, we discard complicated regexps right away.
     *
     * @param pattern - network rule's pattern (regexp).
     * @returns the shortcut or the empty string
     */
    SimpleRegex.extractRegexpShortcut = function (pattern) {
        var reText = pattern.substring(this.MASK_REGEX_RULE.length, pattern.length - this.MASK_REGEX_RULE.length);
        if (reText.length === 0) {
            // The rule is too short, doing nothing
            return '';
        }
        if (reText.indexOf('(?') >= 0 || reText.indexOf('(!?') >= 0) {
            // Do not mess with complex expressions which use lookahead
            return '';
        }
        var specialCharacter = '$$$';
        // Prepend specialCharacter for the following replace calls to work properly
        reText = specialCharacter + reText;
        // Strip all types of brackets
        reText = reText.replace(/[^\\]\(.*[^\\]\)/, specialCharacter);
        reText = reText.replace(/[^\\]\[.*[^\\]\]/, specialCharacter);
        reText = reText.replace(/[^\\]\{.*[^\\]\}/, specialCharacter);
        // Strip some special characters
        reText = reText.replace(/[^\\]\\[a-zA-Z]/, specialCharacter);
        // Replace \. with .
        reText = reText.replace(/\\\./g, '.');
        // Split by special characters
        // `.` is one of the special characters so our `specialCharacter`
        // will be removed from the resulting array
        var parts = reText.split(/[\\^$*+?()|[\]{}]/);
        var longest = '';
        for (var i = 0; i < parts.length; i += 1) {
            var part = parts[i];
            if (part.length > longest.length) {
                longest = part;
            }
        }
        return longest.toLowerCase();
    };
    /**
     * patternToRegexp is a helper method for creating regular expressions from the simple
     * wildcard-based syntax which is used in basic filters:
     * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules
     *
     * @param pattern - basic rule pattern
     * @returns regular expression
     */
    SimpleRegex.patternToRegexp = function (pattern) {
        if (pattern === this.MASK_START_URL
            || pattern === this.MASK_PIPE
            || pattern === this.MASK_ANY_CHARACTER
            || pattern === '') {
            return this.REGEX_ANY_CHARACTER;
        }
        if (pattern.startsWith(this.MASK_REGEX_RULE) && pattern.endsWith(this.MASK_REGEX_RULE)) {
            // This is a regex rule, just remove the regex markers
            return pattern.substring(this.MASK_REGEX_RULE.length, pattern.length - this.MASK_REGEX_RULE.length);
        }
        // Escape special characters except of * | ^
        var regex = pattern.replace(reSpecialCharacters, '\\$&');
        // Now escape "|" characters but avoid escaping them in the special places
        if (regex.startsWith(this.MASK_START_URL)) {
            regex = regex.substring(0, this.MASK_START_URL.length)
                + replaceAll(regex.substring(this.MASK_START_URL.length, regex.length - this.MASK_PIPE.length), this.MASK_PIPE, "\\".concat(this.MASK_PIPE))
                + regex.substring(regex.length - this.MASK_PIPE.length);
        }
        else {
            regex = regex.substring(0, this.MASK_PIPE.length)
                + replaceAll(regex.substring(this.MASK_PIPE.length, regex.length - this.MASK_PIPE.length), this.MASK_PIPE, "\\".concat(this.MASK_PIPE))
                + regex.substring(regex.length - this.MASK_PIPE.length);
        }
        // Replace special URL masks
        regex = replaceAll(regex, this.MASK_ANY_CHARACTER, this.REGEX_ANY_CHARACTER);
        regex = replaceAll(regex, this.MASK_SEPARATOR, this.REGEX_SEPARATOR);
        // Replace start URL and pipes
        if (regex.startsWith(this.MASK_START_URL)) {
            regex = this.REGEX_START_URL + regex.substring(this.MASK_START_URL.length);
        }
        else if (regex.startsWith(this.MASK_PIPE)) {
            regex = this.REGEX_START_STRING + regex.substring(this.MASK_PIPE.length);
        }
        if (regex.endsWith(this.MASK_PIPE)) {
            regex = regex.substring(0, regex.length - this.MASK_PIPE.length) + this.REGEX_END_STRING;
        }
        return regex;
    };
    /**
     * Creates RegExp object from string in '/reg_exp/gi' format
     *
     * @param str
     */
    SimpleRegex.patternFromString = function (str) {
        var parts = splitByDelimiterWithEscapeCharacter(str, '/', '\\', true);
        var modifiers = (parts[1] || '');
        if (modifiers.indexOf('g') < 0) {
            modifiers += 'g';
        }
        return new RegExp(parts[0], modifiers);
    };
    /**
     * Escapes characters with special meaning inside a regular expression.
     *
     * @param str
     * @param searchPattern - Pattern for detecting special characters. Optional.
     */
    SimpleRegex.escapeRegexSpecials = function (str, searchPattern) {
        if (searchPattern === void 0) { searchPattern = reSpecialCharactersFull; }
        return str.replace(searchPattern, '\\$&');
    };
    /**
     * Unescapes characters with special meaning inside a regular expression.
     *
     * @param str
     * @param searchPattern - Pattern for detecting special characters. Optional.
     */
    SimpleRegex.unescapeRegexSpecials = function (str, searchPattern) {
        if (searchPattern === void 0) { searchPattern = reEscapedSpecialCharactersFull; }
        return str.replace(searchPattern, function (match) { return match.substring(1); });
    };
    /**
     * Check if pattern is Regex
     */
    SimpleRegex.isRegexPattern = function (str) {
        return str.startsWith('/') && str.endsWith('/');
    };
    /**
     * Matching the beginning of an address. With this character you don't
     * have to specify a particular protocol and subdomain in address mask.
     * It means, || stands for http://*., https://*., ws://*., wss://*. at once.
     */
    SimpleRegex.MASK_START_URL = '||';
    /**
     * REGEX_START_URL corresponds to MASK_START_URL
     */
    SimpleRegex.REGEX_START_URL = '^(http|https|ws|wss)://([a-z0-9-_.]+\\.)?';
    /**
     * A pointer to the beginning or the end of address. The value depends on the
     * character placement in the mask. For example, a rule swf| corresponds
     * to http://example.com/annoyingflash.swf , but not to http://example.com/swf/index.html.
     * |http://example.org corresponds to http://example.org,
     * but not to http://domain.com?url=http://example.org.
     */
    SimpleRegex.MASK_PIPE = '|';
    /**
     * REGEX_END_STRING corresponds to MASK_PIPE if it is in the end of a pattern.
     */
    SimpleRegex.REGEX_END_STRING = '$';
    /**
     * REGEX_START_STRING corresponds to MASK_PIPE if it is in the beginning of a pattern.
     */
    SimpleRegex.REGEX_START_STRING = '^';
    /**
     * Separator character mark. Separator character is any character,
     * but a letter, a digit, or one of the following: _ - .
     */
    SimpleRegex.MASK_SEPARATOR = '^';
    /**
     * REGEX_SEPARATOR corresponds to MASK_SEPARATOR
     */
    SimpleRegex.REGEX_SEPARATOR = '([^ a-zA-Z0-9.%_-]|$)';
    /**
     * This is a wildcard character. It is used to represent "any set of characters".
     * This can also be an empty string or a string of any length.
     */
    SimpleRegex.MASK_ANY_CHARACTER = '*';
    /**
     * Path separator
     */
    SimpleRegex.MASK_BACKSLASH = '/';
    /**
     * REGEX_ANY_CHARACTER corresponds to MASK_ANY_CHARACTER.
     */
    SimpleRegex.REGEX_ANY_CHARACTER = '.*';
    /**
     * Enclose regex in two backslashes to mark a regex rule:
     * https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#regular-expressions-support
     */
    SimpleRegex.MASK_REGEX_RULE = '/';
    /**
     *  Regex for matching special characters in modifier regex pattern
     */
    SimpleRegex.reModifierPatternSpecialCharacters = /[[\],\\]/g;
    /**
      *  Regex for matching escaped special characters in modifier regex pattern
      */
    SimpleRegex.reModifierPatternEscapedSpecialCharacters = /\\[[\],\\]/g;
    /**
     * If string starts with exclamation mark "!" we consider it as comment
     */
    SimpleRegex.MASK_COMMENT = '!';
    /**
     * Min length of rule shortcut
     * This value has been picked as a result of performance experiments
     */
    SimpleRegex.MIN_SHORTCUT_LENGTH = 3;
    /**
     * Min length of generic rule shortcut
     */
    SimpleRegex.MIN_GENERIC_RULE_LENGTH = 4;
    /** Regex with basic matching pattern special characters */
    SimpleRegex.rePatternSpecialCharacters = new RegExp('[*^|]');
    return SimpleRegex;
}());



;// CONCATENATED MODULE: ./node_modules/@adguard/tsurlfilter/dist/es/simple-regex.js



/***/ }),

/***/ 5285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ format)
});

;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isDate/index.js

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/toDate/index.js

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isValid/index.js



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);

  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const _lib_formatDistance = (formatDistance);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const _lib_formatLong = (formatLong);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const _lib_formatRelative = (formatRelative);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const _lib_localize = (localize);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const _lib_match = (match);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-US/index.js






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance,
  formatLong: _lib_formatLong,
  formatRelative: _lib_formatRelative,
  localize: _lib_localize,
  match: _lib_match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/addMilliseconds/index.js



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/subMilliseconds/index.js



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js




var getUTCWeek_MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / getUTCWeek_MILLISECONDS_IN_WEEK) + 1;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const lightFormatters = (formatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/formatters/index.js







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters_formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return lightFormatters.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const format_formatters = (formatters_formatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const format_longFormatters = (longFormatters);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/format/index.js









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || en_US;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = format_longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = format_formatters[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ 4420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(3056);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 9042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(4420),
    getRawTag = __webpack_require__(6282),
    objectToString = __webpack_require__(7661);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(5630);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 1744:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 6282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(4420);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 7661:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 3056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1744);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 5630:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 9412:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(7040),
    now = __webpack_require__(4736),
    toNumber = __webpack_require__(314);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 7040:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 1259:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 7386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(9042),
    isObjectLike = __webpack_require__(1259);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 4736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(3056);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 9789:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(9412),
    isObject = __webpack_require__(7040);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(439),
    isObject = __webpack_require__(7040),
    isSymbol = __webpack_require__(7386);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 2497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pi": () => (/* binding */ mobxreact_esm_observer)
});

// UNUSED EXPORTS: MobXProviderContext, Observer, PropTypes, Provider, disposeOnUnmount, enableStaticRendering, inject, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalObservable, useLocalStore, useObserver, useStaticRendering

// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(1056);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(846);
;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/assertEnvironment.js


if (!react.useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx_esm/* makeObservable */.rC) {
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
}

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6644);
;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js


;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/observerBatching.js

function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (false) {}
    }
    (0,mobx_esm/* configure */.jQ)({ reactionScheduler: reactionScheduler });
}
var isObserverBatched = function () {
    if (false) {}
    return true;
};

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/printDebugValue.js

function printDebugValue(v) {
    return (0,mobx_esm/* getDependencyTree */.Gf)(v);
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/FinalizationRegistryWrapper.js
var FinalizationRegistryLocal = typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry;


;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js
function createTrackingData(reaction) {
    var trackingData = {
        reaction: reaction,
        mounted: false,
        changedBeforeMount: false,
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/createReactionCleanupTrackingUsingFinalizationRegister.js

/**
 * FinalizationRegistry-based uncommitted reaction cleanup
 */
function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry) {
    var cleanupTokenToReactionTrackingMap = new Map();
    var globalCleanupTokensCounter = 1;
    var registry = new FinalizationRegistry(function cleanupFunction(token) {
        var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
        if (trackedReaction) {
            trackedReaction.reaction.dispose();
            cleanupTokenToReactionTrackingMap.delete(token);
        }
    });
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
            var token = globalCleanupTokensCounter++;
            registry.register(objectRetainedByReact, token, reactionTrackingRef);
            reactionTrackingRef.current = createTrackingData(reaction);
            reactionTrackingRef.current.finalizationRegistryCleanupToken = token;
            cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: function (reactionRef) {
            registry.unregister(reactionRef);
            if (reactionRef.current && reactionRef.current.finalizationRegistryCleanupToken) {
                cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
            }
        },
        forceCleanupTimerToRunNowForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        },
        resetCleanupScheduleForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/createTimerBasedReactionCleanupTracking.js
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

/**
 * timers, gc-style, uncommitted reaction cleanup
 */
function createTimerBasedReactionCleanupTracking() {
    /**
     * Reactions created by components that have yet to be fully mounted.
     */
    var uncommittedReactionRefs = new Set();
    /**
     * Latest 'uncommitted reactions' cleanup timer handle.
     */
    var reactionCleanupHandle;
    /* istanbul ignore next */
    /**
     * Only to be used by test functions; do not export outside of mobx-react-lite
     */
    function forceCleanupTimerToRunNowForTests() {
        // This allows us to control the execution of the cleanup timer
        // to force it to run at awkward times in unit tests.
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            cleanUncommittedReactions();
        }
    }
    /* istanbul ignore next */
    function resetCleanupScheduleForTests() {
        var e_1, _a;
        if (uncommittedReactionRefs.size > 0) {
            try {
                for (var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs), uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next(); !uncommittedReactionRefs_1_1.done; uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()) {
                    var ref = uncommittedReactionRefs_1_1.value;
                    var tracking = ref.current;
                    if (tracking) {
                        tracking.reaction.dispose();
                        ref.current = null;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (uncommittedReactionRefs_1_1 && !uncommittedReactionRefs_1_1.done && (_a = uncommittedReactionRefs_1.return)) _a.call(uncommittedReactionRefs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            uncommittedReactionRefs.clear();
        }
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            reactionCleanupHandle = undefined;
        }
    }
    function ensureCleanupTimerRunning() {
        if (reactionCleanupHandle === undefined) {
            reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
        }
    }
    function scheduleCleanupOfReactionIfLeaked(ref) {
        uncommittedReactionRefs.add(ref);
        ensureCleanupTimerRunning();
    }
    function recordReactionAsCommitted(reactionRef) {
        uncommittedReactionRefs.delete(reactionRef);
    }
    /**
     * Run by the cleanup timer to dispose any outstanding reactions
     */
    function cleanUncommittedReactions() {
        reactionCleanupHandle = undefined;
        // Loop through all the candidate leaked reactions; those older
        // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
        var now = Date.now();
        uncommittedReactionRefs.forEach(function (ref) {
            var tracking = ref.current;
            if (tracking) {
                if (now >= tracking.cleanAt) {
                    // It's time to tidy up this leaked reaction.
                    tracking.reaction.dispose();
                    ref.current = null;
                    uncommittedReactionRefs.delete(ref);
                }
            }
        });
        if (uncommittedReactionRefs.size > 0) {
            // We've just finished a round of cleanups but there are still
            // some leak candidates outstanding.
            ensureCleanupTimerRunning();
        }
    }
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, 
        /**
         * On timer based implementation we don't really need this object,
         * but we keep the same api
         */
        objectRetainedByReact) {
            reactionTrackingRef.current = createTrackingData(reaction);
            scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: recordReactionAsCommitted,
        forceCleanupTimerToRunNowForTests: forceCleanupTimerToRunNowForTests,
        resetCleanupScheduleForTests: resetCleanupScheduleForTests
    };
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js



var _a = FinalizationRegistryLocal
    ? createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistryLocal)
    : createTimerBasedReactionCleanupTracking(), addReactionToTrack = _a.addReactionToTrack, recordReactionAsCommitted = _a.recordReactionAsCommitted, resetCleanupScheduleForTests = _a.resetCleanupScheduleForTests, forceCleanupTimerToRunNowForTests = _a.forceCleanupTimerToRunNowForTests;


;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/staticRendering.js
var globalIsUsingStaticRendering = false;
function staticRendering_enableStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useObserver.js
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





function observerComponentNameFor(baseComponentName) {
    return "observer".concat(baseComponentName);
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function objectToBeRetainedByReactFactory() {
    return new ObjectToBeRetainedByReact();
}
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var _a = __read(react.useState(objectToBeRetainedByReactFactory), 1), objectRetainedByReact = _a[0];
    // Force update, see #2982
    var _b = __read(react.useState(), 2), setState = _b[1];
    var forceUpdate = function () { return setState([]); };
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction = new mobx_esm/* Reaction */.le(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                trackingData_1.changedBeforeMount = true;
            }
        });
        var trackingData_1 = addReactionToTrack(reactionTrackingRef, newReaction, objectRetainedByReact);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react.useDebugValue(reaction, printDebugValue);
    react.useEffect(function () {
        // Called on first mount only
        recordReactionAsCommitted(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
            // Got a change before first mount, force an update
            if (reactionTrackingRef.current.changedBeforeMount) {
                reactionTrackingRef.current.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx_esm/* Reaction */.le(observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    forceUpdate();
                }),
                mounted: true,
                changedBeforeMount: false,
                cleanAt: Infinity
            };
            forceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/observer.js



var warnObserverOptionsDeprecated = true;
var hasSymbol = typeof Symbol === "function" && Symbol.for;
// Using react-is had some issues (and operates on elements, not on types), see #608 / #609
var ReactForwardRefSymbol = hasSymbol
    ? Symbol.for("react.forward_ref")
    : typeof react.forwardRef === "function" && (0,react.forwardRef)(function (props) { return null; })["$$typeof"];
var ReactMemoSymbol = hasSymbol
    ? Symbol.for("react.memo")
    : typeof react.memo === "function" && (0,react.memo)(function (props) { return null; })["$$typeof"];
// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, 
// TODO remove in next major
options) {
    var _a;
    if (false) {}
    if (ReactMemoSymbol && baseComponent["$$typeof"] === ReactMemoSymbol) {
        throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    }
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var useForwardRef = (_a = options === null || options === void 0 ? void 0 : options.forwardRef) !== null && _a !== void 0 ? _a : false;
    var render = baseComponent;
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    // If already wrapped with forwardRef, unwrap,
    // so we can patch render and apply memo
    if (ReactForwardRefSymbol && baseComponent["$$typeof"] === ReactForwardRefSymbol) {
        useForwardRef = true;
        render = baseComponent["render"];
        if (typeof render !== "function") {
            throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
        }
    }
    var observerComponent = function (props, ref) {
        return useObserver(function () { return render(props, ref); }, baseComponentName);
    };
    // Don't set `displayName` for anonymous components,
    // so the `displayName` can be customized by user, see #3192.
    if (baseComponentName !== "") {
        ;
        observerComponent.displayName = baseComponentName;
    }
    // Support legacy context: `contextTypes` must be applied before `memo`
    if (baseComponent.contextTypes) {
        ;
        observerComponent.contextTypes = baseComponent.contextTypes;
    }
    if (useForwardRef) {
        // `forwardRef` must be applied prior `memo`
        // `forwardRef(observer(cmp))` throws:
        // "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))"
        observerComponent = (0,react.forwardRef)(observerComponent);
    }
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    observerComponent = (0,react.memo)(observerComponent);
    copyStaticProperties(baseComponent, observerComponent);
    if (false) {}
    return observerComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true,
    // Don't redefine `displayName`,
    // it's defined as getter-setter pair on `memo` (see #3192).
    displayName: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/ObserverComponent.js

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
if (false) {}
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useLocalObservable.js


function useLocalObservable(initializer, annotations) {
    return useState(function () { return observable(initializer(), annotations, { autoBind: true }); })[0];
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useAsObservableSource.js
var useAsObservableSource_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSource_useAsObservableSource(current) {
    if (false)
        {}
    var _a = useAsObservableSource_read(useState(function () { return observable(current, {}, { deep: false }); }), 1), res = _a[0];
    runInAction(function () {
        Object.assign(res, current);
    });
    return res;
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useLocalStore.js




function useLocalStore(initializer, current) {
    if (false)
        {}
    var source = current && useAsObservableSource(current);
    return useState(function () { return observable(initializer(source), undefined, { autoBind: true }); })[0];
}

;// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/index.js






observerBatching(react_dom.unstable_batchedUpdates);







function es_useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (false) {}
    return useObserverOriginal(fn, baseComponentName);
}

function useStaticRendering(enable) {
    if (false) {}
    enableStaticRendering(enable);
}

;// CONCATENATED MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var mobxreact_esm_hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  displayName: 1,
  propTypes: 1
};
function mobxreact_esm_copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!mobxreact_esm_hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx_esm/* $mobx */.so || "$mobx";
var mobxObserverProperty = /*#__PURE__*/newSymbol("isMobXReactObserver");
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react.PureComponent) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  if (typeof baseRender !== "function") {
    var _displayName = getDisplayName(target);

    throw new Error("[mobx-react] class component (" + _displayName + ") is missing `render` method." + "\n`observer` requires `render` being a function defined on prototype." + "\n`render = () => {}` or `render = function() {}` is not supported.");
  }

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if (isUsingStaticRendering() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) == null ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName2 = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName2 + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (isUsingStaticRendering() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx_esm/* Reaction */.le(initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react.Component.prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = (0,mobx_esm/* _allowStateChanges */.$$)(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (isUsingStaticRendering()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, (0,mobx_esm/* createAtom */.cp)("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false; // Why this check? BC?
      // @ts-expect-error

      if (mobx_esm/* _allowStateReadsStart */.wM && mobx_esm/* _allowStateReadsEnd */.mJ) {
        prevReadState = (0,mobx_esm/* _allowStateReadsStart */.wM)(true);
      }

      getAtom.call(this).reportObserved(); // Why this check? BC?
      // @ts-expect-error

      if (mobx_esm/* _allowStateReadsStart */.wM && mobx_esm/* _allowStateReadsEnd */.mJ) {
        (0,mobx_esm/* _allowStateReadsEnd */.mJ)(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

/**
 * Observer function / decorator
 */

function mobxreact_esm_observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`");
  }

  if (Object.prototype.isPrototypeOf.call(react.Component, component) || Object.prototype.isPrototypeOf.call(react.PureComponent, component)) {
    // Class component
    return makeClassComponentObserver(component);
  } else {
    // Function component
    return observer(component);
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children"];
var MobXProviderContext = /*#__PURE__*/react.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, _excluded);

  var parentValue = react.useContext(MobXProviderContext);
  var mutableProviderRef = react.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (false) { var newValue; }

  return react.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = React__default.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = React__default.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return React__default.createElement(component, newProps);
  });
  if (makeReactive) Injector = mobxreact_esm_observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  mobxreact_esm_copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/(/* unused pure expression or super */ null && (newSymbol("disposeOnUnmountProto")));
var instStoreKey = /*#__PURE__*/(/* unused pure expression or super */ null && (newSymbol("disposeOnUnmountInst")));

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === React__default.Component || c === React__default.PureComponent || c2 === React__default.Component || c2 === React__default.PureComponent || c3 === React__default.Component || c3 === React__default.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return (0,mobx_esm/* untracked */.rg)(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return (0,mobx_esm/* untracked */.rg)(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx_esm/* isObservableArray */.Ei;
          break;

        case "Object":
          mobxChecker = mobx_esm/* isObservableObject */.Pb;
          break;

        case "Map":
          mobxChecker = mobx_esm/* isObservableMap */.LJ;
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return (0,mobx_esm/* untracked */.rg)(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react.Component) throw new Error("mobx-react requires React to be available");
if (!mobx_esm/* observable */.LO) throw new Error("mobx-react requires mobx to be available");




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

/***/ 2418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f3": () => (/* binding */ isSpawnedActor),
/* harmony export */   "mu": () => (/* binding */ createInvocableActor),
/* harmony export */   "vk": () => (/* binding */ toActorRef)
/* harmony export */ });
/* unused harmony exports createDeferredActor, createNullActor, isActor */
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3388);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8351);
/* harmony import */ var _serviceScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9010);




function createNullActor(id) {
  var _a;

  return _a = {
    id: id,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    getSnapshot: function () {
      return undefined;
    },
    toJSON: function () {
      return {
        id: id
      };
    }
  }, _a[_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolObservable */ .L$] = function () {
    return this;
  }, _a;
}
/**
 * Creates a deferred actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */

function createInvocableActor(invokeDefinition, machine, context, _event) {
  var _a;

  var invokeSrc = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toInvokeSource */ .j)(invokeDefinition.src);
  var serviceCreator = (_a = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a === void 0 ? void 0 : _a[invokeSrc.type];
  var resolvedData = invokeDefinition.data ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .mapContext */ .QX)(invokeDefinition.data, context, _event) : undefined;
  var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id); // @ts-ignore

  tempActor.meta = invokeDefinition;
  return tempActor;
}
function createDeferredActor(entity, id, data) {
  var tempActor = createNullActor(id); // @ts-ignore

  tempActor.deferred = true;

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMachine */ .O4)(entity)) {
    // "mute" the existing service scope so potential spawned actors within the `.initialState` stay deferred here
    var initialState_1 = tempActor.state = (0,_serviceScope_js__WEBPACK_IMPORTED_MODULE_1__/* .provide */ .J)(undefined, function () {
      return (data ? entity.withContext(data) : entity).initialState;
    });

    tempActor.getSnapshot = function () {
      return initialState_1;
    };
  }

  return tempActor;
}
function isActor(item) {
  try {
    return typeof item.send === 'function';
  } catch (e) {
    return false;
  }
}
function isSpawnedActor(item) {
  return isActor(item) && 'id' in item;
} // TODO: refactor the return type, this could be written in a better way but it's best to avoid unneccessary breaking changes now

function toActorRef(actorRefLike) {
  var _a;

  return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((_a = {
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    id: 'anonymous',
    getSnapshot: function () {
      return undefined;
    }
  }, _a[_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .symbolObservable */ .L$] = function () {
    return this;
  }, _a), actorRefLike);
}




/***/ }),

/***/ 5697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ Machine),
  "C": () => (/* binding */ createMachine)
});

// EXTERNAL MODULE: ./node_modules/xstate/es/_virtual/_tslib.js
var _tslib = __webpack_require__(3388);
// EXTERNAL MODULE: ./node_modules/xstate/es/utils.js
var utils = __webpack_require__(8351);
// EXTERNAL MODULE: ./node_modules/xstate/es/types.js
var types = __webpack_require__(1329);
// EXTERNAL MODULE: ./node_modules/xstate/es/State.js
var State = __webpack_require__(4242);
// EXTERNAL MODULE: ./node_modules/xstate/es/actionTypes.js
var actionTypes = __webpack_require__(127);
// EXTERNAL MODULE: ./node_modules/xstate/es/actions.js
var es_actions = __webpack_require__(1020);
// EXTERNAL MODULE: ./node_modules/xstate/es/environment.js
var environment = __webpack_require__(8685);
// EXTERNAL MODULE: ./node_modules/xstate/es/constants.js
var constants = __webpack_require__(1231);
// EXTERNAL MODULE: ./node_modules/xstate/es/stateUtils.js
var stateUtils = __webpack_require__(2002);
// EXTERNAL MODULE: ./node_modules/xstate/es/Actor.js
var Actor = __webpack_require__(2418);
;// CONCATENATED MODULE: ./node_modules/xstate/es/invokeUtils.js






function toInvokeSource(src) {
  if (typeof src === 'string') {
    var simpleSrc = {
      type: src
    };

    simpleSrc.toString = function () {
      return src;
    }; // v4 compat - TODO: remove in v5


    return simpleSrc;
  }

  return src;
}
function toInvokeDefinition(invokeConfig) {
  return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({
    type: actionTypes/* invoke */.dw
  }, invokeConfig), {
    toJSON: function () {
      invokeConfig.onDone;
          invokeConfig.onError;
          var invokeDef = (0,_tslib/* __rest */._T)(invokeConfig, ["onDone", "onError"]);

      return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, invokeDef), {
        type: actionTypes/* invoke */.dw,
        src: toInvokeSource(invokeConfig.src)
      });
    }
  });
}



;// CONCATENATED MODULE: ./node_modules/xstate/es/StateNode.js












var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var EMPTY_OBJECT = {};

var isStateId = function (str) {
  return str[0] === STATE_IDENTIFIER;
};

var createDefaultOptions = function () {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};

var validateArrayifiedTransitions = function (stateNode, event, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
    return !('cond' in transition) && !('in' in transition) && ((0,utils/* isString */.HD)(transition.target) || (0,utils/* isMachine */.O4)(transition.target));
  });
  var eventText = event === NULL_EVENT ? 'the transient event' : "event '".concat(event, "'");
  (0,utils/* warn */.ZK)(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
};

var StateNode =
/*#__PURE__*/

/** @class */
function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options,
  /**
   * The initial extended state
   */
  _context, // TODO: this is unsafe, but we're removing it in v5 anyway
  _stateInfo) {
    var _this = this;

    if (_context === void 0) {
      _context = 'context' in config ? config.context : undefined;
    }

    var _a;

    this.config = config;
    this._context = _context;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */

    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: undefined,
      relativeValue: new Map(),
      initialStateValue: undefined,
      initialState: undefined,
      on: undefined,
      transitions: undefined,
      candidates: {},
      delayedTransitions: undefined
    };
    this.idMap = {};
    this.tags = [];
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
    this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || '(machine)';
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : constants/* STATE_DELIMITER */.iS);
    this.id = this.config.id || (0,_tslib/* __spreadArray */.ev)([this.machine.key], (0,_tslib/* __read */.CR)(this.path), false).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && Object.keys(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');
    this.schema = this.parent ? this.machine.schema : (_a = this.config.schema) !== null && _a !== void 0 ? _a : {};
    this.description = this.config.description;

    if (!environment/* IS_PRODUCTION */.M) {
      (0,utils/* warn */.ZK)(!('parallel' in this.config), "The \"parallel\" property is deprecated and will be removed in version 4.1. ".concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
    }

    this.initial = this.config.initial;
    this.states = this.config.states ? (0,utils/* mapValues */.Q8)(this.config.states, function (stateConfig, key) {
      var _a;

      var stateNode = new StateNode(stateConfig, {}, undefined, {
        parent: _this,
        key: key
      });
      Object.assign(_this.idMap, (0,_tslib/* __assign */.pi)((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT; // Document order

    var order = 0;

    function dfs(stateNode) {
      var e_1, _a;

      stateNode.order = order++;

      try {
        for (var _b = (0,_tslib/* __values */.XA)((0,stateUtils/* getChildren */.G)(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    dfs(this); // History config

    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
      var event = _a.event;
      return event === NULL_EVENT;
    }) : NULL_EVENT in this.config.on);
    this.strict = !!this.config.strict; // TODO: deprecate (entry)

    this.onEntry = (0,utils/* toArray */.qo)(this.config.entry || this.config.onEntry).map(function (action) {
      return (0,es_actions/* toActionObject */.Q8)(action);
    }); // TODO: deprecate (exit)

    this.onExit = (0,utils/* toArray */.qo)(this.config.exit || this.config.onExit).map(function (action) {
      return (0,es_actions/* toActionObject */.Q8)(action);
    });
    this.meta = this.config.meta;
    this.doneData = this.type === 'final' ? this.config.data : undefined;
    this.invoke = (0,utils/* toArray */.qo)(this.config.invoke).map(function (invokeConfig, i) {
      var _a, _b;

      if ((0,utils/* isMachine */.O4)(invokeConfig)) {
        var invokeId = (0,utils/* createInvokeId */.bx)(_this.id, i);
        _this.machine.options.services = (0,_tslib/* __assign */.pi)((_a = {}, _a[invokeId] = invokeConfig, _a), _this.machine.options.services);
        return toInvokeDefinition({
          src: invokeId,
          id: invokeId
        });
      } else if ((0,utils/* isString */.HD)(invokeConfig.src)) {
        var invokeId = invokeConfig.id || (0,utils/* createInvokeId */.bx)(_this.id, i);
        return toInvokeDefinition((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, invokeConfig), {
          id: invokeId,
          src: invokeConfig.src
        }));
      } else if ((0,utils/* isMachine */.O4)(invokeConfig.src) || (0,utils/* isFunction */.mf)(invokeConfig.src)) {
        var invokeId = invokeConfig.id || (0,utils/* createInvokeId */.bx)(_this.id, i);
        _this.machine.options.services = (0,_tslib/* __assign */.pi)((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
        return toInvokeDefinition((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({
          id: invokeId
        }, invokeConfig), {
          src: invokeId
        }));
      } else {
        var invokeSource = invokeConfig.src;
        return toInvokeDefinition((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({
          id: (0,utils/* createInvokeId */.bx)(_this.id, i)
        }, invokeConfig), {
          src: invokeSource
        }));
      }
    });
    this.activities = (0,utils/* toArray */.qo)(this.config.activities).concat(this.invoke).map(function (activity) {
      return (0,es_actions/* toActivityDefinition */.XA)(activity);
    });
    this.transition = this.transition.bind(this);
    this.tags = (0,utils/* toArray */.qo)(this.config.tags); // TODO: this is the real fix for initialization once
    // state node getters are deprecated
    // if (!this.parent) {
    //   this._init();
    // }
  }

  StateNode.prototype._init = function () {
    if (this.__cache.transitions) {
      return;
    }

    (0,stateUtils/* getAllStateNodes */.ac)(this).forEach(function (stateNode) {
      return stateNode.on;
    });
  };
  /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */


  StateNode.prototype.withConfig = function (options, context) {
    var _a = this.options,
        actions = _a.actions,
        activities = _a.activities,
        guards = _a.guards,
        services = _a.services,
        delays = _a.delays;
    return new StateNode(this.config, {
      actions: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, actions), options.actions),
      activities: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, activities), options.activities),
      guards: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, guards), options.guards),
      services: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, services), options.services),
      delays: (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, delays), options.delays)
    }, context !== null && context !== void 0 ? context : this.context);
  };
  /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */


  StateNode.prototype.withContext = function (context) {
    return new StateNode(this.config, this.options, context);
  };

  Object.defineProperty(StateNode.prototype, "context", {
    get: function () {
      return (0,utils/* isFunction */.mf)(this._context) ? this._context() : this._context;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "definition", {
    /**
     * The well-structured state node definition.
     */
    get: function () {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        context: this.context,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: (0,utils/* mapValues */.Q8)(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        entry: this.onEntry,
        exit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.doneData,
        invoke: this.invoke,
        description: this.description,
        tags: this.tags
      };
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.toJSON = function () {
    return this.definition;
  };

  Object.defineProperty(StateNode.prototype, "on", {
    /**
     * The mapping of events to transitions.
     */
    get: function () {
      if (this.__cache.on) {
        return this.__cache.on;
      }

      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function (map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "after", {
    get: function () {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "transitions", {
    /**
     * All the transitions that can be taken from this state node.
     */
    get: function () {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getCandidates = function (eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }

    var transient = eventName === NULL_EVENT;
    var candidates = this.transitions.filter(function (transition) {
      var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

      return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  /**
   * All delayed transitions from the config.
   */


  StateNode.prototype.getDelayedTransitions = function () {
    var _this = this;

    var afterConfig = this.config.after;

    if (!afterConfig) {
      return [];
    }

    var mutateEntryExit = function (delay, i) {
      var delayRef = (0,utils/* isFunction */.mf)(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
      var eventType = (0,es_actions/* after */.e4)(delayRef, _this.id);

      _this.onEntry.push((0,es_actions/* send */.lW)(eventType, {
        delay: delay
      }));

      _this.onExit.push((0,es_actions/* cancel */.al)(eventType));

      return eventType;
    };

    var delayedTransitions = (0,utils/* isArray */.kJ)(afterConfig) ? afterConfig.map(function (transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, transition), {
        event: eventType
      });
    }) : (0,utils/* flatten */.xH)(Object.keys(afterConfig).map(function (delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = (0,utils/* isString */.HD)(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return (0,utils/* toArray */.qo)(resolvedTransition).map(function (transition) {
        return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function (delayedTransition) {
      var delay = delayedTransition.delay;
      return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, _this.formatTransition(delayedTransition)), {
        delay: delay
      });
    });
  };
  /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */


  StateNode.prototype.getStateNodes = function (state) {
    var _a;

    var _this = this;

    if (!state) {
      return [];
    }

    var stateValue = state instanceof State/* State */.ZM ? state.value : (0,utils/* toStateValue */.WM)(state, this.delimiter);

    if ((0,utils/* isString */.HD)(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this, this.states[stateValue]];
    }

    var subStateKeys = Object.keys(stateValue);
    var subStateNodes = [this];
    subStateNodes.push.apply(subStateNodes, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)((0,utils/* flatten */.xH)(subStateKeys.map(function (subStateKey) {
      return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
    }))), false));
    return subStateNodes;
  };
  /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */


  StateNode.prototype.handles = function (event) {
    var eventType = (0,utils/* getEventType */.x6)(event);
    return this.events.includes(eventType);
  };
  /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */


  StateNode.prototype.resolveState = function (state) {
    var stateFromConfig = state instanceof State/* State */.ZM ? state : State/* State.create */.ZM.create(state);
    var configuration = Array.from((0,stateUtils/* getConfiguration */.P_)([], this.getStateNodes(stateFromConfig.value)));
    return new State/* State */.ZM((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, stateFromConfig), {
      value: this.resolve(stateFromConfig.value),
      configuration: configuration,
      done: (0,stateUtils/* isInFinalState */.Ij)(configuration, this),
      tags: (0,stateUtils/* getTagsFromConfiguration */.Oe)(configuration),
      machine: this.machine
    }));
  };

  StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
    var subStateKeys = Object.keys(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);

    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
    var e_2, _a;

    var transitionMap = {};

    try {
      for (var _b = (0,_tslib/* __values */.XA)(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];

        if (!subStateValue) {
          continue;
        }

        var subStateNode = this.getStateNode(subStateKey);

        var next = subStateNode._transition(subStateValue, state, _event);

        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var stateTransitions = Object.keys(transitionMap).map(function (key) {
      return transitionMap[key];
    });
    var enabledTransitions = (0,utils/* flatten */.xH)(stateTransitions.map(function (st) {
      return st.transitions;
    }));
    var willTransition = stateTransitions.some(function (st) {
      return st.transitions.length > 0;
    });

    if (!willTransition) {
      return this.next(state, _event);
    }

    var entryNodes = (0,utils/* flatten */.xH)(stateTransitions.map(function (t) {
      return t.entrySet;
    }));
    var configuration = (0,utils/* flatten */.xH)(Object.keys(transitionMap).map(function (key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      entrySet: entryNodes,
      exitSet: (0,utils/* flatten */.xH)(stateTransitions.map(function (t) {
        return t.exitSet;
      })),
      configuration: configuration,
      source: state,
      actions: (0,utils/* flatten */.xH)(Object.keys(transitionMap).map(function (key) {
        return transitionMap[key].actions;
      }))
    };
  };

  StateNode.prototype._transition = function (stateValue, state, _event) {
    // leaf node
    if ((0,utils/* isString */.HD)(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    } // hierarchical node


    if (Object.keys(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    } // orthogonal node


    return this.transitionParallelNode(stateValue, state, _event);
  };

  StateNode.prototype.getTransitionData = function (state, event) {
    return this._transition(state.value, state, (0,utils/* toSCXMLEvent */.g5)(event));
  };

  StateNode.prototype.next = function (state, _event) {
    var e_3, _a;

    var _this = this;

    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;

    try {
      for (var _b = (0,_tslib/* __values */.XA)(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond,
            stateIn = candidate.in;
        var resolvedContext = state.context;
        var isInState = stateIn ? (0,utils/* isString */.HD)(stateIn) && isStateId(stateIn) ? // Check if in state by ID
        state.matches((0,utils/* toStateValue */.WM)(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
        (0,utils/* matchesState */.W)((0,utils/* toStateValue */.WM)(stateIn, this.delimiter), (0,utils/* path */.ET)(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;

        try {
          guardPassed = !cond || (0,utils/* evaluateGuard */.vx)(this.machine, cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
        }

        if (guardPassed && isInState) {
          if (candidate.target !== undefined) {
            nextStateNodes = candidate.target;
          }

          actions.push.apply(actions, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(candidate.actions), false));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    if (!selectedTransition) {
      return undefined;
    }

    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        entrySet: [],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions: actions
      };
    }

    var allNextStateNodes = (0,utils/* flatten */.xH)(nextStateNodes.map(function (stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    var reentryNodes = isInternal ? [] : (0,utils/* flatten */.xH)(allNextStateNodes.map(function (n) {
      return _this.nodesFromChild(n);
    }));
    return {
      transitions: [selectedTransition],
      entrySet: reentryNodes,
      exitSet: isInternal ? [] : [this],
      configuration: allNextStateNodes,
      source: state,
      actions: actions
    };
  };

  StateNode.prototype.nodesFromChild = function (childStateNode) {
    if (childStateNode.escapes(this)) {
      return [];
    }

    var nodes = [];
    var marker = childStateNode;

    while (marker && marker !== this) {
      nodes.push(marker);
      marker = marker.parent;
    }

    nodes.push(this); // inclusive

    return nodes;
  };
  /**
   * Whether the given state node "escapes" this state node. If the `stateNode` is equal to or the parent of
   * this state node, it does not escape.
   */


  StateNode.prototype.escapes = function (stateNode) {
    if (this === stateNode) {
      return false;
    }

    var parent = this.parent;

    while (parent) {
      if (parent === stateNode) {
        return false;
      }

      parent = parent.parent;
    }

    return true;
  };

  StateNode.prototype.getActions = function (transition, currentContext, _event, prevState) {
    var e_4, _a, e_5, _b;

    var prevConfig = (0,stateUtils/* getConfiguration */.P_)([], prevState ? this.getStateNodes(prevState.value) : [this]);
    var resolvedConfig = transition.configuration.length ? (0,stateUtils/* getConfiguration */.P_)(prevConfig, transition.configuration) : prevConfig;

    try {
      for (var resolvedConfig_1 = (0,_tslib/* __values */.XA)(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
        var sn = resolvedConfig_1_1.value;

        if (!(0,stateUtils/* has */.e$)(prevConfig, sn)) {
          transition.entrySet.push(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a = resolvedConfig_1.return)) _a.call(resolvedConfig_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var prevConfig_1 = (0,_tslib/* __values */.XA)(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;

        if (!(0,stateUtils/* has */.e$)(resolvedConfig, sn) || (0,stateUtils/* has */.e$)(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    var doneEvents = (0,utils/* flatten */.xH)(transition.entrySet.map(function (sn) {
      var events = [];

      if (sn.type !== 'final') {
        return events;
      }

      var parent = sn.parent;

      if (!parent.parent) {
        return events;
      }

      events.push((0,es_actions/* done */.aT)(sn.id, sn.doneData), // TODO: deprecate - final states should not emit done events for their own state.
      (0,es_actions/* done */.aT)(parent.id, sn.doneData ? (0,utils/* mapContext */.QX)(sn.doneData, currentContext, _event) : undefined));
      var grandparent = parent.parent;

      if (grandparent.type === 'parallel') {
        if ((0,stateUtils/* getChildren */.G)(grandparent).every(function (parentNode) {
          return (0,stateUtils/* isInFinalState */.Ij)(transition.configuration, parentNode);
        })) {
          events.push((0,es_actions/* done */.aT)(grandparent.id));
        }
      }

      return events;
    }));
    transition.exitSet.sort(function (a, b) {
      return b.order - a.order;
    });
    transition.entrySet.sort(function (a, b) {
      return a.order - b.order;
    });
    var entryStates = new Set(transition.entrySet);
    var exitStates = new Set(transition.exitSet);

    var _c = (0,_tslib/* __read */.CR)([(0,utils/* flatten */.xH)(Array.from(entryStates).map(function (stateNode) {
      return (0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(stateNode.activities.map(function (activity) {
        return (0,es_actions/* start */.BL)(activity);
      })), false), (0,_tslib/* __read */.CR)(stateNode.onEntry), false);
    })).concat(doneEvents.map(es_actions/* raise */.OU)), (0,utils/* flatten */.xH)(Array.from(exitStates).map(function (stateNode) {
      return (0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(stateNode.onExit), false), (0,_tslib/* __read */.CR)(stateNode.activities.map(function (activity) {
        return (0,es_actions/* stop */.sT)(activity);
      })), false);
    }))], 2),
        entryActions = _c[0],
        exitActions = _c[1];

    var actions = (0,es_actions/* toActionObjects */.AE)(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
    return actions;
  };
  /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */


  StateNode.prototype.transition = function (state, event, context) {
    if (state === void 0) {
      state = this.initialState;
    }

    var _event = (0,utils/* toSCXMLEvent */.g5)(event);

    var currentState;

    if (state instanceof State/* State */.ZM) {
      currentState = context === undefined ? state : this.resolveState(State/* State.from */.ZM.from(state, context));
    } else {
      var resolvedStateValue = (0,utils/* isString */.HD)(state) ? this.resolve((0,utils/* pathToStateValue */.on)(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
      currentState = this.resolveState(State/* State.from */.ZM.from(resolvedStateValue, resolvedContext));
    }

    if (!environment/* IS_PRODUCTION */.M && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
    }

    if (this.strict) {
      if (!this.events.includes(_event.name) && !(0,utils/* isBuiltInEvent */.JQ)(_event.name)) {
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
      }
    }

    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      entrySet: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = (0,stateUtils/* getConfiguration */.P_)([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? (0,stateUtils/* getConfiguration */.P_)(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(resolvedConfig), false);
    return this.resolveTransition(stateTransition, currentState, currentState.context, _event);
  };

  StateNode.prototype.resolveRaisedTransition = function (state, _event, originalEvent) {
    var _a;

    var currentActions = state.actions;
    state = this.transition(state, _event); // Save original event to state
    // TODO: this should be the raised event! Delete in V5 (breaking)

    state._event = originalEvent;
    state.event = originalEvent.data;

    (_a = state.actions).unshift.apply(_a, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(currentActions), false));

    return state;
  };

  StateNode.prototype.resolveTransition = function (stateTransition, currentState, context, _event) {
    var e_6, _a;

    var _this = this;

    if (_event === void 0) {
      _event = es_actions/* initEvent */.bf;
    }

    var configuration = stateTransition.configuration; // Transition will "apply" if:
    // - this is the initial state (there is no current state)
    // - OR there are transitions

    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedStateValue = willTransition ? (0,stateUtils/* getValue */.NA)(this.machine, configuration) : undefined;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
    var actions = this.getActions(stateTransition, context, _event, currentState);
    var activities = currentState ? (0,_tslib/* __assign */.pi)({}, currentState.activities) : {};

    try {
      for (var actions_1 = (0,_tslib/* __values */.XA)(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
        var action = actions_1_1.value;

        if (action.type === actionTypes/* start */.BL) {
          activities[action.activity.id || action.activity.type] = action;
        } else if (action.type === actionTypes/* stop */.sT) {
          activities[action.activity.id || action.activity.type] = false;
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    var _b = (0,_tslib/* __read */.CR)((0,es_actions/* resolveActions */.yC)(this, currentState, context, _event, actions, this.machine.config.preserveActionOrder), 2),
        resolvedActions = _b[0],
        updatedContext = _b[1];

    var _c = (0,_tslib/* __read */.CR)((0,utils/* partition */.uK)(resolvedActions, function (action) {
      return action.type === actionTypes/* raise */.OU || action.type === actionTypes/* send */.lW && action.to === types/* SpecialTargets.Internal */.K.Internal;
    }), 2),
        raisedEvents = _c[0],
        nonRaisedActions = _c[1];

    var invokeActions = resolvedActions.filter(function (action) {
      var _a;

      return action.type === actionTypes/* start */.BL && ((_a = action.activity) === null || _a === void 0 ? void 0 : _a.type) === actionTypes/* invoke */.dw;
    });
    var children = invokeActions.reduce(function (acc, action) {
      acc[action.activity.id] = (0,Actor/* createInvocableActor */.mu)(action.activity, _this.machine, updatedContext, _event);
      return acc;
    }, currentState ? (0,_tslib/* __assign */.pi)({}, currentState.children) : {});
    var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var isDone = (0,stateUtils/* isInFinalState */.Ij)(resolvedConfiguration, this);
    var nextState = new State/* State */.ZM({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event: _event,
      // Persist _sessionid between states
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? (0,utils/* updateHistoryValue */.yv)(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
      history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children,
      done: isDone,
      tags: currentState === null || currentState === void 0 ? void 0 : currentState.tags,
      machine: this
    });
    var didUpdateContext = context !== updatedContext;
    nextState.changed = _event.name === actionTypes/* update */.Vx || didUpdateContext; // Dispose of penultimate histories to prevent memory leaks

    var history = nextState.history;

    if (history) {
      delete history.history;
    } // There are transient transitions if the machine is not in a final state
    // and if some of the state nodes have transient ("always") transitions.


    var isTransient = !isDone && (this._transient || configuration.some(function (stateNode) {
      return stateNode._transient;
    })); // If there are no enabled transitions, check if there are transient transitions.
    // If there are transient transitions, continue checking for more transitions
    // because an transient transition should be triggered even if there are no
    // enabled transitions.
    //
    // If we're already working on an transient transition (by checking
    // if the event is a NULL_EVENT), then stop to prevent an infinite loop.
    //
    // Otherwise, if there are no enabled nor transient transitions, we are done.

    if (!willTransition && (!isTransient || _event.name === NULL_EVENT)) {
      return nextState;
    }

    var maybeNextState = nextState;

    if (!isDone) {
      if (isTransient) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: actionTypes/* nullEvent */.IA
        }, _event);
      }

      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
      }
    } // Detect if state changed


    var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !(0,State/* stateValuesEqual */.j_)(maybeNextState.value, history.value) : undefined);
    maybeNextState.changed = changed; // Preserve original history after raised events

    maybeNextState.history = history;
    maybeNextState.tags = (0,stateUtils/* getTagsFromConfiguration */.Oe)(maybeNextState.configuration);
    return maybeNextState;
  };
  /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */


  StateNode.prototype.getStateNode = function (stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }

    if (!this.states) {
      throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
    }

    var result = this.states[stateKey];

    if (!result) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }

    return result;
  };
  /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */


  StateNode.prototype.getStateNodeById = function (stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

    if (resolvedStateId === this.id) {
      return this;
    }

    var stateNode = this.machine.idMap[resolvedStateId];

    if (!stateNode) {
      throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
    }

    return stateNode;
  };
  /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */


  StateNode.prototype.getStateNodeByPath = function (statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {// try individual paths
        // throw e;
      }
    }

    var arrayStatePath = (0,utils/* toStatePath */.Q9)(statePath, this.delimiter).slice();
    var currentStateNode = this;

    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();

      if (!key.length) {
        break;
      }

      currentStateNode = currentStateNode.getStateNode(key);
    }

    return currentStateNode;
  };
  /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */


  StateNode.prototype.resolve = function (stateValue) {
    var _a;

    var _this = this;

    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
    }

    switch (this.type) {
      case 'parallel':
        return (0,utils/* mapValues */.Q8)(this.initialStateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });

      case 'compound':
        if ((0,utils/* isString */.HD)(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);

          if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
            return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
          }

          return stateValue;
        }

        if (!Object.keys(stateValue).length) {
          return this.initialStateValue || {};
        }

        return (0,utils/* mapValues */.Q8)(stateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });

      default:
        return stateValue || EMPTY_OBJECT;
    }
  };

  StateNode.prototype.getResolvedPath = function (stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

      if (!stateNode) {
        throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
      }

      return stateNode.path;
    }

    return (0,utils/* toStatePath */.Q9)(stateIdentifier, this.delimiter);
  };

  Object.defineProperty(StateNode.prototype, "initialStateValue", {
    get: function () {
      var _a;

      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }

      var initialStateValue;

      if (this.type === 'parallel') {
        initialStateValue = (0,utils/* mapFilterValues */.ib)(this.states, function (state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function (stateNode) {
          return !(stateNode.type === 'history');
        });
      } else if (this.initial !== undefined) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
        }

        initialStateValue = (0,stateUtils/* isLeafNode */.N9)(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
      } else {
        // The finite state value of a machine without child states is just an empty object
        initialStateValue = {};
      }

      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getInitialState = function (stateValue, context) {
    this._init(); // TODO: this should be in the constructor (see note in constructor)


    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration: configuration,
      entrySet: configuration,
      exitSet: [],
      transitions: [],
      source: undefined,
      actions: []
    }, undefined, context !== null && context !== void 0 ? context : this.machine.context, undefined);
  };

  Object.defineProperty(StateNode.prototype, "initialState", {
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get: function () {
      var initialStateValue = this.initialStateValue;

      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
      }

      return this.getInitialState(initialStateValue);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "target", {
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get: function () {
      var target;

      if (this.type === 'history') {
        var historyConfig = this.config;

        if ((0,utils/* isString */.HD)(historyConfig.target)) {
          target = isStateId(historyConfig.target) ? (0,utils/* pathToStateValue */.on)(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target = historyConfig.target;
        }
      }

      return target;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */

  StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }

    return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };

  Object.defineProperty(StateNode.prototype, "initialStateNodes", {
    get: function () {
      var _this = this;

      if ((0,stateUtils/* isLeafNode */.N9)(this)) {
        return [this];
      } // Case when state node is compound but no initial state is defined


      if (this.type === 'compound' && !this.initial) {
        if (!environment/* IS_PRODUCTION */.M) {
          (0,utils/* warn */.ZK)(false, "Compound state node '".concat(this.id, "' has no initial state."));
        }

        return [this];
      }

      var initialStateNodePaths = (0,utils/* toStatePaths */.SA)(this.initialStateValue);
      return (0,utils/* flatten */.xH)(initialStateNodePaths.map(function (initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */

  StateNode.prototype.getFromRelativePath = function (relativePath) {
    if (!relativePath.length) {
      return [this];
    }

    var _a = (0,_tslib/* __read */.CR)(relativePath),
        stateKey = _a[0],
        childStatePath = _a.slice(1);

    if (!this.states) {
      throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
    }

    var childStateNode = this.getStateNode(stateKey);

    if (childStateNode.type === 'history') {
      return childStateNode.resolveHistory();
    }

    if (!this.states[stateKey]) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }

    return this.states[stateKey].getFromRelativePath(childStatePath);
  };

  StateNode.prototype.historyValue = function (relativeStateValue) {
    if (!Object.keys(this.states).length) {
      return undefined;
    }

    return {
      current: relativeStateValue || this.initialStateValue,
      states: (0,utils/* mapFilterValues */.ib)(this.states, function (stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }

        var subStateValue = (0,utils/* isString */.HD)(relativeStateValue) ? undefined : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function (stateNode) {
        return !stateNode.history;
      })
    };
  };
  /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */


  StateNode.prototype.resolveHistory = function (historyValue) {
    var _this = this;

    if (this.type !== 'history') {
      return [this];
    }

    var parent = this.parent;

    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? (0,utils/* flatten */.xH)((0,utils/* toStatePaths */.SA)(historyTarget).map(function (relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }

    var subHistoryValue = (0,utils/* nestedPath */.gk)(parent.path, 'states')(historyValue).current;

    if ((0,utils/* isString */.HD)(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }

    return (0,utils/* flatten */.xH)((0,utils/* toStatePaths */.SA)(subHistoryValue).map(function (subStatePath) {
      return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };

  Object.defineProperty(StateNode.prototype, "stateIds", {
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get: function () {
      var _this = this;

      var childStateIds = (0,utils/* flatten */.xH)(Object.keys(this.states).map(function (stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "events", {
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get: function () {
      var e_7, _a, e_8, _b;

      if (this.__cache.events) {
        return this.__cache.events;
      }

      var states = this.states;
      var events = new Set(this.ownEvents);

      if (states) {
        try {
          for (var _c = (0,_tslib/* __values */.XA)(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];

            if (state.states) {
              try {
                for (var _e = (e_8 = void 0, (0,_tslib/* __values */.XA)(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var event_1 = _f.value;
                  events.add("".concat(event_1));
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      }

      return this.__cache.events = Array.from(events);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "ownEvents", {
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get: function () {
      var events = new Set(this.transitions.filter(function (transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function (transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.resolveTarget = function (_target) {
    var _this = this;

    if (_target === undefined) {
      // an undefined target signals that the state node should not transition from that state when receiving that event
      return undefined;
    }

    return _target.map(function (target) {
      if (!(0,utils/* isString */.HD)(target)) {
        return target;
      }

      var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
      // do not include machine key on target

      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target.slice(1));
      }

      var resolvedTarget = isInternalTarget ? _this.key + target : target;

      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };

  StateNode.prototype.formatTransition = function (transitionConfig) {
    var _this = this;

    var normalizedTarget = (0,utils/* normalizeTarget */.rg)(transitionConfig.target);
    var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
      return (0,utils/* isString */.HD)(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target = this.resolveTarget(normalizedTarget);

    var transition = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, transitionConfig), {
      actions: (0,es_actions/* toActionObjects */.AE)((0,utils/* toArray */.qo)(transitionConfig.actions)),
      cond: (0,utils/* toGuard */.Qi)(transitionConfig.cond, guards),
      target: target,
      source: this,
      internal: internal,
      eventType: transitionConfig.event,
      toJSON: function () {
        return (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, transition), {
          target: transition.target ? transition.target.map(function (t) {
            return "#".concat(t.id);
          }) : undefined,
          source: "#".concat(_this.id)
        });
      }
    });

    return transition;
  };

  StateNode.prototype.formatTransitions = function () {
    var e_9, _a;

    var _this = this;

    var onConfig;

    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on,
          _c = WILDCARD,
          _d = _b[_c],
          wildcardConfigs = _d === void 0 ? [] : _d,
          strictTransitionConfigs_1 = (0,_tslib/* __rest */._T)(_b, [typeof _c === "symbol" ? _c : _c + ""]);

      onConfig = (0,utils/* flatten */.xH)(Object.keys(strictTransitionConfigs_1).map(function (key) {
        if (!environment/* IS_PRODUCTION */.M && key === NULL_EVENT) {
          (0,utils/* warn */.ZK)(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + "Please check the `on` configuration for \"#".concat(_this.id, "\"."));
        }

        var transitionConfigArray = (0,utils/* toTransitionConfigArray */.jh)(key, strictTransitionConfigs_1[key]);

        if (!environment/* IS_PRODUCTION */.M) {
          validateArrayifiedTransitions(_this, key, transitionConfigArray);
        }

        return transitionConfigArray;
      }).concat((0,utils/* toTransitionConfigArray */.jh)(WILDCARD, wildcardConfigs)));
    }

    var eventlessConfig = this.config.always ? (0,utils/* toTransitionConfigArray */.jh)('', this.config.always) : [];
    var doneConfig = this.config.onDone ? (0,utils/* toTransitionConfigArray */.jh)(String((0,es_actions/* done */.aT)(this.id)), this.config.onDone) : [];

    if (!environment/* IS_PRODUCTION */.M) {
      (0,utils/* warn */.ZK)(!(this.config.onDone && !this.parent), "Root nodes cannot have an \".onDone\" transition. Please check the config of \"".concat(this.id, "\"."));
    }

    var invokeConfig = (0,utils/* flatten */.xH)(this.invoke.map(function (invokeDef) {
      var settleTransitions = [];

      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)((0,utils/* toTransitionConfigArray */.jh)(String((0,es_actions/* doneInvoke */.Sl)(invokeDef.id)), invokeDef.onDone)), false));
      }

      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)((0,utils/* toTransitionConfigArray */.jh)(String((0,es_actions/* error */.vU)(invokeDef.id)), invokeDef.onError)), false));
      }

      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = (0,utils/* flatten */.xH)((0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)((0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(doneConfig), false), (0,_tslib/* __read */.CR)(invokeConfig), false), (0,_tslib/* __read */.CR)(onConfig), false), (0,_tslib/* __read */.CR)(eventlessConfig), false).map(function (transitionConfig) {
      return (0,utils/* toArray */.qo)(transitionConfig).map(function (transition) {
        return _this.formatTransition(transition);
      });
    }));

    try {
      for (var delayedTransitions_1 = (0,_tslib/* __values */.XA)(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    return formattedTransitions;
  };

  return StateNode;
}();



;// CONCATENATED MODULE: ./node_modules/xstate/es/Machine.js


function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }

  return new StateNode(config, options, initialContext);
}
function createMachine(config, options) {
  return new StateNode(config, options);
}




/***/ }),

/***/ 4242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TL": () => (/* binding */ isStateConfig),
/* harmony export */   "ZM": () => (/* binding */ State),
/* harmony export */   "j1": () => (/* binding */ bindActionToState),
/* harmony export */   "j_": () => (/* binding */ stateValuesEqual)
/* harmony export */ });
/* unused harmony export isState */
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3388);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1231);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8351);
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2002);
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1020);
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8685);







function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(a) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(b)) {
    return a === b;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  return aKeys.length === bKeys.length && aKeys.every(function (key) {
    return stateValuesEqual(a[key], b[key]);
  });
}
function isStateConfig(state) {
  if (typeof state !== 'object' || state === null) {
    return false;
  }

  return 'value' in state && '_event' in state;
}
/**
 * @deprecated Use `isStateConfig(object)` or `state instanceof State` instead.
 */

var isState = (/* unused pure expression or super */ null && (isStateConfig));
function bindActionToState(action, state) {
  var exec = action.exec;

  var boundAction = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, action), {
    exec: exec !== undefined ? function () {
      return exec(state.context, state.event, {
        action: action,
        state: state,
        _event: state._event
      });
    } : undefined
  });

  return boundAction;
}

var State =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new State instance.
   * @param value The state value
   * @param context The extended state
   * @param historyValue The tree representing historical values of the state nodes
   * @param history The previous state
   * @param actions An array of action objects to execute as side-effects
   * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
   * @param meta
   * @param events Internal event queue. Should be empty with run-to-completion semantics.
   * @param configuration
   */
  function State(config) {
    var _this = this;

    var _a;

    this.actions = [];
    this.activities = _constants_js__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_ACTIVITY_MAP */ .qP;
    this.meta = {};
    this.events = [];
    this.value = config.value;
    this.context = config.context;
    this._event = config._event;
    this._sessionid = config._sessionid;
    this.event = this._event.data;
    this.historyValue = config.historyValue;
    this.history = config.history;
    this.actions = config.actions || [];
    this.activities = config.activities || _constants_js__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_ACTIVITY_MAP */ .qP;
    this.meta = (0,_stateUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getMeta */ .xZ)(config.configuration);
    this.events = config.events || [];
    this.matches = this.matches.bind(this);
    this.toStrings = this.toStrings.bind(this);
    this.configuration = config.configuration;
    this.transitions = config.transitions;
    this.children = config.children;
    this.done = !!config.done;
    this.tags = (_a = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a !== void 0 ? _a : new Set();
    this.machine = config.machine;
    Object.defineProperty(this, 'nextEvents', {
      get: function () {
        return (0,_stateUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .nextEvents */ .nJ)(_this.configuration);
      }
    });
  }
  /**
   * Creates a new State instance for the given `stateValue` and `context`.
   * @param stateValue
   * @param context
   */


  State.from = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (stateValue.context !== context) {
        return new State({
          value: stateValue.value,
          context: context,
          _event: stateValue._event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          actions: [],
          activities: stateValue.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      }

      return stateValue;
    }

    var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__/* .initEvent */ .bf;
    return new State({
      value: stateValue,
      context: context,
      _event: _event,
      _sessionid: null,
      historyValue: undefined,
      history: undefined,
      actions: [],
      activities: undefined,
      meta: undefined,
      events: [],
      configuration: [],
      transitions: [],
      children: {}
    });
  };
  /**
   * Creates a new State instance for the given `config`.
   * @param config The state config
   */


  State.create = function (config) {
    return new State(config);
  };
  /**
   * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
   * @param stateValue
   * @param context
   */


  State.inert = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (!stateValue.actions.length) {
        return stateValue;
      }

      var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__/* .initEvent */ .bf;
      return new State({
        value: stateValue.value,
        context: context,
        _event: _event,
        _sessionid: null,
        historyValue: stateValue.historyValue,
        history: stateValue.history,
        activities: stateValue.activities,
        configuration: stateValue.configuration,
        transitions: [],
        children: {}
      });
    }

    return State.from(stateValue, context);
  };
  /**
   * Returns an array of all the string leaf state node paths.
   * @param stateValue
   * @param delimiter The character(s) that separate each subpath in the string state node path.
   */


  State.prototype.toStrings = function (stateValue, delimiter) {
    var _this = this;

    if (stateValue === void 0) {
      stateValue = this.value;
    }

    if (delimiter === void 0) {
      delimiter = '.';
    }

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(stateValue)) {
      return [stateValue];
    }

    var valueKeys = Object.keys(stateValue);
    return valueKeys.concat.apply(valueKeys, (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadArray */ .ev)([], (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)(valueKeys.map(function (key) {
      return _this.toStrings(stateValue[key], delimiter).map(function (s) {
        return key + delimiter + s;
      });
    })), false));
  };

  State.prototype.toJSON = function () {
    var _a = this;
        _a.configuration;
        _a.transitions;
        var tags = _a.tags;
        _a.machine;
        var jsonValues = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__rest */ ._T)(_a, ["configuration", "transitions", "tags", "machine"]);

    return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, jsonValues), {
      tags: Array.from(tags)
    });
  };

  State.prototype.matches = function (parentStateValue) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .matchesState */ .W)(parentStateValue, this.value);
  };
  /**
   * Whether the current state configuration has a state node with the specified `tag`.
   * @param tag
   */


  State.prototype.hasTag = function (tag) {
    return this.tags.has(tag);
  };
  /**
   * Determines whether sending the `event` will cause a non-forbidden transition
   * to be selected, even if the transitions have no actions nor
   * change the state value.
   *
   * @param event The event to test
   * @returns Whether the event will cause a transition
   */


  State.prototype.can = function (event) {
    var _a;

    if (_environment_js__WEBPACK_IMPORTED_MODULE_5__/* .IS_PRODUCTION */ .M) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .warn */ .ZK)(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    }

    var transitionData = (_a = this.machine) === null || _a === void 0 ? void 0 : _a.getTransitionData(this, event);
    return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && // Check that at least one transition is not forbidden
    transitionData.transitions.some(function (t) {
      return t.target !== undefined || t.actions.length;
    });
  };

  return State;
}();




/***/ }),

/***/ 9989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kJ": () => (/* binding */ interpret)
});

// UNUSED EXPORTS: Interpreter, InterpreterStatus, spawn

// EXTERNAL MODULE: ./node_modules/xstate/es/_virtual/_tslib.js
var _tslib = __webpack_require__(3388);
// EXTERNAL MODULE: ./node_modules/xstate/es/types.js
var types = __webpack_require__(1329);
// EXTERNAL MODULE: ./node_modules/xstate/es/State.js
var State = __webpack_require__(4242);
// EXTERNAL MODULE: ./node_modules/xstate/es/actionTypes.js
var actionTypes = __webpack_require__(127);
// EXTERNAL MODULE: ./node_modules/xstate/es/actions.js
var actions = __webpack_require__(1020);
// EXTERNAL MODULE: ./node_modules/xstate/es/environment.js
var environment = __webpack_require__(8685);
// EXTERNAL MODULE: ./node_modules/xstate/es/utils.js
var utils = __webpack_require__(8351);
;// CONCATENATED MODULE: ./node_modules/xstate/es/scheduler.js


var defaultOptions = {
  deferEvents: false
};

var Scheduler =
/*#__PURE__*/

/** @class */
function () {
  function Scheduler(options) {
    this.processingEvent = false;
    this.queue = [];
    this.initialized = false;
    this.options = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, defaultOptions), options);
  }

  Scheduler.prototype.initialize = function (callback) {
    this.initialized = true;

    if (callback) {
      if (!this.options.deferEvents) {
        this.schedule(callback);
        return;
      }

      this.process(callback);
    }

    this.flushEvents();
  };

  Scheduler.prototype.schedule = function (task) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(task);
      return;
    }

    if (this.queue.length !== 0) {
      throw new Error('Event queue should be empty when it is not processing events');
    }

    this.process(task);
    this.flushEvents();
  };

  Scheduler.prototype.clear = function () {
    this.queue = [];
  };

  Scheduler.prototype.flushEvents = function () {
    var nextCallback = this.queue.shift();

    while (nextCallback) {
      this.process(nextCallback);
      nextCallback = this.queue.shift();
    }
  };

  Scheduler.prototype.process = function (callback) {
    this.processingEvent = true;

    try {
      callback();
    } catch (e) {
      // there is no use to keep the future events
      // as the situation is not anymore the same
      this.clear();
      throw e;
    } finally {
      this.processingEvent = false;
    }
  };

  return Scheduler;
}();



// EXTERNAL MODULE: ./node_modules/xstate/es/Actor.js
var Actor = __webpack_require__(2418);
// EXTERNAL MODULE: ./node_modules/xstate/es/stateUtils.js
var stateUtils = __webpack_require__(2002);
;// CONCATENATED MODULE: ./node_modules/xstate/es/registry.js
var children = /*#__PURE__*/new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function () {
    return "x:".concat(sessionIdIndex++);
  },
  register: function (id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function (id) {
    return children.get(id);
  },
  free: function (id) {
    children.delete(id);
  }
};



;// CONCATENATED MODULE: ./node_modules/xstate/es/devTools.js


function getGlobal() {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  }

  if (!environment/* IS_PRODUCTION */.M) {
    console.warn('XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues');
  }
}

function getDevTools() {
  var global = getGlobal();

  if (global && '__xstate__' in global) {
    return global.__xstate__;
  }

  return undefined;
}

function registerService(service) {
  if (!getGlobal()) {
    return;
  }

  var devTools = getDevTools();

  if (devTools) {
    devTools.register(service);
  }
}



// EXTERNAL MODULE: ./node_modules/xstate/es/serviceScope.js
var serviceScope = __webpack_require__(9010);
;// CONCATENATED MODULE: ./node_modules/xstate/es/behaviors.js




/**
 * Returns an actor behavior from a reducer and its initial state.
 *
 * @param transition The pure reducer that returns the next state given the current state and event.
 * @param initialState The initial state of the reducer.
 * @returns An actor behavior
 */

function fromReducer(transition, initialState) {
  return {
    transition: transition,
    initialState: initialState
  };
}
function fromPromise(promiseFn) {
  var initialState = {
    error: undefined,
    data: undefined,
    status: 'pending'
  };
  return {
    transition: function (state, event, _a) {
      var parent = _a.parent,
          id = _a.id,
          observers = _a.observers;

      switch (event.type) {
        case 'fulfill':
          parent === null || parent === void 0 ? void 0 : parent.send(doneInvoke(id, event.data));
          return {
            error: undefined,
            data: event.data,
            status: 'fulfilled'
          };

        case 'reject':
          parent === null || parent === void 0 ? void 0 : parent.send(error(id, event.error));
          observers.forEach(function (observer) {
            observer.error(event.error);
          });
          return {
            error: event.error,
            data: undefined,
            status: 'rejected'
          };

        default:
          return state;
      }
    },
    initialState: initialState,
    start: function (_a) {
      var self = _a.self;
      promiseFn().then(function (data) {
        self.send({
          type: 'fulfill',
          data: data
        });
      }, function (reason) {
        self.send({
          type: 'reject',
          error: reason
        });
      });
      return initialState;
    }
  };
}
function spawnBehavior(behavior, options) {
  if (options === void 0) {
    options = {};
  }

  var state = behavior.initialState;
  var observers = new Set();
  var mailbox = [];
  var flushing = false;

  var flush = function () {
    if (flushing) {
      return;
    }

    flushing = true;

    while (mailbox.length > 0) {
      var event_1 = mailbox.shift();
      state = behavior.transition(state, event_1, actorCtx);
      observers.forEach(function (observer) {
        return observer.next(state);
      });
    }

    flushing = false;
  };

  var actor = (0,Actor/* toActorRef */.vk)({
    id: options.id,
    send: function (event) {
      mailbox.push(event);
      flush();
    },
    getSnapshot: function () {
      return state;
    },
    subscribe: function (next, handleError, complete) {
      var observer = (0,utils/* toObserver */.zM)(next, handleError, complete);
      observers.add(observer);
      observer.next(state);
      return {
        unsubscribe: function () {
          observers.delete(observer);
        }
      };
    }
  });
  var actorCtx = {
    parent: options.parent,
    self: actor,
    id: options.id || 'anonymous',
    observers: observers
  };
  state = behavior.start ? behavior.start(actorCtx) : state;
  return actor;
}



;// CONCATENATED MODULE: ./node_modules/xstate/es/interpreter.js















var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
var InterpreterStatus;

(function (InterpreterStatus) {
  InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
  InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));

var Interpreter =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
   *
   * @param machine The machine to be interpreted
   * @param options Interpreter options
   */
  function Interpreter(machine, options) {
    var _this = this;

    if (options === void 0) {
      options = Interpreter.defaultOptions;
    }

    this.machine = machine;
    this.scheduler = new Scheduler();
    this.delayedEventsMap = {};
    this.listeners = new Set();
    this.contextListeners = new Set();
    this.stopListeners = new Set();
    this.doneListeners = new Set();
    this.eventListeners = new Set();
    this.sendListeners = new Set();
    /**
     * Whether the service is started.
     */

    this.initialized = false;
    this.status = InterpreterStatus.NotStarted;
    this.children = new Map();
    this.forwardTo = new Set();
    /**
     * Alias for Interpreter.prototype.start
     */

    this.init = this.start;
    /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */

    this.send = function (event, payload) {
      if ((0,utils/* isArray */.kJ)(event)) {
        _this.batch(event);

        return _this.state;
      }

      var _event = (0,utils/* toSCXMLEvent */.g5)((0,utils/* toEventObject */._v)(event, payload));

      if (_this.status === InterpreterStatus.Stopped) {
        // do nothing
        if (!environment/* IS_PRODUCTION */.M) {
          (0,utils/* warn */.ZK)(false, "Event \"".concat(_event.name, "\" was sent to stopped service \"").concat(_this.machine.id, "\". This service has already reached its final state, and will not transition.\nEvent: ").concat(JSON.stringify(_event.data)));
        }

        return _this.state;
      }

      if (_this.status !== InterpreterStatus.Running && !_this.options.deferEvents) {
        throw new Error("Event \"".concat(_event.name, "\" was sent to uninitialized service \"").concat(_this.machine.id // tslint:disable-next-line:max-line-length
        , "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ").concat(JSON.stringify(_event.data)));
      }

      _this.scheduler.schedule(function () {
        // Forward copy of event to child actors
        _this.forward(_event);

        var nextState = _this.nextState(_event);

        _this.update(nextState, _event);
      });

      return _this._state; // TODO: deprecate (should return void)
      // tslint:disable-next-line:semicolon
    };

    this.sendTo = function (event, to) {
      var isParent = _this.parent && (to === types/* SpecialTargets.Parent */.K.Parent || _this.parent.id === to);
      var target = isParent ? _this.parent : (0,utils/* isString */.HD)(to) ? _this.children.get(to) || registry.get(to) : (0,utils/* isActor */.Bc)(to) ? to : undefined;

      if (!target) {
        if (!isParent) {
          throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
        } // tslint:disable-next-line:no-console


        if (!environment/* IS_PRODUCTION */.M) {
          (0,utils/* warn */.ZK)(false, "Service '".concat(_this.id, "' has no parent: unable to send event ").concat(event.type));
        }

        return;
      }

      if ('machine' in target) {
        // Send SCXML events to machines
        target.send((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, event), {
          name: event.name === actionTypes/* error */.vU ? "".concat((0,actions/* error */.vU)(_this.id)) : event.name,
          origin: _this.sessionId
        }));
      } else {
        // Send normal events to other targets
        target.send(event.data);
      }
    };

    var resolvedOptions = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, Interpreter.defaultOptions), options);

    var clock = resolvedOptions.clock,
        logger = resolvedOptions.logger,
        parent = resolvedOptions.parent,
        id = resolvedOptions.id;
    var resolvedId = id !== undefined ? id : machine.id;
    this.id = resolvedId;
    this.logger = logger;
    this.clock = clock;
    this.parent = parent;
    this.options = resolvedOptions;
    this.scheduler = new Scheduler({
      deferEvents: this.options.deferEvents
    });
    this.sessionId = registry.bookId();
  }

  Object.defineProperty(Interpreter.prototype, "initialState", {
    get: function () {
      var _this = this;

      if (this._initialState) {
        return this._initialState;
      }

      return (0,serviceScope/* provide */.J)(this, function () {
        _this._initialState = _this.machine.initialState;
        return _this._initialState;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Interpreter.prototype, "state", {
    get: function () {
      if (!environment/* IS_PRODUCTION */.M) {
        (0,utils/* warn */.ZK)(this.status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first."));
      }

      return this._state;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Executes the actions of the given state, with that state's `context` and `event`.
   *
   * @param state The state whose actions will be executed
   * @param actionsConfig The action implementations to use
   */

  Interpreter.prototype.execute = function (state, actionsConfig) {
    var e_1, _a;

    try {
      for (var _b = (0,_tslib/* __values */.XA)(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        this.exec(action, state, actionsConfig);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Interpreter.prototype.update = function (state, _event) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d;

    var _this = this; // Attach session ID to state


    state._sessionid = this.sessionId; // Update state

    this._state = state; // Execute actions

    if (this.options.execute) {
      this.execute(this.state);
    } // Update children


    this.children.forEach(function (child) {
      _this.state.children[child.id] = child;
    }); // Dev tools

    if (this.devTools) {
      this.devTools.send(_event.data, state);
    } // Execute listeners


    if (state.event) {
      try {
        for (var _e = (0,_tslib/* __values */.XA)(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
          var listener = _f.value;
          listener(state.event);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    try {
      for (var _g = (0,_tslib/* __values */.XA)(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
        var listener = _h.value;
        listener(state, state.event);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    try {
      for (var _j = (0,_tslib/* __values */.XA)(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
        var contextListener = _k.value;
        contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    var isDone = (0,stateUtils/* isInFinalState */.Ij)(state.configuration || [], this.machine);

    if (this.state.configuration && isDone) {
      // get final child state node
      var finalChildStateNode = state.configuration.find(function (sn) {
        return sn.type === 'final' && sn.parent === _this.machine;
      });
      var doneData = finalChildStateNode && finalChildStateNode.doneData ? (0,utils/* mapContext */.QX)(finalChildStateNode.doneData, state.context, _event) : undefined;

      try {
        for (var _l = (0,_tslib/* __values */.XA)(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
          var listener = _m.value;
          listener((0,actions/* doneInvoke */.Sl)(this.id, doneData));
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      this.stop();
    }
  };
  /*
   * Adds a listener that is notified whenever a state transition happens. The listener is called with
   * the next state and the event object that caused the state transition.
   *
   * @param listener The state listener
   */


  Interpreter.prototype.onTransition = function (listener) {
    this.listeners.add(listener); // Send current state to listener

    if (this.status === InterpreterStatus.Running) {
      listener(this.state, this.state.event);
    }

    return this;
  };

  Interpreter.prototype.subscribe = function (nextListenerOrObserver, _, // TODO: error listener
  completeListener) {
    var _this = this;

    if (!nextListenerOrObserver) {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    }

    var listener;
    var resolvedCompleteListener = completeListener;

    if (typeof nextListenerOrObserver === 'function') {
      listener = nextListenerOrObserver;
    } else {
      listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
      resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
    }

    this.listeners.add(listener); // Send current state to listener

    if (this.status === InterpreterStatus.Running) {
      listener(this.state);
    }

    if (resolvedCompleteListener) {
      this.onDone(resolvedCompleteListener);
    }

    return {
      unsubscribe: function () {
        listener && _this.listeners.delete(listener);
        resolvedCompleteListener && _this.doneListeners.delete(resolvedCompleteListener);
      }
    };
  };
  /**
   * Adds an event listener that is notified whenever an event is sent to the running interpreter.
   * @param listener The event listener
   */


  Interpreter.prototype.onEvent = function (listener) {
    this.eventListeners.add(listener);
    return this;
  };
  /**
   * Adds an event listener that is notified whenever a `send` event occurs.
   * @param listener The event listener
   */


  Interpreter.prototype.onSend = function (listener) {
    this.sendListeners.add(listener);
    return this;
  };
  /**
   * Adds a context listener that is notified whenever the state context changes.
   * @param listener The context listener
   */


  Interpreter.prototype.onChange = function (listener) {
    this.contextListeners.add(listener);
    return this;
  };
  /**
   * Adds a listener that is notified when the machine is stopped.
   * @param listener The listener
   */


  Interpreter.prototype.onStop = function (listener) {
    this.stopListeners.add(listener);
    return this;
  };
  /**
   * Adds a state listener that is notified when the statechart has reached its final state.
   * @param listener The state listener
   */


  Interpreter.prototype.onDone = function (listener) {
    this.doneListeners.add(listener);
    return this;
  };
  /**
   * Removes a listener.
   * @param listener The listener to remove
   */


  Interpreter.prototype.off = function (listener) {
    this.listeners.delete(listener);
    this.eventListeners.delete(listener);
    this.sendListeners.delete(listener);
    this.stopListeners.delete(listener);
    this.doneListeners.delete(listener);
    this.contextListeners.delete(listener);
    return this;
  };
  /**
   * Starts the interpreter from the given state, or the initial state.
   * @param initialState The state to start the statechart from
   */


  Interpreter.prototype.start = function (initialState) {
    var _this = this;

    if (this.status === InterpreterStatus.Running) {
      // Do not restart the service if it is already started
      return this;
    } // yes, it's a hack but we need the related cache to be populated for some things to work (like delayed transitions)
    // this is usually called by `machine.getInitialState` but if we rehydrate from a state we might bypass this call
    // we also don't want to call this method here as it resolves the full initial state which might involve calling assign actions
    // and that could potentially lead to some unwanted side-effects (even such as creating some rogue actors)


    this.machine._init();

    registry.register(this.sessionId, this);
    this.initialized = true;
    this.status = InterpreterStatus.Running;
    var resolvedState = initialState === undefined ? this.initialState : (0,serviceScope/* provide */.J)(this, function () {
      return (0,State/* isStateConfig */.TL)(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State/* State.from */.ZM.from(initialState, _this.machine.context));
    });

    if (this.options.devTools) {
      this.attachDev();
    }

    this.scheduler.initialize(function () {
      _this.update(resolvedState, actions/* initEvent */.bf);
    });
    return this;
  };
  /**
   * Stops the interpreter and unsubscribe all listeners.
   *
   * This will also notify the `onStop` listeners.
   */


  Interpreter.prototype.stop = function () {
    var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;

    var _this = this;

    try {
      for (var _f = (0,_tslib/* __values */.XA)(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
        var listener = _g.value;
        this.listeners.delete(listener);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    try {
      for (var _h = (0,_tslib/* __values */.XA)(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
        var listener = _j.value; // call listener, then remove

        listener();
        this.stopListeners.delete(listener);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
      } finally {
        if (e_7) throw e_7.error;
      }
    }

    try {
      for (var _k = (0,_tslib/* __values */.XA)(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
        var listener = _l.value;
        this.contextListeners.delete(listener);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
      } finally {
        if (e_8) throw e_8.error;
      }
    }

    try {
      for (var _m = (0,_tslib/* __values */.XA)(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
        var listener = _o.value;
        this.doneListeners.delete(listener);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    if (!this.initialized) {
      // Interpreter already stopped; do nothing
      return this;
    }

    (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(this.state.configuration), false).sort(function (a, b) {
      return b.order - a.order;
    }).forEach(function (stateNode) {
      var e_11, _a;

      try {
        for (var _b = (0,_tslib/* __values */.XA)(stateNode.definition.exit), _c = _b.next(); !_c.done; _c = _b.next()) {
          var action = _c.value;

          _this.exec(action, _this.state);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_11) throw e_11.error;
        }
      }
    }); // Stop all children


    this.children.forEach(function (child) {
      if ((0,utils/* isFunction */.mf)(child.stop)) {
        child.stop();
      }
    });

    try {
      // Cancel all delayed events
      for (var _p = (0,_tslib/* __values */.XA)(Object.keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
        var key = _q.value;
        this.clock.clearTimeout(this.delayedEventsMap[key]);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
      } finally {
        if (e_10) throw e_10.error;
      }
    }

    this.scheduler.clear();
    this.initialized = false;
    this.status = InterpreterStatus.Stopped;
    registry.free(this.sessionId);
    return this;
  };

  Interpreter.prototype.batch = function (events) {
    var _this = this;

    if (this.status === InterpreterStatus.NotStarted && this.options.deferEvents) {
      // tslint:disable-next-line:no-console
      if (!environment/* IS_PRODUCTION */.M) {
        (0,utils/* warn */.ZK)(false, "".concat(events.length, " event(s) were sent to uninitialized service \"").concat(this.machine.id, "\" and are deferred. Make sure .start() is called for this service.\nEvent: ").concat(JSON.stringify(event)));
      }
    } else if (this.status !== InterpreterStatus.Running) {
      throw new Error( // tslint:disable-next-line:max-line-length
      "".concat(events.length, " event(s) were sent to uninitialized service \"").concat(this.machine.id, "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options."));
    }

    this.scheduler.schedule(function () {
      var e_12, _a;

      var nextState = _this.state;
      var batchChanged = false;
      var batchedActions = [];

      var _loop_1 = function (event_1) {
        var _event = (0,utils/* toSCXMLEvent */.g5)(event_1);

        _this.forward(_event);

        nextState = (0,serviceScope/* provide */.J)(_this, function () {
          return _this.machine.transition(nextState, _event);
        });
        batchedActions.push.apply(batchedActions, (0,_tslib/* __spreadArray */.ev)([], (0,_tslib/* __read */.CR)(nextState.actions.map(function (a) {
          return (0,State/* bindActionToState */.j1)(a, nextState);
        })), false));
        batchChanged = batchChanged || !!nextState.changed;
      };

      try {
        for (var events_1 = (0,_tslib/* __values */.XA)(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
          var event_1 = events_1_1.value;

          _loop_1(event_1);
        }
      } catch (e_12_1) {
        e_12 = {
          error: e_12_1
        };
      } finally {
        try {
          if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
        } finally {
          if (e_12) throw e_12.error;
        }
      }

      nextState.changed = batchChanged;
      nextState.actions = batchedActions;

      _this.update(nextState, (0,utils/* toSCXMLEvent */.g5)(events[events.length - 1]));
    });
  };
  /**
   * Returns a send function bound to this interpreter instance.
   *
   * @param event The event to be sent by the sender.
   */


  Interpreter.prototype.sender = function (event) {
    return this.send.bind(this, event);
  };
  /**
   * Returns the next state given the interpreter's current state and the event.
   *
   * This is a pure method that does _not_ update the interpreter's state.
   *
   * @param event The event to determine the next state
   */


  Interpreter.prototype.nextState = function (event) {
    var _this = this;

    var _event = (0,utils/* toSCXMLEvent */.g5)(event);

    if (_event.name.indexOf(actionTypes/* errorPlatform */.Mg) === 0 && !this.state.nextEvents.some(function (nextEvent) {
      return nextEvent.indexOf(actionTypes/* errorPlatform */.Mg) === 0;
    })) {
      throw _event.data.data;
    }

    var nextState = (0,serviceScope/* provide */.J)(this, function () {
      return _this.machine.transition(_this.state, _event);
    });
    return nextState;
  };

  Interpreter.prototype.forward = function (event) {
    var e_13, _a;

    try {
      for (var _b = (0,_tslib/* __values */.XA)(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
        var id = _c.value;
        var child = this.children.get(id);

        if (!child) {
          throw new Error("Unable to forward event '".concat(event, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
        }

        child.send(event);
      }
    } catch (e_13_1) {
      e_13 = {
        error: e_13_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_13) throw e_13.error;
      }
    }
  };

  Interpreter.prototype.defer = function (sendAction) {
    var _this = this;

    this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function () {
      if (sendAction.to) {
        _this.sendTo(sendAction._event, sendAction.to);
      } else {
        _this.send(sendAction._event);
      }
    }, sendAction.delay);
  };

  Interpreter.prototype.cancel = function (sendId) {
    this.clock.clearTimeout(this.delayedEventsMap[sendId]);
    delete this.delayedEventsMap[sendId];
  };

  Interpreter.prototype.exec = function (action, state, actionFunctionMap) {
    if (actionFunctionMap === void 0) {
      actionFunctionMap = this.machine.options.actions;
    }

    var context = state.context,
        _event = state._event;
    var actionOrExec = action.exec || (0,actions/* getActionFunction */.o$)(action.type, actionFunctionMap);
    var exec = (0,utils/* isFunction */.mf)(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;

    if (exec) {
      try {
        return exec(context, _event.data, {
          action: action,
          state: this.state,
          _event: _event
        });
      } catch (err) {
        if (this.parent) {
          this.parent.send({
            type: 'xstate.error',
            data: err
          });
        }

        throw err;
      }
    }

    switch (action.type) {
      case actionTypes/* send */.lW:
        var sendAction = action;

        if (typeof sendAction.delay === 'number') {
          this.defer(sendAction);
          return;
        } else {
          if (sendAction.to) {
            this.sendTo(sendAction._event, sendAction.to);
          } else {
            this.send(sendAction._event);
          }
        }

        break;

      case actionTypes/* cancel */.al:
        this.cancel(action.sendId);
        break;

      case actionTypes/* start */.BL:
        {
          if (this.status !== InterpreterStatus.Running) {
            return;
          }

          var activity = action.activity; // If the activity will be stopped right after it's started
          // (such as in transient states)
          // don't bother starting the activity.

          if (!this.state.activities[activity.id || activity.type]) {
            break;
          } // Invoked services


          if (activity.type === types/* ActionTypes.Invoke */.M.Invoke) {
            var invokeSource = (0,utils/* toInvokeSource */.j)(activity.src);
            var serviceCreator = this.machine.options.services ? this.machine.options.services[invokeSource.type] : undefined;
            var id = activity.id,
                data = activity.data;

            if (!environment/* IS_PRODUCTION */.M) {
              (0,utils/* warn */.ZK)(!('forward' in activity), // tslint:disable-next-line:max-line-length
              "`forward` property is deprecated (found in invocation of '".concat(activity.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
            }

            var autoForward = 'autoForward' in activity ? activity.autoForward : !!activity.forward;

            if (!serviceCreator) {
              // tslint:disable-next-line:no-console
              if (!environment/* IS_PRODUCTION */.M) {
                (0,utils/* warn */.ZK)(false, "No service found for invocation '".concat(activity.src, "' in machine '").concat(this.machine.id, "'."));
              }

              return;
            }

            var resolvedData = data ? (0,utils/* mapContext */.QX)(data, context, _event) : undefined;

            if (typeof serviceCreator === 'string') {
              // TODO: warn
              return;
            }

            var source = (0,utils/* isFunction */.mf)(serviceCreator) ? serviceCreator(context, _event.data, {
              data: resolvedData,
              src: invokeSource,
              meta: activity.meta
            }) : serviceCreator;

            if (!source) {
              // TODO: warn?
              return;
            }

            var options = void 0;

            if ((0,utils/* isMachine */.O4)(source)) {
              source = resolvedData ? source.withContext(resolvedData) : source;
              options = {
                autoForward: autoForward
              };
            }

            this.spawn(source, id, options);
          } else {
            this.spawnActivity(activity);
          }

          break;
        }

      case actionTypes/* stop */.sT:
        {
          this.stopChild(action.activity.id);
          break;
        }

      case actionTypes/* log */.cM:
        var label = action.label,
            value = action.value;

        if (label) {
          this.logger(label, value);
        } else {
          this.logger(value);
        }

        break;

      default:
        if (!environment/* IS_PRODUCTION */.M) {
          (0,utils/* warn */.ZK)(false, "No implementation found for action type '".concat(action.type, "'"));
        }

        break;
    }

    return undefined;
  };

  Interpreter.prototype.removeChild = function (childId) {
    var _a;

    this.children.delete(childId);
    this.forwardTo.delete(childId); // this.state might not exist at the time this is called,
    // such as when a child is added then removed while initializing the state

    (_a = this.state) === null || _a === void 0 ? true : delete _a.children[childId];
  };

  Interpreter.prototype.stopChild = function (childId) {
    var child = this.children.get(childId);

    if (!child) {
      return;
    }

    this.removeChild(childId);

    if ((0,utils/* isFunction */.mf)(child.stop)) {
      child.stop();
    }
  };

  Interpreter.prototype.spawn = function (entity, name, options) {
    if ((0,utils/* isPromiseLike */.y8)(entity)) {
      return this.spawnPromise(Promise.resolve(entity), name);
    } else if ((0,utils/* isFunction */.mf)(entity)) {
      return this.spawnCallback(entity, name);
    } else if ((0,Actor/* isSpawnedActor */.f3)(entity)) {
      return this.spawnActor(entity, name);
    } else if ((0,utils/* isObservable */.bi)(entity)) {
      return this.spawnObservable(entity, name);
    } else if ((0,utils/* isMachine */.O4)(entity)) {
      return this.spawnMachine(entity, (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, options), {
        id: name
      }));
    } else if ((0,utils/* isBehavior */.HV)(entity)) {
      return this.spawnBehavior(entity, name);
    } else {
      throw new Error("Unable to spawn entity \"".concat(name, "\" of type \"").concat(typeof entity, "\"."));
    }
  };

  Interpreter.prototype.spawnMachine = function (machine, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    var childService = new Interpreter(machine, (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, this.options), {
      parent: this,
      id: options.id || machine.id
    }));

    var resolvedOptions = (0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({}, DEFAULT_SPAWN_OPTIONS), options);

    if (resolvedOptions.sync) {
      childService.onTransition(function (state) {
        _this.send(actionTypes/* update */.Vx, {
          state: state,
          id: childService.id
        });
      });
    }

    var actor = childService;
    this.children.set(childService.id, actor);

    if (resolvedOptions.autoForward) {
      this.forwardTo.add(childService.id);
    }

    childService.onDone(function (doneEvent) {
      _this.removeChild(childService.id);

      _this.send((0,utils/* toSCXMLEvent */.g5)(doneEvent, {
        origin: childService.id
      }));
    }).start();
    return actor;
  };

  Interpreter.prototype.spawnBehavior = function (behavior, id) {
    var actorRef = spawnBehavior(behavior, {
      id: id,
      parent: this
    });
    this.children.set(id, actorRef);
    return actorRef;
  };

  Interpreter.prototype.spawnPromise = function (promise, id) {
    var _a;

    var _this = this;

    var canceled = false;
    var resolvedData;
    promise.then(function (response) {
      if (!canceled) {
        resolvedData = response;

        _this.removeChild(id);

        _this.send((0,utils/* toSCXMLEvent */.g5)((0,actions/* doneInvoke */.Sl)(id, response), {
          origin: id
        }));
      }
    }, function (errorData) {
      if (!canceled) {
        _this.removeChild(id);

        var errorEvent = (0,actions/* error */.vU)(id, errorData);

        try {
          // Send "error.platform.id" to this (parent).
          _this.send((0,utils/* toSCXMLEvent */.g5)(errorEvent, {
            origin: id
          }));
        } catch (error) {
          (0,utils/* reportUnhandledExceptionOnInvocation */.v4)(errorData, error, id);

          if (_this.devTools) {
            _this.devTools.send(errorEvent, _this.state);
          }

          if (_this.machine.strict) {
            // it would be better to always stop the state machine if unhandled
            // exception/promise rejection happens but because we don't want to
            // break existing code so enforce it on strict mode only especially so
            // because documentation says that onError is optional
            _this.stop();
          }
        }
      }
    });
    var actor = (_a = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        var observer = (0,utils/* toObserver */.zM)(next, handleError, complete);
        var unsubscribed = false;
        promise.then(function (response) {
          if (unsubscribed) {
            return;
          }

          observer.next(response);

          if (unsubscribed) {
            return;
          }

          observer.complete();
        }, function (err) {
          if (unsubscribed) {
            return;
          }

          observer.error(err);
        });
        return {
          unsubscribe: function () {
            return unsubscribed = true;
          }
        };
      },
      stop: function () {
        canceled = true;
      },
      toJSON: function () {
        return {
          id: id
        };
      },
      getSnapshot: function () {
        return resolvedData;
      }
    }, _a[utils/* symbolObservable */.L$] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnCallback = function (callback, id) {
    var _a;

    var _this = this;

    var canceled = false;
    var receivers = new Set();
    var listeners = new Set();
    var emitted;

    var receive = function (e) {
      emitted = e;
      listeners.forEach(function (listener) {
        return listener(e);
      });

      if (canceled) {
        return;
      }

      _this.send((0,utils/* toSCXMLEvent */.g5)(e, {
        origin: id
      }));
    };

    var callbackStop;

    try {
      callbackStop = callback(receive, function (newListener) {
        receivers.add(newListener);
      });
    } catch (err) {
      this.send((0,actions/* error */.vU)(id, err));
    }

    if ((0,utils/* isPromiseLike */.y8)(callbackStop)) {
      // it turned out to be an async function, can't reliably check this before calling `callback`
      // because transpiled async functions are not recognizable
      return this.spawnPromise(callbackStop, id);
    }

    var actor = (_a = {
      id: id,
      send: function (event) {
        return receivers.forEach(function (receiver) {
          return receiver(event);
        });
      },
      subscribe: function (next) {
        var observer = (0,utils/* toObserver */.zM)(next);
        listeners.add(observer.next);
        return {
          unsubscribe: function () {
            listeners.delete(observer.next);
          }
        };
      },
      stop: function () {
        canceled = true;

        if ((0,utils/* isFunction */.mf)(callbackStop)) {
          callbackStop();
        }
      },
      toJSON: function () {
        return {
          id: id
        };
      },
      getSnapshot: function () {
        return emitted;
      }
    }, _a[utils/* symbolObservable */.L$] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnObservable = function (source, id) {
    var _a;

    var _this = this;

    var emitted;
    var subscription = source.subscribe(function (value) {
      emitted = value;

      _this.send((0,utils/* toSCXMLEvent */.g5)(value, {
        origin: id
      }));
    }, function (err) {
      _this.removeChild(id);

      _this.send((0,utils/* toSCXMLEvent */.g5)((0,actions/* error */.vU)(id, err), {
        origin: id
      }));
    }, function () {
      _this.removeChild(id);

      _this.send((0,utils/* toSCXMLEvent */.g5)((0,actions/* doneInvoke */.Sl)(id), {
        origin: id
      }));
    });
    var actor = (_a = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        return source.subscribe(next, handleError, complete);
      },
      stop: function () {
        return subscription.unsubscribe();
      },
      getSnapshot: function () {
        return emitted;
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    }, _a[utils/* symbolObservable */.L$] = function () {
      return this;
    }, _a);
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActor = function (actor, name) {
    this.children.set(name, actor);
    return actor;
  };

  Interpreter.prototype.spawnActivity = function (activity) {
    var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;

    if (!implementation) {
      if (!environment/* IS_PRODUCTION */.M) {
        (0,utils/* warn */.ZK)(false, "No implementation found for activity '".concat(activity.type, "'"));
      } // tslint:disable-next-line:no-console


      return;
    } // Start implementation


    var dispose = implementation(this.state.context, activity);
    this.spawnEffect(activity.id, dispose);
  };

  Interpreter.prototype.spawnEffect = function (id, dispose) {
    var _a;

    this.children.set(id, (_a = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function () {
        return {
          unsubscribe: function () {
            return void 0;
          }
        };
      },
      stop: dispose || undefined,
      getSnapshot: function () {
        return undefined;
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    }, _a[utils/* symbolObservable */.L$] = function () {
      return this;
    }, _a));
  };

  Interpreter.prototype.attachDev = function () {
    var global = getGlobal();

    if (this.options.devTools && global) {
      if (global.__REDUX_DEVTOOLS_EXTENSION__) {
        var devToolsOptions = typeof this.options.devTools === 'object' ? this.options.devTools : undefined;
        this.devTools = global.__REDUX_DEVTOOLS_EXTENSION__.connect((0,_tslib/* __assign */.pi)((0,_tslib/* __assign */.pi)({
          name: this.id,
          autoPause: true,
          stateSanitizer: function (state) {
            return {
              value: state.value,
              context: state.context,
              actions: state.actions
            };
          }
        }, devToolsOptions), {
          features: (0,_tslib/* __assign */.pi)({
            jump: false,
            skip: false
          }, devToolsOptions ? devToolsOptions.features : undefined)
        }), this.machine);
        this.devTools.init(this.state);
      } // add XState-specific dev tooling hook


      registerService(this);
    }
  };

  Interpreter.prototype.toJSON = function () {
    return {
      id: this.id
    };
  };

  Interpreter.prototype[utils/* symbolObservable */.L$] = function () {
    return this;
  };

  Interpreter.prototype.getSnapshot = function () {
    if (this.status === InterpreterStatus.NotStarted) {
      return this.initialState;
    }

    return this._state;
  };
  /**
   * The default interpreter options:
   *
   * - `clock` uses the global `setTimeout` and `clearTimeout` functions
   * - `logger` uses the global `console.log()` method
   */


  Interpreter.defaultOptions = {
    execute: true,
    deferEvents: true,
    clock: {
      setTimeout: function (fn, ms) {
        return setTimeout(fn, ms);
      },
      clearTimeout: function (id) {
        return clearTimeout(id);
      }
    },
    logger: /*#__PURE__*/console.log.bind(console),
    devTools: false
  };
  Interpreter.interpret = interpret;
  return Interpreter;
}();

var resolveSpawnOptions = function (nameOrOptions) {
  if (isString(nameOrOptions)) {
    return __assign(__assign({}, DEFAULT_SPAWN_OPTIONS), {
      name: nameOrOptions
    });
  }

  return __assign(__assign(__assign({}, DEFAULT_SPAWN_OPTIONS), {
    name: uniqueId()
  }), nameOrOptions);
};

function spawn(entity, nameOrOptions) {
  var resolvedOptions = resolveSpawnOptions(nameOrOptions);
  return consume(function (service) {
    if (!IS_PRODUCTION) {
      var isLazyEntity = isMachine(entity) || isFunction(entity);
      warn(!!service || isLazyEntity, "Attempted to spawn an Actor (ID: \"".concat(isMachine(entity) ? entity.id : 'undefined', "\") outside of a service. This will have no effect."));
    }

    if (service) {
      return service.spawn(entity, resolvedOptions.name, resolvedOptions);
    } else {
      return createDeferredActor(entity, resolvedOptions.name);
    }
  });
}
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */

function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}




/***/ }),

/***/ 9010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ provide)
/* harmony export */ });
/* unused harmony export consume */
/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 */
var serviceStack = [];
var provide = function (service, fn) {
  serviceStack.push(service);
  var result = fn(service);
  serviceStack.pop();
  return result;
};
var consume = function (fn) {
  return fn(serviceStack[serviceStack.length - 1]);
};




/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getChildren),
/* harmony export */   "Ij": () => (/* binding */ isInFinalState),
/* harmony export */   "N9": () => (/* binding */ isLeafNode),
/* harmony export */   "NA": () => (/* binding */ getValue),
/* harmony export */   "Oe": () => (/* binding */ getTagsFromConfiguration),
/* harmony export */   "P_": () => (/* binding */ getConfiguration),
/* harmony export */   "ac": () => (/* binding */ getAllStateNodes),
/* harmony export */   "e$": () => (/* binding */ has),
/* harmony export */   "nJ": () => (/* binding */ nextEvents),
/* harmony export */   "xZ": () => (/* binding */ getMeta)
/* harmony export */ });
/* unused harmony export getAdjList */
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3388);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8351);



var isLeafNode = function (stateNode) {
  return stateNode.type === 'atomic' || stateNode.type === 'final';
};
function getChildren(stateNode) {
  return Object.keys(stateNode.states).map(function (key) {
    return stateNode.states[key];
  });
}
function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];

  if (isLeafNode(stateNode)) {
    return stateNodes;
  }

  return stateNodes.concat((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .flatten */ .xH)(getChildren(stateNode).map(getAllStateNodes)));
}
function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);

  try {
    // add all ancestors
    for (var configuration_1 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  var adjList = getAdjList(configuration);

  try {
    // add descendants
    for (var configuration_2 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value; // if previously active, add existing child nodes

      if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function (sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function (sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === 'parallel') {
          try {
            for (var _e = (e_3 = void 0, (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;

              if (child.type === 'history') {
                continue;
              }

              if (!configuration.has(child)) {
                configuration.add(child);

                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function (sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function (sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  try {
    // add all ancestors
    for (var configuration_3 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return configuration;
}

function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);

  if (!childStateNodes) {
    return {}; // todo: fix?
  }

  if (baseNode.type === 'compound') {
    var childStateNode = childStateNodes[0];

    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }

  var stateValue = {};
  childStateNodes.forEach(function (csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}

function getAdjList(configuration) {
  var e_5, _a;

  var adjList = new Map();

  try {
    for (var configuration_4 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;

      if (!adjList.has(s)) {
        adjList.set(s, []);
      }

      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }

        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return)) _a.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return adjList;
}
function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}
function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function (member) {
      return member === item;
    });
  }

  if (iterable instanceof Set) {
    return iterable.has(item);
  }

  return false; // TODO: fix
}
function nextEvents(configuration) {
  return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadArray */ .ev)([], (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)(new Set((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .flatten */ .xH)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadArray */ .ev)([], (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)(configuration.map(function (sn) {
    return sn.ownEvents;
  })), false)))), false);
}
function isInFinalState(configuration, stateNode) {
  if (stateNode.type === 'compound') {
    return getChildren(stateNode).some(function (s) {
      return s.type === 'final' && has(configuration, s);
    });
  }

  if (stateNode.type === 'parallel') {
    return getChildren(stateNode).every(function (sn) {
      return isInFinalState(configuration, sn);
    });
  }

  return false;
}
function getMeta(configuration) {
  if (configuration === void 0) {
    configuration = [];
  }

  return configuration.reduce(function (acc, stateNode) {
    if (stateNode.meta !== undefined) {
      acc[stateNode.id] = stateNode.meta;
    }

    return acc;
  }, {});
}
function getTagsFromConfiguration(configuration) {
  return new Set((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .flatten */ .xH)(configuration.map(function (sn) {
    return sn.tags;
  })));
}




/***/ }),

/***/ 6433:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5491);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9532);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8190);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7630);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(664);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2563);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8168);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 8575:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5491);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9532);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8190);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7630);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(664);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2563);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2060);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_styles_pcss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 6813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _applyDecoratedDescriptor)
/* harmony export */ });
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

/***/ }),

/***/ 3229:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 5497:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _initializerDefineProperty)
/* harmony export */ });
function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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
/******/ __webpack_require__.O(0, [374,49,981,367], () => (__webpack_exec__(120)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);