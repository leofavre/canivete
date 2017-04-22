import _removeClassesBeginningWithButNotBase from "./internal/dom/_removeClassesBeginningWithButNotBase";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Removes one or many CSS classes that start with a string,
 * but don't match the string completely, from one or many
 * DOM elements. Useful for dealing with BEM CSS classes.
 *
 * @category DOM
 * @param  {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param  {string} str The CSS class start.
 *
 * @example
 * let oneElement = document.querySelector(".link.base");
 * removeClassesBeginningWithButNot(oneElement, "link");
 * 
 * console.log(oneElement.className);
 * // => "base"
 * 
 * @example
 * let manyElements = document.querySelectorAll(".link.base");
 * removeClassesBeginningWithButNot(manyElements, "link");
 *
 * console.log(manyElements[0].className);
 * // => "base"
 */
const removeClassesBeginningWithButNot = (domEls, str) => {
	_domElementsAsArray(domEls).forEach(domEl => _removeClassesBeginningWithButNotBase(domEl, str));
};

export default removeClassesBeginningWithButNot;
