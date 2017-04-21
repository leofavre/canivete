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
 * let singleLinkElement = document.querySelector("a");
 * addClass(singleLinkElement, "link");
 * 
 * console.log(singleLinkElement.className);
 * // => "link"
 * 
 * @example
 * let linkElements = document.querySelectorAll("a");
 * addClass(linkElements, "link");
 *
 * console.log(linkElements[0].className);
 * // => "link"
 */
const addClass = (domEls, str) => _domElementsAsArray(domEls).forEach(domEl => _addClassBase(domEl, str));

export default addClass;
