import isElement from "lodash-es/isElement";
import parents from "./parents";

/**
 * The same as `parents()`, except it includes
 * the DOM element as the first item of the result.
 * 
 * @category DOM
 * @param  {HTMLElement} domEl The DOM element.
 * @return {Array.<HTMLElement>} The DOM element and its parents.
 */
const selfAndParents = domEl => {
	if (!isElement(domEl)) {
		throw new Error("An HTMLElement is expected as parameter.");
	}

	return (domEl != null) ? [domEl].concat(parents(domEl)) : [];
};

export default selfAndParents;
