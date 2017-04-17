import _isString from "./internal/string/_isString";
import _isElement from "./internal/node/_isElement";

/**
 * Treats a DOM event as a promise.
 * 
 * This functions takes as parameters: a DOM element,
 * the name of the event that will be listened for
 * and a function that verifies if the event has already
 * happened, which, in turn, receives the DOM element
 * as parameter.
 *
 * Like all promises in Javascript, this function will
 * only fulfill once, either when the verification function
 * returns true or when the event occurs for the first time.
 *
 * Note that the function throws an error is the first two
 * parameters are not a DOM element and a string.
 *
 * @category Promise
 * @param  {HTMLElement} domElement The DOM element.
 * @param  {String} eventName The name of the event that will be listened for.
 * @param  {Function} [hasAlreadyHappened = domElement => false] The verification function.
 * @return {Promise} When fulfilled, returns the DOM element.
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
 *
 * var image = document.createElement("img");
 * image.src = "https://www.w3.org/Icons/w3c_home";
 * document.body.appendChild(image);
 *
 * eventAsPromise(image, "load", image => image.complete)
 * 	.then(domElement => console.log(domElement.src));
 *
 * // => "https://www.w3.org/Icons/w3c_home"
 * // shown as soon as the image is loaded, even if loading happens before the promise is created.
 */
const eventAsPromise = (domElement, eventName, hasAlreadyHappened = domElement => false) => {
	if (!_isElement(domElement) || !_isString(eventName)) {
		throw new Error("A DOM element and a string are expected as parameters.");
	}

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
