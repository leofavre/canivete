import _splitEventStr from "./_splitEventStr";
import _domElementsAsArray from "../dom/_domElementsAsArray";

const _reactToEvent = (methodName, eventStr, domEls, callback, isCapture) => {
	let eventTypes = _splitEventStr(eventStr),
		domElsArr = _domElementsAsArray(domEls);

	eventTypes.forEach(eventType => domElsArr.forEach(domEl => domEl[methodName](eventType, callback, isCapture)));
};

export default _reactToEvent;
