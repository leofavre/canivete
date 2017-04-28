import isString from "lodash-es/isString";
import _isElementOrDocumentOrWindow from "./internal/dom/_isElementOrDocumentOrWindow";
import _throwErrorIf from "./internal/common/_throwErrorIf";

/**
 * Triggers a custom DOM event.
 *
 * @category Event
 * @param  {(HTMLElement|HTMLDocument|Window)} domEl The DOM element that triggers the event.
 * @param  {string} evtName The event name.
 * @param  {boolean} [bubbles = false] Whether the event bubbles.
 * @param  {boolean} [cancelable = false] Whether the event can be canceled.
 * @param  {*} [detail] Any information passed along.
 *
 * @example
 * let popupButton = document.querySelector(".popup__button"),
 * 	popupLayer = document.querySelector(".popup__layer");
 * 
 * popupButton.addEventListener("click", evt => {
 * 	trigger(popupLayer, "open");
 * });
 */
const trigger = (domEl, evtName, bubbles = false, cancelable = false, detail = undefined) => {
	_throwErrorIf(!_isElementOrDocumentOrWindow(domEl), "An HTMLElement, document or window are expected as first parameter.");
	_throwErrorIf(!isString(evtName), "A string is expected as second parameter.");

	let evt;

	if (window.CustomEvent != null) {
		evt = document.createEvent("CustomEvent");
		evt.initCustomEvent(evtName, bubbles, cancelable, detail);
	}
	else {
		evt = new CustomEvent(evtName, {
			bubbles,
			cancelable,
			detail
		});
	}

	domEl.dispatchEvent(evt);
};

export default trigger;
