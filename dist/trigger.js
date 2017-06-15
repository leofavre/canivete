import _isString from "./internal/helpers/_isString";
import _isElementOrDocumentOrWindow from "./internal/dom/_isElementOrDocumentOrWindow";
import _throwErrorIf from "./internal/validation/_throwErrorIf";

/**
 * Triggers a custom DOM event.
 *
 * @category Event
 * @param  {(Window|HTMLDocument|HTMLElement)} domEl The DOM element, including `document` and `window`.
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
	_throwErrorIf(!_isElementOrDocumentOrWindow(domEl), "An HTMLElement, including document or window, is expected as first parameter.");
	_throwErrorIf(!_isString(evtName), "A string is expected as second parameter.");

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
