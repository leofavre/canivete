import _isElementOrDocumentOrWindow from "./internal/dom/_isElementOrDocumentOrWindow";
import _throwErrorIf from "./internal/validation/_throwErrorIf";

/**
 * Returns all parents of a DOM element,
 * from the closest to the most distant.
 * 
 * @category DOM
 * @param  {HTMLElement} domEl The DOM element.
 * @return {Array.<HTMLElement>} The DOM element parents.
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
 * parents(domChild);
 * // => [domParent, domGrandparent, body, html, document]
 */
const parents = (domEl, memo = []) => {
	if (memo.length === 0) {
		_throwErrorIf(!_isElementOrDocumentOrWindow(domEl), "An HTMLElement is expected as parameter.");
	}

	let parentNode = domEl.parentNode;
	return (!parentNode) ? memo : parents(parentNode, memo.concat([parentNode]));
};

export default parents;
