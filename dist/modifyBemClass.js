import _validateModifyBemClassArgs from "./internal/bem/_validateModifyBemClassArgs";
import _parseBem from "./internal/bem/_parseBem";

/**
 * @typedef {Object} BemObject
 * @property {Object} name An object which key is a BEM block or element, e.g. `menu` or `landing__area`.
 * @property {Object} name.modifier An object representing a modifiers and their values, e.g.&nbsp;`{active: false}` or `{level: 42}`.
 */

/**
 * Modifies the CSS classes from a DOM element according
 * to the [BEM methodology](https://en.bem.info/methodology/).
 *
 * @category BEM
 *
 * @param  {HTMLElement} domEl The DOM element.
 * @param  {BemObject} bemObj The object describing BEM class changes (see table below).
 * @param  {Array} delimiters The BEM delimiters.
 *
 * @example
 * let domEl = document.createElement("div"),
 * 	delimiters = ["__", "--", "-"];
 *
 * modifyBemClass(domEl, {
 * 	"swiper": {
 * 		"slides": 5,
 * 		"current": 2,
 * 		"playing": true
 * 	}
 * }, delimiters);
 *
 * domEl.className;
 * // => "swiper swiper--slides-5 swiper--current-2 swiper--playing"
 *
 * modifyBemClass(domEl, {
 * 	"swiper": {
 * 		"current": 3,
 * 		"playing": false
 * 	}
 * }, delimiters);
 *
 * domEl.className;
 * // => "swiper swiper--slides-5 swiper--current-3"
 */
const modifyBemClass = (domEl, bemObj, delimiters) => {
	_validateModifyBemClassArgs(domEl, bemObj, delimiters);
	return _parseBem(bemObj, domEl, delimiters, true);
};

export default modifyBemClass;
