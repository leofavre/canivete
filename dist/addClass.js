import _addClassBase from "./internal/dom/_addClassBase";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Adds a CSS class to one or many DOM elements.
 *
 * @category DOM
 * @param  {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param  {string} str The CSS class name.
 *
 * @example
 * let oneElement = document.querySelector("a");
 * addClass(oneElement, "link");
 * 
 * console.log(oneElement.className);
 * // => "link"
 * 
 * @example
 * let manyElements = document.querySelectorAll("a");
 * addClass(manyElements, "link");
 *
 * console.log(manyElements[0].className);
 * // => "link"
 */
const addClass = (domEls, str) => {
	_domElementsAsArray(domEls).forEach(domEl => _addClassBase(domEl, str));
};

export default addClass;
