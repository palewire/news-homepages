/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

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
;// CONCATENATED MODULE: ./Extension/src/content-script/content-script.js
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

const contentPage = {
  sendMessage: runtimeImpl.sendMessage,
  onMessage: runtimeImpl.onMessage
};
;// CONCATENATED MODULE: ./Extension/src/common/constants.js
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
;// CONCATENATED MODULE: ./Extension/src/common/user-agent-utils.js
/**
 * Check if current browser is as given
 * @param {string} browserName
 * @returns {boolean}
 */
const isTargetBrowser = browserName => {
  var _navigator$userAgentD;

  let brand;
  let uaStringName;

  if (browserName === 'Chrome') {
    brand = 'Google Chrome';
    uaStringName = 'Chrome';
  } else if (browserName === 'Firefox') {
    uaStringName = 'Firefox';
  } else if (browserName === 'Safari') {
    uaStringName = 'Safari';
  } else if (browserName === 'Opera') {
    brand = 'Opera';
    uaStringName = 'OPR';
  } else if (browserName === 'YaBrowser') {
    brand = 'Yandex';
    uaStringName = 'YaBrowser';
  } else if (browserName === 'Edge') {
    uaStringName = 'edge';
  } else if (browserName === 'EdgeChromium') {
    brand = 'Microsoft Edge';
    uaStringName = 'edg';
  }

  const brandsData = (_navigator$userAgentD = navigator.userAgentData) === null || _navigator$userAgentD === void 0 ? void 0 : _navigator$userAgentD.brands;

  if (!brandsData || !brand) {
    return navigator.userAgent.indexOf(uaStringName) >= 0;
  } // eslint-disable-next-line no-restricted-syntax


  for (const data of brandsData) {
    if (data.brand === brand) {
      return true;
    }
  }

  return false;
};
/**
 * Check if current platform is as given
 * @param {string} platformName
 * @returns
 */


const isTargetPlatform = platformName => {
  var _navigator$userAgentD2;

  const platformString = (_navigator$userAgentD2 = navigator.userAgentData) === null || _navigator$userAgentD2 === void 0 ? void 0 : _navigator$userAgentD2.platform;
  return platformString ? platformString.toUpperCase().indexOf(platformName) >= 0 : navigator.userAgent.toUpperCase().indexOf(platformName) >= 0;
};
/**
 * Get browser version by name
 * @param {string} browserName
 * @returns {number|null}
 */


const getBrowserVersion = browserName => {
  var _navigator$userAgentD3;

  let brand;
  let uaStringMask;

  if (browserName === 'Chrome') {
    brand = 'Google Chrome';
    uaStringMask = /\sChrome\/(\d+)\./;
  } else if (browserName === 'Firefox') {
    uaStringMask = /\sFirefox\/(\d+)\./;
  }

  const brandsData = (_navigator$userAgentD3 = navigator.userAgentData) === null || _navigator$userAgentD3 === void 0 ? void 0 : _navigator$userAgentD3.brands;

  if (!brandsData || !brand) {
    const match = uaStringMask.exec(navigator.userAgent);
    return match === null ? null : Number.parseInt(match[1], 10);
  } // eslint-disable-next-line no-restricted-syntax


  for (const data of brandsData) {
    if (data.brand === brand) {
      const {
        version
      } = data;
      return Number.parseInt(version, 10);
    }
  }

  return null;
};

const isChrome = isTargetBrowser('Chrome');
const isFirefox = isTargetBrowser('Firefox');
const isOpera = isTargetBrowser('Opera');
const isYaBrowser = isTargetBrowser('YaBrowser');
const isEdge = isTargetBrowser('Edge');
const isEdgeChromium = isTargetBrowser('EdgeChromium');
const chromeVersion = getBrowserVersion('Chrome');
const firefoxVersion = getBrowserVersion('Firefox');
const isMacOs = isTargetPlatform('MAC');
const isWindowsOs = isTargetPlatform('WIN');
const isAndroid = isTargetPlatform('ANDROID');
;// CONCATENATED MODULE: ./Extension/src/pages/thankyou.js
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




const PageController = response => {
  const {
    userSettings,
    enabledFilters,
    constants: {
      AntiBannerFiltersId
    }
  } = response;
  let safebrowsingEnabledCheckbox;
  let trackingFilterEnabledCheckbox;
  let socialFilterEnabledCheckbox;
  let sendStatsCheckbox;
  let allowAcceptableAdsCheckbox;

  const safebrowsingEnabledChange = e => {
    const checkbox = e.currentTarget;
    contentPage.sendMessage({
      type: MESSAGE_TYPES.CHANGE_USER_SETTING,
      key: userSettings.names.DISABLE_SAFEBROWSING,
      value: !checkbox.checked
    });
  };

  const trackingFilterEnabledChange = e => {
    const checkbox = e.currentTarget;

    if (checkbox.checked) {
      contentPage.sendMessage({
        type: MESSAGE_TYPES.ADD_AND_ENABLE_FILTER,
        data: {
          filterId: AntiBannerFiltersId.TRACKING_FILTER_ID
        }
      });
    } else {
      contentPage.sendMessage({
        type: MESSAGE_TYPES.DISABLE_ANTIBANNER_FILTER,
        data: {
          filterId: AntiBannerFiltersId.TRACKING_FILTER_ID,
          remove: true
        }
      });
    }
  };

  const socialFilterEnabledChange = e => {
    const checkbox = e.currentTarget;

    if (checkbox.checked) {
      contentPage.sendMessage({
        type: MESSAGE_TYPES.ADD_AND_ENABLE_FILTER,
        data: {
          filterId: AntiBannerFiltersId.SOCIAL_FILTER_ID
        }
      });
    } else {
      contentPage.sendMessage({
        type: MESSAGE_TYPES.DISABLE_ANTIBANNER_FILTER,
        data: {
          filterId: AntiBannerFiltersId.SOCIAL_FILTER_ID,
          remove: true
        }
      });
    }
  };

  const sendStatsCheckboxChange = e => {
    const checkbox = e.currentTarget;
    contentPage.sendMessage({
      type: MESSAGE_TYPES.CHANGE_USER_SETTING,
      key: userSettings.names.DISABLE_COLLECT_HITS,
      value: !checkbox.checked
    });
  };

  const allowAcceptableAdsChange = e => {
    const checkbox = e.currentTarget;

    if (checkbox.checked) {
      contentPage.sendMessage({
        type: MESSAGE_TYPES.ADD_AND_ENABLE_FILTER,
        data: {
          filterId: AntiBannerFiltersId.SEARCH_AND_SELF_PROMO_FILTER_ID
        }
      });
    } else {
      contentPage.sendMessage({
        type: MESSAGE_TYPES.DISABLE_ANTIBANNER_FILTER,
        data: {
          filterId: AntiBannerFiltersId.SEARCH_AND_SELF_PROMO_FILTER_ID,
          remove: true
        }
      });
    }
  };

  const bindEvents = () => {
    safebrowsingEnabledCheckbox = document.getElementById('safebrowsingEnabledCheckbox');
    trackingFilterEnabledCheckbox = document.getElementById('trackingFilterEnabledCheckbox');
    socialFilterEnabledCheckbox = document.getElementById('socialFilterEnabledCheckbox'); // sendSafebrowsingStatsCheckbox - id saved, because it should be changed on thankyou page

    sendStatsCheckbox = document.getElementById('sendSafebrowsingStatsCheckbox');
    allowAcceptableAdsCheckbox = document.getElementById('allowAcceptableAds');
    safebrowsingEnabledCheckbox.addEventListener('change', safebrowsingEnabledChange);
    trackingFilterEnabledCheckbox.addEventListener('change', trackingFilterEnabledChange);
    socialFilterEnabledCheckbox.addEventListener('change', socialFilterEnabledChange); // ignore Firefox, see task AG-2322

    if (!isFirefox) {
      sendStatsCheckbox.addEventListener('change', sendStatsCheckboxChange);
    }

    allowAcceptableAdsCheckbox.addEventListener('change', allowAcceptableAdsChange);
    const openExtensionStoreBtns = [].slice.call(document.querySelectorAll('.openExtensionStore'));
    openExtensionStoreBtns.forEach(openExtensionStoreBtn => {
      openExtensionStoreBtn.addEventListener('click', e => {
        e.preventDefault();
        contentPage.sendMessage({
          type: MESSAGE_TYPES.OPEN_EXTENSION_STORE
        });
      });
    });
    const openSettingsBtns = [].slice.call(document.querySelectorAll('.openSettings'));
    openSettingsBtns.forEach(openSettingsBtn => {
      openSettingsBtn.addEventListener('click', e => {
        e.preventDefault();
        contentPage.sendMessage({
          type: MESSAGE_TYPES.OPEN_SETTINGS_TAB
        });
      });
    });
  };

  const updateCheckbox = (checkbox, enabled) => {
    if (!checkbox) {
      return;
    }

    if (enabled) {
      checkbox.setAttribute('checked', 'checked');
    } else {
      checkbox.removeAttribute('checked');
    }
  };

  const renderSafebrowsingSection = (safebrowsingEnabled, collectHitStats) => {
    updateCheckbox(safebrowsingEnabledCheckbox, safebrowsingEnabled);
    updateCheckbox(sendStatsCheckbox, collectHitStats);
  };

  const render = () => {
    const safebrowsingEnabled = !userSettings.values[userSettings.names.DISABLE_SAFEBROWSING];
    const collectHitsCount = !userSettings.values[userSettings.names.DISABLE_COLLECT_HITS];
    const trackingFilterEnabled = (AntiBannerFiltersId.TRACKING_FILTER_ID in enabledFilters);
    const socialFilterEnabled = (AntiBannerFiltersId.SOCIAL_FILTER_ID in enabledFilters); // eslint-disable-next-line max-len

    const allowAcceptableAdsEnabled = (AntiBannerFiltersId.SEARCH_AND_SELF_PROMO_FILTER_ID in enabledFilters);
    renderSafebrowsingSection(safebrowsingEnabled, collectHitsCount);
    updateCheckbox(trackingFilterEnabledCheckbox, trackingFilterEnabled);
    updateCheckbox(socialFilterEnabledCheckbox, socialFilterEnabled);
    updateCheckbox(allowAcceptableAdsCheckbox, allowAcceptableAdsEnabled);
  };

  const init = () => {
    bindEvents();
    render();
  };

  return {
    init
  };
};

let timeoutId;
let counter = 0;
const MAX_WAIT_RETRY = 10;
const RETRY_TIMEOUT_MS = 100;

const init = async () => {
  if (typeof contentPage === 'undefined') {
    if (counter > MAX_WAIT_RETRY) {
      clearTimeout(timeoutId);
      return;
    }

    timeoutId = setTimeout(init, RETRY_TIMEOUT_MS);
    counter += 1;
    return;
  }

  clearTimeout(timeoutId);
  const response = await contentPage.sendMessage({
    type: MESSAGE_TYPES.INITIALIZE_FRAME_SCRIPT
  });
  const controller = PageController(response);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      controller.init();
    });
  } else {
    controller.init();
  }
};

const thankyou = {
  init
};
;// CONCATENATED MODULE: ./Extension/pages/thankyou/index.js

thankyou.init();
})();

/******/ })()
;