import _changeClassWithMethod from "./internal/classname/_changeClassWithMethod";
import _domElementsToArray from "./internal/dom/_domElementsToArray";

/**
 * Adds a CSS class to one or more DOM elements.
 *
 * @category ClassName
 * 
 * @param  {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or more DOM elements.
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
	_domElementsToArray(domEls).forEach(domEl => _changeClassWithMethod(domEl, className, "add"));
};

export default addClass;
