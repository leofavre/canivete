import _changeClassWithMethod from "./internal/dom/_changeClassWithMethod";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Adds a CSS class to one or many DOM elements.
 *
 * @category ClassName
 * 
 * @param  {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param  {string} className The CSS class name.
 *
 * @example
 * let oneElement = document.querySelector("a");
 * addClass(oneElement, "link");
 * 
 * oneElement.className;
 * // => "link"
 * 
 * @example
 * let manyElements = document.querySelectorAll("a");
 * addClass(manyElements, "link");
 *
 * manyElements[0].className;
 * // => "link"
 */
const addClass = (domEls, className) => {
	_domElementsAsArray(domEls).forEach(domEl => _changeClassWithMethod(domEl, className, "add"));
};

export default addClass;
