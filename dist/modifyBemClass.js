import _parseBem from "./internal/bem/_parseBem";

/**
 * Modifies the CSS classes from a DOM element according
 * to the [BEM methodology](https://en.bem.info/methodology/).
 *
 * @category BEM
 *
 * @param  {HTMLElement} domEl The modified DOM element.
 * @param  {Object} bemObj The object describing BEM class changes.
 * @param  {Array} delimiters The BEM delimiters.
 */
const modifyBemClass = (domEl, bemObj, delimiters) => _parseBem(bemObj, domEl, delimiters, true);

export default modifyBemClass;
