import _changeClassWithMethod from "./internal/dom/_changeClassWithMethod";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Removes a CSS class from one or more DOM elements.
 *
 * @category ClassName
 *
 * @param  {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or more DOM elements.
 * @param  {string} className The CSS class name.
 *
 * @example
 * let oneElement = document.querySelector(".link.base");
 * removeClass(oneElement, "link");
 * 
 * oneElement.className;
 * // => "base"
 * 
 * @example
 * let manyElements = document.querySelectorAll(".link.base");
 * removeClass(manyElements, "link");
 *
 * manyElements[0].className;
 * // => "base"
 */
const removeClass = (domEls, className) => {
	_domElementsAsArray(domEls).forEach(domEl => _changeClassWithMethod(domEl, className, "remove"));
};

export default removeClass;
