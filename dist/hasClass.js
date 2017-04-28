import isElement from "lodash-es/isElement";
import _throwErrorIf from "./internal/common/_throwErrorIf";

/**
 * Verifies if a DOM element has a CSS class.
 *
 * @category Class Name
 *
 * @param  {HTMLElement} domEl The DOM element.
 * @param  {string} str The CSS class.
 * @return {boolean} Whether the element has the CSS class.
 *
 * @example
 * let oneElement = document.querySelector("a");
 * oneElement.className = "link reference";
 * 
 * console.log(hasClass(oneElement, "link"));
 * // => true
 * 
 * console.log(hasClass(oneElement, "button"));
 * // => false
 */
const hasClass = (domEl, str) => {
	_throwErrorIf(!isElement(domEl), "An HTMLElement is expected as parameter.");
	return domEl.classList.contains(str);
};

export default hasClass;
