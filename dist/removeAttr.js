import _setAttrBase from "./internal/dom/_setAttrBase";
import _domElementsToArray from "./internal/dom/_domElementsToArray";

/**
 * Removes an attribute from one or more DOM elements using native
 * [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute).
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or more DOM elements.
 * @param {string} attrName The attribute name.
 *
 * @example
 * let oneElement = createDomElement('<p data-level="42">Level 42</p>');
 * 
 * removeAttr(oneElement, "data-level");
 *
 * oneElement.getAttribute("data-level");
 * // => null
 *
 * oneElement.dataset.level;
 * // => undefined
 *
 * @example
 * let oneElement = createDomElement('<a class="button" href="/news">News</a>');
 * 
 * removeAttr(oneElement, "class");
 *
 * oneElement.getAttribute("class");
 * // => null
 *
 * oneElement.className;
 * // => ""
 *
 * @example
 * let listHtml = '<ul><li class="item">A</li><li class="item">B</li></ul>';
 * 	listElement = createDomElement(listElement),
 * 	manyElements = listElement.querySelectorAll("li");
 *
 * removeAttr(manyElements, "class");
 *
 * manyElements[0].className;
 * // => ""
 *
 * manyElements[1].className;
 * // => ""
 */
const removeAttr = (domEls, attrName) => {
	_domElementsToArray(domEls).forEach(domEl => _setAttrBase(domEl, attrName, false));
};

export default removeAttr;
