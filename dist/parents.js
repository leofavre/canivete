import isElement from "lodash/isElement";

/**
 * Returns all parents of a DOM element,
 * from the closest to the most distant, recursively.
 * 
 * @category DOM
 * @param  {HTMLElement} domEl The DOM element.
 * @return {Array.<HTMLElement>} The DOM element parents.
 */
function parents(domEl, memo = []) {
	if (!isElement(domEl)) {
		throw new Error("An HTMLElement is expected as parameter.");
	}

	let parentNode = domEl.parentNode;
	return (!parentNode) ? memo : parents(parentNode, memo.concat([parentNode]));
}

export default parents;
