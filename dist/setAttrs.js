import setAttr from "./setAttr";

/**
 * The same as [`setAttr()`](#setattr), except it takes an object
 * with attribute name and value pairs to set one or
 * many attributes at once.
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or many DOM elements.
 * @param {Object} attrObj The object with attribute name and value pairs, e.g. `{ "data-level": 42 }`.
 *
 * @example
 * let oneElement = document.querySelector("a");
 * 
 * setAttr(oneElement, {
 * 	"data-level": 42,
 * 	"class": "button"
 * });
 *
 * oneElement.getAttribute("data-level");
 * // => "42"
 *
 * oneElement.getAttribute("class");
 * // => "button"
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
 * setAttr(manyElements, {
 * 	"data-level": 42,
 * 	"class": "button"
 * });
 *
 * manyElements[0].getAttribute("data-level");
 * // => "42"
 *
 * manyElements[0].getAttribute("class");
 * // => "button"
 *
 * manyElements[0].dataset.level;
 * // => "42"
 *
 * manyElements[0].className;
 * // => "button"
 */
const setAttrs = (domEls, attrObj) => {
	Object.keys(attrObj).forEach(attrKey => setAttr(domEls, attrKey, attrObj[attrKey]));
};

export default setAttrs;
