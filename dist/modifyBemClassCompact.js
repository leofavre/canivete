import _parseBem from "./internal/bem/_parseBem";

/**
 * Like `modifyBemClass()`, modifies the CSS classes from
 * a DOM element according to the [BEM methodology](https://en.bem.info/methodology/).
 * The difference is that it only prints modified elements,
 * instead of original and modified objects.
 *
 * @category BEM
 *
 * @param  {HTMLElement} domEl The modified DOM element.
 * @param  {bemObject} bemObj The object describing BEM class changes (see table below).
 * @param  {Array} delimiters The BEM delimiters.
 *
 * @example
 * let domEl = document.createElement("div"),
 * 	modifiers = ["__", "--", "-"];
 *
 * modifyBemClassCompact(domEl, {
 * 	swiper: {
 * 		slides: 5,
 * 		current: 2,
 * 		playing: true
 * 	}
 * }, modifiers);
 *
 * console.log(domEl.className);
 * // => "swiper--slides-5 swiper--current-2 swiper--playing"
 *
 * modifyBemClassCompact(domEl, {
 * 	swiper: {
 * 		current: 3,
 * 		playing: false
 * 	}
 * }, modifiers);
 *
 * console.log(domEl.className);
 * // => "swiper--slides-5 swiper--current-3"
 */
const modifyBemClassCompact = (domEl, bemObj, delimiters) => _parseBem(bemObj, domEl, delimiters, false);

export default modifyBemClassCompact;
