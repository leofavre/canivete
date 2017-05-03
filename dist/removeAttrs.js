import removeAttr from "./removeAttr";

/**
 * The same as [`removeAttr()`](#removeattr), except it takes an
 * array with attributes to be removed.
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param {Array.<string>} attrArr The array with attributes to be removed.
 *
 * @example
 * let oneElement = document.querySelector("a[data-level][class]");
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
 * let manyElements = document.querySelectorAll("a[data-level][class]");
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
