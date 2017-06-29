import _setAttrBase from "./internal/dom/_setAttrBase";
import _domElementsToArray from "./internal/dom/_domElementsToArray";

/**
 * Sets an attribute for one or more DOM elements using native
 * [`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute).
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or more DOM elements.
 * @param {string} attrName The attribute name.
 * @param {(string|number|boolean)} value The attribute value.
 *
 * @example
 * let oneElement = createDomElement('<p>Level 42</p>');
 * 
 * setAttr(oneElement, "data-level", 42);
 *
 * oneElement.getAttribute("data-level");
 * // => "42"
 *
 * oneElement.dataset.level;
 * // => "42"
 *
 * @example
 * let oneElement = createDomElement('<a href="/news">News</a>');
 * 
 * setAttr(oneElement, "class", "button");
 *
 * oneElement.getAttribute("class");
 * // => "button"
 *
 * oneElement.className;
 * // => "button"
 *
 * @example
 * let listElement = createDomElement('<ul><li>A</li><li>B</li><li>C</li></ul>'),
 * 	manyElements = listElement.querySelectorAll("li");
 * 
 * setAttr(manyElements, "class", "item");
 *
 * manyElements[0].className;
 * // => "item"
 *
 * manyElements[1].className;
 * // => "item"
 */
const setAttr = (domEls, attrName, value) => {
	_domElementsToArray(domEls).forEach(domEl => _setAttrBase(domEl, attrName, value));
};

export default setAttr;
