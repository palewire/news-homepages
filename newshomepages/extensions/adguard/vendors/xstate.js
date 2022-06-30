"use strict";
(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([[981],{

/***/ 3388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CR": () => (/* binding */ __read),
/* harmony export */   "XA": () => (/* binding */ __values),
/* harmony export */   "_T": () => (/* binding */ __rest),
/* harmony export */   "ev": () => (/* binding */ __spreadArray),
/* harmony export */   "pi": () => (/* binding */ __assign)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
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
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}




/***/ }),

/***/ 127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BL": () => (/* binding */ start),
/* harmony export */   "IA": () => (/* binding */ nullEvent),
/* harmony export */   "Le": () => (/* binding */ pure),
/* harmony export */   "Mg": () => (/* binding */ errorPlatform),
/* harmony export */   "OU": () => (/* binding */ raise),
/* harmony export */   "RN": () => (/* binding */ choose),
/* harmony export */   "S1": () => (/* binding */ init),
/* harmony export */   "Vx": () => (/* binding */ update),
/* harmony export */   "al": () => (/* binding */ cancel),
/* harmony export */   "cM": () => (/* binding */ log),
/* harmony export */   "dw": () => (/* binding */ invoke),
/* harmony export */   "f0": () => (/* binding */ assign),
/* harmony export */   "lW": () => (/* binding */ send),
/* harmony export */   "sT": () => (/* binding */ stop),
/* harmony export */   "vU": () => (/* binding */ error)
/* harmony export */ });
/* unused harmony exports after, doneState, errorExecution */
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1329);


var start = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Start */ .M.Start;
var stop = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Stop */ .M.Stop;
var raise = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Raise */ .M.Raise;
var send = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Send */ .M.Send;
var cancel = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Cancel */ .M.Cancel;
var nullEvent = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.NullEvent */ .M.NullEvent;
var assign = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Assign */ .M.Assign;
var after = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.After */ .M.After;
var doneState = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.DoneState */ .M.DoneState;
var log = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Log */ .M.Log;
var init = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Init */ .M.Init;
var invoke = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Invoke */ .M.Invoke;
var errorExecution = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.ErrorExecution */ .M.ErrorExecution;
var errorPlatform = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.ErrorPlatform */ .M.ErrorPlatform;
var error = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.ErrorCustom */ .M.ErrorCustom;
var update = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Update */ .M.Update;
var choose = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Choose */ .M.Choose;
var pure = _types_js__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.Pure */ .M.Pure;




/***/ }),

/***/ 1020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AE": () => (/* binding */ toActionObjects),
/* harmony export */   "BL": () => (/* binding */ start),
/* harmony export */   "OU": () => (/* binding */ raise),
/* harmony export */   "Q8": () => (/* binding */ toActionObject),
/* harmony export */   "Sl": () => (/* binding */ doneInvoke),
/* harmony export */   "Tn": () => (/* binding */ forwardTo),
/* harmony export */   "XA": () => (/* binding */ toActivityDefinition),
/* harmony export */   "aT": () => (/* binding */ done),
/* harmony export */   "al": () => (/* binding */ cancel),
/* harmony export */   "bf": () => (/* binding */ initEvent),
/* harmony export */   "e4": () => (/* binding */ after),
/* harmony export */   "f0": () => (/* binding */ assign),
/* harmony export */   "lW": () => (/* binding */ send),
/* harmony export */   "lj": () => (/* binding */ sendParent),
/* harmony export */   "o$": () => (/* binding */ getActionFunction),
/* harmony export */   "sT": () => (/* binding */ stop),
/* harmony export */   "vU": () => (/* binding */ error),
/* harmony export */   "xc": () => (/* binding */ sendUpdate),
/* harmony export */   "yC": () => (/* binding */ resolveActions)
/* harmony export */ });
/* unused harmony exports choose, escalate, isActionObject, log, pure, resolveLog, resolveRaise, resolveSend, resolveStop, respond, sendTo */
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3388);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1329);
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(127);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8351);
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8685);








var initEvent = /*#__PURE__*/(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toSCXMLEvent */ .g5)({
  type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .init */ .S1
});
function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || undefined : undefined;
}
function toActionObject(action, actionFunctionMap) {
  var actionObject;

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(action) || typeof action === 'number') {
    var exec = getActionFunction(action, actionFunctionMap);

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(exec)) {
      actionObject = {
        type: action,
        exec: exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: undefined
      };
    }
  } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(action)) {
    actionObject = {
      // Convert action to string if unnamed
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);

    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(exec)) {
      actionObject = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, action), {
        exec: exec
      });
    } else if (exec) {
      var actionType = exec.type || action.type;
      actionObject = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, exec), action), {
        type: actionType
      });
    } else {
      actionObject = action;
    }
  }

  return actionObject;
}
var toActionObjects = function (action, actionFunctionMap) {
  if (!action) {
    return [];
  }

  var actions = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(action) ? action : [action];
  return actions.map(function (subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
};
function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({
    id: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */

function raise(event) {
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event)) {
    return send(event, {
      to: _types_js__WEBPACK_IMPORTED_MODULE_3__/* .SpecialTargets.Internal */ .K.Internal
    });
  }

  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .raise */ .OU,
    event: event
  };
}
function resolveRaise(action) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .raise */ .OU,
    _event: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toSCXMLEvent */ .g5)(action.event)
  };
}
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */

function send(event, options) {
  return {
    to: options ? options.to : undefined,
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .send */ .lW,
    event: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(event) ? event : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toEventObject */ ._v)(event),
    delay: options ? options.delay : undefined,
    id: options && options.id !== undefined ? options.id : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(event) ? event.name : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getEventType */ .x6)(event)
  };
}
function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event: _event
  }; // TODO: helper function for resolving Expr

  var resolvedEvent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toSCXMLEvent */ .g5)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;

  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }

  var resolvedTarget = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */

function sendParent(event, options) {
  return send(event, (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, options), {
    to: _types_js__WEBPACK_IMPORTED_MODULE_3__/* .SpecialTargets.Parent */ .K.Parent
  }));
}
/**
 * Sends an event to an actor.
 *
 * @param actor The `ActorRef` to send the event to.
 * @param event The event to send, or an expression that evaluates to the event to send
 * @param options Send action options
 * @returns An XState send action object
 */

function sendTo(actor, event, options) {
  return send(event, __assign(__assign({}, options), {
    to: actor
  }));
}
/**
 * Sends an update event to this machine's parent.
 */

function sendUpdate() {
  return sendParent(_actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .update */ .Vx);
}
/**
 * Sends an event back to the sender of the original event.
 *
 * @param event The event to send back to the sender
 * @param options Options to pass into the send event
 */

function respond(event, options) {
  return send(event, __assign(__assign({}, options), {
    to: function (_, __, _a) {
      var _event = _a._event;
      return _event.origin; // TODO: handle when _event.origin is undefined
    }
  }));
}

var defaultLogExpr = function (context, event) {
  return {
    context: context,
    event: event
  };
};
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */


function log(expr, label) {
  if (expr === void 0) {
    expr = defaultLogExpr;
  }

  return {
    type: log$1,
    label: label,
    expr: expr
  };
}
var resolveLog = function (action, ctx, _event) {
  return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, action), {
    value: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event: _event
    })
  });
};
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */

var cancel = function (sendId) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .cancel */ .al,
    sendId: sendId
  };
};
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */

function start(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_3__/* .ActionTypes.Start */ .M.Start,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Stops an activity.
 *
 * @param actorRef The activity to stop.
 */

function stop(actorRef) {
  var activity = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(actorRef) ? actorRef : toActivityDefinition(actorRef);
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_3__/* .ActionTypes.Stop */ .M.Stop,
    activity: activity,
    exec: undefined
  };
}
function resolveStop(action, context, _event) {
  var actorRefOrString = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(action.activity) ? action.activity(context, _event.data) : action.activity;
  var resolvedActorRef = typeof actorRefOrString === 'string' ? {
    id: actorRefOrString
  } : actorRefOrString;
  var actionObject = {
    type: _types_js__WEBPACK_IMPORTED_MODULE_3__/* .ActionTypes.Stop */ .M.Stop,
    activity: resolvedActorRef
  };
  return actionObject;
}
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update.
 */

var assign = function (assignment) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .f0,
    assignment: assignment
  };
};
function isActionObject(action) {
  return typeof action === 'object' && 'type' in action;
}
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */

function after(delayRef, id) {
  var idSuffix = id ? "#".concat(id) : '';
  return "".concat(_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ActionTypes.After */ .M.After, "(").concat(delayRef, ")").concat(idSuffix);
}
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */

function done(id, data) {
  var type = "".concat(_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ActionTypes.DoneState */ .M.DoneState, ".").concat(id);
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */

function doneInvoke(id, data) {
  var type = "".concat(_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ActionTypes.DoneInvoke */ .M.DoneInvoke, ".").concat(id);
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
function error(id, data) {
  var type = "".concat(_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ActionTypes.ErrorPlatform */ .M.ErrorPlatform, ".").concat(id);
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
function pure(getActions) {
  return {
    type: ActionTypes.Pure,
    get: getActions
  };
}
/**
 * Forwards (sends) an event to a specified service.
 *
 * @param target The target service to forward the event to.
 * @param options Options to pass into the send action creator.
 */

function forwardTo(target, options) {
  return send(function (_, event) {
    return event;
  }, (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, options), {
    to: target
  }));
}
/**
 * Escalates an error by sending it as an event to this machine's parent.
 *
 * @param errorData The error data to send, or the expression function that
 * takes in the `context`, `event`, and `meta`, and returns the error data to send.
 * @param options Options to pass into the send action creator.
 */

function escalate(errorData, options) {
  return sendParent(function (context, event, meta) {
    return {
      type: error$1,
      data: isFunction(errorData) ? errorData(context, event, meta) : errorData
    };
  }, __assign(__assign({}, options), {
    to: SpecialTargets.Parent
  }));
}
function choose(conds) {
  return {
    type: ActionTypes.Choose,
    conds: conds
  };
}
function resolveActions(machine, currentState, currentContext, _event, actions, preserveActionOrder) {
  if (preserveActionOrder === void 0) {
    preserveActionOrder = false;
  }

  var _a = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__read */ .CR)(preserveActionOrder ? [[], actions] : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .partition */ .uK)(actions, function (action) {
    return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .f0;
  }), 2),
      assignActions = _a[0],
      otherActions = _a[1];

  var updatedContext = assignActions.length ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .updateContext */ .dt)(currentContext, _event, assignActions, currentState) : currentContext;
  var preservedContexts = preserveActionOrder ? [currentContext] : undefined;
  var resolvedActions = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .flatten */ .xH)(otherActions.map(function (actionObject) {
    var _a;

    switch (actionObject.type) {
      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .raise */ .OU:
        return resolveRaise(actionObject);

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .send */ .lW:
        var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays); // TODO: fix ActionTypes.Init

        if (!_environment_js__WEBPACK_IMPORTED_MODULE_4__/* .IS_PRODUCTION */ .M) {
          // warn after resolving as we can create better contextual message here
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .warn */ .ZK)(!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(actionObject.delay) || typeof sendAction.delay === 'number', // tslint:disable-next-line:max-line-length
          "No delay reference for delay expression '".concat(actionObject.delay, "' was found on machine '").concat(machine.id, "'"));
        }

        return sendAction;

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .log */ .cM:
        return resolveLog(actionObject, updatedContext, _event);

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .choose */ .RN:
        {
          var chooseAction = actionObject;
          var matchedActions = (_a = chooseAction.conds.find(function (condition) {
            var guard = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toGuard */ .Qi)(condition.cond, machine.options.guards);
            return !guard || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .evaluateGuard */ .vx)(machine, guard, updatedContext, _event, currentState);
          })) === null || _a === void 0 ? void 0 : _a.actions;

          if (!matchedActions) {
            return [];
          }

          var _b = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__read */ .CR)(resolveActions(machine, currentState, updatedContext, _event, toActionObjects((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toArray */ .qo)(matchedActions), machine.options.actions), preserveActionOrder), 2),
              resolvedActionsFromChoose = _b[0],
              resolvedContextFromChoose = _b[1];

          updatedContext = resolvedContextFromChoose;
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          return resolvedActionsFromChoose;
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .pure */ .Le:
        {
          var matchedActions = actionObject.get(updatedContext, _event.data);

          if (!matchedActions) {
            return [];
          }

          var _c = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__read */ .CR)(resolveActions(machine, currentState, updatedContext, _event, toActionObjects((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .toArray */ .qo)(matchedActions), machine.options.actions), preserveActionOrder), 2),
              resolvedActionsFromPure = _c[0],
              resolvedContext = _c[1];

          updatedContext = resolvedContext;
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          return resolvedActionsFromPure;
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .stop */ .sT:
        {
          return resolveStop(actionObject, updatedContext, _event);
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .f0:
        {
          updatedContext = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .updateContext */ .dt)(updatedContext, _event, [actionObject], currentState);
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          break;
        }

      default:
        var resolvedActionObject = toActionObject(actionObject, machine.options.actions);
        var exec_1 = resolvedActionObject.exec;

        if (exec_1 && preservedContexts) {
          var contextIndex_1 = preservedContexts.length - 1;
          resolvedActionObject = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__assign */ .pi)({}, resolvedActionObject), {
            exec: function (_ctx) {
              var args = [];

              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }

              exec_1.apply(void 0, (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadArray */ .ev)([preservedContexts[contextIndex_1]], (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_2__/* .__read */ .CR)(args), false));
            }
          });
        }

        return resolvedActionObject;
    }
  }).filter(function (a) {
    return !!a;
  }));
  return [resolvedActions, updatedContext];
}




/***/ }),

/***/ 1231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TV": () => (/* binding */ DEFAULT_GUARD_TYPE),
/* harmony export */   "iS": () => (/* binding */ STATE_DELIMITER),
/* harmony export */   "qP": () => (/* binding */ EMPTY_ACTIVITY_MAP),
/* harmony export */   "rt": () => (/* binding */ TARGETLESS_KEY)
/* harmony export */ });
var STATE_DELIMITER = '.';
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = 'xstate.guard';
var TARGETLESS_KEY = '';




/***/ }),

/***/ 8685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ IS_PRODUCTION)
/* harmony export */ });
var IS_PRODUCTION = "production" === 'production';




/***/ }),

/***/ 7572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f0": () => (/* binding */ assign)
/* harmony export */ });
/* unused harmony exports doneInvoke, forwardTo, send, sendParent, sendUpdate */
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1020);















var assign = _actions_js__WEBPACK_IMPORTED_MODULE_0__/* .assign */ .f0,
    send = _actions_js__WEBPACK_IMPORTED_MODULE_0__/* .send */ .lW,
    sendParent = _actions_js__WEBPACK_IMPORTED_MODULE_0__/* .sendParent */ .lj,
    sendUpdate = _actions_js__WEBPACK_IMPORTED_MODULE_0__/* .sendUpdate */ .xc,
    forwardTo = _actions_js__WEBPACK_IMPORTED_MODULE_0__/* .forwardTo */ .Tn,
    doneInvoke = _actions_js__WEBPACK_IMPORTED_MODULE_0__/* .doneInvoke */ .Sl;




/***/ }),

/***/ 1329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ SpecialTargets),
/* harmony export */   "M": () => (/* binding */ ActionTypes)
/* harmony export */ });
var ActionTypes;

(function (ActionTypes) {
  ActionTypes["Start"] = "xstate.start";
  ActionTypes["Stop"] = "xstate.stop";
  ActionTypes["Raise"] = "xstate.raise";
  ActionTypes["Send"] = "xstate.send";
  ActionTypes["Cancel"] = "xstate.cancel";
  ActionTypes["NullEvent"] = "";
  ActionTypes["Assign"] = "xstate.assign";
  ActionTypes["After"] = "xstate.after";
  ActionTypes["DoneState"] = "done.state";
  ActionTypes["DoneInvoke"] = "done.invoke";
  ActionTypes["Log"] = "xstate.log";
  ActionTypes["Init"] = "xstate.init";
  ActionTypes["Invoke"] = "xstate.invoke";
  ActionTypes["ErrorExecution"] = "error.execution";
  ActionTypes["ErrorCommunication"] = "error.communication";
  ActionTypes["ErrorPlatform"] = "error.platform";
  ActionTypes["ErrorCustom"] = "xstate.error";
  ActionTypes["Update"] = "xstate.update";
  ActionTypes["Pure"] = "xstate.pure";
  ActionTypes["Choose"] = "xstate.choose";
})(ActionTypes || (ActionTypes = {}));

var SpecialTargets;

(function (SpecialTargets) {
  SpecialTargets["Parent"] = "#_parent";
  SpecialTargets["Internal"] = "#_internal";
})(SpecialTargets || (SpecialTargets = {}));




/***/ }),

/***/ 8351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* binding */ isActor),
/* harmony export */   "ET": () => (/* binding */ path),
/* harmony export */   "HD": () => (/* binding */ isString),
/* harmony export */   "HV": () => (/* binding */ isBehavior),
/* harmony export */   "JQ": () => (/* binding */ isBuiltInEvent),
/* harmony export */   "L$": () => (/* binding */ symbolObservable),
/* harmony export */   "O4": () => (/* binding */ isMachine),
/* harmony export */   "Q8": () => (/* binding */ mapValues),
/* harmony export */   "Q9": () => (/* binding */ toStatePath),
/* harmony export */   "QX": () => (/* binding */ mapContext),
/* harmony export */   "Qi": () => (/* binding */ toGuard),
/* harmony export */   "SA": () => (/* binding */ toStatePaths),
/* harmony export */   "W": () => (/* binding */ matchesState),
/* harmony export */   "WM": () => (/* binding */ toStateValue),
/* harmony export */   "ZK": () => (/* binding */ warn),
/* harmony export */   "_v": () => (/* binding */ toEventObject),
/* harmony export */   "bi": () => (/* binding */ isObservable),
/* harmony export */   "bx": () => (/* binding */ createInvokeId),
/* harmony export */   "dt": () => (/* binding */ updateContext),
/* harmony export */   "g5": () => (/* binding */ toSCXMLEvent),
/* harmony export */   "gk": () => (/* binding */ nestedPath),
/* harmony export */   "ib": () => (/* binding */ mapFilterValues),
/* harmony export */   "j": () => (/* binding */ toInvokeSource),
/* harmony export */   "jh": () => (/* binding */ toTransitionConfigArray),
/* harmony export */   "kJ": () => (/* binding */ isArray),
/* harmony export */   "mf": () => (/* binding */ isFunction),
/* harmony export */   "on": () => (/* binding */ pathToStateValue),
/* harmony export */   "qo": () => (/* binding */ toArray),
/* harmony export */   "rg": () => (/* binding */ normalizeTarget),
/* harmony export */   "uK": () => (/* binding */ partition),
/* harmony export */   "v4": () => (/* binding */ reportUnhandledExceptionOnInvocation),
/* harmony export */   "vx": () => (/* binding */ evaluateGuard),
/* harmony export */   "x6": () => (/* binding */ getEventType),
/* harmony export */   "xH": () => (/* binding */ flatten),
/* harmony export */   "y8": () => (/* binding */ isPromiseLike),
/* harmony export */   "yv": () => (/* binding */ updateHistoryValue),
/* harmony export */   "zM": () => (/* binding */ toObserver)
/* harmony export */ });
/* unused harmony exports getActionType, interopSymbols, isStateLike, keys, pathsToStateValue, toArrayStrict, uniqueId, updateHistoryStates */
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3388);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1231);
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8685);




var _a;
function keys(value) {
  return Object.keys(value);
}
function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .STATE_DELIMITER */ .iS;
  }

  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);

  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    } // Parent more specific than child


    return false;
  }

  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }

  return Object.keys(parentStateValue).every(function (key) {
    if (!(key in childStateValue)) {
      return false;
    }

    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}
function getEventType(event) {
  try {
    return isString(event) || typeof event === 'number' ? "".concat(event) : event.type;
  } catch (e) {
    throw new Error('Events must be strings or objects with a string event.type property.');
  }
}
function getActionType(action) {
  try {
    return isString(action) || typeof action === 'number' ? "".concat(action) : isFunction(action) ? action.name : action.type;
  } catch (e) {
    throw new Error('Actions must be strings or objects with a string action.type property.');
  }
}
function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }

    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'".concat(stateId, "' is not a valid state path."));
  }
}
function isStateLike(state) {
  return typeof state === 'object' && 'value' in state && 'context' in state && 'event' in state && '_event' in state;
}
function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }

  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }

  if (typeof stateValue !== 'string') {
    return stateValue;
  }

  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}
function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }

  var value = {};
  var marker = value;

  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }

  return value;
}
function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = Object.keys(collection);

  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }

  return result;
}
function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a;

  var result = {};

  try {
    for (var _b = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(Object.keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];

      if (!predicate(item)) {
        continue;
      }

      result[key] = iteratee(item, key, collection);
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

  return result;
}
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */

var path = function (props) {
  return function (object) {
    var e_2, _a;

    var result = object;

    try {
      for (var props_1 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return result;
  };
};
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */

function nestedPath(props, accessorProp) {
  return function (object) {
    var e_3, _a;

    var result = object;

    try {
      for (var props_2 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return result;
  };
}
function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }

  if (isString(stateValue)) {
    return [[stateValue]];
  }

  var result = flatten(Object.keys(stateValue).map(function (key) {
    var subStateValue = stateValue[key];

    if (typeof subStateValue !== 'string' && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }

    return toStatePaths(stateValue[key]).map(function (subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}
function pathsToStateValue(paths) {
  var e_4, _a;

  var result = {};

  if (paths && paths.length === 1 && paths[0].length === 1) {
    return paths[0][0];
  }

  try {
    for (var paths_1 = __values(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()) {
      var currentPath = paths_1_1.value;
      var marker = result; // tslint:disable-next-line:prefer-for-of

      for (var i = 0; i < currentPath.length; i++) {
        var subPath = currentPath[i];

        if (i === currentPath.length - 2) {
          marker[subPath] = currentPath[i + 1];
          break;
        }

        marker[subPath] = marker[subPath] || {};
        marker = marker[subPath];
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (paths_1_1 && !paths_1_1.done && (_a = paths_1.return)) _a.call(paths_1);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return result;
}
function flatten(array) {
  var _a;

  return (_a = []).concat.apply(_a, (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadArray */ .ev)([], (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)(array), false));
}
function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }

  return [value];
}
function toArray(value) {
  if (value === undefined) {
    return [];
  }

  return toArrayStrict(value);
}
function mapContext(mapper, context, _event) {
  var e_5, _a;

  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }

  var result = {};

  try {
    for (var _b = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];

      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return result;
}
function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}
function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  } // Check if shape matches the Promise/A+ specification for a "thenable".


  if (value !== null && (isFunction(value) || typeof value === 'object') && isFunction(value.then)) {
    return true;
  }

  return false;
}
function isBehavior(value) {
  return value !== null && typeof value === 'object' && 'transition' in value && typeof value.transition === 'function';
}
function partition(items, predicate) {
  var e_6, _a;

  var _b = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)([[], []], 2),
      truthy = _b[0],
      falsy = _b[1];

  try {
    for (var items_1 = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;

      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }

  return [truthy, falsy];
}
function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function (subHist, key) {
    if (!subHist) {
      return undefined;
    }

    var subStateValue = (isString(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);

    if (!subStateValue) {
      return undefined;
    }

    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}
function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}
function updateContext(context, _event, assignActions, state) {
  if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__/* .IS_PRODUCTION */ .M) {
    warn(!!context, 'Attempting to update undefined context');
  }

  var updatedContext = context ? assignActions.reduce(function (acc, assignAction) {
    var e_7, _a;

    var assignment = assignAction.assignment;
    var meta = {
      state: state,
      action: assignAction,
      _event: _event
    };
    var partialUpdate = {};

    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__values */ .XA)(Object.keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
} // tslint:disable-next-line:no-empty

var warn = function () {};

if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__/* .IS_PRODUCTION */ .M) {
  warn = function (condition, message) {
    var error = condition instanceof Error ? condition : undefined;

    if (!error && condition) {
      return;
    }

    if (console !== undefined) {
      var args = ["Warning: ".concat(message)];

      if (error) {
        args.push(error);
      } // tslint:disable-next-line:no-console


      console.warn.apply(console, args);
    }
  };
}
function isArray(value) {
  return Array.isArray(value);
} // tslint:disable-next-line:ban-types

function isFunction(value) {
  return typeof value === 'function';
}
function isString(value) {
  return typeof value === 'string';
}
function toGuard(condition, guardMap) {
  if (!condition) {
    return undefined;
  }

  if (isString(condition)) {
    return {
      type: _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_GUARD_TYPE */ .TV,
      name: condition,
      predicate: guardMap ? guardMap[condition] : undefined
    };
  }

  if (isFunction(condition)) {
    return {
      type: _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_GUARD_TYPE */ .TV,
      name: condition.name,
      predicate: condition
    };
  }

  return condition;
}
function isObservable(value) {
  try {
    return 'subscribe' in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}
var symbolObservable = /*#__PURE__*/function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}(); // TODO: to be removed in v5, left it out just to minimize the scope of the change and maintain compatibility with older versions of integration paackages

var interopSymbols = (_a = {}, _a[symbolObservable] = function () {
  return this;
}, _a[Symbol.observable] = function () {
  return this;
}, _a);
function isMachine(value) {
  return !!value && '__xstatenode' in value;
}
function isActor(value) {
  return !!value && typeof value.send === 'function';
}
var uniqueId = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var currentId = 0;
  return function () {
    currentId++;
    return currentId.toString(16);
  };
}()));
function toEventObject(event, payload // id?: TEvent['type']
) {
  if (isString(event) || typeof event === 'number') {
    return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({
      type: event
    }, payload);
  }

  return event;
}
function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && '$$type' in event && event.$$type === 'scxml') {
    return event;
  }

  var eventObject = toEventObject(event);
  return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({
    name: eventObject.type,
    data: eventObject,
    $$type: 'scxml',
    type: 'external'
  }, scxmlEvent);
}
function toTransitionConfigArray(event, configLike) {
  var transitions = toArrayStrict(configLike).map(function (transitionLike) {
    if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string' || isMachine(transitionLike)) {
      return {
        target: transitionLike,
        event: event
      };
    }

    return (0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, transitionLike), {
      event: event
    });
  });
  return transitions;
}
function normalizeTarget(target) {
  if (target === undefined || target === _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .TARGETLESS_KEY */ .rt) {
    return undefined;
  }

  return toArray(target);
}
function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
  if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__/* .IS_PRODUCTION */ .M) {
    var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : '';

    if (originalError === currentError) {
      // tslint:disable-next-line:no-console
      console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
    } else {
      var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : ''; // tslint:disable-next-line:no-console

      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
    }
  }
}
function evaluateGuard(machine, guard, context, _event, state) {
  var guards = machine.options.guards;
  var guardMeta = {
    state: state,
    cond: guard,
    _event: _event
  }; // TODO: do not hardcode!

  if (guard.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_GUARD_TYPE */ .TV) {
    return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
  }

  var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];

  if (!condFn) {
    throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine.id, "'."));
  }

  return condFn(context, _event.data, guardMeta);
}
function toInvokeSource(src) {
  if (typeof src === 'string') {
    return {
      type: src
    };
  }

  return src;
}
function toObserver(nextHandler, errorHandler, completionHandler) {
  if (typeof nextHandler === 'object') {
    return nextHandler;
  }

  var noop = function () {
    return void 0;
  };

  return {
    next: nextHandler,
    error: errorHandler || noop,
    complete: completionHandler || noop
  };
}
function createInvokeId(stateNodeId, index) {
  return "".concat(stateNodeId, ":invocation[").concat(index, "]");
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(7572));
/******/ }
]);