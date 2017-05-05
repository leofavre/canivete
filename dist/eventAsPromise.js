import isString from "lodash-es/isString";
import _isElementOrDocumentOrWindow from "./internal/dom/_isElementOrDocumentOrWindow";
import _throwErrorIf from "./internal/common/_throwErrorIf";

/**
 * Transforms a DOM event into a promise.
 * 
 * This functions takes as parameters: a DOM element,
 * the name of the event to be listened for
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
 *
 * @param  {(HTMLElement|HTMLDocument|Window)} domEl The DOM element.
 * @param  {string} evtName The event to be listened for.
 * @param  {function} [happened = domEl => false] The verification function.
 * @return {Promise} When fulfilled, returns the DOM element.
 *
 * @example
 * let checkbox = document.createElement("input");
 * checkbox.type = "checkbox";
 * document.body.appendChild(checkbox);
 *
 * eventAsPromise(checkbox, "change")
 * 	.then(doSomethingAfterChange);
 *
 * @example
 * let imageEl = document.createElement("img");
 * imageEl.src = "img.jpg";
 * document.body.appendChild(imageEl);
 *
 * eventAsPromise(imageEl, "load", imageEl => imageEl.complete)
 * 	.then(doSomethingAfterImageLoaded);
 */
const eventAsPromise = (domEl, evtName, happened = domEl => false) => {
	_throwErrorIf(!_isElementOrDocumentOrWindow(domEl), "An HTMLElement, document or window are expected as first parameter.");
	_throwErrorIf(!isString(evtName), "A string is expected as second parameter.");

	return new Promise(resolve => {
		const dealWithEvent = evt => {
			domEl.removeEventListener(evtName, dealWithEvent, true);
			resolve(domEl);
		};

		if (happened(domEl)) {
			resolve(domEl);
		}
		else {
			domEl.addEventListener(evtName, dealWithEvent, true);
		}
	});
};

export default eventAsPromise;
