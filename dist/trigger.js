import isString from "lodash-es/isString";
import _isElementOrDocumentOrWindow from "./internal/dom/_isElementOrDocumentOrWindow";

/**
 * Triggers a custom DOM event.
 *
 * @category Event
 * @param  {(HTMLElement|HTMLDocument|Window)} domEl The DOM element that triggers the event.
 * @param  {string} evtName The event name.
 * @param  {boolean} [bubbles = true] Whether the event bubbles or not.
 *
 * @example
 * let popupButton = document.querySelector(".popup__button"),
 * 	popupLayer = document.querySelector(".popup__layer");
 * 
 * popupButton.addEventListener("click", evt => {
 * 	trigger(popupLayer, "open", false);
 * });
 */
const trigger = (domEl, evtName, bubbles = true) => {
	if (!_isElementOrDocumentOrWindow(domEl) || !isString(evtName)) {
		throw new Error("An HTMLElement, document or window are expected as first parameter; and a string is expected as second parameter.");
	}

	let evt;

	if (window.CustomEvent != null) {
		evt = document.createEvent('Event');
		evt.initEvent(evtName, bubbles, true);
	}
	else {
		evt = new CustomEvent(evtName, {
			bubbles
		});
	}

	domEl.dispatchEvent(evt);
};

export default trigger;
