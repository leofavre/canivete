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
 * 
 * removeAttrs(oneElement, ["data-level", "class"]);
 *
 * oneElement.getAttribute("data-level");
 * // => null
 *
 * oneElement.dataset.level;
 * // => undefined
 *
 * oneElement.getAttribute("class");
 * // => null
 * 
 * oneElement.className;
 * // => ""
 *
 * @example
 * let listHtml = '<ul><li class="item" data-level="1">A</li><li class="item" data-level="1">B</li></ul>',
 * 	listElement = createDomElement(listHtml),
 * 	manyElements = listElement.querySelectorAll("li");
 * 
 * removeAttrs(manyElements, ["data-level", "class"]);
 *
 * manyElements[0].getAttribute("data-level");
 * // => null
 *
 * manyElements[1].getAttribute("data-level");
 * // => null
 *
 * manyElements[0].className;
 * // => ""
 *
 * manyElements[1].className;
 * // => ""
 */
const removeAttrs = (domEls, attrArr) => {
	attrArr.forEach(attrName => removeAttr(domEls, attrName));
};

export default removeAttrs;
