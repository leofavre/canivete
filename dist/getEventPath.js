import selfAndParents from "./selfAndParents";

/**
 * Returns an array with all DOM elements affected by an event.
 * The function serves as a polyfill for
 * [`Event.composedPath()`](https://dom.spec.whatwg.org/#dom-event-composedpath).
 *
 * @category Event
 * @param {Event} evt The triggered event.
 * @return {Array.<HTMLElement>} The DOM elements affected by the event.
 * 
 * @example
 * let domChild = document.createElement("div"),
 * 	domParent = document.createElement("div"),
 * 	domGrandparent = document.createElement("div"),
 * 	body = document.body,
 * 	html = document.querySelector("html");
 * 
 * domParent.appendChild(domChild);
 * domGrandparent.appendChild(domParent);
 * body.appendChild(domGrandparent);
 * 
 * domChild.addEventListener("click", dealWithClick);
 * const dealWithClick = evt => getEventPath(evt);
 *
 * // when domChild is clicked:
 * // => [domChild, domParent, domGrandparent, body, html, document, window]
 */
const getEventPath = evt => {
	let path = (evt.composedPath && evt.composedPath()) || evt.path,
		target = evt.target;

	if (target == null) {
		return undefined;
	}

	if (path != null) {
		path = (!path.includes(window)) ? path.concat([window]) : path;
		return path;
	}

	if (target === window) {
		return [window];
	}

	return selfAndParents(target).concat([window]);
};

export default getEventPath;
