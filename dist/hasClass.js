import _isElement from "./internal/helpers/_isElement";
import _throwErrorIf from "./internal/validation/_throwErrorIf";

/**
 * Verifies if a DOM element has a CSS class.
 *
 * @category ClassName
 *
 * @param  {HTMLElement} domEl The DOM element.
 * @param  {string} className The CSS class name.
 * @return {boolean} Whether the element has the CSS class name.
 *
 * @example
 * let oneElement = document.querySelector("a");
 * oneElement.className = "link reference";
 * 
 * hasClass(oneElement, "link");
 * // => true
 * 
 * hasClass(oneElement, "button");
 * // => false
 */
const hasClass = (domEl, className) => {
	_throwErrorIf(!_isElement(domEl), "An HTMLElement is expected as parameter.");
	return domEl.classList.contains(className);
};

export default hasClass;
