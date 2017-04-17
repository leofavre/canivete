/**
 * Treats a DOM Event as a Promise.
 * 
 * This functions takes as parameters: a DOM Element,
 * the name of the event that will be listened for
 * and a function that verifies if the event has already
 * happened, which, in turn, receives the DOM Element
 * as parameter.
 * 
 * @param  {HTMLElement} domElement The DOM Element.
 * @param  {String} eventName The name of the event that will be listened for.
 * @param  {Function} hasAlreadyHappened The verification function.
 * @return {Promise} When fullfiled, returns the DOM Element.
 */
function eventAsPromise(domElement, eventName, hasAlreadyHappened = domElement => false) {
	return new Promise(resolve => {
		if (hasAlreadyHappened(domElement)) {
			resolve(domElement);
		}
		else {
			domElement.addEventListener(eventName, dealWithEvent, true);
		}

		function dealWithEvent(evt) {
			domElement.removeEventListener(eventName, dealWithEvent, true);
			resolve(domElement);
		}
	});
}

export default eventAsPromise;
