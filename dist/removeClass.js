import _changeClassWithMethod from "./internal/dom/_changeClassWithMethod";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Removes a CSS class from one or many DOM elements.
 *
 * @category DOM
 *
 * @param  {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param  {string} str The CSS class.
 *
 * @example
 * let oneElement = document.querySelector(".link.base");
 * removeClass(oneElement, "link");
 * 
 * console.log(oneElement.className);
 * // => "base"
 * 
 * @example
 * let manyElements = document.querySelectorAll(".link.base");
 * removeClass(manyElements, "link");
 *
 * console.log(manyElements[0].className);
 * // => "base"
 */
const removeClass = (domEls, str) => {
	_domElementsAsArray(domEls).forEach(domEl => _changeClassWithMethod(domEl, str, "remove"));
};

export default removeClass;
