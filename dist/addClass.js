import _addClassBase from "./internal/dom/_addClassBase";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Adds a CSS class to one or many DOM elements.
 *
 * @category DOM
 * @param  {(HTMLElement|HTMLCollection|NodeList|HTMLElement[])} domEls The DOM elements.
 * @param  {string} str The CSS class name.
 * @return {HTMLElement[]} An array of DOM elements.
 */
const addClass = (domEls, str) => _domElementsAsArray(domEls).forEach(domEl => _addClassBase(domEl, str));

export default addClass;
