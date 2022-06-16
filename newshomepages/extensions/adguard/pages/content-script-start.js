/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var isCallable = __webpack_require__(2163);
var tryToString = __webpack_require__(368);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 8514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var isObject = __webpack_require__(3041);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ 4465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(9130);
var toAbsoluteIndex = __webpack_require__(3828);
var lengthOfArrayLike = __webpack_require__(5474);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3074);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 5425:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(8624);
var aCallable = __webpack_require__(8146);
var anObject = __webpack_require__(8514);

// https://github.com/tc39/collection-methods
module.exports = function addAll(/* ...elements */) {
  var set = anObject(this);
  var adder = aCallable(set.add);
  for (var k = 0, len = arguments.length; k < len; k++) {
    call(adder, set, arguments[k]);
  }
  return set;
};


/***/ }),

/***/ 11:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(8624);
var aCallable = __webpack_require__(8146);
var anObject = __webpack_require__(8514);

// https://github.com/tc39/collection-methods
module.exports = function deleteAll(/* ...elements */) {
  var collection = anObject(this);
  var remover = aCallable(collection['delete']);
  var allDeleted = true;
  var wasDeleted;
  for (var k = 0, len = arguments.length; k < len; k++) {
    wasDeleted = call(remover, collection, arguments[k]);
    allDeleted = allDeleted && wasDeleted;
  }
  return !!allDeleted;
};


/***/ }),

/***/ 1401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(1325);
var ownKeys = __webpack_require__(810);
var getOwnPropertyDescriptorModule = __webpack_require__(9206);
var definePropertyModule = __webpack_require__(6572);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 7767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(6372);
var definePropertyModule = __webpack_require__(6572);
var createPropertyDescriptor = __webpack_require__(8602);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 8602:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 6372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 4193:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var isObject = __webpack_require__(3041);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(9997);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 5111:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var userAgent = __webpack_require__(283);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 6606:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 5942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var getOwnPropertyDescriptor = (__webpack_require__(9206).f);
var createNonEnumerableProperty = __webpack_require__(7767);
var redefine = __webpack_require__(852);
var setGlobal = __webpack_require__(6421);
var copyConstructorProperties = __webpack_require__(1401);
var isForced = __webpack_require__(1637);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7931:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 2637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 8624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(2637);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(6372);
var hasOwn = __webpack_require__(1325);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 3074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(2637);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 9997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var isCallable = __webpack_require__(2163);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 4462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(8146);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 3406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 1325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3074);
var toObject = __webpack_require__(7410);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3730:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 3202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(6372);
var fails = __webpack_require__(7931);
var createElement = __webpack_require__(4193);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 2170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var uncurryThis = __webpack_require__(3074);
var fails = __webpack_require__(7931);
var classof = __webpack_require__(4021);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 2089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3074);
var isCallable = __webpack_require__(2163);
var store = __webpack_require__(2846);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 3987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(5062);
var global = __webpack_require__(3406);
var uncurryThis = __webpack_require__(3074);
var isObject = __webpack_require__(3041);
var createNonEnumerableProperty = __webpack_require__(7767);
var hasOwn = __webpack_require__(1325);
var shared = __webpack_require__(2846);
var sharedKey = __webpack_require__(1320);
var hiddenKeys = __webpack_require__(3730);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 2163:
/***/ ((module) => {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 1637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(7931);
var isCallable = __webpack_require__(2163);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 3041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(2163);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 2884:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 5666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var getBuiltIn = __webpack_require__(9997);
var isCallable = __webpack_require__(2163);
var isPrototypeOf = __webpack_require__(3071);
var USE_SYMBOL_AS_UID = __webpack_require__(9525);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ 5474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(1403);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 3325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(5111);
var fails = __webpack_require__(7931);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 5062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var isCallable = __webpack_require__(2163);
var inspectSource = __webpack_require__(2089);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 6572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var DESCRIPTORS = __webpack_require__(6372);
var IE8_DOM_DEFINE = __webpack_require__(3202);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8814);
var anObject = __webpack_require__(8514);
var toPropertyKey = __webpack_require__(1973);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 9206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(6372);
var call = __webpack_require__(8624);
var propertyIsEnumerableModule = __webpack_require__(2251);
var createPropertyDescriptor = __webpack_require__(8602);
var toIndexedObject = __webpack_require__(9130);
var toPropertyKey = __webpack_require__(1973);
var hasOwn = __webpack_require__(1325);
var IE8_DOM_DEFINE = __webpack_require__(3202);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 3311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(1429);
var enumBugKeys = __webpack_require__(6606);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 395:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3074);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3074);
var hasOwn = __webpack_require__(1325);
var toIndexedObject = __webpack_require__(9130);
var indexOf = (__webpack_require__(4465).indexOf);
var hiddenKeys = __webpack_require__(3730);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 2251:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 9207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var call = __webpack_require__(8624);
var isCallable = __webpack_require__(2163);
var isObject = __webpack_require__(3041);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(9997);
var uncurryThis = __webpack_require__(3074);
var getOwnPropertyNamesModule = __webpack_require__(3311);
var getOwnPropertySymbolsModule = __webpack_require__(395);
var anObject = __webpack_require__(8514);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 852:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var isCallable = __webpack_require__(2163);
var hasOwn = __webpack_require__(1325);
var createNonEnumerableProperty = __webpack_require__(7767);
var setGlobal = __webpack_require__(6421);
var inspectSource = __webpack_require__(2089);
var InternalStateModule = __webpack_require__(3987);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(233).CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 5727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 1320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(8519);
var uid = __webpack_require__(6004);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 2846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var setGlobal = __webpack_require__(6421);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 8519:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(2884);
var store = __webpack_require__(2846);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 3828:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(400);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 9130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(2170);
var requireObjectCoercible = __webpack_require__(5727);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 400:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ 1403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(400);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var requireObjectCoercible = __webpack_require__(5727);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 8732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var call = __webpack_require__(8624);
var isObject = __webpack_require__(3041);
var isSymbol = __webpack_require__(5666);
var getMethod = __webpack_require__(4462);
var ordinaryToPrimitive = __webpack_require__(9207);
var wellKnownSymbol = __webpack_require__(4259);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 1973:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(8732);
var isSymbol = __webpack_require__(5666);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 6004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3074);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 9525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(3325);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(6372);
var fails = __webpack_require__(7931);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 4259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3406);
var shared = __webpack_require__(8519);
var hasOwn = __webpack_require__(1325);
var uid = __webpack_require__(6004);
var NATIVE_SYMBOL = __webpack_require__(3325);
var USE_SYMBOL_AS_UID = __webpack_require__(9525);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 1747:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(5942);
var addAll = __webpack_require__(5425);

// `WeakSet.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakSet', proto: true, real: true, forced: true }, {
  addAll: addAll
});


/***/ }),

/***/ 7000:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(5942);
var deleteAll = __webpack_require__(11);

// `WeakSet.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakSet', proto: true, real: true, forced: true }, {
  deleteAll: deleteAll
});


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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

;// CONCATENATED MODULE: ./node_modules/@adguard/tsurlfilter/dist/TSUrlFilterContentScript.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var utils = {};
utils.MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
utils.nodeTextContentGetter = function () {
  var nativeNode = window.Node || Node;
  return Object.getOwnPropertyDescriptor(nativeNode.prototype, 'textContent').get;
}();
utils.isSafariBrowser = function () {
  return navigator.vendor === 'Apple Computer, Inc.';
}();
utils.pseudoArgToRegex = function (regexSrc, flag) {
  flag = flag || 'i';
  regexSrc = regexSrc.trim().replace(/\\(["\\])/g, '$1');
  return new RegExp(regexSrc, flag);
};
utils.toRegExp = function (str) {
  if (str[0] === '/' && str[str.length - 1] === '/') {
    return new RegExp(str.slice(1, -1));
  }
  var escaped = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(escaped);
};
utils.startsWith = function (str, prefix) {
  return !!str && str.indexOf(prefix) === 0;
};
utils.endsWith = function (str, postfix) {
  if (!str || !postfix) {
    return false;
  }
  if (str.endsWith) {
    return str.endsWith(postfix);
  }
  var t = String(postfix);
  var index = str.lastIndexOf(t);
  return index >= 0 && index === str.length - t.length;
};
utils.createURLRegex = function () {
  var regexConfiguration = {
    maskStartUrl: '||',
    maskPipe: '|',
    maskSeparator: '^',
    maskAnySymbol: '*',
    regexAnySymbol: '.*',
    regexSeparator: '([^ a-zA-Z0-9.%_-]|$)',
    regexStartUrl: '^(http|https|ws|wss)://([a-z0-9-_.]+\\.)?',
    regexStartString: '^',
    regexEndString: '$'
  };
  var specials = ['.', '+', '?', '$', '{', '}', '(', ')', '[', ']', '\\', '/'];
  var specialsRegex = new RegExp("[".concat(specials.join('\\'), "]"), 'g');
  var escapeRegExp = function escapeRegExp(str) {
    return str.replace(specialsRegex, '\\$&');
  };
  var replaceAll = function replaceAll(str, find, replace) {
    if (!str) {
      return str;
    }
    return str.split(find).join(replace);
  };
  var createRegexText = function createRegexText(str) {
    var regex = escapeRegExp(str);
    if (utils.startsWith(regex, regexConfiguration.maskStartUrl)) {
      regex = regex.substring(0, regexConfiguration.maskStartUrl.length) + replaceAll(regex.substring(regexConfiguration.maskStartUrl.length, regex.length - 1), '\|', '\\|') + regex.substring(regex.length - 1);
    } else if (utils.startsWith(regex, regexConfiguration.maskPipe)) {
      regex = regex.substring(0, regexConfiguration.maskPipe.length) + replaceAll(regex.substring(regexConfiguration.maskPipe.length, regex.length - 1), '\|', '\\|') + regex.substring(regex.length - 1);
    } else {
      regex = replaceAll(regex.substring(0, regex.length - 1), '\|', '\\|') + regex.substring(regex.length - 1);
    }
    regex = replaceAll(regex, regexConfiguration.maskAnySymbol, regexConfiguration.regexAnySymbol);
    regex = replaceAll(regex, regexConfiguration.maskSeparator, regexConfiguration.regexSeparator);
    if (utils.startsWith(regex, regexConfiguration.maskStartUrl)) {
      regex = regexConfiguration.regexStartUrl + regex.substring(regexConfiguration.maskStartUrl.length);
    } else if (utils.startsWith(regex, regexConfiguration.maskPipe)) {
      regex = regexConfiguration.regexStartString + regex.substring(regexConfiguration.maskPipe.length);
    }
    if (utils.endsWith(regex, regexConfiguration.maskPipe)) {
      regex = regex.substring(0, regex.length - 1) + regexConfiguration.regexEndString;
    }
    return new RegExp(regex, 'i');
  };
  return createRegexText;
}();
utils.createLocation = function (href) {
  var anchor = document.createElement('a');
  anchor.href = href;
  if (anchor.host === '') {
    anchor.href = anchor.href;
  }
  return anchor;
};
utils.isSameOrigin = function (urlA, locationB, domainB) {
  var locationA = utils.createLocation(urlA);
  if (locationA.protocol === 'javascript:' || locationA.href === 'about:blank') {
    return true;
  }
  if (locationA.protocol === 'data:' || locationA.protocol === 'file:') {
    return false;
  }
  return locationA.hostname === domainB && locationA.port === locationB.port && locationA.protocol === locationB.protocol;
};
utils.AsyncWrapper = function () {
  var supported = typeof window.requestAnimationFrame !== 'undefined';
  var rAF = supported ? requestAnimationFrame : setTimeout;
  var cAF = supported ? cancelAnimationFrame : clearTimeout;
  var perf = supported ? performance : Date;
  function AsyncWrapper(callback, throttle) {
    this.callback = callback;
    this.throttle = throttle;
    this.wrappedCallback = this.wrappedCallback.bind(this);
    if (this.wrappedAsapCallback) {
      this.wrappedAsapCallback = this.wrappedAsapCallback.bind(this);
    }
  }
  AsyncWrapper.prototype.wrappedCallback = function (ts) {
    this.lastRun = isNumber(ts) ? ts : perf.now();
    delete this.rAFid;
    delete this.timerId;
    delete this.asapScheduled;
    this.callback();
  };
  AsyncWrapper.prototype.hasPendingCallback = function () {
    return isNumber(this.rAFid) || isNumber(this.timerId);
  };
  AsyncWrapper.prototype.run = function () {
    if (this.hasPendingCallback()) {
      return;
    }
    if (typeof this.lastRun !== 'undefined') {
      var elapsed = perf.now() - this.lastRun;
      if (elapsed < this.throttle) {
        this.timerId = setTimeout(this.wrappedCallback, this.throttle - elapsed);
        return;
      }
    }
    this.rAFid = rAF(this.wrappedCallback);
  };
  AsyncWrapper.prototype.runAsap = function () {
    if (this.asapScheduled) {
      return;
    }
    this.asapScheduled = true;
    cAF(this.rAFid);
    clearTimeout(this.timerId);
    if (utils.MutationObserver) {
      if (!this.mo) {
        this.mo = new utils.MutationObserver(this.wrappedCallback);
        this.node = document.createTextNode(1);
        this.mo.observe(this.node, {
          characterData: true
        });
      }
      this.node.nodeValue = -this.node.nodeValue;
    } else {
      setTimeout(this.wrappedCallback);
    }
  };
  AsyncWrapper.prototype.runImmediately = function () {
    if (this.hasPendingCallback()) {
      cAF(this.rAFid);
      clearTimeout(this.timerId);
      delete this.rAFid;
      delete this.timerId;
      this.wrappedCallback();
    }
  };
  AsyncWrapper.now = function () {
    return perf.now();
  };
  return AsyncWrapper;
}();
utils.defineProperty = Object.defineProperty;
utils.WeakMap = typeof WeakMap !== 'undefined' ? WeakMap : function () {
  var counter = Date.now() % 1e9;
  var WeakMap = function WeakMap() {
    this.name = "__st".concat(Math.random() * 1e9 >>> 0).concat(counter++, "__");
  };
  WeakMap.prototype = {
    set: function set(key, value) {
      var entry = key[this.name];
      if (entry && entry[0] === key) {
        entry[1] = value;
      } else {
        utils.defineProperty(key, this.name, {
          value: [key, value],
          writable: true
        });
      }
      return this;
    },
    get: function get(key) {
      var entry = key[this.name];
      return entry && entry[0] === key ? entry[1] : undefined;
    },
    delete: function _delete(key) {
      var entry = key[this.name];
      if (!entry) {
        return false;
      }
      var hasValue = entry[0] === key;
      delete entry[0];
      delete entry[1];
      return hasValue;
    },
    has: function has(key) {
      var entry = key[this.name];
      if (!entry) {
        return false;
      }
      return entry[0] === key;
    }
  };
  return WeakMap;
}();
utils.Set = typeof Set !== 'undefined' ? Set : function () {
  var counter = Date.now() % 1e9;
  var Set = function Set(items) {
    this.name = "__st".concat(Math.random() * 1e9 >>> 0).concat(counter++, "__");
    this.keys = [];
    if (items && items.length) {
      var iItems = items.length;
      while (iItems--) {
        this.add(items[iItems]);
      }
    }
  };
  Set.prototype = {
    add: function add(key) {
      if (!isNumber(key[this.name])) {
        var index = this.keys.push(key) - 1;
        utils.defineProperty(key, this.name, {
          value: index,
          writable: true
        });
      }
    },
    delete: function _delete(key) {
      if (isNumber(key[this.name])) {
        var index = key[this.name];
        delete this.keys[index];
        key[this.name] = undefined;
      }
    },
    has: function has(key) {
      return isNumber(key[this.name]);
    },
    clear: function clear() {
      this.keys.forEach(function (key) {
        key[this.name] = undefined;
      });
      this.keys.length = 0;
    },
    forEach: function forEach(cb) {
      var that = this;
      this.keys.forEach(function (value) {
        cb(value, value, that);
      });
    }
  };
  utils.defineProperty(Set.prototype, 'size', {
    get: function get() {
      return this.keys.reduce(function (acc) {
        return acc + 1;
      }, 0);
    }
  });
  return Set;
}();
utils.matchesPropertyName = function () {
  var props = ['matches', 'matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector'];
  for (var i = 0; i < 6; i++) {
    if (Element.prototype.hasOwnProperty(props[i])) {
      return props[i];
    }
  }
}();
utils.Stats = function () {
  this.array = [];
  this.length = 0;
  var zeroDescriptor = {
    value: 0,
    writable: true
  };
  Object.defineProperty(this, 'sum', zeroDescriptor);
  Object.defineProperty(this, 'squaredSum', zeroDescriptor);
};
utils.Stats.prototype.push = function (dataPoint) {
  this.array.push(dataPoint);
  this.length++;
  this.sum += dataPoint;
  this.squaredSum += dataPoint * dataPoint;
  this.mean = this.sum / this.length;
  this.stddev = Math.sqrt(this.squaredSum / this.length - Math.pow(this.mean, 2));
};
utils.logError = typeof console !== 'undefined' && console.error && Function.prototype.bind && console.error.bind ? console.error.bind(window.console) : console.error;
utils.logInfo = typeof console !== 'undefined' && console.info && Function.prototype.bind && console.info.bind ? console.info.bind(window.console) : console.info;
function isNumber(obj) {
  return typeof obj === 'number';
}
utils.getNodeSelector = function (inputEl) {
  if (!(inputEl instanceof Element)) {
    throw new Error('Function received argument with wrong type');
  }
  var el = inputEl;
  var path = [];
  while (!!el && el.nodeType === Node.ELEMENT_NODE) {
    var selector = el.nodeName.toLowerCase();
    if (el.id && typeof el.id === 'string') {
      selector += "#".concat(el.id);
      path.unshift(selector);
      break;
    } else {
      var sibling = el;
      var nth = 1;
      while (sibling.previousSibling) {
        sibling = sibling.previousSibling;
        if (sibling.nodeType === Node.ELEMENT_NODE && sibling.nodeName.toLowerCase() === selector) {
          nth++;
        }
      }
      if (nth !== 1) {
        selector += ":nth-of-type(".concat(nth, ")");
      }
    }
    path.unshift(selector);
    el = el.parentNode;
  }
  return path.join(' > ');
};
var cssUtils = function () {
  var reAttrFallback = /\[-(?:ext|abp)-([a-z-_]+)=(["'])((?:(?=(\\?))\4.)*?)\2\]/g;
  var evaluateMatch = function evaluateMatch(match, name, quoteChar, value) {
    var re = new RegExp("([^\\\\]|^)\\\\".concat(quoteChar), 'g');
    value = value.replace(re, "$1".concat(quoteChar));
    return ":".concat(name, "(").concat(value, ")");
  };
  var reMatchesCss = /\:(matches-css(?:-after|-before)?)\(([a-z-\s]*\:\s*\/(?:\\.|[^\/])*?\/\s*)\)/g;
  var reContains = /:(?:-abp-)?(contains|has-text)\((\s*\/(?:\\.|[^\/])*?\/\s*)\)/g;
  var reScope = /\(\:scope >/g;
  var addQuotes = function addQuotes(_, c1, c2) {
    return ":".concat(c1, "(\"").concat(c2.replace(/["\\]/g, '\\$&'), "\")");
  };
  var SCOPE_REPLACER = '(>';
  var normalize = function normalize(cssText) {
    var normalizedCssText = cssText.replace(reAttrFallback, evaluateMatch).replace(reMatchesCss, addQuotes).replace(reContains, addQuotes).replace(reScope, SCOPE_REPLACER);
    return normalizedCssText;
  };
  var isSimpleSelectorValid = function isSimpleSelectorValid(selector) {
    try {
      document.querySelectorAll(selector);
    } catch (e) {
      return false;
    }
    return true;
  };
  return {
    normalize: normalize,
    isSimpleSelectorValid: isSimpleSelectorValid
  };
}();
var Sizzle;
var initializeSizzle = function initializeSizzle() {
  if (!Sizzle) {
    Sizzle = function (window) {
      var support,
          Expr,
          getText,
          isXML,
          tokenize,
          compile,
          select,
          outermostContext,
          sortInput,
          hasDuplicate,
      setDocument,
          document,
          docElem,
          documentIsHTML,
          rbuggyQSA,
          rbuggyMatches,
          matches,
          contains,
      expando = "sizzle" + 1 * new Date(),
          preferredDoc = window.document,
          dirruns = 0,
          done = 0,
          classCache = createCache(),
          tokenCache = createCache(),
          compilerCache = createCache(),
          nonnativeSelectorCache = createCache(),
          sortOrder = function sortOrder(a, b) {
        if (a === b) {
          hasDuplicate = true;
        }
        return 0;
      },
      hasOwn = {}.hasOwnProperty,
          arr = [],
          pop = arr.pop,
          push_native = arr.push,
          push = arr.push,
          slice = arr.slice,
      indexOf = function indexOf(list, elem) {
        var i = 0,
            len = list.length;
        for (; i < len; i++) {
          if (list[i] === elem) {
            return i;
          }
        }
        return -1;
      },
          booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      whitespace = "[\\x20\\t\\r\\n\\f]",
      identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
      "*([*^$|!~]?=)" + whitespace +
      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
          pseudos = ":(" + identifier + ")(?:\\((" +
      "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
      "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
      ".*" + ")\\)|)",
      rwhitespace = new RegExp(whitespace + "+", "g"),
          rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
          rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
          rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
          rpseudo = new RegExp(pseudos),
          ridentifier = new RegExp("^" + identifier + "$"),
          matchExpr = {
        "ID": new RegExp("^#(" + identifier + ")"),
        "CLASS": new RegExp("^\\.(" + identifier + ")"),
        "TAG": new RegExp("^(" + identifier + "|[*])"),
        "ATTR": new RegExp("^" + attributes),
        "PSEUDO": new RegExp("^" + pseudos),
        "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
        "bool": new RegExp("^(?:" + booleans + ")$", "i"),
        "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      },
          rnative = /^[^{]+\{\s*\[native \w/,
      rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          rsibling = /[+~]/,
      runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
          funescape = function funescape(_, escaped, escapedWhitespace) {
        var high = "0x" + escaped - 0x10000;
        return high !== high || escapedWhitespace ? escaped : high < 0 ?
        String.fromCharCode(high + 0x10000) :
        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
      },
      rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          fcssescape = function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      },
      unloadHandler = function unloadHandler() {
        setDocument();
      },
          inDisabledFieldset = addCombinator(function (elem) {
        return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
      }, {
        dir: "parentNode",
        next: "legend"
      });
      try {
        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push = {
          apply: arr.length ?
          function (target, els) {
            push_native.apply(target, slice.call(els));
          } :
          function (target, els) {
            var j = target.length,
                i = 0;
            while (target[j++] = els[i++]) {}
            target.length = j - 1;
          }
        };
      }
      function Sizzle(selector, context, results, seed) {
        var m,
            i,
            elem,
            nid,
            match,
            groups,
            newSelector,
            newContext = context && context.ownerDocument,
        nodeType = context ? context.nodeType : 9;
        results = results || [];
        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
          return results;
        }
        if (!seed) {
          if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
            setDocument(context);
          }
          context = context || document;
          if (documentIsHTML) {
            if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
              if (m = match[1]) {
                if (nodeType === 9) {
                  if (elem = context.getElementById(m)) {
                    if (elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  } else {
                    return results;
                  }
                } else {
                  if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                }
              } else if (match[2]) {
                push.apply(results, context.getElementsByTagName(selector));
                return results;
              } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                push.apply(results, context.getElementsByClassName(m));
                return results;
              }
            }
            if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
              if (nodeType !== 1) {
                newContext = context;
                newSelector = selector;
              } else if (context.nodeName.toLowerCase() !== "object") {
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
                groups = tokenize(selector);
                i = groups.length;
                while (i--) {
                  groups[i] = "#" + nid + " " + toSelector(groups[i]);
                }
                newSelector = groups.join(",");
                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              }
              if (newSelector) {
                try {
                  push.apply(results, newContext.querySelectorAll(newSelector));
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
        }
        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }
      function createCache() {
        var keys = [];
        function cache(key, value) {
          if (keys.push(key + " ") > Expr.cacheLength) {
            delete cache[keys.shift()];
          }
          return cache[key + " "] = value;
        }
        return cache;
      }
      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }
      function assert(fn) {
        var el = document.createElement("fieldset");
        try {
          return !!fn(el);
        } catch (e) {
          return false;
        } finally {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
          el = null;
        }
      }
      function addHandle(attrs, handler) {
        var arr = attrs.split("|"),
            i = arr.length;
        while (i--) {
          Expr.attrHandle[arr[i]] = handler;
        }
      }
      function siblingCheck(a, b) {
        var cur = b && a,
            diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
        if (diff) {
          return diff;
        }
        if (cur) {
          while (cur = cur.nextSibling) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      function createDisabledPseudo(disabled) {
        return function (elem) {
          if ("form" in elem) {
            if (elem.parentNode && elem.disabled === false) {
              if ("label" in elem) {
                if ("label" in elem.parentNode) {
                  return elem.parentNode.disabled === disabled;
                } else {
                  return elem.disabled === disabled;
                }
              }
              return elem.isDisabled === disabled ||
              elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
            }
            return elem.disabled === disabled;
          } else if ("label" in elem) {
            return elem.disabled === disabled;
          }
          return false;
        };
      }
      function testContext(context) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
      }
      support = Sizzle.support = {};
      isXML = Sizzle.isXML = function (elem) {
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return documentElement ? documentElement.nodeName !== "HTML" : false;
      };
      setDocument = Sizzle.setDocument = function (node) {
        var hasCompare,
            subWindow,
            doc = node ? node.ownerDocument || node : preferredDoc;
        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
          return document;
        }
        document = doc;
        docElem = document.documentElement;
        documentIsHTML = !isXML(document);
        if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
          if (subWindow.addEventListener) {
            subWindow.addEventListener("unload", unloadHandler, false);
          } else if (subWindow.attachEvent) {
            subWindow.attachEvent("onunload", unloadHandler);
          }
        }
        support.attributes = assert(function (el) {
          el.className = "i";
          return !el.getAttribute("className");
        });
        support.getElementsByTagName = assert(function (el) {
          el.appendChild(document.createComment(""));
          return !el.getElementsByTagName("*").length;
        });
        support.getElementsByClassName = rnative.test(document.getElementsByClassName);
        support.getById = assert(function (el) {
          docElem.appendChild(el).id = expando;
          return !document.getElementsByName || !document.getElementsByName(expando).length;
        });
        if (support.getById) {
          Expr.filter["ID"] = function (id) {
            var attrId = id.replace(runescape, funescape);
            return function (elem) {
              return elem.getAttribute("id") === attrId;
            };
          };
          Expr.find["ID"] = function (id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var elem = context.getElementById(id);
              return elem ? [elem] : [];
            }
          };
        } else {
          Expr.filter["ID"] = function (id) {
            var attrId = id.replace(runescape, funescape);
            return function (elem) {
              var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
              return node && node.value === attrId;
            };
          };
          Expr.find["ID"] = function (id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var node,
                  i,
                  elems,
                  elem = context.getElementById(id);
              if (elem) {
                node = elem.getAttributeNode("id");
                if (node && node.value === id) {
                  return [elem];
                }
                elems = context.getElementsByName(id);
                i = 0;
                while (elem = elems[i++]) {
                  node = elem.getAttributeNode("id");
                  if (node && node.value === id) {
                    return [elem];
                  }
                }
              }
              return [];
            }
          };
        }
        Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else if (support.qsa) {
            return context.querySelectorAll(tag);
          }
        } : function (tag, context) {
          var elem,
              tmp = [],
              i = 0,
          results = context.getElementsByTagName(tag);
          if (tag === "*") {
            while (elem = results[i++]) {
              if (elem.nodeType === 1) {
                tmp.push(elem);
              }
            }
            return tmp;
          }
          return results;
        };
        Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        };
        rbuggyMatches = [];
        rbuggyQSA = [];
        if (support.qsa = rnative.test(document.querySelectorAll)) {
          assert(function (el) {
            docElem.appendChild(el).innerHTML = AGPolicy.createHTML("<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>");
            if (el.querySelectorAll("[msallowcapture^='']").length) {
              rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
            }
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
          });
          assert(function (el) {
            el.innerHTML = AGPolicy.createHTML("<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>");
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            if (el.querySelectorAll("[name=d]").length) {
              rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
            }
            if (el.querySelectorAll(":enabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            docElem.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            el.querySelectorAll("*,:x");
            rbuggyQSA.push(",.*:");
          });
        }
        if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
          assert(function (el) {
            support.disconnectedMatch = matches.call(el, "*");
            matches.call(el, "[s!='']:x");
            rbuggyMatches.push("!=", pseudos);
          });
        }
        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
        hasCompare = rnative.test(docElem.compareDocumentPosition);
        contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
          var adown = a.nodeType === 9 ? a.documentElement : a,
              bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        } : function (a, b) {
          if (b) {
            while (b = b.parentNode) {
              if (b === a) {
                return true;
              }
            }
          }
          return false;
        };
        sortOrder = hasCompare ? function (a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if (compare) {
            return compare;
          }
          compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :
          1;
          if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
            if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
              return -1;
            }
            if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
              return 1;
            }
            return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
          }
          return compare & 4 ? -1 : 1;
        } : function (a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var cur,
              i = 0,
              aup = a.parentNode,
              bup = b.parentNode,
              ap = [a],
              bp = [b];
          if (!aup || !bup) {
            return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
          } else if (aup === bup) {
            return siblingCheck(a, b);
          }
          cur = a;
          while (cur = cur.parentNode) {
            ap.unshift(cur);
          }
          cur = b;
          while (cur = cur.parentNode) {
            bp.unshift(cur);
          }
          while (ap[i] === bp[i]) {
            i++;
          }
          return i ?
          siblingCheck(ap[i], bp[i]) :
          ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
        };
        return document;
      };
      Sizzle.matches = function (expr, elements) {
        return Sizzle(expr, null, null, elements);
      };
      Sizzle.matchesSelector = function (elem, expr) {
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch ||
            elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
            nonnativeSelectorCache(expr, true);
          }
        }
        return Sizzle(expr, document, null, [elem]).length > 0;
      };
      Sizzle.contains = function (context, elem) {
        if ((context.ownerDocument || context) !== document) {
          setDocument(context);
        }
        return contains(context, elem);
      };
      Sizzle.attr = function (elem, name) {
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name.toLowerCase()],
        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
        return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      };
      Sizzle.escape = function (sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      Sizzle.error = function (msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      Sizzle.uniqueSort = function (results) {
        var elem,
            duplicates = [],
            j = 0,
            i = 0;
        hasDuplicate = !support.detectDuplicates;
        sortInput = !support.sortStable && results.slice(0);
        results.sort(sortOrder);
        if (hasDuplicate) {
          while (elem = results[i++]) {
            if (elem === results[i]) {
              j = duplicates.push(i);
            }
          }
          while (j--) {
            results.splice(duplicates[j], 1);
          }
        }
        sortInput = null;
        return results;
      };
      getText = Sizzle.getText = function (elem) {
        var node,
            ret = "",
            i = 0,
            nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i++]) {
            ret += getText(node);
          }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          if (typeof elem.textContent === "string") {
            return elem.textContent;
          } else {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              ret += getText(elem);
            }
          }
        } else if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      };
      Expr = Sizzle.selectors = {
        cacheLength: 50,
        createPseudo: markFunction,
        match: matchExpr,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: true
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: true
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          "ATTR": function ATTR(match) {
            match[1] = match[1].replace(runescape, funescape);
            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
            if (match[2] === "~=") {
              match[3] = " " + match[3] + " ";
            }
            return match.slice(0, 4);
          },
          "CHILD": function CHILD(match) {
            match[1] = match[1].toLowerCase();
            if (match[1].slice(0, 3) === "nth") {
              if (!match[3]) {
                Sizzle.error(match[0]);
              }
              match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
              match[5] = +(match[7] + match[8] || match[3] === "odd");
            } else if (match[3]) {
              Sizzle.error(match[0]);
            }
            return match;
          },
          "PSEUDO": function PSEUDO(match) {
            var excess,
                unquoted = !match[6] && match[2];
            if (matchExpr["CHILD"].test(match[0])) {
              return null;
            }
            if (match[3]) {
              match[2] = match[4] || match[5] || "";
            } else if (unquoted && rpseudo.test(unquoted) && (
            excess = tokenize(unquoted, true)) && (
            excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
              match[0] = match[0].slice(0, excess);
              match[2] = unquoted.slice(0, excess);
            }
            return match.slice(0, 3);
          }
        },
        filter: {
          "TAG": function TAG(nodeNameSelector) {
            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === "*" ? function () {
              return true;
            } : function (elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
          },
          "CLASS": function CLASS(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
              return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
            });
          },
          "ATTR": function ATTR(name, operator, check) {
            return function (elem) {
              var result = Sizzle.attr(elem, name);
              if (result == null) {
                return operator === "!=";
              }
              if (!operator) {
                return true;
              }
              result += "";
              return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            };
          },
          "CHILD": function CHILD(type, what, argument, first, last) {
            var simple = type.slice(0, 3) !== "nth",
                forward = type.slice(-4) !== "last",
                ofType = what === "of-type";
            return first === 1 && last === 0 ?
            function (elem) {
              return !!elem.parentNode;
            } : function (elem, context, xml) {
              var cache,
                  uniqueCache,
                  outerCache,
                  node,
                  nodeIndex,
                  start,
                  dir = simple !== forward ? "nextSibling" : "previousSibling",
                  parent = elem.parentNode,
                  name = ofType && elem.nodeName.toLowerCase(),
                  useCache = !xml && !ofType,
                  diff = false;
              if (parent) {
                if (simple) {
                  while (dir) {
                    node = elem;
                    while (node = node[dir]) {
                      if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                        return false;
                      }
                    }
                    start = dir = type === "only" && !start && "nextSibling";
                  }
                  return true;
                }
                start = [forward ? parent.firstChild : parent.lastChild];
                if (forward && useCache) {
                  node = parent;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  while (node = ++nodeIndex && node && node[dir] || (
                  diff = nodeIndex = 0) || start.pop()) {
                    if (node.nodeType === 1 && ++diff && node === elem) {
                      uniqueCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (useCache) {
                    node = elem;
                    outerCache = node[expando] || (node[expando] = {});
                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex;
                  }
                  if (diff === false) {
                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                      if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                        if (useCache) {
                          outerCache = node[expando] || (node[expando] = {});
                          uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                          uniqueCache[type] = [dirruns, diff];
                        }
                        if (node === elem) {
                          break;
                        }
                      }
                    }
                  }
                }
                diff -= last;
                return diff === first || diff % first === 0 && diff / first >= 0;
              }
            };
          },
          "PSEUDO": function PSEUDO(pseudo, argument) {
            var args,
                fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
            if (fn[expando]) {
              return fn(argument);
            }
            if (fn.length > 1) {
              args = [pseudo, pseudo, "", argument];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                var idx,
                    matched = fn(seed, argument),
                    i = matched.length;
                while (i--) {
                  idx = indexOf(seed, matched[i]);
                  seed[idx] = !(matches[idx] = matched[i]);
                }
              }) : function (elem) {
                return fn(elem, 0, args);
              };
            }
            return fn;
          }
        },
        pseudos: {
          "not": markFunction(function (selector) {
            var input = [],
                results = [],
                matcher = compile(selector.replace(rtrim, "$1"));
            return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
              var elem,
                  unmatched = matcher(seed, null, xml, []),
                  i = seed.length;
              while (i--) {
                if (elem = unmatched[i]) {
                  seed[i] = !(matches[i] = elem);
                }
              }
            }) : function (elem, context, xml) {
              input[0] = elem;
              matcher(input, null, xml, results);
              input[0] = null;
              return !results.pop();
            };
          }),
          "has": markFunction(function (selector) {
            if (typeof selector === "string") {
              Sizzle.compile(selector);
            }
            return function (elem) {
              return Sizzle(selector, elem).length > 0;
            };
          }),
          "lang": markFunction(function (lang) {
            if (!ridentifier.test(lang || "")) {
              Sizzle.error("unsupported lang: " + lang);
            }
            lang = lang.replace(runescape, funescape).toLowerCase();
            return function (elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);
              return false;
            };
          }),
          "target": function target(elem) {
            var hash = window.location && window.location.hash;
            return hash && hash.slice(1) === elem.id;
          },
          "root": function root(elem) {
            return elem === docElem;
          },
          "focus": function focus(elem) {
            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          "enabled": createDisabledPseudo(false),
          "disabled": createDisabledPseudo(true),
          "checked": function checked(elem) {
            var nodeName = elem.nodeName.toLowerCase();
            return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
          },
          "selected": function selected(elem) {
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
            return elem.selected === true;
          },
          "empty": function empty(elem) {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          }
        }
      };
      function setFilters() {}
      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();
      var sortTokenGroups = function () {
        var splitCompoundSelector = function splitCompoundSelector(tokens) {
          var groups = [];
          var currentTokensGroup = [];
          var maxIdx = tokens.length - 1;
          for (var i = 0; i <= maxIdx; i++) {
            var token = tokens[i];
            var relative = Sizzle.selectors.relative[token.type];
            if (relative) {
              groups.push(currentTokensGroup);
              groups.push(token);
              currentTokensGroup = [];
            } else {
              currentTokensGroup.push(token);
            }
            if (i === maxIdx) {
              groups.push(currentTokensGroup);
            }
          }
          return groups;
        };
        var TOKEN_TYPES_VALUES = {
          "CHILD": 100,
          "ID": 90,
          "CLASS": 80,
          "TAG": 70,
          "ATTR": 70,
          "PSEUDO": 60
        };
        var POSITIONAL_PSEUDOS = ["nth", "first", "last", "eq", "even", "odd", "lt", "gt", "not"];
        var compareFunction = function compareFunction(left, right) {
          var leftValue = TOKEN_TYPES_VALUES[left.type];
          var rightValue = TOKEN_TYPES_VALUES[right.type];
          return leftValue - rightValue;
        };
        var isSortable = function isSortable(tokens) {
          var iTokens = tokens.length;
          while (iTokens--) {
            var token = tokens[iTokens];
            if (token.type === "PSEUDO" && POSITIONAL_PSEUDOS.indexOf(token.matches[0]) !== -1) {
              return false;
            }
            if (token.type === "CHILD") {
              return false;
            }
          }
          return true;
        };
        var sortTokens = function sortTokens(tokens) {
          if (!tokens || tokens.length === 1) {
            return tokens;
          }
          var sortedTokens = [];
          var groups = splitCompoundSelector(tokens);
          for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            if (group instanceof Array) {
              if (isSortable(group)) {
                group.sort(compareFunction);
              }
              sortedTokens = sortedTokens.concat(group);
            } else {
              sortedTokens.push(group);
            }
          }
          return sortedTokens;
        };
        var sortTokenGroups = function sortTokenGroups(groups) {
          var sortedGroups = [];
          var len = groups.length;
          var i = 0;
          for (; i < len; i++) {
            sortedGroups.push(sortTokens(groups[i]));
          }
          return sortedGroups;
        };
        return sortTokenGroups;
      }();
      var AGPolicy = function createPolicy() {
        var defaultPolicy = {
          createHTML: function createHTML(input) {
            return input;
          },
          createScript: function createScript(input) {
            return input;
          },
          createScriptURL: function createScriptURL(input) {
            return input;
          }
        };
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
          return window.trustedTypes.createPolicy("AGPolicy", defaultPolicy);
        }
        return defaultPolicy;
      }();
      function removeTrailingSpaces(tokens) {
        var iTokens = tokens.length;
        while (iTokens--) {
          var token = tokens[iTokens];
          if (token.type === " ") {
            tokens.length = iTokens;
          } else {
            break;
          }
        }
      }
      function tokenGroupsToSelectors(groups) {
        removeTrailingSpaces(groups[groups.length - 1]);
        var sortedGroups = sortTokenGroups(groups);
        var selectors = [];
        for (var i = 0; i < groups.length; i++) {
          var tokenGroups = groups[i];
          var selectorText = toSelector(tokenGroups);
          selectors.push({
            groups: [tokenGroups],
            selectorText: selectorText
          });
          var tokensCacheItem = {
            groups: tokenGroups,
            sortedGroups: [sortedGroups[i]]
          };
          tokenCache(selectorText, tokensCacheItem);
        }
        return selectors;
      }
      tokenize = Sizzle.tokenize = function (selector, parseOnly, options) {
        var matched,
            match,
            tokens,
            type,
            soFar,
            groups,
            preFilters,
            cached = tokenCache[selector + " "];
        var tolerant = options && options.tolerant;
        var returnUnsorted = options && options.returnUnsorted;
        var cacheOnly = options && options.cacheOnly;
        if (cached) {
          if (parseOnly) {
            return 0;
          } else {
            return (returnUnsorted ? cached.groups : cached.sortedGroups).slice(0);
          }
        }
        if (cacheOnly) {
          return null;
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        while (soFar) {
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          matched = false;
          if (match = rcombinators.exec(soFar)) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: match[0].replace(rtrim, " ")
            });
            soFar = soFar.slice(matched.length);
          }
          for (type in Expr.filter) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: type,
                matches: match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        var invalidLen = soFar.length;
        if (parseOnly) {
          return invalidLen;
        }
        if (invalidLen !== 0 && !tolerant) {
          Sizzle.error(selector);
        }
        if (tolerant) {
          var nextIndex = selector.length - invalidLen;
          var selectors = tokenGroupsToSelectors(groups);
          return {
            selectors: selectors,
            nextIndex: nextIndex
          };
        }
        var sortedGroups = sortTokenGroups(groups);
        var tokensCacheItem = {
          groups: groups,
          sortedGroups: sortedGroups
        };
        tokensCacheItem = tokenCache(selector, tokensCacheItem);
        return (returnUnsorted ? tokensCacheItem.groups : tokensCacheItem.sortedGroups).slice(0);
      };
      function toSelector(tokens) {
        var i = 0,
            len = tokens.length,
            selector = "";
        for (; i < len; i++) {
          selector += tokens[i].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir,
            skip = combinator.next,
            key = skip || dir,
            checkNonElements = base && key === "parentNode",
            doneName = done++;
        return combinator.first ?
        function (elem, context, xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }
          return false;
        } :
        function (elem, context, xml) {
          var oldCache,
              uniqueCache,
              outerCache,
              newCache = [dirruns, doneName];
          if (xml) {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {});
                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                if (skip && skip === elem.nodeName.toLowerCase()) {
                  elem = elem[dir] || elem;
                } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  uniqueCache[key] = newCache;
                  if (newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function (elem, context, xml) {
          var i = matchers.length;
          while (i--) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function multipleContexts(selector, contexts, results) {
        var i = 0,
            len = contexts.length;
        for (; i < len; i++) {
          Sizzle(selector, contexts[i], results);
        }
        return results;
      }
      function condense(unmatched, map, filter, context, xml) {
        var elem,
            newUnmatched = [],
            i = 0,
            len = unmatched.length,
            mapped = map != null;
        for (; i < len; i++) {
          if (elem = unmatched[i]) {
            if (!filter || filter(elem, context, xml)) {
              newUnmatched.push(elem);
              if (mapped) {
                map.push(i);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function (seed, results, context, xml) {
          var temp,
              i,
              elem,
              preMap = [],
              postMap = [],
              preexisting = results.length,
          elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
          matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
              matcherOut = matcher ?
          postFinder || (seed ? preFilter : preexisting || postFilter) ?
          [] :
          results : matcherIn;
          if (matcher) {
            matcher(matcherIn, matcherOut, context, xml);
          }
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);
            i = temp.length;
            while (i--) {
              if (elem = temp[i]) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i = matcherOut.length;
                while (i--) {
                  if (elem = matcherOut[i]) {
                    temp.push(matcherIn[i] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml);
              }
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext,
            matcher,
            j,
            len = tokens.length,
            leadingRelative = Expr.relative[tokens[0].type],
            implicitRelative = leadingRelative || Expr.relative[" "],
            i = leadingRelative ? 1 : 0,
        matchContext = addCombinator(function (elem) {
          return elem === checkContext;
        }, implicitRelative, true),
            matchAnyContext = addCombinator(function (elem) {
          return indexOf(checkContext, elem) > -1;
        }, implicitRelative, true),
            matchers = [function (elem, context, xml) {
          var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          checkContext = null;
          return ret;
        }];
        for (; i < len; i++) {
          if (matcher = Expr.relative[tokens[i].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
            if (matcher[expando]) {
              j = ++i;
              for (; j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }
              return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
              tokens.slice(0, i - 1).concat({
                value: tokens[i - 2].type === " " ? "*" : ""
              })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0,
            byElement = elementMatchers.length > 0,
            superMatcher = function superMatcher(seed, context, xml, results, outermost) {
          var elem,
              j,
              matcher,
              matchedCount = 0,
              i = "0",
              unmatched = seed && [],
              setMatched = [],
              contextBackup = outermostContext,
          elems = seed || byElement && Expr.find["TAG"]("*", outermost),
          dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
              len = elems.length;
          if (outermost) {
            outermostContext = context === document || context || outermost;
          }
          for (; i !== len && (elem = elems[i]) != null; i++) {
            if (byElement && elem) {
              j = 0;
              if (!context && elem.ownerDocument !== document) {
                setDocument(elem);
                xml = !documentIsHTML;
              }
              while (matcher = elementMatchers[j++]) {
                if (matcher(elem, context || document, xml)) {
                  results.push(elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i;
          if (bySet && i !== matchedCount) {
            j = 0;
            while (matcher = setMatchers[j++]) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i--) {
                  if (!(unmatched[i] || setMatched[i])) {
                    setMatched[i] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              Sizzle.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      compile = Sizzle.compile = function (selector, match
      ) {
        var i,
            setMatchers = [],
            elementMatchers = [],
            cached = compilerCache[selector + " "];
        if (!cached) {
          if (!match) {
            match = tokenize(selector);
          }
          i = match.length;
          while (i--) {
            cached = matcherFromTokens(match[i]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
          cached.selector = selector;
        }
        return cached;
      };
      select = Sizzle.select = function (selector, context, results, seed) {
        var i,
            tokens,
            token,
            type,
            find,
            compiled = typeof selector === "function" && selector,
            match = !seed && tokenize(selector = compiled.selector || selector);
        results = results || [];
        if (match.length === 1) {
          tokens = match[0] = match[0].slice(0);
          if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
            if (!context) {
              return results;
            } else if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
          while (i--) {
            token = tokens[i];
            if (Expr.relative[type = token.type]) {
              break;
            }
            if (find = Expr.find[type]) {
              if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                tokens.splice(i, 1);
                selector = seed.length && toSelector(tokens);
                if (!selector) {
                  push.apply(results, seed);
                  return results;
                }
                break;
              }
            }
          }
        }
        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
        return results;
      };
      support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
      support.detectDuplicates = !!hasDuplicate;
      setDocument();
      support.sortDetached = assert(function (el) {
        return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
      });
      if (!assert(function (el) {
        el.innerHTML = AGPolicy.createHTML("<a href='#'></a>");
        return el.firstChild.getAttribute("href") === "#";
      })) {
        addHandle("type|href|height|width", function (elem, name, isXML) {
          if (!isXML) {
            return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
          }
        });
      }
      if (!support.attributes || !assert(function (el) {
        el.innerHTML = AGPolicy.createHTML("<input/>");
        el.firstChild.setAttribute("value", "");
        return el.firstChild.getAttribute("value") === "";
      })) {
        addHandle("value", function (elem, name, isXML) {
          if (!isXML && elem.nodeName.toLowerCase() === "input") {
            return elem.defaultValue;
          }
        });
      }
      if (!assert(function (el) {
        return el.getAttribute("disabled") == null;
      })) {
        addHandle(booleans, function (elem, name, isXML) {
          var val;
          if (!isXML) {
            return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          }
        });
      }
      return Sizzle;
    }(window);
  }
  return Sizzle;
};
var StylePropertyMatcher = function (window) {
  var isPhantom = !!window._phantom;
  var useFallback = isPhantom && !!window.getMatchedCSSRules;
  var removeContentQuotes = function removeContentQuotes(value) {
    if (typeof value === 'string') {
      return value.replace(/^(["'])([\s\S]*)\1$/, '$2');
    }
    return value;
  };
  var getComputedStyle = window.getComputedStyle.bind(window);
  var getMatchedCSSRules = useFallback ? window.getMatchedCSSRules.bind(window) : null;
  var getComputedStylePropertyValue = function getComputedStylePropertyValue(element, pseudoElement, propertyName) {
    var value = '';
    if (useFallback && pseudoElement) {
      var cssRules = getMatchedCSSRules(element, pseudoElement) || [];
      var i = cssRules.length;
      while (i-- > 0 && !value) {
        value = cssRules[i].style.getPropertyValue(propertyName);
      }
    } else {
      var style = getComputedStyle(element, pseudoElement);
      if (style) {
        value = style.getPropertyValue(propertyName);
        if (propertyName === 'opacity' && utils.isSafariBrowser) {
          value = (Math.round(parseFloat(value) * 100) / 100).toString();
        }
      }
    }
    if (propertyName === 'content') {
      value = removeContentQuotes(value);
    }
    return value;
  };
  var addUrlQuotes = function addUrlQuotes(pattern) {
    if (pattern[0] === '/' && pattern[pattern.length - 1] === '/' && pattern.indexOf('\\"') < 10) {
      var re = /(\^)?url(\\)?\\\((\w|\[\w)/g;
      return pattern.replace(re, '$1url$2\\\(\\"?$3');
    }
    if (pattern.indexOf('url("') === -1) {
      var _re = /url\((.*?)\)/g;
      return pattern.replace(_re, 'url("$1")');
    }
    return pattern;
  };
  var Matcher = function Matcher(propertyFilter, pseudoElement) {
    this.pseudoElement = pseudoElement;
    try {
      var index = propertyFilter.indexOf(':');
      this.propertyName = propertyFilter.substring(0, index).trim();
      var pattern = propertyFilter.substring(index + 1).trim();
      pattern = addUrlQuotes(pattern);
      if (/^\/.*\/$/.test(pattern)) {
        pattern = pattern.slice(1, -1);
        this.regex = utils.pseudoArgToRegex(pattern);
      } else {
        pattern = pattern.replace(/\\([\\()[\]"])/g, '$1');
        this.regex = utils.createURLRegex(pattern);
      }
    } catch (ex) {
      utils.logError("StylePropertyMatcher: invalid match string ".concat(propertyFilter));
    }
  };
  Matcher.prototype.matches = function (element) {
    if (!this.regex || !this.propertyName) {
      return false;
    }
    var value = getComputedStylePropertyValue(element, this.pseudoElement, this.propertyName);
    return value && this.regex.test(value);
  };
  var extendSizzle = function extendSizzle(sizzle) {
    sizzle.selectors.pseudos['matches-css'] = sizzle.selectors.createPseudo(function (propertyFilter) {
      var matcher = new Matcher(propertyFilter);
      return function (element) {
        return matcher.matches(element);
      };
    });
    sizzle.selectors.pseudos['matches-css-before'] = sizzle.selectors.createPseudo(function (propertyFilter) {
      var matcher = new Matcher(propertyFilter, ':before');
      return function (element) {
        return matcher.matches(element);
      };
    });
    sizzle.selectors.pseudos['matches-css-after'] = sizzle.selectors.createPseudo(function (propertyFilter) {
      var matcher = new Matcher(propertyFilter, ':after');
      return function (element) {
        return matcher.matches(element);
      };
    });
  };
  return {
    extendSizzle: extendSizzle
  };
}(window);
var matcherUtils = {};
matcherUtils.MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
matcherUtils.parseMatcherFilter = function (matcherFilter) {
  var FULL_MATCH_MARKER = '"="';
  var rawArgs = [];
  if (matcherFilter.indexOf(FULL_MATCH_MARKER) === -1) {
    rawArgs.push(matcherFilter);
  } else {
    matcherFilter.split('=').forEach(function (arg) {
      if (arg[0] === '"' && arg[arg.length - 1] === '"') {
        rawArgs.push(arg.slice(1, -1));
      }
    });
  }
  return rawArgs;
};
matcherUtils.parseRawMatcherArg = function (rawArg) {
  var arg = rawArg;
  var isRegexp = !!rawArg && rawArg[0] === '/' && rawArg[rawArg.length - 1] === '/';
  if (isRegexp) {
    if (rawArg.length > 2) {
      arg = utils.toRegExp(rawArg);
    } else {
      throw new Error("Invalid regexp: ".concat(rawArg));
    }
  }
  return {
    arg: arg,
    isRegexp: isRegexp
  };
};
matcherUtils.filterRootsByRegexpChain = function (base, chain) {
  var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var tempProp = chain[0];
  if (chain.length === 1) {
    for (var key in base) {
      if (tempProp.isRegexp) {
        if (tempProp.arg.test(key)) {
          output.push({
            base: base,
            prop: key,
            value: base[key]
          });
        }
      } else if (tempProp.arg === key) {
        output.push({
          base: base,
          prop: tempProp.arg,
          value: base[key]
        });
      }
    }
    return output;
  }
  if (tempProp.isRegexp) {
    var nextProp = chain.slice(1);
    var baseKeys = [];
    for (var _key in base) {
      if (tempProp.arg.test(_key)) {
        baseKeys.push(_key);
      }
    }
    baseKeys.forEach(function (key) {
      var item = base[key];
      matcherUtils.filterRootsByRegexpChain(item, nextProp, output);
    });
  }
  if (base === null) {
    return;
  }
  var nextBase = base[tempProp.arg];
  chain = chain.slice(1);
  if (nextBase !== undefined) {
    matcherUtils.filterRootsByRegexpChain(nextBase, chain, output);
  }
  return output;
};
matcherUtils.validatePropMatcherArgs = function () {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  for (var i = 0; i < args.length; i += 1) {
    if (args[i].isRegexp) {
      if (!utils.startsWith(args[i].arg.toString(), '/') || !utils.endsWith(args[i].arg.toString(), '/')) {
        return false;
      }
    } else if (!/^[\w-]+$/.test(args[i].arg)) {
      return false;
    }
  }
  return true;
};
var AttributesMatcher = function () {
  var AttrMatcher = function AttrMatcher(nameArg, valueArg, pseudoElement) {
    this.pseudoElement = pseudoElement;
    this.attrName = nameArg.arg;
    this.isRegexpName = nameArg.isRegexp;
    this.attrValue = valueArg.arg;
    this.isRegexpValue = valueArg.isRegexp;
  };
  AttrMatcher.prototype.matches = function (element) {
    var elAttrs = element.attributes;
    if (elAttrs.length === 0 || !this.attrName) {
      return false;
    }
    var i = 0;
    while (i < elAttrs.length) {
      var attr = elAttrs[i];
      var matched = false;
      var attrNameMatched = this.isRegexpName ? this.attrName.test(attr.name) : this.attrName === attr.name;
      if (!this.attrValue) {
        matched = attrNameMatched;
      } else {
        var attrValueMatched = this.isRegexpValue ? this.attrValue.test(attr.value) : this.attrValue === attr.value;
        matched = attrNameMatched && attrValueMatched;
      }
      if (matched) {
        return true;
      }
      i += 1;
    }
  };
  var extendSizzle = function extendSizzle(sizzle) {
    sizzle.selectors.pseudos['matches-attr'] = sizzle.selectors.createPseudo(function (attrFilter) {
      var _matcherUtils$parseMa = matcherUtils.parseMatcherFilter(attrFilter),
          _matcherUtils$parseMa2 = _slicedToArray(_matcherUtils$parseMa, 2),
          rawName = _matcherUtils$parseMa2[0],
          rawValue = _matcherUtils$parseMa2[1];
      var nameArg = matcherUtils.parseRawMatcherArg(rawName);
      var valueArg = matcherUtils.parseRawMatcherArg(rawValue);
      if (!attrFilter || !matcherUtils.validatePropMatcherArgs(nameArg, valueArg)) {
        throw new Error("Invalid argument of :matches-attr pseudo class: ".concat(attrFilter));
      }
      var matcher = new AttrMatcher(nameArg, valueArg);
      return function (element) {
        return matcher.matches(element);
      };
    });
  };
  return {
    extendSizzle: extendSizzle
  };
}();
var parseRawPropChain = function parseRawPropChain(input) {
  var PROPS_DIVIDER = '.';
  var REGEXP_MARKER = '/';
  var propsArr = [];
  var str = input;
  while (str.length > 0) {
    if (utils.startsWith(str, PROPS_DIVIDER)) {
      throw new Error("Invalid chain property: ".concat(input));
    }
    if (!utils.startsWith(str, REGEXP_MARKER)) {
      var isRegexp = false;
      var dividerIndex = str.indexOf(PROPS_DIVIDER);
      if (str.indexOf(PROPS_DIVIDER) === -1) {
        propsArr.push({
          arg: str,
          isRegexp: isRegexp
        });
        return propsArr;
      }
      var prop = str.slice(0, dividerIndex);
      if (prop.indexOf(REGEXP_MARKER) > -1) {
        throw new Error("Invalid chain property: ".concat(prop));
      }
      propsArr.push({
        arg: prop,
        isRegexp: isRegexp
      });
      str = str.slice(dividerIndex);
    } else {
      var propChunks = [];
      propChunks.push(str.slice(0, 1));
      str = str.slice(1);
      var regexEndIndex = str.indexOf(REGEXP_MARKER);
      if (regexEndIndex < 1) {
        throw new Error("Invalid regexp: ".concat(REGEXP_MARKER).concat(str));
      }
      var _isRegexp = true;
      propChunks.push(str.slice(0, regexEndIndex + 1));
      var _prop = utils.toRegExp(propChunks.join(''));
      propsArr.push({
        arg: _prop,
        isRegexp: _isRegexp
      });
      str = str.slice(regexEndIndex + 1);
    }
    if (!str) {
      return propsArr;
    }
    if (!utils.startsWith(str, PROPS_DIVIDER) || utils.startsWith(str, PROPS_DIVIDER) && str.length === 1) {
      throw new Error("Invalid chain property: ".concat(input));
    }
    str = str.slice(1);
  }
};
var convertTypeFromStr = function convertTypeFromStr(value) {
  var numValue = Number(value);
  var output;
  if (!Number.isNaN(numValue)) {
    output = numValue;
  } else {
    switch (value) {
      case 'undefined':
        output = undefined;
        break;
      case 'null':
        output = null;
        break;
      case 'true':
        output = true;
        break;
      case 'false':
        output = false;
        break;
      default:
        output = value;
    }
  }
  return output;
};
var convertTypeIntoStr = function convertTypeIntoStr(value) {
  var output;
  switch (value) {
    case undefined:
      output = 'undefined';
      break;
    case null:
      output = 'null';
      break;
    default:
      output = value.toString();
  }
  return output;
};
var ElementPropertyMatcher = function () {
  var PropMatcher = function PropMatcher(propsChainArg, valueArg, pseudoElement) {
    this.pseudoElement = pseudoElement;
    this.chainedProps = propsChainArg;
    this.propValue = valueArg.arg;
    this.isRegexpValue = valueArg.isRegexp;
  };
  PropMatcher.prototype.matches = function (element) {
    var ownerObjArr = matcherUtils.filterRootsByRegexpChain(element, this.chainedProps);
    if (ownerObjArr.length === 0) {
      return false;
    }
    var matched = true;
    if (this.propValue) {
      for (var i = 0; i < ownerObjArr.length; i += 1) {
        var realValue = ownerObjArr[i].value;
        if (this.isRegexpValue) {
          matched = this.propValue.test(convertTypeIntoStr(realValue));
        } else {
          if (realValue === 'null' || realValue === 'undefined') {
            matched = this.propValue === realValue;
            break;
          }
          matched = convertTypeFromStr(this.propValue) === realValue;
        }
        if (matched) {
          break;
        }
      }
    }
    return matched;
  };
  var extendSizzle = function extendSizzle(sizzle) {
    sizzle.selectors.pseudos['matches-property'] = sizzle.selectors.createPseudo(function (propertyFilter) {
      if (!propertyFilter) {
        throw new Error('No argument is given for :matches-property pseudo class');
      }
      var _matcherUtils$parseMa = matcherUtils.parseMatcherFilter(propertyFilter),
          _matcherUtils$parseMa2 = _slicedToArray(_matcherUtils$parseMa, 2),
          rawProp = _matcherUtils$parseMa2[0],
          rawValue = _matcherUtils$parseMa2[1];
      if (rawProp.indexOf('\\/') > -1 || rawProp.indexOf('\\.') > -1) {
        throw new Error("Invalid property name: ".concat(rawProp));
      }
      var propsChainArg = parseRawPropChain(rawProp);
      var valueArg = matcherUtils.parseRawMatcherArg(rawValue);
      var propsToValidate = [].concat(_toConsumableArray(propsChainArg), [valueArg]);
      if (!matcherUtils.validatePropMatcherArgs(propsToValidate)) {
        throw new Error("Invalid argument of :matches-property pseudo class: ".concat(propertyFilter));
      }
      var matcher = new PropMatcher(propsChainArg, valueArg);
      return function (element) {
        return matcher.matches(element);
      };
    });
  };
  return {
    extendSizzle: extendSizzle
  };
}();
var IsAnyMatcher = function () {
  var IsMatcher = function IsMatcher(selectors, pseudoElement) {
    this.selectors = selectors;
    this.pseudoElement = pseudoElement;
  };
  IsMatcher.prototype.matches = function (element) {
    var isMatched = !!this.selectors.find(function (selector) {
      var nodes = document.querySelectorAll(selector);
      return Array.from(nodes).find(function (node) {
        return node === element;
      });
    });
    return isMatched;
  };
  var extendSizzle = function extendSizzle(sizzle) {
    sizzle.selectors.pseudos['is'] = sizzle.selectors.createPseudo(function (input) {
      if (input === '') {
        throw new Error("Invalid argument of :is pseudo-class: ".concat(input));
      }
      var selectors = input.split(',').map(function (s) {
        return s.trim();
      });
      var validSelectors = selectors.reduce(function (acc, selector) {
        if (cssUtils.isSimpleSelectorValid(selector)) {
          acc.push(selector);
        } else {
          utils.logInfo("Invalid selector passed to :is() pseudo-class: '".concat(selector, "'"));
        }
        return acc;
      }, []);
      var matcher = new IsMatcher(validSelectors);
      return function (element) {
        return matcher.matches(element);
      };
    });
  };
  return {
    extendSizzle: extendSizzle
  };
}();
var ExtendedSelectorFactory = function () {
  var PSEUDO_EXTENSIONS_MARKERS = [':has', ':contains', ':has-text', ':matches-css', ':-abp-has', ':-abp-has-text', ':if', ':if-not', ':xpath', ':nth-ancestor', ':upward', ':remove', ':matches-attr', ':matches-property', ':-abp-contains', ':is'];
  var initialized = false;
  var Sizzle;
  function initialize() {
    if (initialized) {
      return;
    }
    initialized = true;
    Sizzle = initializeSizzle();
    StylePropertyMatcher.extendSizzle(Sizzle);
    AttributesMatcher.extendSizzle(Sizzle);
    ElementPropertyMatcher.extendSizzle(Sizzle);
    IsAnyMatcher.extendSizzle(Sizzle);
    var containsPseudo = Sizzle.selectors.createPseudo(function (text) {
      if (/^\s*\/.*\/[gmisuy]*\s*$/.test(text)) {
        text = text.trim();
        var flagsIndex = text.lastIndexOf('/');
        var flags = text.substring(flagsIndex + 1);
        text = text.substr(0, flagsIndex + 1).slice(1, -1).replace(/\\([\\"])/g, '$1');
        var regex;
        try {
          regex = new RegExp(text, flags);
        } catch (e) {
          throw new Error("Invalid argument of :contains pseudo class: ".concat(text));
        }
        return function (elem) {
          var elemTextContent = utils.nodeTextContentGetter.apply(elem);
          return regex.test(elemTextContent);
        };
      }
      text = text.replace(/\\([\\()[\]"])/g, '$1');
      return function (elem) {
        var elemTextContent = utils.nodeTextContentGetter.apply(elem);
        return elemTextContent.indexOf(text) > -1;
      };
    });
    Sizzle.selectors.pseudos['contains'] = containsPseudo;
    Sizzle.selectors.pseudos['has-text'] = containsPseudo;
    Sizzle.selectors.pseudos['-abp-contains'] = containsPseudo;
    Sizzle.selectors.pseudos['if'] = Sizzle.selectors.pseudos['has'];
    Sizzle.selectors.pseudos['-abp-has'] = Sizzle.selectors.pseudos['has'];
    Sizzle.selectors.pseudos['if-not'] = Sizzle.selectors.createPseudo(function (selector) {
      if (typeof selector === 'string') {
        Sizzle.compile(selector);
      }
      return function (elem) {
        return Sizzle(selector, elem).length === 0;
      };
    });
    registerParserOnlyTokens();
  }
  function registerParserOnlyTokens() {
    Sizzle.selectors.pseudos['xpath'] = Sizzle.selectors.createPseudo(function (selector) {
      try {
        document.createExpression(selector, null);
      } catch (e) {
        throw new Error("Invalid argument of :xpath pseudo class: ".concat(selector));
      }
      return function () {
        return true;
      };
    });
    Sizzle.selectors.pseudos['nth-ancestor'] = Sizzle.selectors.createPseudo(function (selector) {
      var deep = Number(selector);
      if (Number.isNaN(deep) || deep < 1 || deep >= 256) {
        throw new Error("Invalid argument of :nth-ancestor pseudo class: ".concat(selector));
      }
      return function () {
        return true;
      };
    });
    Sizzle.selectors.pseudos['upward'] = Sizzle.selectors.createPseudo(function (input) {
      if (input === '') {
        throw new Error("Invalid argument of :upward pseudo class: ".concat(input));
      } else if (Number.isInteger(+input) && (+input < 1 || +input >= 256)) {
        throw new Error("Invalid argument of :upward pseudo class: ".concat(input));
      }
      return function () {
        return true;
      };
    });
    Sizzle.selectors.pseudos['remove'] = Sizzle.selectors.createPseudo(function (input) {
      if (input !== '') {
        throw new Error("Invalid argument of :remove pseudo class: ".concat(input));
      }
      return function () {
        return true;
      };
    });
  }
  function isSimpleToken(token) {
    var type = token.type;
    if (type === 'ID' || type === 'CLASS' || type === 'ATTR' || type === 'TAG' || type === 'CHILD') {
      return true;
    }
    if (type === 'PSEUDO') {
      var i = PSEUDO_EXTENSIONS_MARKERS.length;
      while (i--) {
        if (token.value.indexOf(PSEUDO_EXTENSIONS_MARKERS[i]) >= 0) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  function isRelationToken(token) {
    var type = token.type;
    return type === ' ' || type === '>' || type === '+' || type === '~';
  }
  function ExtendedSelectorParser(selectorText, tokens, debug) {
    initialize();
    if (typeof tokens === 'undefined') {
      this.selectorText = cssUtils.normalize(selectorText);
      this.tokens = Sizzle.tokenize(this.selectorText, false, {
        returnUnsorted: true
      });
    } else {
      this.selectorText = selectorText;
      this.tokens = tokens;
    }
    if (debug === true) {
      this.debug = true;
    }
  }
  ExtendedSelectorParser.prototype = {
    createSelector: function createSelector() {
      var debug = this.debug;
      var tokens = this.tokens;
      var selectorText = this.selectorText;
      if (tokens.length !== 1) {
        return new TraitLessSelector(selectorText, debug);
      }
      var xpathPart = this.getXpathPart();
      if (typeof xpathPart !== 'undefined') {
        return new XpathSelector(selectorText, xpathPart, debug);
      }
      var upwardPart = this.getUpwardPart();
      if (typeof upwardPart !== 'undefined') {
        var output;
        var upwardDeep = parseInt(upwardPart, 10);
        if (Number.isNaN(upwardDeep)) {
          output = new UpwardSelector(selectorText, upwardPart, debug);
        } else {
          var xpath = this.convertNthAncestorToken(upwardDeep);
          output = new XpathSelector(selectorText, xpath, debug);
        }
        return output;
      }
      var removePart = this.getRemovePart();
      if (typeof removePart !== 'undefined') {
        var hasValidRemovePart = removePart === '';
        return new RemoveSelector(selectorText, hasValidRemovePart, debug);
      }
      tokens = tokens[0];
      var l = tokens.length;
      var lastRelTokenInd = this.getSplitPoint();
      if (typeof lastRelTokenInd === 'undefined') {
        try {
          document.querySelector(selectorText);
        } catch (e) {
          return new TraitLessSelector(selectorText, debug);
        }
        return new NotAnExtendedSelector(selectorText, debug);
      }
      var simple = '';
      var relation = null;
      var complex = '';
      var i = 0;
      for (; i < lastRelTokenInd; i++) {
        simple += tokens[i].value;
      }
      if (i > 0) {
        relation = tokens[i++].type;
      }
      for (; i < l; i++) {
        complex += tokens[i].value;
      }
      return lastRelTokenInd === -1 ? new TraitLessSelector(selectorText, debug) : new SplittedSelector(selectorText, simple, relation, complex, debug);
    },
    getSplitPoint: function getSplitPoint() {
      var tokens = this.tokens[0];
      var latestRelationTokenIndex = -1;
      var haveMetComplexToken = false;
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (isRelationToken(token)) {
          if (haveMetComplexToken) {
            return;
          }
          latestRelationTokenIndex = i;
        } else if (!isSimpleToken(token)) {
          haveMetComplexToken = true;
        }
      }
      if (!haveMetComplexToken) {
        return;
      }
      return latestRelationTokenIndex;
    },
    getXpathPart: function getXpathPart() {
      var tokens = this.tokens[0];
      for (var i = 0, tokensLength = tokens.length; i < tokensLength; i++) {
        var token = tokens[i];
        if (token.type === 'PSEUDO') {
          var matches = token.matches;
          if (matches && matches.length > 1) {
            if (matches[0] === 'xpath') {
              if (this.isLastToken(tokens, i)) {
                throw new Error('Invalid pseudo: \':xpath\' should be at the end of the selector');
              }
              return matches[1];
            }
            if (matches[0] === 'nth-ancestor') {
              if (this.isLastToken(tokens, i)) {
                throw new Error('Invalid pseudo: \':nth-ancestor\' should be at the end of the selector');
              }
              var deep = matches[1];
              if (deep > 0 && deep < 256) {
                return this.convertNthAncestorToken(deep);
              }
            }
          }
        }
      }
    },
    convertNthAncestorToken: function convertNthAncestorToken(deep) {
      var result = '..';
      while (deep > 1) {
        result += '/..';
        deep--;
      }
      return result;
    },
    isLastToken: function isLastToken(tokens, i) {
      var isNextRemoveToken = tokens[i + 1] && tokens[i + 1].type === 'PSEUDO' && tokens[i + 1].matches && tokens[i + 1].matches[0] === 'remove';
      return i + 1 !== tokens.length && !isNextRemoveToken;
    },
    getUpwardPart: function getUpwardPart() {
      var tokens = this.tokens[0];
      for (var i = 0, tokensLength = tokens.length; i < tokensLength; i++) {
        var token = tokens[i];
        if (token.type === 'PSEUDO') {
          var matches = token.matches;
          if (matches && matches.length > 1) {
            if (matches[0] === 'upward') {
              if (this.isLastToken(tokens, i)) {
                throw new Error('Invalid pseudo: \':upward\' should be at the end of the selector');
              }
              return matches[1];
            }
          }
        }
      }
    },
    getRemovePart: function getRemovePart() {
      var tokens = this.tokens[0];
      for (var i = 0, tokensLength = tokens.length; i < tokensLength; i++) {
        var token = tokens[i];
        if (token.type === 'PSEUDO') {
          var matches = token.matches;
          if (matches && matches.length > 1) {
            if (matches[0] === 'remove') {
              if (i + 1 !== tokensLength) {
                throw new Error('Invalid pseudo: \':remove\' should be at the end of the selector');
              }
              return matches[1];
            }
          }
        }
      }
    }
  };
  var globalDebuggingFlag = false;
  function isDebugging() {
    return globalDebuggingFlag || this.debug;
  }
  function NotAnExtendedSelector(selectorText, debug) {
    this.selectorText = selectorText;
    this.debug = debug;
  }
  NotAnExtendedSelector.prototype = {
    querySelectorAll: function querySelectorAll() {
      return document.querySelectorAll(this.selectorText);
    },
    matches: function matches(element) {
      return element[utils.matchesPropertyName](this.selectorText);
    },
    isDebugging: isDebugging
  };
  function TraitLessSelector(selectorText, debug) {
    this.selectorText = selectorText;
    this.debug = debug;
    Sizzle.compile(selectorText);
  }
  TraitLessSelector.prototype = {
    querySelectorAll: function querySelectorAll() {
      return Sizzle(this.selectorText);
    },
    matches: function matches(element) {
      return Sizzle.matchesSelector(element, this.selectorText);
    },
    isDebugging: isDebugging
  };
  function BaseLastArgumentSelector(selectorText, pseudoClassArg, debug) {
    this.selectorText = selectorText;
    this.pseudoClassArg = pseudoClassArg;
    this.debug = debug;
    Sizzle.compile(this.selectorText);
  }
  BaseLastArgumentSelector.prototype = {
    querySelectorAll: function querySelectorAll() {
      var _this = this;
      var resultNodes = [];
      var simpleNodes;
      if (this.selectorText) {
        simpleNodes = Sizzle(this.selectorText);
        if (!simpleNodes || !simpleNodes.length) {
          return resultNodes;
        }
      } else {
        simpleNodes = [document];
      }
      simpleNodes.forEach(function (node) {
        _this.searchResultNodes(node, _this.pseudoClassArg, resultNodes);
      });
      return Sizzle.uniqueSort(resultNodes);
    },
    matches: function matches(element) {
      var results = this.querySelectorAll();
      return results.indexOf(element) > -1;
    },
    isDebugging: isDebugging,
    searchResultNodes: function searchResultNodes(node, pseudoClassArg, result) {
      if (pseudoClassArg) {
        result.push(node);
      }
    }
  };
  function XpathSelector(selectorText, xpath, debug) {
    var NO_SELECTOR_MARKER = ':xpath(//';
    var BODY_SELECTOR_REPLACER = 'body:xpath(//';
    var modifiedSelectorText = selectorText;
    if (utils.startsWith(selectorText, NO_SELECTOR_MARKER)) {
      modifiedSelectorText = selectorText.replace(NO_SELECTOR_MARKER, BODY_SELECTOR_REPLACER);
    }
    BaseLastArgumentSelector.call(this, modifiedSelectorText, xpath, debug);
  }
  XpathSelector.prototype = Object.create(BaseLastArgumentSelector.prototype);
  XpathSelector.prototype.constructor = XpathSelector;
  XpathSelector.prototype.searchResultNodes = function (node, pseudoClassArg, result) {
    var xpathResult = document.evaluate(pseudoClassArg, node, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    var iNode;
    while (iNode = xpathResult.iterateNext()) {
      result.push(iNode);
    }
  };
  function UpwardSelector(selectorText, upwardSelector, debug) {
    BaseLastArgumentSelector.call(this, selectorText, upwardSelector, debug);
  }
  UpwardSelector.prototype = Object.create(BaseLastArgumentSelector.prototype);
  UpwardSelector.prototype.constructor = UpwardSelector;
  UpwardSelector.prototype.searchResultNodes = function (node, upwardSelector, result) {
    if (upwardSelector !== '') {
      var parent = node.parentElement;
      if (parent === null) {
        return;
      }
      node = parent.closest(upwardSelector);
      if (node === null) {
        return;
      }
    }
    result.push(node);
  };
  function RemoveSelector(selectorText, hasValidRemovePart, debug) {
    var REMOVE_PSEUDO_MARKER = ':remove()';
    var removeMarkerIndex = selectorText.indexOf(REMOVE_PSEUDO_MARKER);
    var modifiedSelectorText = selectorText.slice(0, removeMarkerIndex);
    BaseLastArgumentSelector.call(this, modifiedSelectorText, hasValidRemovePart, debug);
    this.isRemoveSelector = true;
  }
  RemoveSelector.prototype = Object.create(BaseLastArgumentSelector.prototype);
  RemoveSelector.prototype.constructor = RemoveSelector;
  function SplittedSelector(selectorText, simple, relation, complex, debug) {
    TraitLessSelector.call(this, selectorText, debug);
    this.simple = simple;
    this.relation = relation;
    this.complex = complex;
    Sizzle.compile(complex);
  }
  SplittedSelector.prototype = Object.create(TraitLessSelector.prototype);
  SplittedSelector.prototype.constructor = SplittedSelector;
  SplittedSelector.prototype.querySelectorAll = function () {
    var _this2 = this;
    var resultNodes = [];
    var simpleNodes;
    var simple = this.simple;
    var relation;
    if (simple) {
      simpleNodes = document.querySelectorAll(simple);
      if (!simpleNodes || !simpleNodes.length) {
        return resultNodes;
      }
      relation = this.relation;
    } else {
      simpleNodes = [document];
      relation = ' ';
    }
    switch (relation) {
      case ' ':
        simpleNodes.forEach(function (node) {
          _this2.relativeSearch(node, resultNodes);
        });
        break;
      case '>':
        {
          simpleNodes.forEach(function (node) {
            Object.values(node.children).forEach(function (childNode) {
              if (_this2.matches(childNode)) {
                resultNodes.push(childNode);
              }
            });
          });
          break;
        }
      case '+':
        {
          simpleNodes.forEach(function (node) {
            var parentNode = node.parentNode;
            Object.values(parentNode.children).forEach(function (childNode) {
              if (_this2.matches(childNode) && childNode.previousElementSibling === node) {
                resultNodes.push(childNode);
              }
            });
          });
          break;
        }
      case '~':
        {
          simpleNodes.forEach(function (node) {
            var parentNode = node.parentNode;
            Object.values(parentNode.children).forEach(function (childNode) {
              if (_this2.matches(childNode) && node.compareDocumentPosition(childNode) === 4) {
                resultNodes.push(childNode);
              }
            });
          });
          break;
        }
    }
    return Sizzle.uniqueSort(resultNodes);
  };
  SplittedSelector.prototype.relativeSearch = function (node, results) {
    Sizzle(this.complex, node, results);
  };
  return {
    createSelector: function createSelector(selector, tokens, debug) {
      return new ExtendedSelectorParser(selector, tokens, debug).createSelector();
    },
    enableGlobalDebugging: function enableGlobalDebugging() {
      globalDebuggingFlag = true;
    }
  };
}();
var ExtendedCssParser = function () {
  var reDeclEnd = /[;}]/g;
  var reDeclDivider = /[;:}]/g;
  var reNonWhitespace = /\S/g;
  var Sizzle;
  function Parser(cssText) {
    this.cssText = cssText;
  }
  Parser.prototype = {
    error: function error(position) {
      throw new Error("CssParser: parse error at position ".concat(this.posOffset + position));
    },
    validateSelectors: function validateSelectors(selectors) {
      var iSelectors = selectors.length;
      while (iSelectors--) {
        var groups = selectors[iSelectors].groups;
        var iGroups = groups.length;
        while (iGroups--) {
          var tokens = groups[iGroups];
          var lastToken = tokens[tokens.length - 1];
          if (Sizzle.selectors.relative[lastToken.type]) {
            return false;
          }
        }
      }
      return true;
    },
    parseCss: function parseCss() {
      this.posOffset = 0;
      if (!this.cssText) {
        this.error(0);
      }
      var results = [];
      while (this.cssText) {
        var parseResult = Sizzle.tokenize(this.cssText, false, {
          tolerant: true,
          returnUnsorted: true
        });
        var selectorData = parseResult.selectors;
        this.nextIndex = parseResult.nextIndex;
        if (this.cssText.charCodeAt(this.nextIndex) !== 123 ||
        !this.validateSelectors(selectorData)) {
          this.error(this.nextIndex);
        }
        this.nextIndex++;
        var styleMap = this.parseNextStyle();
        var debug = false;
        var debugPropertyValue = styleMap['debug'];
        if (typeof debugPropertyValue !== 'undefined') {
          if (debugPropertyValue === 'global') {
            ExtendedSelectorFactory.enableGlobalDebugging();
          }
          debug = true;
          delete styleMap['debug'];
        }
        for (var i = 0, l = selectorData.length; i < l; i++) {
          var data = selectorData[i];
          try {
            var extendedSelector = ExtendedSelectorFactory.createSelector(data.selectorText, data.groups, debug);
            if (extendedSelector.pseudoClassArg && extendedSelector.isRemoveSelector) {
              styleMap['remove'] = 'true';
            }
            results.push({
              selector: extendedSelector,
              style: styleMap
            });
          } catch (ex) {
            utils.logError("ExtendedCssParser: ignoring invalid selector ".concat(data.selectorText));
          }
        }
      }
      return results;
    },
    parseNextStyle: function parseNextStyle() {
      var styleMap = Object.create(null);
      var bracketPos = this.parseUntilClosingBracket(styleMap);
      reNonWhitespace.lastIndex = bracketPos + 1;
      var match = reNonWhitespace.exec(this.cssText);
      if (match === null) {
        this.cssText = '';
        return styleMap;
      }
      var matchPos = match.index;
      this.cssText = this.cssText.slice(matchPos);
      this.posOffset += matchPos;
      return styleMap;
    },
    parseUntilClosingBracket: function parseUntilClosingBracket(styleMap) {
      reDeclDivider.lastIndex = this.nextIndex;
      var match = reDeclDivider.exec(this.cssText);
      if (match === null) {
        this.error(this.nextIndex);
      }
      var matchPos = match.index;
      var matched = match[0];
      if (matched === '}') {
        return matchPos;
      }
      if (matched === ':') {
        var colonIndex = matchPos;
        reDeclEnd.lastIndex = colonIndex;
        match = reDeclEnd.exec(this.cssText);
        if (match === null) {
          this.error(colonIndex);
        }
        matchPos = match.index;
        matched = match[0];
        var property = this.cssText.slice(this.nextIndex, colonIndex).trim();
        var value = this.cssText.slice(colonIndex + 1, matchPos).trim();
        styleMap[property] = value;
        if (matched === '}') {
          return matchPos;
        }
      }
      this.nextIndex = matchPos + 1;
      return this.parseUntilClosingBracket(styleMap);
    }
  };
  return {
    parseCss: function parseCss(cssText) {
      Sizzle = initializeSizzle();
      return new Parser(cssUtils.normalize(cssText)).parseCss();
    }
  };
}();
function ExtendedCss(configuration) {
  if (!configuration) {
    throw new Error('Configuration is not provided.');
  }
  var styleSheet = configuration.styleSheet;
  var beforeStyleApplied = configuration.beforeStyleApplied;
  if (beforeStyleApplied && typeof beforeStyleApplied !== 'function') {
    throw new Error("Wrong configuration. Type of 'beforeStyleApplied' field should be a function, received: ".concat(_typeof(beforeStyleApplied)));
  }
  var EventTracker = function () {
    var ignoredEventTypes = ['mouseover', 'mouseleave', 'mouseenter', 'mouseout'];
    var LAST_EVENT_TIMEOUT_MS = 10;
    var EVENTS = [
    'keydown', 'keypress', 'keyup',
    'auxclick', 'click', 'contextmenu', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup', 'pointerlockchange', 'pointerlockerror', 'select', 'wheel'];
    var safariProblematicEvents = ['wheel'];
    var trackedEvents = utils.isSafariBrowser ? EVENTS.filter(function (el) {
      return !(safariProblematicEvents.indexOf(el) > -1);
    }) : EVENTS;
    var lastEventType;
    var lastEventTime;
    var trackEvent = function trackEvent(e) {
      lastEventType = e.type;
      lastEventTime = Date.now();
    };
    trackedEvents.forEach(function (evName) {
      document.documentElement.addEventListener(evName, trackEvent, true);
    });
    var getLastEventType = function getLastEventType() {
      return lastEventType;
    };
    var getTimeSinceLastEvent = function getTimeSinceLastEvent() {
      return Date.now() - lastEventTime;
    };
    return {
      isIgnoredEventType: function isIgnoredEventType() {
        return ignoredEventTypes.indexOf(getLastEventType()) > -1 && getTimeSinceLastEvent() < LAST_EVENT_TIMEOUT_MS;
      }
    };
  }();
  var rules = [];
  var affectedElements = [];
  var removalsStatistic = {};
  var domObserved;
  var eventListenerSupported = window.addEventListener;
  var domMutationObserver;
  function observeDocument(callback) {
    var isIgnoredMutation = function isIgnoredMutation(mutations) {
      for (var i = 0; i < mutations.length; i += 1) {
        if (mutations.type !== 'attributes') {
          return false;
        }
      }
      return true;
    };
    if (utils.MutationObserver) {
      domMutationObserver = new utils.MutationObserver(function (mutations) {
        if (!mutations || mutations.length === 0) {
          return;
        }
        if (EventTracker.isIgnoredEventType() && isIgnoredMutation(mutations)) {
          return;
        }
        callback();
      });
      domMutationObserver.observe(document, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['id', 'class']
      });
    } else if (eventListenerSupported) {
      document.addEventListener('DOMNodeInserted', callback, false);
      document.addEventListener('DOMNodeRemoved', callback, false);
      document.addEventListener('DOMAttrModified', callback, false);
    }
  }
  function disconnectDocument(callback) {
    if (domMutationObserver) {
      domMutationObserver.disconnect();
    } else if (eventListenerSupported) {
      document.removeEventListener('DOMNodeInserted', callback, false);
      document.removeEventListener('DOMNodeRemoved', callback, false);
      document.removeEventListener('DOMAttrModified', callback, false);
    }
  }
  var MAX_STYLE_PROTECTION_COUNT = 50;
  var protectionObserverOption = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['style']
  };
  function createProtectionFunction(styles) {
    function protectionFunction(mutations, observer) {
      if (!mutations.length) {
        return;
      }
      var mutation = mutations[0];
      var target = mutation.target;
      observer.disconnect();
      styles.forEach(function (style) {
        setStyleToElement(target, style);
      });
      if (++observer.styleProtectionCount < MAX_STYLE_PROTECTION_COUNT) {
        observer.observe(target, protectionObserverOption);
      } else {
        utils.logError('ExtendedCss: infinite loop protection for style');
      }
    }
    return protectionFunction;
  }
  function protectStyleAttribute(node, rules) {
    if (!utils.MutationObserver) {
      return null;
    }
    var styles = rules.map(function (r) {
      return r.style;
    });
    var protectionObserver = new utils.MutationObserver(createProtectionFunction(styles));
    protectionObserver.observe(node, protectionObserverOption);
    protectionObserver.styleProtectionCount = 0;
    return protectionObserver;
  }
  function removeSuffix(str, suffix) {
    var index = str.indexOf(suffix, str.length - suffix.length);
    if (index >= 0) {
      return str.substring(0, index);
    }
    return str;
  }
  function findAffectedElement(node) {
    for (var i = 0; i < affectedElements.length; i += 1) {
      if (affectedElements[i].node === node) {
        return affectedElements[i];
      }
    }
    return null;
  }
  function removeElement(affectedElement) {
    var node = affectedElement.node;
    affectedElement.removed = true;
    var elementSelector = utils.getNodeSelector(node);
    var elementRemovalsCounter = removalsStatistic[elementSelector] || 0;
    if (elementRemovalsCounter > MAX_STYLE_PROTECTION_COUNT) {
      utils.logError('ExtendedCss: infinite loop protection for SELECTOR', elementSelector);
      return;
    }
    if (node.parentNode) {
      node.parentNode.removeChild(node);
      removalsStatistic[elementSelector] = elementRemovalsCounter + 1;
    }
  }
  function applyStyle(affectedElement) {
    if (affectedElement.protectionObserver) {
      return;
    }
    if (beforeStyleApplied) {
      affectedElement = beforeStyleApplied(affectedElement);
      if (!affectedElement) {
        return;
      }
    }
    var _affectedElement = affectedElement,
        node = _affectedElement.node;
    for (var i = 0; i < affectedElement.rules.length; i++) {
      var style = affectedElement.rules[i].style;
      if (style['remove'] === 'true') {
        removeElement(affectedElement);
        return;
      }
      setStyleToElement(node, style);
    }
  }
  function setStyleToElement(node, style) {
    Object.keys(style).forEach(function (prop) {
      if (typeof node.style.getPropertyValue(prop) !== 'undefined') {
        var value = style[prop];
        value = removeSuffix(value.trim(), '!important').trim();
        node.style.setProperty(prop, value, 'important');
      }
    });
  }
  function revertStyle(affectedElement) {
    if (affectedElement.protectionObserver) {
      affectedElement.protectionObserver.disconnect();
    }
    affectedElement.node.style.cssText = affectedElement.originalStyle;
  }
  function applyRule(rule) {
    var debug = rule.selector.isDebugging();
    var start;
    if (debug) {
      start = utils.AsyncWrapper.now();
    }
    var selector = rule.selector;
    var nodes = selector.querySelectorAll();
    nodes.forEach(function (node) {
      var affectedElement = findAffectedElement(node);
      if (affectedElement) {
        affectedElement.rules.push(rule);
        applyStyle(affectedElement);
      } else {
        var originalStyle = node.style.cssText;
        affectedElement = {
          node: node,
          rules: [rule],
          originalStyle: originalStyle,
          protectionObserver: null
        };
        applyStyle(affectedElement);
        affectedElements.push(affectedElement);
      }
    });
    if (debug) {
      var elapsed = utils.AsyncWrapper.now() - start;
      if (!('timingStats' in rule)) {
        rule.timingStats = new utils.Stats();
      }
      rule.timingStats.push(elapsed);
    }
    return nodes;
  }
  function applyRules() {
    var elementsIndex = [];
    stopObserve();
    rules.forEach(function (rule) {
      var nodes = applyRule(rule);
      Array.prototype.push.apply(elementsIndex, nodes);
    });
    var l = affectedElements.length;
    if (elementsIndex.length > 0) {
      while (l--) {
        var obj = affectedElements[l];
        if (elementsIndex.indexOf(obj.node) === -1) {
          revertStyle(obj);
          affectedElements.splice(l, 1);
        } else if (!obj.removed) {
          if (!obj.protectionObserver) {
            obj.protectionObserver = protectStyleAttribute(obj.node, obj.rules);
          }
        }
      }
    }
    observe();
    printTimingInfo();
  }
  var APPLY_RULES_DELAY = 150;
  var applyRulesScheduler = new utils.AsyncWrapper(applyRules, APPLY_RULES_DELAY);
  var mainCallback = applyRulesScheduler.run.bind(applyRulesScheduler);
  function observe() {
    if (domObserved) {
      return;
    }
    domObserved = true;
    observeDocument(mainCallback);
  }
  function stopObserve() {
    if (!domObserved) {
      return;
    }
    domObserved = false;
    disconnectDocument(mainCallback);
  }
  function apply() {
    applyRules();
    if (document.readyState !== 'complete') {
      document.addEventListener('DOMContentLoaded', applyRules);
    }
  }
  function dispose() {
    stopObserve();
    affectedElements.forEach(function (obj) {
      revertStyle(obj);
    });
  }
  var timingsPrinted = false;
  function printTimingInfo() {
    if (timingsPrinted) {
      return;
    }
    timingsPrinted = true;
    var timings = rules.filter(function (rule) {
      return rule.selector.isDebugging();
    }).map(function (rule) {
      return {
        selectorText: rule.selector.selectorText,
        timingStats: rule.timingStats
      };
    });
    if (timings.length === 0) {
      return;
    }
    utils.logInfo('[ExtendedCss] Timings for %o:\n%o (in milliseconds)', window.location.href, timings);
  }
  rules = ExtendedCssParser.parseCss(styleSheet);
  this.dispose = dispose;
  this.apply = apply;
  this._getAffectedElements = function () {
    return affectedElements;
  };
}
ExtendedCss.query = function (selectorText, noTiming) {
  if (typeof selectorText !== 'string') {
    throw new Error('Selector text is empty');
  }
  var now = utils.AsyncWrapper.now;
  var start = now();
  try {
    return ExtendedSelectorFactory.createSelector(selectorText).querySelectorAll();
  } finally {
    var end = now();
    if (!noTiming) {
      utils.logInfo("[ExtendedCss] Elapsed: ".concat(Math.round((end - start) * 1000), " \u03BCs."));
    }
  }
};

/**
 * Utils class
 */
var ElementUtils = /** @class */ (function () {
    function ElementUtils() {
    }
    /**
     * Serialize HTML element
     *
     * @param element
     */
    ElementUtils.elementToString = function (element) {
        var s = [];
        s.push('<');
        s.push(element.localName);
        var attributes = element.attributes;
        for (var i = 0; i < attributes.length; i += 1) {
            var attr = attributes[i];
            s.push(' ');
            s.push(attr.name);
            s.push('="');
            var value = attr.value === null ? '' : attr.value.replace(/"/g, '\\"');
            s.push(value);
            s.push('"');
        }
        s.push('>');
        return s.join('');
    };
    /**
     * Appends node children to the array
     *
     * @param node - element whose children we would like to add
     * @param arrayWithNodes - array where we add children
     */
    ElementUtils.appendChildren = function (node, arrayWithNodes) {
        var children = node.querySelectorAll('*');
        if (children && children.length > 0) {
            for (var i = 0; i < children.length; i += 1) {
                arrayWithNodes.push(children[i]);
            }
        }
    };
    /**
     * Adds elements into array if they are not in the array yet
     *
     * @param {*} targetArray
     * @param {*} sourceArray
     */
    ElementUtils.addUnique = function (targetArray, sourceArray) {
        if (sourceArray.length > 0) {
            for (var i = 0; i < sourceArray.length; i += 1) {
                var sourceElement = sourceArray[i];
                if (targetArray.indexOf(sourceElement) === -1) {
                    targetArray.push(sourceElement);
                }
            }
        }
    };
    /**
     * Removes all elements in array
     *
     * @param elements
     */
    ElementUtils.removeElements = function (elements) {
        for (var i = 0; i < elements.length; i += 1) {
            var element = elements[i];
            element.remove();
        }
    };
    /**
     * Parses hits info from style content
     *
     * @param content style
     * @param attributeMarker
     */
    ElementUtils.parseInfo = function (content, attributeMarker) {
        if (!content || content.indexOf(attributeMarker) < 0) {
            return null;
        }
        var filterIdAndRuleText = decodeURIComponent(content);
        // 'content' value may include open and close quotes.
        filterIdAndRuleText = ElementUtils.removeQuotes(filterIdAndRuleText);
        // Remove prefix
        filterIdAndRuleText = filterIdAndRuleText.substring(attributeMarker.length);
        // Attribute 'content' in css looks like: {content: 'adguard{filterId};{ruleText}'}
        var index = filterIdAndRuleText.indexOf(';');
        if (index < 0) {
            return null;
        }
        var filterId = parseInt(filterIdAndRuleText.substring(0, index), 10);
        if (Number.isNaN(filterId)) {
            return null;
        }
        var ruleText = filterIdAndRuleText.substring(index + 1);
        return { filterId: filterId, ruleText: ruleText };
    };
    /**
     * Parses hits info from style content
     *
     * @param content style
     * @param attributeMarker
     */
    // eslint-disable-next-line max-len
    ElementUtils.parseExtendedStyleInfo = function (content, attributeMarker) {
        var important = '!important';
        var indexOfImportant = content.lastIndexOf(important);
        if (indexOfImportant === -1) {
            return ElementUtils.parseInfo(content, attributeMarker);
        }
        var contentWithoutImportant = content.substring(0, indexOfImportant).trim();
        return ElementUtils.parseInfo(contentWithoutImportant, attributeMarker);
    };
    /**
     * Unquotes specified value
     */
    ElementUtils.removeQuotes = function (value) {
        if (value.length > 1
            && ((value[0] === '"' && value[value.length - 1] === '"')
                || (value[0] === '\'' && value[value.length - 1] === '\''))) {
            // Remove double-quotes or single-quotes
            return value.substring(1, value.length - 1);
        }
        return value;
    };
    return ElementUtils;
}());

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This storage is used to keep track of counted rules
 * regarding to node elements
 */
var HitsStorage = /** @class */ (function () {
    function HitsStorage() {
        /**
         * Start count number
         */
        this.counter = 0;
        /**
         * Storage random identificator
         */
        this.randomKey = HitsStorage.generateRandomKey();
        /**
         * Map storage
         */
        this.map = new Map();
    }
    /**
     * Checks if element is counted
     *
     * @param element html element
     * @param rule rule text
     */
    HitsStorage.prototype.isCounted = function (element, rule) {
        var hitAddress = element[this.randomKey];
        if (hitAddress) {
            var countedHit = this.map.get(hitAddress);
            if (countedHit) {
                return countedHit.element === element && countedHit.rule === rule;
            }
        }
        return false;
    };
    /**
     * Stores rule-element info in storage
     *
     * @param element html element
     * @param rule rule text
     */
    HitsStorage.prototype.setCounted = function (element, rule) {
        var counter = this.getCounter();
        // eslint-disable-next-line no-param-reassign
        element[this.randomKey] = counter;
        this.map.set(counter, { element: element, rule: rule });
    };
    /**
     * @return current count number
     */
    HitsStorage.prototype.getCounter = function () {
        this.counter += 1;
        return this.counter;
    };
    /**
     * Random id generator
     * @returns {String} - random key with desired length
     */
    HitsStorage.generateRandomKey = function () {
        var keyLength = 10;
        var possibleValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for (var i = 0; i < keyLength; i += 1) {
            result += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));
        }
        return result;
    };
    return HitsStorage;
}());

/* eslint-disable no-param-reassign */
/**
 * Class represents collecting css style hits process
 *
 * During applying css styles to element we add special 'content:' attribute
 * Example:
 * .selector -> .selector { content: 'adguard{filterId};{ruleText} !important;}
 *
 * then here we parse this attribute and calls provided callback function
 */
var CssHitsCounter = /** @class */ (function () {
    /**
     * This function prepares calculation of css hits.
     * We are waiting for 'load' event and start calculation.
     * @param callback - ({filterId: number; ruleText: string; element: string}[]) => {} handles counted css hits
     */
    function CssHitsCounter(callback) {
        /**
         * Hits storage
         */
        this.hitsStorage = new HitsStorage();
        /**
         * Mutation observer
         */
        this.observer = null;
        /**
         * Counting on process flag
         */
        this.countIsWorking = false;
        this.onCssHitsFoundCallback = callback;
        if (document.readyState === 'complete'
            || document.readyState === 'interactive') {
            this.countCssHits();
        }
        else {
            document.addEventListener('readystatechange', this.startCounter.bind(this));
        }
    }
    /**
     * Stops css hits counting process
     */
    CssHitsCounter.prototype.stop = function () {
        this.onCssHitsFoundCallback = function () { };
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    /**
     * Callback used to collect statistics of elements affected by extended css rules
     *
     * @param {object} affectedEl
     * @return {object} affectedEl
     */
    CssHitsCounter.prototype.countAffectedByExtendedCss = function (affectedEl) {
        if (affectedEl && affectedEl.rules && affectedEl.rules.length > 0) {
            var result = [];
            for (var _i = 0, _a = affectedEl.rules; _i < _a.length; _i++) {
                var rule = _a[_i];
                if (rule.style && rule.style.content) {
                    var styleInfo = ElementUtils.parseExtendedStyleInfo(rule.style.content, CssHitsCounter.CONTENT_ATTR_PREFIX);
                    if (styleInfo === null) {
                        continue;
                    }
                    var filterId = styleInfo.filterId, ruleText = styleInfo.ruleText;
                    if (filterId !== undefined && ruleText !== undefined) {
                        result.push({
                            filterId: filterId,
                            ruleText: ruleText,
                            element: ElementUtils.elementToString(affectedEl.node),
                        });
                        // clear style content to avoid duplicate counting
                        rule.style.content = '';
                    }
                }
            }
            this.onCssHitsFoundCallback(result);
        }
        return affectedEl;
    };
    /**
     * Starts counting process
     */
    CssHitsCounter.prototype.startCounter = function () {
        if (document.readyState === 'interactive'
            || document.readyState === 'complete') {
            this.countCssHits();
            document.removeEventListener('readystatechange', this.startCounter);
        }
    };
    /**
     * Counts css hits
     */
    CssHitsCounter.prototype.countCssHits = function () {
        this.countAllCssHits();
        this.countCssHitsForMutations();
    };
    /**
     * Counts css hits for already affected elements
     */
    CssHitsCounter.prototype.countAllCssHits = function () {
        var _this = this;
        // we don't start counting again all css hits till previous count process wasn't finished
        if (this.countIsWorking) {
            return;
        }
        this.countIsWorking = true;
        var elements = document.querySelectorAll('*');
        this.countCssHitsBatch(elements, 0, CssHitsCounter.CSS_HITS_BATCH_SIZE, CssHitsCounter.CSS_HITS_BATCH_SIZE, [], function (result) {
            if (result.length > 0) {
                _this.onCssHitsFoundCallback(result);
            }
            _this.countIsWorking = false;
        });
    };
    /**
     * Main calculation function.
     * 1. Selects sub collection from elements.
     * 2. For each element from sub collection: retrieves calculated css 'content'
     * attribute and if it contains 'adguard'
     * marker then retrieves rule text and filter identifier.
     * 3. Starts next task with some delay.
     *
     * @param elements Collection of all elements
     * @param start Start of batch
     * @param end End of batch
     * @param step Size of batch
     * @param result Collection for save result
     * @param callback Finish callback
     */
    // eslint-disable-next-line max-len
    CssHitsCounter.prototype.countCssHitsBatch = function (elements, start, end, step, result, callback) {
        var _this = this;
        var length = Math.min(end, elements.length);
        result = result.concat(this.countCssHitsForElements(elements, start, length));
        if (length === elements.length) {
            callback(result);
            return;
        }
        start = end;
        end += step;
        // Start next task with some delay
        window.setTimeout(function () {
            _this.countCssHitsBatch(elements, start, end, step, result, callback);
        }, CssHitsCounter.COUNT_CSS_HITS_BATCH_DELAY);
    };
    /**
     * Counts css hits for array of elements
     *
     * @param elements
     * @param start
     * @param length
     */
    CssHitsCounter.prototype.countCssHitsForElements = function (elements, start, length) {
        var RULE_FILTER_SEPARATOR = ';';
        start = start || 0;
        length = length || elements.length;
        var result = [];
        for (var i = start; i < length; i += 1) {
            var element = elements[i];
            var cssHitData = CssHitsCounter.getCssHitData(element);
            if (!cssHitData) {
                continue;
            }
            var filterId = cssHitData.filterId, ruleText = cssHitData.ruleText;
            var ruleAndFilterString = filterId + RULE_FILTER_SEPARATOR + ruleText;
            if (this.hitsStorage.isCounted(element, ruleAndFilterString)) {
                continue;
            }
            this.hitsStorage.setCounted(element, ruleAndFilterString);
            result.push({
                filterId: filterId,
                ruleText: ruleText,
                element: ElementUtils.elementToString(element),
            });
        }
        return result;
    };
    /**
     * Counts css hits for mutations
     */
    CssHitsCounter.prototype.countCssHitsForMutations = function () {
        var _this = this;
        // eslint-disable-next-line prefer-destructuring
        var MutationObserver = window.MutationObserver;
        if (!MutationObserver) {
            return;
        }
        if (this.observer) {
            this.observer.disconnect();
        }
        var timeoutId = null;
        this.observer = new MutationObserver((function (mutationRecords) {
            // Collect probe elements, count them, then remove from their targets
            var probeElements = [];
            var childrenOfProbeElements = [];
            var potentialProbeElements = [];
            mutationRecords.forEach(function (mutationRecord) {
                if (mutationRecord.addedNodes.length === 0) {
                    return;
                }
                for (var i = 0; i < mutationRecord.addedNodes.length; i += 1) {
                    var node = mutationRecord.addedNodes[i];
                    if (!(node instanceof Element) || CssHitsCounter.isIgnoredNodeTag(node.tagName)) {
                        continue;
                    }
                    var target = mutationRecord.target;
                    if (!node.parentNode && target) {
                        // Most likely this is a "probe" element that was added and then
                        // immediately removed from DOM.
                        // We re-add it and check if any rule matched it
                        probeElements.push(node);
                        // CSS rules could be applied to the nodes inside probe element
                        // that's why we get all child elements of added node
                        ElementUtils.appendChildren(node, childrenOfProbeElements);
                        if (_this.observer) {
                            _this.observer.disconnect();
                        }
                        mutationRecord.target.appendChild(node);
                    }
                    else if (node.parentNode && target) {
                        // Sometimes probe elements are appended to the DOM
                        potentialProbeElements.push(node);
                        ElementUtils.appendChildren(node, potentialProbeElements);
                    }
                }
            });
            // If the list of potential probe elements is relatively small,
            // we can count CSS hits immediately
            if (potentialProbeElements.length > 0
                && potentialProbeElements.length <= CssHitsCounter.CSS_HITS_BATCH_SIZE) {
                var result = _this.countCssHitsForElements(potentialProbeElements, 0, null);
                if (result.length > 0) {
                    _this.onCssHitsFoundCallback(result);
                }
            }
            var allProbeElements = [];
            ElementUtils.addUnique(allProbeElements, childrenOfProbeElements);
            ElementUtils.addUnique(allProbeElements, probeElements);
            if (allProbeElements.length > 0) {
                var result = _this.countCssHitsForElements(allProbeElements, 0, null);
                if (result.length > 0) {
                    _this.onCssHitsFoundCallback(result);
                }
                /**
                 * don't remove child elements of probe elements
                 * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1096
                 */
                ElementUtils.removeElements(probeElements);
                _this.startObserver();
            }
            // debounce counting all css hits when mutation record fires
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
            timeoutId = window.setTimeout(function () {
                _this.countAllCssHits();
                window.clearTimeout(timeoutId);
            }, CssHitsCounter.COUNT_ALL_CSS_HITS_TIMEOUT_MS);
        }));
        this.startObserver();
    };
    /**
     * Starts mutation observer
     */
    CssHitsCounter.prototype.startObserver = function () {
        if (this.observer) {
            this.observer.observe(document.documentElement, {
                childList: true,
                subtree: true,
                attributes: true,
            });
        }
    };
    /**
     * Function checks if elements style content attribute contains data injected with AdGuard
     *
     * @param {Node} element
     * @returns {({filterId: Number, ruleText: String} | null)}
     */
    CssHitsCounter.getCssHitData = function (element) {
        var style = getComputedStyle(element);
        return ElementUtils.parseInfo(style.content, CssHitsCounter.CONTENT_ATTR_PREFIX);
    };
    /**
     * Check if tag is ignored
     * @param nodeTag
     */
    CssHitsCounter.isIgnoredNodeTag = function (nodeTag) {
        var ignoredTags = ['script'];
        return ignoredTags.includes(nodeTag.toLowerCase());
    };
    /**
     * We split CSS hits counting into smaller batches of elements
     * and schedule them one by one using setTimeout
     */
    CssHitsCounter.COUNT_CSS_HITS_BATCH_DELAY = 5;
    /**
     * Size of small batches of elements we count
     */
    CssHitsCounter.CSS_HITS_BATCH_SIZE = 25;
    /**
     * In order to find elements hidden by AdGuard we look for a `:content` pseudo-class
     * with values starting with this prefix. Filter information will be
     * encoded in this value as well.
     */
    CssHitsCounter.CONTENT_ATTR_PREFIX = 'adguard';
    /**
     * We delay countAllCssHits function if it was called too frequently from mutationObserver
     */
    CssHitsCounter.COUNT_ALL_CSS_HITS_TIMEOUT_MS = 500;
    return CssHitsCounter;
}());

/**
 * This class applies cookie rules in page context
 *
 * - Removes cookies matching rules
 * - Listens to new cookies, then tries to apply rules to them
 */
var CookieController = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param callback
     */
    function CookieController(callback) {
        /**
         * Is current context third-party
         */
        this.isThirdPartyContext = false;
        this.onRuleAppliedCallback = callback;
        this.isThirdPartyContext = this.isThirdPartyFrame();
    }
    /**
     * Applies rules
     *
     * @param rules
     */
    CookieController.prototype.apply = function (rules) {
        var _this = this;
        this.applyRules(rules);
        var lastCookie = document.cookie;
        this.listenCookieChange(function (oldValue, newValue) {
            if (newValue === lastCookie) {
                // Skip changes made by this class
                return;
            }
            _this.applyRules(rules);
            lastCookie = document.cookie;
        });
        window.addEventListener('beforeunload', function () {
            _this.applyRules(rules);
        });
    };
    /**
     * Polling document cookie
     *
     * @param callback
     * @param interval
     */
    // eslint-disable-next-line class-methods-use-this
    CookieController.prototype.listenCookieChange = function (callback, interval) {
        if (interval === void 0) { interval = 1000; }
        var lastCookie = document.cookie;
        setInterval(function () {
            var cookie = document.cookie;
            if (cookie !== lastCookie) {
                try {
                    callback(lastCookie, cookie);
                }
                finally {
                    lastCookie = cookie;
                }
            }
        }, interval);
    };
    /**
     * Checks if current context is third-party
     */
    // eslint-disable-next-line class-methods-use-this
    CookieController.prototype.isThirdPartyFrame = function () {
        try {
            return window.self !== window.top && document.location.hostname !== window.parent.location.hostname;
        }
        catch (e) {
            return true;
        }
    };
    /**
     * Applies rules to document cookies
     * Inspired by remove-cookie scriptlet
     * https://github.com/AdguardTeam/Scriptlets/blob/master/src/scriptlets/remove-cookie.js
     *
     * @param rules
     */
    CookieController.prototype.applyRules = function (rules) {
        var _this = this;
        document.cookie.split(';').forEach(function (cookieStr) {
            var pos = cookieStr.indexOf('=');
            if (pos === -1) {
                return;
            }
            var cookieName = cookieStr.slice(0, pos).trim();
            var cookieValue = cookieStr.slice(pos + 1).trim();
            var matchingRules = rules.filter(function (r) {
                if (_this.isThirdPartyContext !== r.isThirdParty) {
                    return false;
                }
                var regex = r.match ? CookieController.toRegExp(r.match) : CookieController.toRegExp('/.?/');
                return regex.test(cookieName);
            });
            var importantRules = matchingRules.filter(function (r) { return r.ruleText.includes('important'); });
            if (importantRules.length > 0) {
                importantRules.forEach(function (rule) {
                    _this.applyRule(rule, cookieName, cookieValue);
                });
            }
            else {
                var allowlistRules = matchingRules.filter(function (r) { return r.isAllowlist; });
                if (allowlistRules.length > 0) {
                    allowlistRules.forEach(function (rule) {
                        _this.applyRule(rule, cookieName, cookieValue);
                    });
                }
                else {
                    matchingRules.forEach(function (rule) {
                        _this.applyRule(rule, cookieName, cookieValue);
                    });
                }
            }
        });
    };
    /**
     * Applies rule
     *
     * @param rule
     * @param cookieName
     * @param cookieValue
     */
    CookieController.prototype.applyRule = function (rule, cookieName, cookieValue) {
        if (!rule.isAllowlist) {
            var hostParts = document.location.hostname.split('.');
            for (var i = 0; i <= hostParts.length - 1; i += 1) {
                var hostName = hostParts.slice(i).join('.');
                if (hostName) {
                    CookieController.removeCookieFromHost(cookieName, hostName);
                }
            }
        }
        this.onRuleAppliedCallback({
            cookieName: cookieName,
            cookieValue: cookieValue,
            cookieDomain: document.location.hostname,
            cookieRuleText: rule.ruleText,
            thirdParty: rule.isThirdParty,
            filterId: rule.filterId,
        });
    };
    /**
     * Removes cookie for host
     *
     * @param cookieName
     * @param hostName
     */
    CookieController.removeCookieFromHost = function (cookieName, hostName) {
        var cookieSpec = "".concat(cookieName, "=");
        var domain1 = "; domain=".concat(hostName);
        var domain2 = "; domain=.".concat(hostName);
        var path = '; path=/';
        var expiration = '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = cookieSpec + expiration;
        document.cookie = cookieSpec + domain1 + expiration;
        document.cookie = cookieSpec + domain2 + expiration;
        document.cookie = cookieSpec + path + expiration;
        document.cookie = cookieSpec + domain1 + path + expiration;
        document.cookie = cookieSpec + domain2 + path + expiration;
    };
    /**
     * Converts cookie rule match to regular expression
     *
     * @param str
     */
    CookieController.toRegExp = function (str) {
        if (str[0] === '/' && str[str.length - 1] === '/') {
            return new RegExp(str.slice(1, -1));
        }
        var escaped = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp("^".concat(escaped, "$"));
    };
    return CookieController;
}());

/**
 * This module applies stealth actions in page context
 */
var StealthHelper = /** @class */ (function () {
    function StealthHelper() {
    }
    /**
     * Sends a Global Privacy Control DOM signal
     */
    StealthHelper.setDomSignal = function () {
        try {
            if ('globalPrivacyControl' in Navigator.prototype) {
                return;
            }
            Object.defineProperty(Navigator.prototype, 'globalPrivacyControl', {
                get: function () { return true; },
                configurable: true,
                enumerable: true,
            });
        }
        catch (ex) {
            // Ignore
        }
    };
    return StealthHelper;
}());

/**
 * This module exports libraries used in the extension via content scripts
 */
var index = {
    ExtendedCss: ExtendedCss,
    CssHitsCounter: CssHitsCounter,
    CookieController: CookieController,
    StealthHelper: StealthHelper,
};



// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.weak-set.add-all.js
var esnext_weak_set_add_all = __webpack_require__(1747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.weak-set.delete-all.js
var esnext_weak_set_delete_all = __webpack_require__(7000);
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
;// CONCATENATED MODULE: ./node_modules/nanoid/index.browser.js

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


;// CONCATENATED MODULE: ./Extension/src/content-script/trusted-types-policy.js


const createPolicy = () => {
  const defaultPolicy = {
    createHTML: input => {
      return input;
    },
    createScript: input => {
      return input;
    },
    createScriptURL: input => {
      return input;
    }
  };

  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    return window.trustedTypes.createPolicy(`AGPolicy-${nanoid()}`, defaultPolicy);
  }

  return defaultPolicy;
};

const AGPolicy = createPolicy();
;// CONCATENATED MODULE: ./Extension/src/content-script/wrappers.js



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
 * !!! Important do not change function declaration, otherwise it would loose its name,
 * which is needed in the script
 *
 * Function for injecting some helper API into page context, that is used by request wrappers.
 *
 * @param scriptName Unique script name
 * @param shouldOverrideWebRTC If true we should override WebRTC objects
 * @param isInjected True means that we've already injected scripts in the contentWindow,
 * i.e. wrapped request objects and passed message channel
 */

function injectPageScriptAPI(scriptName, shouldOverrideWebRTC, isInjected) {
  /**
   * If script have been injected into a frame via contentWindow then we can simply take
   * the copy of messageChannel left for us by parent document
   * Otherwise creates new message channel that sends a message to the content-script
   * to check if request should be allowed or not.
   */
  const messageChannel = isInjected ? window[scriptName] : function () {
    // Save original postMessage and addEventListener functions to prevent webpage from tampering both.
    const {
      postMessage,
      addEventListener
    } = window; // Current request ID (incremented every time we send a new message)

    let currentRequestId = 0;
    const requestsMap = {};
    /**
     * Handles messages sent from the content script back to the page script.
     *
     * @param event Event with necessary data
     */

    const onMessageReceived = function (event) {
      if (!event.data || !event.data.direction || event.data.direction !== 'to-page-script@adguard') {
        return;
      }

      const requestData = requestsMap[event.data.requestId];

      if (requestData) {
        const {
          wrapper
        } = requestData;
        requestData.onResponseReceived(wrapper, event.data.block);
        delete requestsMap[event.data.requestId];
      }
    };
    /**
     * @param url                The URL to which wrapped object is willing to connect
     * @param requestType        Request type ( WEBSOCKET or WEBRTC)
     * @param wrapper            WebSocket wrapper instance
     * @param onResponseReceived Called when response is received
     */


    const sendMessage = function (url, requestType, wrapper, onResponseReceived) {
      if (currentRequestId === 0) {
        // Subscribe to response when this method is called for the first time
        addEventListener.call(window, 'message', onMessageReceived, false);
      }

      currentRequestId += 1;
      const requestId = currentRequestId;
      requestsMap[requestId] = {
        wrapper,
        onResponseReceived
      };
      const message = {
        requestId,
        direction: 'from-page-script@adguard',
        elementUrl: url,
        documentUrl: document.URL,
        requestType
      }; // Send a message to the background page to check if the request should be blocked

      postMessage.call(window, message, '*');
    };

    return {
      sendMessage
    };
  }();
  /**
   * In some case Chrome won't run content scripts inside frames.
   * So we have to intercept access to contentWindow/contentDocument and manually
   * inject wrapper script into this context
   *
   * Based on: https://github.com/adblockplus/adblockpluschrome/commit/1aabfb3346dc0821c52dd9e97f7d61b8c99cd707
   */

  const injectedToString = Function.prototype.toString.bind(injectPageScriptAPI);
  let injectedFramesAdd;
  let injectedFramesHas;

  if (window.WeakSet instanceof Function) {
    const injectedFrames = new WeakSet();
    injectedFramesAdd = WeakSet.prototype.add.bind(injectedFrames);
    injectedFramesHas = WeakSet.prototype.has.bind(injectedFrames);
  } else {
    const frames = [];

    injectedFramesAdd = function (el) {
      if (frames.indexOf(el) < 0) {
        frames.push(el);
      }
    };

    injectedFramesHas = function (el) {
      return frames.indexOf(el) >= 0;
    };
  }
  /**
   * Injects wrapper's script into passed window
   * @param contentWindow Frame's content window
   */


  function injectPageScriptAPIInWindow(contentWindow) {
    try {
      if (contentWindow && !injectedFramesHas(contentWindow)) {
        injectedFramesAdd(contentWindow);
        contentWindow[scriptName] = messageChannel; // Left message channel for the injected script

        const args = `'${scriptName}', ${shouldOverrideWebRTC}, true`;
        contentWindow.eval(AGPolicy.createScript(`(${injectedToString()})(${args});`));
        delete contentWindow[scriptName];
      }
    } catch (e) {// ignore
    }
  }
  /**
   * Overrides access to contentWindow/contentDocument for the passed HTML element's interface (iframe, frame, object)
   * If the content of one of these objects is requested we will inject our wrapper script.
   * @param iface HTML element's interface
   */


  function overrideContentAccess(iface) {
    const contentWindowDescriptor = Object.getOwnPropertyDescriptor(iface.prototype, 'contentWindow');
    const contentDocumentDescriptor = Object.getOwnPropertyDescriptor(iface.prototype, 'contentDocument'); // Apparently in HTMLObjectElement.prototype.contentWindow does not exist
    // in older versions of Chrome such as 42.

    if (!contentWindowDescriptor) {
      return;
    }

    const getContentWindow = Function.prototype.call.bind(contentWindowDescriptor.get);
    const getContentDocument = Function.prototype.call.bind(contentDocumentDescriptor.get);

    contentWindowDescriptor.get = function () {
      const contentWindow = getContentWindow(this);
      injectPageScriptAPIInWindow(contentWindow);
      return contentWindow;
    };

    contentDocumentDescriptor.get = function () {
      injectPageScriptAPIInWindow(getContentWindow(this));
      return getContentDocument(this);
    };

    Object.defineProperty(iface.prototype, 'contentWindow', contentWindowDescriptor);
    Object.defineProperty(iface.prototype, 'contentDocument', contentDocumentDescriptor);
  }

  const interfaces = [HTMLFrameElement, HTMLIFrameElement, HTMLObjectElement];

  for (let i = 0; i < interfaces.length; i += 1) {
    overrideContentAccess(interfaces[i]);
  }
  /**
   * Defines properties in destination object
   * @param src Source object
   * @param dest Destination object
   * @param properties Properties to copy
   */


  const copyProperties = function (src, dest, properties) {
    for (let i = 0; i < properties.length; i += 1) {
      const prop = properties[i];
      const descriptor = Object.getOwnPropertyDescriptor(src, prop); // Passed property may be undefined

      if (descriptor) {
        Object.defineProperty(dest, prop, descriptor);
      }
    }
  };
  /**
   * Check request by sending message to content script
   * @param url URL to block
   * @param type Request type
   * @param callback Result callback
   */


  const checkRequest = function (url, type, callback) {
    messageChannel.sendMessage(url, type, this, (wrapper, blockConnection) => {
      callback(blockConnection);
    });
  };
  /**
   * The function overrides window.RTCPeerConnection with our wrapper,
   * that will check ice servers URLs with filters through messaging with content-script.
   *
   * IMPORTANT NOTE:
   * This function is first loaded as a content script. The only purpose of it is to call
   * the "toString" method and use resulting string as a text content for injected script.
   */


  const overrideWebRTC = function () {
    if (!(window.RTCPeerConnection instanceof Function) && !(window.webkitRTCPeerConnection instanceof Function)) {
      return;
    }
    /**
     * RTCPeerConnection wrapper implementation.
     * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/588
     *
     * Based on:
     * https://github.com/adblockplus/adblockpluschrome/commit/af0585137be19011eace1cf68bf61eed2e6db974
     *
     * Chromium webRequest API doesn't allow the blocking of WebRTC connections
     * https://bugs.chromium.org/p/chromium/issues/detail?id=707683
     */


    const RealRTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;
    const closeRTCPeerConnection = Function.prototype.call.bind(RealRTCPeerConnection.prototype.close);
    const RealArray = Array;
    const RealString = String;
    const createObject = Object.create;
    const {
      defineProperty
    } = Object;
    /**
     * Convert passed url to string
     * @param url URL
     * @returns {string}
     */

    function urlToString(url) {
      if (typeof url !== 'undefined') {
        return RealString(url);
      }
    }
    /**
     * Creates new immutable array from original with some transform function
     * @param original
     * @param transform
     * @returns {*}
     */


    function safeCopyArray(original, transform) {
      if (original === null || typeof original !== 'object') {
        return original;
      }

      const immutable = RealArray(original.length);

      for (let i = 0; i < immutable.length; i += 1) {
        defineProperty(immutable, i, {
          configurable: false,
          enumerable: false,
          writable: false,
          value: transform(original[i])
        });
      }

      defineProperty(immutable, 'length', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: immutable.length
      });
      return immutable;
    }
    /**
     * Protect configuration from mutations
     * @param configuration RTCPeerConnection configuration object
     * @returns {*}
     */


    function protectConfiguration(configuration) {
      if (configuration === null || typeof configuration !== 'object') {
        return configuration;
      }

      const iceServers = safeCopyArray(configuration.iceServers, iceServer => {
        let {
          urls
        } = iceServer;
        const {
          url
        } = iceServer; // RTCPeerConnection doesn't iterate through pseudo Arrays of urls.

        if (typeof urls !== 'undefined' && !(urls instanceof RealArray)) {
          urls = [urls];
        }

        return createObject(iceServer, {
          url: {
            configurable: false,
            enumerable: false,
            writable: false,
            value: urlToString(url)
          },
          urls: {
            configurable: false,
            enumerable: false,
            writable: false,
            value: safeCopyArray(urls, urlToString)
          }
        });
      });
      return createObject(configuration, {
        iceServers: {
          configurable: false,
          enumerable: false,
          writable: false,
          value: iceServers
        }
      });
    }
    /**
     * Check WebRTC connection's URL and close if it's blocked by rule
     * @param connection Connection
     * @param url URL to check
     */


    function checkWebRTCRequest(connection, url) {
      checkRequest(url, 'WEBRTC', blocked => {
        if (blocked) {
          try {
            closeRTCPeerConnection(connection);
          } catch (e) {// Ignore exceptions
          }
        }
      });
    }
    /**
     * Check each URL of ice server in configuration for blocking.
     *
     * @param connection RTCPeerConnection
     * @param configuration Configuration for RTCPeerConnection
     * https://developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration
     */


    function checkConfiguration(connection, configuration) {
      if (!configuration || !configuration.iceServers) {
        return;
      }

      const {
        iceServers
      } = configuration;

      for (let i = 0; i < iceServers.length; i += 1) {
        const iceServer = iceServers[i];

        if (!iceServer) {
          continue;
        }

        if (iceServer.url) {
          checkWebRTCRequest(connection, iceServer.url);
        }

        if (iceServer.urls) {
          for (let j = 0; j < iceServer.urls.length; j += 1) {
            checkWebRTCRequest(connection, iceServer.urls[j]);
          }
        }
      }
    }
    /**
     * Overrides setConfiguration method
     * https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setConfiguration
     */


    if (RealRTCPeerConnection.prototype.setConfiguration) {
      const realSetConfiguration = Function.prototype.call.bind(RealRTCPeerConnection.prototype.setConfiguration);

      RealRTCPeerConnection.prototype.setConfiguration = function (configuration) {
        configuration = protectConfiguration(configuration); // Call the real method first, so that validates the configuration

        realSetConfiguration(this, configuration);
        checkConfiguration(this, configuration);
      };
    }

    function WrappedRTCPeerConnection(configuration, arg) {
      if (!(this instanceof WrappedRTCPeerConnection)) {
        return RealRTCPeerConnection();
      }

      configuration = protectConfiguration(configuration);
      /**
       * The old webkitRTCPeerConnection constructor takes an optional second argument and we must pass it.
       */

      const connection = new RealRTCPeerConnection(configuration, arg);
      checkConfiguration(connection, configuration);
      return connection;
    }

    WrappedRTCPeerConnection.prototype = RealRTCPeerConnection.prototype;
    const boundWrappedRTCPeerConnection = WrappedRTCPeerConnection.bind();
    copyProperties(RealRTCPeerConnection, boundWrappedRTCPeerConnection, ['caller', 'generateCertificate', 'name', 'prototype']);
    RealRTCPeerConnection.prototype.constructor = boundWrappedRTCPeerConnection;

    if ('RTCPeerConnection' in window) {
      window.RTCPeerConnection = boundWrappedRTCPeerConnection;
    }

    if ('webkitRTCPeerConnection' in window) {
      window.webkitRTCPeerConnection = boundWrappedRTCPeerConnection;
    }
  };

  if (shouldOverrideWebRTC) {
    overrideWebRTC();
  }
}
/**
 * This function is executed in the content script.
 * It starts listening to events from the page script and passes them further to the background page.
 */

const initPageMessageListener = function () {
  /**
   * Listener for websocket wrapper messages.
   *
   * @param event
   */
  async function pageMessageListener(event) {
    if (!(event.source === window && event.data.direction && event.data.direction === 'from-page-script@adguard' && event.data.elementUrl && event.data.documentUrl)) {
      return;
    }

    const message = {
      type: MESSAGE_TYPES.CHECK_PAGE_SCRIPT_WRAPPER_REQUEST,
      elementUrl: event.data.elementUrl,
      documentUrl: event.data.documentUrl,
      requestType: event.data.requestType,
      requestId: event.data.requestId
    };
    const response = await contentPage.sendMessage(message);

    if (!response) {
      return;
    }

    const responseMessage = {
      direction: 'to-page-script@adguard',
      elementUrl: event.data.elementUrl,
      documentUrl: event.data.documentUrl,
      requestType: event.data.requestType,
      requestId: response.requestId,
      block: response.block
    };
    event.source.postMessage(responseMessage, event.origin);
  }

  window.addEventListener('message', pageMessageListener, false);
};
;// CONCATENATED MODULE: ./Extension/src/content-script/element-collapser.js
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
 * Object that collapses or hides DOM elements and able to roll it back.
 */
const ElementCollapser = function () {
  /**
   * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1436
   * Because Edge doesn't support CSS.escape use next function
   */
  const cssEscape = CSS.escape || function (value) {
    if (arguments.length === 0) {
      throw new TypeError('`CSS.escape` requires an argument.');
    }

    const string = String(value);
    const {
      length
    } = string;
    let index = -1;
    let codeUnit;
    let result = '';
    const firstCodeUnit = string.charCodeAt(0); // eslint-disable-next-line no-plusplus

    while (++index < length) {
      codeUnit = string.charCodeAt(index); // Note: there’s no need to special-case astral symbols, surrogate
      // pairs, or lone surrogates.
      // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
      // (U+FFFD).

      if (codeUnit === 0x0000) {
        result += '\uFFFD';
        continue;
      }

      if ( // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit === 0x007F // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), […]
      || index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
      || index === 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit === 0x002D) {
        // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
        result += `\\${codeUnit.toString(16)} `;
        continue;
      }

      if ( // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      index === 0 && length === 1 && codeUnit === 0x002D) {
        result += `\\${string.charAt(index)}`;
        continue;
      } // If the character is not handled by one of the above rules and is
      // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
      // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
      // U+005A), or [a-z] (U+0061 to U+007A), […]


      if (codeUnit >= 0x0080 || codeUnit === 0x002D || codeUnit === 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
        // the character itself
        result += string.charAt(index);
        continue;
      } // Otherwise, the escaped character.
      // https://drafts.csswg.org/cssom/#escape-a-character


      result += `\\${string.charAt(index)}`;
    }

    return result;
  };
  /**
   * The <style> node that contains all the collapsing styles
   */


  let styleNode;
  /**
   * Adds "selectorText { display:none!important; }" style
   * @param selectorText
   * @param cssText optional
   */

  const hideBySelector = function (selectorText, cssText) {
    const rule = `${selectorText}{${cssText || 'display: none!important;'}}`;

    if (!styleNode) {
      styleNode = document.createElement('style');
      styleNode.setAttribute('type', 'text/css');
      (document.head || document.documentElement).appendChild(styleNode);
    }

    styleNode.sheet.insertRule(rule, styleNode.sheet.cssRules.length);
  };
  /**
   * Adds "selectorText { display:none!important; }" style
   */


  const hideBySelectorAndTagName = function (selectorText, tagName) {
    if (tagName === 'frame' || tagName === 'iframe') {
      // Use specific style for frames due to these issues:
      // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/346
      // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/355
      // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/347
      // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/733
      hideBySelector(selectorText, 'visibility: hidden!important; height: 0px!important; min-height: 0px!important;');
    } else {
      hideBySelector(selectorText, null);
    }
  };
  /**
   * Creates selector for specified tagName and src attribute
   */


  const createSelectorForSrcAttr = function (srcAttrValue, tagName) {
    return `${tagName}[src="${cssEscape(srcAttrValue)}"]`;
  };
  /**
   * Clears priority for specified styles
   *
   * @param {HTMLElement} element element affected
   * @param {Array.<string>} styles array of style names
   */


  const clearElStylesPriority = function (element, styles) {
    const elementStyle = element.style;
    styles.forEach(prop => {
      const elCssPriority = elementStyle.getPropertyPriority(prop);

      if (elCssPriority && elCssPriority.toLowerCase() === 'important') {
        const elCssValue = elementStyle.getPropertyValue(prop);
        elementStyle.setProperty(prop, elCssValue, null);
      }
    });
  };
  /**
   * Checks if specified element is already collapsed or not.
   * There is a big chance that we've already done it from the background page
   * (see collapseElement method in webrequest.js)
   *
   * @param {HTMLElement} element Element to check
   */


  const isCollapsed = function (element) {
    const computedStyle = window.getComputedStyle(element);
    return computedStyle && computedStyle.display === 'none';
  };
  /**
   * Collapses the specified element using a CSS style if possible (or inline style if not)
   *
   * @param {HTMLElement} element Element to collapse
   * @param {string} elementUrl Element's source url
   */


  const collapseElement = function (element, elementUrl) {
    if (isCollapsed(element)) {
      return;
    }

    const tagName = element.tagName.toLowerCase();

    if (elementUrl) {
      // Check that element still has the same "src" attribute
      // If it has changed, we do not need to collapse it anymore
      if (element.src === elementUrl) {
        // To not to keep track of changing src for elements, we are going to collapse it with a CSS rule
        // But we take element url, cause current source could be already modified
        // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/408
        const srcAttribute = element.getAttribute('src');
        const srcSelector = createSelectorForSrcAttr(srcAttribute, tagName);
        hideBySelectorAndTagName(srcSelector, tagName); // Remove important priority from the element style
        // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/733

        clearElStylesPriority(element, ['display', 'visibility', 'height', 'min-height']);
      } // Do not process it further in any case


      return;
    }

    let cssProperty = 'display';
    let cssValue = 'none';
    const cssPriority = 'important';

    if (tagName === 'frame') {
      cssProperty = 'visibility';
      cssValue = 'hidden';
    }

    const elementStyle = element.style;
    const elCssValue = elementStyle.getPropertyValue(cssProperty);
    const elCssPriority = elementStyle.getPropertyPriority(cssProperty); // <input type="image"> elements try to load their image again
    // when the "display" CSS property is set. So we have to check
    // that it isn't already collapsed to avoid an infinite recursion.

    if (elCssValue !== cssValue || elCssPriority !== cssPriority) {
      elementStyle.setProperty(cssProperty, cssValue, cssPriority);
    }
  };
  /**
   * Removes the collapser's style node
   */


  const clear = function () {
    if (!styleNode) {
      return;
    }

    styleNode.parentNode.removeChild(styleNode);
  }; // EXPOSE


  return {
    collapseElement,
    isCollapsed,
    clear
  };
}();
;// CONCATENATED MODULE: ./Extension/src/content-script/preload.js
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





const preload = function () {
  const requestTypeMap = {
    'img': 'IMAGE',
    'input': 'IMAGE',
    'audio': 'MEDIA',
    'video': 'MEDIA',
    'object': 'OBJECT',
    'frame': 'SUBDOCUMENT',
    'iframe': 'SUBDOCUMENT',
    'embed': 'OBJECT'
  };
  const collapseRequests = Object.create(null);
  let collapseRequestId = 1;
  let cssHitsCounter;
  /**
   * Checks if it is html document
   *
   * @returns {boolean}
   */

  const isHtml = function () {
    return document instanceof HTMLDocument // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/233
    || document instanceof XMLDocument && document.createElement('div') instanceof HTMLDivElement;
  };
  /**
   * Execute scripts in a page context and cleanup itself when execution completes
   * @param {string} script Script to execute
   */


  const executeScript = function (script) {
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'text/javascript'); // grep "localScriptRulesService" for details about script source

    scriptTag.textContent = script;
    const parent = document.head || document.documentElement;
    parent.appendChild(scriptTag);

    if (scriptTag.parentNode) {
      scriptTag.parentNode.removeChild(scriptTag);
    }
  };
  /**
   * Applies JS injections.
   * @param scripts Array with JS scripts and scriptSource ('remote' or 'local')
   */


  const applyScripts = function (scripts) {
    if (!scripts || scripts.length === 0) {
      return;
    }
    /**
     * JS injections are created by JS filtering rules:
     * http://adguard.com/en/filterrules.html#javascriptInjection
     */


    executeScript(scripts);
  };
  /**
   * When Background page receives 'onCommitted' frame event then it sends scripts to corresponding frame
   * It allows us to execute script as soon as possible, because runtime.messaging makes huge overhead
   * If onCommitted event doesn't occur for the frame, scripts will be applied in usual way.
   */


  contentPage.onMessage.addListener((response, sender, sendResponse) => {
    if (response.type === 'injectScripts') {
      // Notify background-page that content-script was received scripts
      sendResponse({
        applied: true
      });

      if (!isHtml()) {
        return;
      }

      applyScripts(response.scripts);
    }
  });
  /**
   * Uses in `initRequestWrappers` method.
   * We insert wrapper's code into http/https documents and dynamically created frames.
   * The last one is due to the circumvention with using iframe's contentWindow.
   */

  const isHttpOrAboutPage = function () {
    const {
      protocol
    } = window.location;
    return protocol.indexOf('http') === 0 || protocol.indexOf('about:') === 0;
  };
  /**
   * Execute several scripts
   * @param {Array<string>} scripts Scripts to execute
   */


  const executeScripts = function (scripts) {
    if (!scripts || scripts.length === 0) {
      return;
    } // Wraps with try catch and appends cleanup


    scripts.unshift('( function () { try {');
    scripts.push("} catch (ex) { console.error('Error executing AG js: ' + ex); } })();");
    executeScript(scripts.join('\r\n'));
  };
  /**
   * Overrides window.RTCPeerConnection running the function from wrappers.js
   * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/588
   */


  const initRequestWrappers = function () {
    // Only for dynamically created frames and http/https documents.
    if (!isHttpOrAboutPage()) {
      return;
    }
    /**
     * The code below is supposed to be used in WebExt extensions.
     * This code overrides RTCPeerConnection constructor, so that we could inspect & block them.
     */


    initPageMessageListener();
    const wrapperScriptName = `wrapper-script-${Math.random().toString().substr(2)}`;
    const script = `(${injectPageScriptAPI.toString()})('${wrapperScriptName}', true);`;
    executeScripts([script]);
  };
  /**
   * Extracts element URL from the dom node
   * @param element DOM node
   */


  const getElementUrl = function (element) {
    let elementUrl = element.src || element.data;

    if (!elementUrl || elementUrl.indexOf('http') !== 0 // Some sources could not be set yet, lazy loaded images or smth.
    // In some cases like on gog.com, collapsing these elements could break
    // the page script loading their sources
    || elementUrl === element.baseURI) {
      return null;
    } // truncate too long urls
    // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1493


    const MAX_URL_LENGTH = 16 * 1024;

    if (elementUrl.length > MAX_URL_LENGTH) {
      elementUrl = elementUrl.slice(0, MAX_URL_LENGTH);
    }

    return elementUrl;
  };
  /**
   * Saves collapse request (to be reused after we get result from bg page)
   * @param element Element to check
   * @return request ID
   */


  const saveCollapseRequest = function (element) {
    const tagName = element.tagName.toLowerCase();
    const requestId = collapseRequestId;
    collapseRequestId += 1;
    collapseRequests[requestId] = {
      element,
      src: element.src,
      tagName
    };
    return requestId;
  };
  /**
   * Response callback for "processShouldCollapse" message.
   * @param response Response got from the background page
   */


  const onProcessShouldCollapseResponse = function (response) {
    if (!response) {
      return;
    } // Get original collapse request


    const collapseRequest = collapseRequests[response.requestId];

    if (!collapseRequest) {
      return;
    }

    delete collapseRequests[response.requestId];
    const {
      element
    } = collapseRequest;

    if (response.collapse === true) {
      const elementUrl = collapseRequest.src;
      ElementCollapser.collapseElement(element, elementUrl);
    }
  };
  /**
   * Checks if element is blocked by AG and should be hidden
   * @param element Element to check
   */


  const checkShouldCollapseElement = async function (element) {
    const requestType = requestTypeMap[element.localName];

    if (!requestType) {
      return;
    }

    const elementUrl = getElementUrl(element);

    if (!elementUrl) {
      return;
    }

    if (ElementCollapser.isCollapsed(element)) {
      return;
    } // Save request to a map (it will be used in response callback)


    const requestId = saveCollapseRequest(element); // Send a message to the background page to check if the element really should be collapsed

    const message = {
      type: MESSAGE_TYPES.PROCESS_SHOULD_COLLAPSE,
      elementUrl,
      documentUrl: document.URL,
      requestType,
      requestId
    };
    const response = await contentPage.sendMessage(message);
    onProcessShouldCollapseResponse(response);
  };
  /**
   * Checks if loaded element is blocked by AG and should be hidden
   * @param event Load or error event
   */


  const checkShouldCollapse = function (event) {
    const element = event.target;
    const eventType = event.type;
    const tagName = element.tagName.toLowerCase();
    const expectedEventType = tagName === 'iframe' || tagName === 'frame' || tagName === 'embed' ? 'load' : 'error';

    if (eventType !== expectedEventType) {
      return;
    }

    checkShouldCollapseElement(element);
  };
  /**
   * Init listeners for error and load events.
   * We will then check loaded elements if they are blocked by our extension.
   * In this case we'll hide these blocked elements.
   */


  const initCollapseEventListeners = function () {
    document.addEventListener('error', checkShouldCollapse, true); // We need to listen for load events to hide blocked iframes (they don't raise error event)

    document.addEventListener('load', checkShouldCollapse, true);
  };
  /**
   * Sets "style" DOM element content.
   * @param styleEl       "style" DOM element
   * @param cssContent    CSS content to set
   */


  const setStyleContent = function (styleEl, cssContent) {
    styleEl.textContent = cssContent;
  };
  /**
   * Protects specified style element from changes to the current document
   * Add a mutation observer, which is adds our rules again if it was removed
   *
   * @param protectStyleEl protected style element
   */


  const protectStyleElementContent = function (protectStyleEl) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    if (!MutationObserver) {
      return;
    }
    /* observer, which observe protectStyleEl inner changes, without deleting styleEl */


    const innerObserver = new MutationObserver(mutations => {
      for (let i = 0; i < mutations.length; i += 1) {
        const m = mutations[i];

        if (protectStyleEl.hasAttribute('mod') && protectStyleEl.getAttribute('mod') === 'inner') {
          protectStyleEl.removeAttribute('mod');
          break;
        }

        protectStyleEl.setAttribute('mod', 'inner');
        let isProtectStyleElModified = false;
        /**
         * further, there are two mutually exclusive situations: either there were changes
         * the text of protectStyleEl, either there was removes a whole child "text"
         * element of protectStyleEl we'll process both of them
         */

        if (m.removedNodes.length > 0) {
          for (let j = 0; j < m.removedNodes.length; j += 1) {
            isProtectStyleElModified = true;
            protectStyleEl.appendChild(m.removedNodes[j]);
          }
        } else if (m.oldValue) {
          isProtectStyleElModified = true;
          protectStyleEl.textContent = m.oldValue;
        }

        if (!isProtectStyleElModified) {
          protectStyleEl.removeAttribute('mod');
        }
      }
    });
    innerObserver.observe(protectStyleEl, {
      'childList': true,
      'characterData': true,
      'subtree': true,
      'characterDataOldValue': true
    });
  };
  /**
   * Applies CSS stylesheets
   *
   * @param css Array with CSS stylesheets
   */


  const applyCss = function (css) {
    if (!css || css.length === 0) {
      return;
    }

    const stylesheet = css.join('\n');
    const styleEl = document.createElement('style');
    styleEl.setAttribute('type', 'text/css');
    setStyleContent(styleEl, stylesheet);
    (document.head || document.documentElement).appendChild(styleEl);
    protectStyleElementContent(styleEl);
  };
  /**
   * Applies Extended Css stylesheet
   *
   * @param extendedCss Array with ExtendedCss stylesheets
   */


  const applyExtendedCss = function (extendedCss) {
    if (!extendedCss || !extendedCss.length) {
      return;
    }

    const styleSheet = extendedCss.join('\n');

    if (!styleSheet) {
      return;
    }

    const extcss = new index.ExtendedCss({
      styleSheet,
      beforeStyleApplied: cssHitsCounter ? cssHitsCounter.countAffectedByExtendedCss.bind(cssHitsCounter) : el => el
    });
    extcss.apply();
  };
  /**
   * Applies CSS and extended CSS stylesheets
   * @param selectors     Object with the stylesheets got from the background page.
   */


  const applySelectors = function (selectors) {
    if (!selectors) {
      return;
    }

    applyCss(selectors.css);
    applyExtendedCss(selectors.extendedCss);
  };
  /**
   * Response callback for "processShouldCollapseMany" message.
   * @param response Response from bg page.
   */


  const onProcessShouldCollapseManyResponse = function (response) {
    if (!response) {
      return;
    }

    const {
      requests
    } = response;

    for (let i = 0; i < requests.length; i += 1) {
      const collapseRequest = requests[i];
      onProcessShouldCollapseResponse(collapseRequest);
    }
  };
  /**
   * Collects all elements from the page and checks if we should hide them.
   */


  const checkBatchShouldCollapse = async () => {
    const requests = []; // Collect collapse requests
    // eslint-disable-next-line guard-for-in,no-restricted-syntax

    for (const tagName in requestTypeMap) {
      const requestType = requestTypeMap[tagName];
      const elements = document.getElementsByTagName(tagName);

      for (let j = 0; j < elements.length; j += 1) {
        const element = elements[j];
        const elementUrl = getElementUrl(element);

        if (!elementUrl) {
          continue;
        }

        const requestId = saveCollapseRequest(element);
        requests.push({
          elementUrl,
          requestType,
          requestId,
          tagName
        });
      }
    }

    const message = {
      type: MESSAGE_TYPES.PROCESS_SHOULD_COLLAPSE_MANY,
      requests,
      documentUrl: document.URL
    }; // Send all prepared requests in one message

    onProcessShouldCollapseManyResponse(await contentPage.sendMessage(message));
  };
  /**
   * This method is used when we need to check all page elements with collapse rules.
   * We need this when the browser is just started and add-on is not yet initialized.
   * In this case content scripts waits for add-on initialization and the
   * checks all page elements.
   */


  const initBatchCollapse = function () {
    if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
      checkBatchShouldCollapse();
    } else {
      document.addEventListener('DOMContentLoaded', checkBatchShouldCollapse);
    }
  };
  /**
   * Processes response from the background page containing CSS and JS injections
   * @param response Response from the background page
   */


  const processCssAndScriptsResponse = response => {
    if (!response || response.requestFilterReady === false) {
      /**
       * This flag (requestFilterReady) means that we should wait for a while, because the
       * request filter is not ready yet. This is possible only on browser startup.
       * In this case we'll delay injections until extension is fully initialized.
       */
      // eslint-disable-next-line no-use-before-define
      setTimeout(tryLoadCssAndScripts, 100);
      return;
    }

    if (response.collectRulesHits) {
      cssHitsCounter = new index.CssHitsCounter(stats => {
        contentPage.sendMessage({
          type: MESSAGE_TYPES.SAVE_CSS_HITS_STATS,
          stats
        });
      });
    }

    if (response.collapseAllElements) {
      /**
       * This flag (collapseAllElements) means that we should check all page elements
       * and collapse them if needed. Why? On browser startup we can't block some
       * ad/tracking requests because extension is not yet initialized when
       * these requests are executed. At least we could hide these elements.
       */
      applySelectors(response.selectors);
      applyScripts(response.scripts);
      initBatchCollapse();
    } else {
      applySelectors(response.selectors);
      applyScripts(response.scripts);
    }
  };
  /**
   * Loads CSS and JS injections
   */


  const tryLoadCssAndScripts = async () => {
    const message = {
      type: MESSAGE_TYPES.GET_SELECTORS_AND_SCRIPTS,
      documentUrl: window.location.href
    };
    /**
     * Sending message to background page and passing a callback function
     */

    processCssAndScriptsResponse(await contentPage.sendMessage(message));
  };
  /**
   * Initializes cookie content script
   *
   * @return {Promise<void>}
   */


  const initCookieController = async () => {
    const response = await contentPage.sendMessage({
      type: MESSAGE_TYPES.GET_COOKIE_RULES,
      documentUrl: window.location.href
    });

    if (!response) {
      return;
    }

    if (response.rulesData) {
      try {
        const cookieController = new index.CookieController(({
          cookieName,
          cookieValue,
          cookieDomain,
          ruleText,
          thirdParty,
          filterId
        }) => {
          contentPage.sendMessage({
            type: MESSAGE_TYPES.SAVE_COOKIE_LOG_EVENT,
            data: {
              cookieName,
              cookieValue,
              cookieDomain,
              ruleText,
              thirdParty,
              filterId
            }
          });
        });
        cookieController.apply(response.rulesData);
      } catch (e) {// Ignore exceptions
      }
    }
  };
  /**
   * Initializing content script
   */


  const init = function () {
    if (!isHtml()) {
      return;
    }

    initRequestWrappers();
    initCollapseEventListeners();
    tryLoadCssAndScripts();
    initCookieController();
  };

  return {
    init
  };
}();
;// CONCATENATED MODULE: ./Extension/src/content-script/content-utils.js
/* eslint-disable max-len */

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


const contentUtils = function () {
  const MAX_Z_INDEX = '2147483647';
  /**
   * Create style element with provided css
   * @param css
   * @returns {any | HTMLElement}
   */

  const createStyleElement = css => {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(css));
    return styleElement;
  };
  /**
   * Creates iframe and appends it after target open tag
   * @param target Node where to append iframe with html
   * @param html html string to write inside iframe
   * @param alertStyles popup styles text
   * @returns {HTMLElement} iframe element
   */


  const appendIframe = (target, html, alertStyles) => {
    const styleElement = createStyleElement(alertStyles);
    const prependedHtml = `${styleElement.outerHTML}\n${html}`;
    const iframe = document.createElement('iframe');
    target.insertAdjacentElement('afterbegin', iframe);
    iframe.src = 'about:blank';
    iframe.style.zIndex = MAX_Z_INDEX;
    iframe.srcdoc = prependedHtml;
    return iframe;
  };
  /**
   * Creates div and appends it to the page
   * @param target
   * @param html
   * @returns {any | HTMLElement}
   */


  const appendDiv = (target, html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    target.insertAdjacentElement('afterbegin', div);
    div.style.zIndex = MAX_Z_INDEX;
    return div;
  };
  /**
   * If isAdguardTab we append div, else we append iframe
   * @param target
   * @param html
   * @param isAdguardTab
   * @param alertStyles
   * @returns {HTMLElement}
   */


  const appendAlertElement = (target, html, isAdguardTab, alertStyles) => {
    const stylesElement = createStyleElement(alertStyles);
    document.body.insertAdjacentElement('afterbegin', stylesElement);

    if (isAdguardTab) {
      return appendDiv(target, html);
    }

    return appendIframe(target, html, alertStyles);
  };
  /**
   * Generates alert html
   * @param {string} title
   * @param {string} text
   * @returns {string}
   */


  const genAlertHtml = (title, text) => {
    let descBlock = '';

    if (text && text.length > 0) {
      descBlock = `<div class="adguard-popup-alert__desc">
                            ${text}
                        </div>`;
    } // don't show description text if it is same as title or if it is equal to undefined


    if (title === text || text === 'undefined') {
      descBlock = '';
    }

    let titleBlock = '';

    if (title && title.length > 0) {
      titleBlock = `<div class="adguard-popup-alert__title">
                            ${title}
                        </div>`;
    }

    return `<div class="adguard-popup-alert">
                    ${titleBlock}
                    ${descBlock}
                </div>`;
  };
  /**
   * Shows alert popup.
   * Popup content is added right to the page content.
   *
   * @param message Message text
   */


  function showAlertPopup(message) {
    const {
      text,
      title,
      isAdguardTab,
      alertStyles
    } = message;

    if (!title && !text) {
      return;
    }

    let messages = [];

    if (Array.isArray(text)) {
      messages = text;
    } else {
      messages = [text];
    }

    let fullText = '';

    for (let i = 0; i < messages.length; i += 1) {
      if (i > 0) {
        fullText += ', ';
      }

      fullText += messages[i];
    }

    const alertDivHtml = genAlertHtml(title, fullText);
    const triesCount = 10;

    function appendPopup(count) {
      if (count >= triesCount) {
        return;
      }

      if (document.body) {
        const alertElement = appendAlertElement(document.body, alertDivHtml, isAdguardTab, alertStyles);
        alertElement.classList.add('adguard-alert-iframe');
        setTimeout(() => {
          if (alertElement && alertElement.parentNode) {
            alertElement.parentNode.removeChild(alertElement);
          }
        }, 4000);
      } else {
        setTimeout(() => {
          appendPopup(count + 1);
        }, 500);
      }
    }

    appendPopup(0);
  }
  /**
   * Shows version updated popup.
   * Popup content is added right to the page content.
   *
   * @param {{title,description, changelogHref, changelogText, offer, offerDesc, offerButtonHref, offerButtonText}} message
   */


  function showVersionUpdatedPopup(message) {
    const {
      title,
      offer,
      offerDesc,
      description,
      isAdguardTab,
      changelogHref,
      changelogText,
      offerButtonHref,
      offerButtonText,
      showPromoNotification,
      disableNotificationText,
      alertStyles
    } = message;
    const updateIframeHtml = `
                            <div id="adguard-new-version-popup" class="adguard-update-popup adguard-update-popup--active${showPromoNotification ? ' adguard-update-popup--promo' : ''}">
                                <div id="adguard-new-version-popup-close" class="adguard-update-popup__close close-iframe"></div>
                                <div class="adguard-update-popup__logo"></div>
                                <div class="adguard-update-popup__title">
                                    ${title}
                                </div>
                                <div class="adguard-update-popup__desc">
                                    ${description}
                                </div>
                                <div class="adguard-update-popup__links">
                                    <a href="${changelogHref}" class="adguard-update-popup__link close-iframe" target="_blank">
                                        ${changelogText}
                                    </a>
                                    <a href="#" class="adguard-update-popup__link adguard-update-popup__link--disable close-iframe disable-notifications">
                                        ${disableNotificationText}
                                    </a>
                                </div>
                                <div class="adguard-update-popup__offer${showPromoNotification ? ' adguard-update-popup__offer--show' : ''}">
                                    <div class="adguard-update-popup__offer-inner">
                                        <div class="adguard-update-popup__offer-desc-wr">
                                            <div class="adguard-update-popup__offer-desc">
                                                <div>
                                                    ${offer}
                                                </div>
                                                ${offerDesc && `<div>${offerDesc}</div>`}
                                            </div>
                                        </div>
                                        <div class="adguard-update-popup__offer-bottom">
                                            <a href="${offerButtonHref}" class="adguard-update-popup__btn close-iframe set-notification-viewed${showPromoNotification ? ' adguard-update-popup__btn--promo' : ''}" target="_blank">
                                                ${offerButtonText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    const triesCount = 10;

    const handleCloseIframe = iframe => {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const closeElements = iframeDocument.querySelectorAll('.close-iframe');

      if (closeElements.length > 0) {
        closeElements.forEach(element => {
          element.addEventListener('click', () => {
            if (element.classList.contains('disable-notifications')) {
              // disable update notifications
              contentPage.sendMessage({
                type: MESSAGE_TYPES.CHANGE_USER_SETTING,
                key: 'show-app-updated-disabled',
                value: true
              });
            }

            if (showPromoNotification && element.classList.contains('set-notification-viewed')) {
              contentPage.sendMessage({
                type: 'setNotificationViewed',
                withDelay: false
              });
            } // Remove iframe after click event fire on link
            // NOTICE: if here is used value equal to 0,
            // then iframe is closed early than link is clicked


            const REMOVE_FRAMEWORK_TIMEOUT_MS = 10;
            setTimeout(() => {
              iframe.parentNode.removeChild(iframe);
            }, REMOVE_FRAMEWORK_TIMEOUT_MS);
          });
        });
        return true;
      }

      return false;
    };

    function appendPopup(count) {
      if (count >= triesCount) {
        return;
      }

      if (document.body && !isAdguardTab) {
        const stylesElement = createStyleElement(alertStyles);
        document.body.insertAdjacentElement('afterbegin', stylesElement);
        const iframe = appendIframe(document.body, updateIframeHtml, alertStyles);
        iframe.classList.add('adguard-update-iframe');
        const isListening = handleCloseIframe(iframe);

        if (!isListening) {
          iframe.addEventListener('load', () => {
            handleCloseIframe(iframe);
          });
        }
      } else {
        setTimeout(() => {
          appendPopup(count + 1);
        }, 500);
      }
    }

    appendPopup(0);
  }
  /**
   * Reload page without cache
   */


  function noCacheReload() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', document.location.href);
    xhr.setRequestHeader('Pragma', 'no-cache');
    xhr.setRequestHeader('Expires', '-1');
    xhr.setRequestHeader('Expires', 'no-cache');

    const reload = () => {
      document.location.reload(true);
    };

    xhr.onload = reload;
    xhr.onerror = reload;
    xhr.onabort = reload;
    xhr.send(null);
  }

  const init = () => {
    if (window !== window.top) {
      return;
    }

    if (!(document instanceof HTMLDocument)) {
      return;
    }
    /**
     * On extension startup contentPage is undefined
     */


    if (typeof contentPage === 'undefined') {
      return;
    }

    contentPage.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === 'show-alert-popup') {
        showAlertPopup(message);
      } else if (message.type === 'show-version-updated-popup') {
        showVersionUpdatedPopup(message);
        sendResponse(true);
      } else if (message.type === 'no-cache-reload') {
        noCacheReload();
      } else if (message.type === 'update-tab-url') {
        window.location = message.url;
      }
    });
  };

  return {
    init
  };
}();
;// CONCATENATED MODULE: ./Extension/pages/content-script-start/index.js


 // expose content page for subscribe.js

__webpack_require__.g.contentPage = contentPage;
preload.init();
contentUtils.init();
})();

/******/ })()
;