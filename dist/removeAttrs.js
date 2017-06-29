import removeAttr from "./removeAttr";

/**
 * The same as [`removeAttr()`](#removeattr), except it takes an
 * array with attributes to be removed.
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or more DOM elements.
 * @param {Array.<string>} attrArr The array with attributes to be removed.
 *
 * @example
 * let oneElement = createDomElement('<p class="level" data-level="42">Level 42</p>');
 * removeAttrs(oneElement, ["data-level", "class"]);
 *
 * oneElement.getAttribute("data-level");
 * // => null
 *
 * oneElement.getAttribute("class");
 * // => null
 *
 * oneElement.dataset.level;
 * // => undefined
 *
 * oneElement.className;
 * // => ""
 *
 * @example
 * let listElement = createDomElement('<ul><li class="item" data-level="1">A</li><li class="item" data-level="2">B</li></ul>'),
 * 	manyElements = listElement.querySelectorAll("li");
 * 
 * removeAttrs(manyElements, ["data-level", "class"]);
 *
 * manyElements[0].getAttribute("data-level");
 * // => null
 *
 * manyElements[0].getAttribute("class");
 * // => null
 *
 * manyElements[0].dataset.level;
 * // => undefined
 *
 * manyElements[0].className;
 * // => ""
 */
const removeAttrs = (domEls, attrArr) => {
	attrArr.forEach(attrName => removeAttr(domEls, attrName));
};

export default removeAttrs;
