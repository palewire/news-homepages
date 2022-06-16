"use strict";
(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([[409],{

/***/ 1660:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./Extension/src/common/constants.js
var constants = __webpack_require__(4568);
;// CONCATENATED MODULE: ./Extension/src/pages/devtools-elements-sidebar.js
/* eslint-disable no-nested-ternary */

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

const browser = window.browser || chrome;
const devtoolsElementsSidebar = (() => {
  const initPanel = function () {
    initTheme();
    initElements();
    bindEvents();

    const onElementSelected = function () {
      browser.devtools.inspectedWindow.eval('DevToolsRulesConstructor.getElementInfo($0)', {
        useContentScriptContext: true
      }, info => {
        if (!info) {
          return;
        } // Sort attributes


        info.attributes.sort((a1, a2) => {
          const i1 = a1.name === 'id' ? 0 : a1.name === 'class' ? 1 : 2;
          const i2 = a2.name === 'id' ? 0 : a2.name === 'class' ? 1 : 2;
          return i1 - i2;
        });
        window.selectedElementInfo = info;
        updateRule();
        handleShowBlockSettings(info.haveUrlBlockParameter, info.haveClassAttribute && !info.haveIdAttribute);
        setupAttributesInfo(info);
      });
    };

    const onPageChanged = function () {
      document.getElementById('preview-rule-button').value = 'Preview';
      delete window.adguardDevToolsPreview;
    };

    if (browser.devtools) {
      browser.devtools.panels.elements.onSelectionChanged.addListener(onElementSelected);
      browser.devtools.network.onNavigated.addListener(onPageChanged);
    }

    onElementSelected();
  };

  const initTheme = function () {
    const theme = browser.devtools.panels.themeName;

    if (theme === 'dark') {
      document.body.classList.add('-theme-with-dark-background');
    }
  };

  const initElements = function () {
    document.querySelector('#block-by-url-checkbox').checked = false;
    document.querySelector('#create-full-css-path').checked = false;
    document.querySelector('#one-domain-checkbox').checked = true;
    document.querySelector('#filter-rule-text').value = '';
    const placeholder = document.getElementById('attributes-block');

    while (placeholder.firstChild) {
      placeholder.removeChild(placeholder.firstChild);
    }
  };

  const updateRule = function () {
    getInspectedPageUrl(url => {
      updateFilterRuleInput(window.selectedElementInfo, url);
    });
  };

  const bindEvents = function () {
    const previewRuleButton = document.getElementById('preview-rule-button');
    previewRuleButton.addEventListener('click', e => {
      e.preventDefault();

      if (window.selectedElementInfo) {
        if (window.adguardDevToolsPreview) {
          // Remove preview
          cancelPreview();
          previewRuleButton.value = 'Preview';
          delete window.adguardDevToolsPreview;
          return;
        }

        const ruleText = document.getElementById('filter-rule-text').value;

        if (!ruleText) {
          return;
        }

        applyPreview(ruleText);
        previewRuleButton.value = 'Cancel preview';
        window.adguardDevToolsPreview = true;
      }
    });
    document.getElementById('add-rule-button').addEventListener('click', e => {
      e.preventDefault();

      if (window.selectedElementInfo) {
        addRuleForElement();
      }
    });
    const updateRuleBlocks = document.querySelectorAll('.update-rule-block');
    updateRuleBlocks.forEach(block => {
      block.addEventListener('click', () => {
        updatePanelElements();
        updateRule();
      });
    });
    document.getElementById('select-attributes-checkbox').addEventListener('click', e => {
      const {
        checked
      } = e.currentTarget;
      const attributeCheckBoxes = document.querySelectorAll('.attribute-check-box');
      attributeCheckBoxes.forEach(el => {
        el.checked = checked;
      });
      updatePanelElements();
      updateRule();
    });
  };

  const updatePanelElements = function () {
    const checkboxes = document.querySelectorAll('#one-domain-checkbox, #create-full-css-path, .attribute-check-box'); // All checkboxes should be disabled if block by url is checked

    if (document.querySelector('#block-by-url-checkbox').checked) {
      checkboxes.forEach(checkbox => {
        checkbox.setAttribute('disabled', 'disabled');
      });
    } else {
      checkboxes.forEach(checkbox => {
        checkbox.removeAttribute('disabled');
      });
    }
  };

  const handleShowBlockSettings = function (showBlockByUrl, createFullCssPath) {
    if (showBlockByUrl) {
      document.querySelector('#block-by-url-checkbox-block').style.display = 'block';
    } else {
      document.querySelector('#block-by-url-checkbox').checked = false;
      document.querySelector('#block-by-url-checkbox-block').style.display = 'none';
    }

    if (createFullCssPath) {
      document.querySelector('#create-full-css-path-block').style.display = 'block';
      document.querySelector('#create-full-css-path').checked = false;
    } else {
      document.querySelector('#create-full-css-path').checked = true;
      document.querySelector('#create-full-css-path-block').style.display = 'none';
    }
  };

  const setupAttributesInfo = function (info) {
    const placeholder = document.getElementById('attributes-block');

    while (placeholder.firstChild) {
      placeholder.removeChild(placeholder.firstChild);
    }

    const createAttributeElement = (attributeName, attributeValue, defaultChecked) => {
      const checked = defaultChecked ? 'checked="true"' : '';
      const elHtml = `
                    <li class="parent">
                        <input class="enabled-button attribute-check-box" type="checkbox" id="attribute-check-box-${attributeName}" ${checked}>
                        <span class="webkit-css-property">${attributeName}</span>:
                        <span class="value attribute-check-box-value">${attributeValue}</span>
                    </li>
            `;
      const tmpEl = document.createElement('div');
      tmpEl.innerHTML = elHtml;
      return tmpEl.firstElementChild;
    };

    if (info.tagName) {
      placeholder.appendChild(createAttributeElement('tag', info.tagName.toLowerCase(), true));
    }

    for (let i = 0; i < info.attributes.length; i += 1) {
      const attribute = info.attributes[i];

      if (attribute.name === 'class' && attribute.value) {
        const split = attribute.value.split(' ');

        for (let j = 0; j < split.length; j += 1) {
          const value = split[j];

          if (value) {
            // Skip empty values. Like 'class1 class2   '
            placeholder.appendChild(createAttributeElement(attribute.name, value, true));
          }
        }
      } else {
        placeholder.appendChild(createAttributeElement(attribute.name, attribute.value, attribute.name === 'id'));
      }
    }

    if (placeholder.childNodes.length > 2) {
      document.querySelector('#select-attributes-checkbox').style.display = 'inline';
    } else {
      document.querySelector('#select-attributes-checkbox').style.display = 'none';
    }
  };

  const getInspectedPageUrl = function (callback) {
    browser.devtools.inspectedWindow.eval('document.location && document.location.href', result => {
      callback(result);
    });
  };

  const updateFilterRuleInput = function (info, url) {
    const isBlockByUrl = document.querySelector('#block-by-url-checkbox').checked;
    const createFullCssPath = document.querySelector('#create-full-css-path').checked;
    const isBlockOneDomain = document.querySelector('#one-domain-checkbox').checked;
    let includeTagName = true;
    let includeElementId = true;
    const selectedClasses = [];
    let attributesSelector = '';
    document.querySelectorAll('.attribute-check-box').forEach(el => {
      if (el) {
        const attrName = el.id.substring('attribute-check-box-'.length);

        if (attrName === 'tag') {
          includeTagName = el.checked;
        } else if (attrName === 'id') {
          includeElementId = el.checked;
        } else if (el.checked) {
          const attrValue = el.parentNode.querySelector('.attribute-check-box-value').innerText;

          if (attrName === 'class') {
            selectedClasses.push(attrValue);
          } else {
            attributesSelector += `[${attrName}="${attrValue}"]`;
          }
        }
      }
    });
    const options = {
      urlMask: info.urlBlockAttributeValue,
      isBlockOneDomain: !isBlockOneDomain,
      url,
      ruleType: isBlockByUrl ? 'URL' : 'CSS',
      cssSelectorType: createFullCssPath ? 'STRICT_FULL' : 'STRICT',
      attributes: attributesSelector,
      excludeTagName: !includeTagName,
      excludeId: !includeElementId,
      classList: selectedClasses
    };
    const func = `DevToolsRulesConstructor.constructRuleText($0, ${JSON.stringify(options)});`;
    browser.devtools.inspectedWindow.eval(func, {
      useContentScriptContext: true
    }, result => {
      if (result) {
        document.getElementById('filter-rule-text').value = result;
      }
    });
  };

  const applyPreview = function (ruleText) {
    const func = `DevToolsHelper.applyPreview(${JSON.stringify({
      ruleText
    })});`;
    browser.devtools.inspectedWindow.eval(func, {
      useContentScriptContext: true
    });
  };

  const cancelPreview = function () {
    const func = 'DevToolsHelper.cancelPreview();';
    browser.devtools.inspectedWindow.eval(func, {
      useContentScriptContext: true
    });
  };
  /**
   * Adds userrule via background page
   * We add rule via background page to mitigate vulnerabilities
   * related with messages from content script
   * @param {string} ruleText
   * @returns {Promise<void>}
   */


  const addRule = async ruleText => {
    browser.runtime.sendMessage({
      type: constants/* MESSAGE_TYPES.DEVTOOLS_ADD_USER_RULE */.oK.DEVTOOLS_ADD_USER_RULE,
      data: {
        ruleText
      }
    });
  };

  const addRuleForElement = async () => {
    if (window.adguardDevToolsPreview) {
      // Remove preview
      cancelPreview();
    }

    const ruleText = document.getElementById('filter-rule-text').value;

    if (!ruleText) {
      return;
    }

    await addRule(ruleText);
    applyPreview(ruleText);
    delete window.selectedElementInfo;
    initElements();
  };

  const init = () => {
    document.addEventListener('DOMContentLoaded', () => {
      initPanel();
    });
  };

  return {
    init
  };
})();
;// CONCATENATED MODULE: ./Extension/pages/devtools/devtools-elements-sidebar.js

devtoolsElementsSidebar.init();

/***/ }),

/***/ 4568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(1660));
/******/ }
]);