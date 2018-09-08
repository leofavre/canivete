import _splitEventStr from "./_splitEventStr.js";
import _throwErrorIf from "../validation/_throwErrorIf.js";
import _isString from "../helpers/_isString.js";
import _domElementsOrDocumentOrWindowToArray from "../dom/_domElementsOrDocumentOrWindowToArray.js";

const _reactToEvent = (methodName, domEls, eventStr, callback, useCapture) => {
	_throwErrorIf(!_isString(eventStr), "A string is expected as second parameter.");
	_splitEventStr(eventStr).forEach(eventType => _domElementsOrDocumentOrWindowToArray(domEls).forEach(domEl => domEl[methodName](eventType, callback, useCapture)));
};

export default _reactToEvent;
