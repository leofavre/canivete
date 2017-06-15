import _splitEventStr from "./_splitEventStr";
import _throwErrorIf from "../validation/_throwErrorIf";
import _isString from "../helpers/_isString";
import _domElementsOrDocumentOrWindowToArray from "../dom/_domElementsOrDocumentOrWindowToArray";

const _reactToEvent = (methodName, domEls, eventStr, callback, useCapture) => {
	_throwErrorIf(!_isString(eventStr), "A string is expected as second parameter.");
	_splitEventStr(eventStr).forEach(eventType => _domElementsOrDocumentOrWindowToArray(domEls).forEach(domEl => domEl[methodName](eventType, callback, useCapture)));
};

export default _reactToEvent;
