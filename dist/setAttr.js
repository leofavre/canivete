import _setAttrBase from "./internal/dom/_setAttrBase";
import _domElementsAsArray from "./internal/dom/_domElementsAsArray";

/**
 * Sets an attribute for one or more DOM elements.
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param {string} attrName The attribute name.
 * @param {(string|number|boolean)} value The attribute value.
 *
 * @example
 * let oneElement = document.querySelector("a");
 * 
 * setAttr(oneElement, "data-level", 42);
 * setAttr(oneElement, "class", "button");
 *
 * oneElement.dataset.level;
 * // => "42"
 *
 * oneElement.className;
 * // => "button"
 *
 * @example
 * let manyElements = document.querySelectorAll("a");
 * 
 * setAttr(manyElements, "data-level", 42);
 * setAttr(manyElements, "class", "button");
 *
 * manyElements[0].dataset.level;
 * // => "42"
 *
 * manyElements[0].className;
 * // => "button"
 */
function setAttr(domEls, attrName, value) {
	_domElementsAsArray(domEls).forEach(domEl => _setAttrBase(domEl, attrName, value));
}

export default setAttr;
