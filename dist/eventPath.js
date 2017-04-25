import selfAndParents from "./selfAndParents";

/**
 * Returns an array with all DOM elements affected by an event.
 * This function serves as a polyfill for
 * [`Event.composedPath()`](https://dom.spec.whatwg.org/#dom-event-composedpath).
 *
 * @category Event
 * @param {Event} evt The triggered event.
 * @return {Array.<HTMLElement>} The DOM elements affected by the event.
 */
function eventPath(evt) {
	let path = (evt.composedPath && evt.composedPath()) || evt.path,
		target = evt.target;

	if (path != null) {
		path = (!path.includes(window)) ? path.concat([window]) : path;
		return path;
	}

	if (target === window) {
		return [window];
	}

	return selfAndParents(target).concat([window]);
}

export default eventPath;
