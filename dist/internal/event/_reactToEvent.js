import _splitEventStr from "./_splitEventStr";
import _domElementsOrDocumentOrWindowAsArray from "../dom/_domElementsOrDocumentOrWindowAsArray";

const _reactToEvent = (methodName, domEls, eventStr, callback, useCapture) => {
	_splitEventStr(eventStr).forEach(eventType => _domElementsOrDocumentOrWindowAsArray(domEls).forEach(domEl => domEl[methodName](eventType, callback, useCapture)));
};

export default _reactToEvent;
