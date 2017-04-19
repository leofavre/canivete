import isString from "../node_modules/lodash-es/isString";
import isElement from "../node_modules/lodash-es/isElement";

/**
 * Transforms a DOM event into a promise.
 * 
 * This functions takes as parameters: a DOM element,
 * the name of the event that will be listened for
 * and a function that verifies if the event has already
 * happened, which receives the DOM element as parameter.
 *
 * Like all promises in Javascript, this function will
 * only fulfill once, either if the verification function
 * returns true or when the event occurs for the first time.
 *
 * Note that the function throws an error if the first two
 * parameters are not a DOM element and a string.
 *
 * @category Promise
 * @param  {HTMLElement} domElement The DOM element.
 * @param  {String} eventName The name of the event that will be listened for.
 * @param  {Function} [happened = domElement => false] The verification function.
 * @return {Promise} When fulfilled, returns the DOM element.
 *
 * @example
 * var checkbox = document.createElement("input");
 * checkbox.type = "checkbox";
 * document.body.appendChild(checkbox);
 *
 * eventAsPromise(checkbox, "change")
 * 	.then(checkbox => console.log(checkbox.checked));
 *
 * // => true
 * // shown as soon as the checkbox is clicked for the first time.
 *
 * var image = document.createElement("img");
 * image.src = "https://www.w3.org/Icons/w3c_home";
 * document.body.appendChild(image);
 *
 * eventAsPromise(image, "load", image => image.complete)
 * 	.then(domElement => console.log(domElement.src));
 *
 * // => "https://www.w3.org/Icons/w3c_home"
 * // shown when the image is loaded or as soon as eventAsPromise is called, if the image has already been loaded.
 */
const eventAsPromise = (domElement, eventName, happened = domElement => false) => {
	if (!isElement(domElement) || !isString(eventName)) {
		throw new Error("A DOM element and a string are expected as parameters.");
	}

	return new Promise(resolve => {
		const dealWithEvent = evt => {
			domElement.removeEventListener(eventName, dealWithEvent, true);
			resolve(domElement);
		};

		if (happened(domElement)) {
			resolve(domElement);
		}
		else {
			domElement.addEventListener(eventName, dealWithEvent, true);
		}
	});
};

export default eventAsPromise;