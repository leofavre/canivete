import isString from "lodash-es/isString";
import isElement from "lodash-es/isElement";

/**
 * Triggers a custom DOM event.
 *
 * @category Event
 * @param  {HTMLElement} domEl The DOM element that triggers the event.
 * @param  {string} evtName The event name.
 * @param  {boolean} [bubbles = true] Whether the event bubbles or not.
 *
 * @example
 * let popupButton = document.querySelector(".popup-button"),
 * 	popupLayer = document.querySelector(".popup-layer");
 * 
 * popupButton.addEventListener("click", evt => {
 * 	trigger(popupLayer, "open", false);
 * });
 */
const trigger = (domEl, evtName, bubbles = true) => {
	if (!isElement(domEl) || !isString(evtName)) {
		throw new Error("An HTMLElement and a string are expected as parameters.");
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
