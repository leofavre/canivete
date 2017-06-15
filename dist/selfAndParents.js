import parents from "./parents";
import _isElementOrDocumentOrWindow from "./internal/dom/_isElementOrDocumentOrWindow";
import _throwErrorIf from "./internal/validation/_throwErrorIf";

/**
 * The same as [`parents()`](#parents), except it includes
 * the DOM element itself.
 * 
 * @category DOM
 * @param  {HTMLElement} domEl The DOM element.
 * @return {Array.<HTMLElement>} The DOM element and its parents.
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
 * selfAndParents(domChild);
 * // => [domChild, domParent, domGrandparent, body, html, document]
 */
const selfAndParents = domEl => {
	_throwErrorIf(!_isElementOrDocumentOrWindow(domEl), "An HTMLElement is expected as parameter.");
	return [domEl].concat(parents(domEl));
};

export default selfAndParents;
