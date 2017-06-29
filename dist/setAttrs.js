import setAttr from "./setAttr";

/**
 * The same as [`setAttr()`](#setattr), except it takes an object
 * with attribute name and value pairs to set one or
 * many attributes at once.
 *
 * @category DOM
 * @param {(HTMLElement|HTMLCollection|NodeList|Array.<HTMLElement>|Set.<HTMLElement>)} domEls One or more DOM elements.
 * @param {Object} attrObj The object with attribute name and value pairs, e.g. `{ "data-level": 42 }`.
 *
 * @example
 * let oneElement = createDomElement('<p>Level 42</p>');
 * 
 * setAttrs(oneElement, {
 * 	"data-level": 42,
 * 	"class": "level"
 * });
 *
 * oneElement.getAttribute("data-level");
 * // => "42"
 *
 * oneElement.dataset.level;
 * // => "42"
 *
 * oneElement.getAttribute("class");
 * // => "level"
 *
 * oneElement.className;
 * // => "level"
 *
 * @example
 * let listElement = createDomElement('<ul><li>A</li><li>B</li><li>C</li></ul>'),
 * 	manyElements = listElement.querySelectorAll("li");
 * 
 * setAttrs(manyElements, {
 * 	"data-level": 42,
 * 	"class": "item"
 * });
 *
 * manyElements[0].getAttribute("data-level");
 * // => "42"
 *
 * manyElements[1].getAttribute("data-level");
 * // => "42"
 *
 * manyElements[0].className;
 * // => "item"
 *
 * manyElements[1].className;
 * // => "item"
 */
const setAttrs = (domEls, attrObj) => {
	Object.keys(attrObj).forEach(attrKey => setAttr(domEls, attrKey, attrObj[attrKey]));
};

export default setAttrs;
