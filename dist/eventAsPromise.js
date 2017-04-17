/**
 * Treats a DOM Event as a Promise.
 * 
 * This functions takes as parameters: a DOM Element,
 * the name of the event that will be listened for
 * and a function that verifies if the event has already
 * happened, which, in turn, receives the DOM Element
 * as parameter.
 *
 * @category Promise
 * @param  {HTMLElement} domElement The DOM Element.
 * @param  {String} eventName The name of the event that will be listened for.
 * @param  {Function} [hasAlreadyHappened = domElement => false] The verification function.
 * @return {Promise} When fullfiled, returns the DOM Element.
 *
 * @example
 * var checkbox = document.createElement("input");
 * checkbox.type = "checkbox";
 * document.body.appendChild(checkbox);
 *
 * eventAsPromise(checkbox, "change")
 * 	.then(domElement => console.log(domElement.checked));
 *
 * // => true
 * // shown as soon as the checkbox is clicked for the first time
 */
const eventAsPromise = (domElement, eventName, hasAlreadyHappened = domElement => false) => {
	return new Promise(resolve => {
		const dealWithEvent = evt => {
			domElement.removeEventListener(eventName, dealWithEvent, true);
			resolve(domElement);
		};

		if (hasAlreadyHappened(domElement)) {
			resolve(domElement);
		}
		else {
			domElement.addEventListener(eventName, dealWithEvent, true);
		}
	});
};

export default eventAsPromise;
