import _validateModifyBemClassArgs from "./internal/bem/_validateModifyBemClassArgs";
import _parseBem from "./internal/bem/_parseBem";

/**
 * Modifies the CSS classes from a DOM element according
 * to the [BEM methodology](https://en.bem.info/methodology/).
 * Unlike [`modifyBemClass()`](#modifybemclass), it ommits the original block
 * or element CSS class if a modified version is output.
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
 * modifyBemClassCompact(domEl, {
 * 	"swiper": {
 * 		"slides": 5,
 * 		"current": 2,
 * 		"playing": true
 * 	}
 * }, delimiters);
 *
 * domEl.className;
 * // => "swiper--slides-5 swiper--current-2 swiper--playing"
 *
 * modifyBemClassCompact(domEl, {
 * 	"swiper": {
 * 		"current": 3,
 * 		"playing": false
 * 	}
 * }, delimiters);
 *
 * domEl.className;
 * // => "swiper--slides-5 swiper--current-3"
 */
const modifyBemClassCompact = (domEl, bemObj, delimiters) => {
	_validateModifyBemClassArgs(domEl, bemObj, delimiters);
	return _parseBem(bemObj, domEl, delimiters, false);
};

export default modifyBemClassCompact;
