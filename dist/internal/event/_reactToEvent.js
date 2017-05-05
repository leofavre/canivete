import _splitEventStr from "./_splitEventStr";
import _domElementsAsArray from "../dom/_domElementsAsArray";

const _reactToEvent = (methodName, domEls, eventStr, callback, useCapture) => {
	_splitEventStr(eventStr).forEach(eventType => _domElementsAsArray(domEls).forEach(domEl => domEl[methodName](eventType, callback, useCapture)));
};

export default _reactToEvent;
