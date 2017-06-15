import _formatBemRadical from "./internal/bem/_formatBemRadical";
import _formatBemModifier from "./internal/bem/_formatBemModifier";
import _throwErrorIf from "./internal/validation/_throwErrorIf";

/**
 * Formats a CSS class according to the
 * [BEM methodology](https://en.bem.info/methodology/).
 * The function receives a block, an element, a modifier, a value
 * for the modifier and an array of BEM delimiters, e.g. `__`,
 * `--` and `-`.
 * 
 * @category BEM
 *
 * @param  {string} block The BEM block.
 * @param  {string} [element] The BEM element.
 * @param  {string} [modifier] The BEM modifier.
 * @param  {(string|number|boolean)} [value = true] The BEM modifier value.
 * @param  {Array.<string>} delimiters The BEM delimiters.
 * @return {string} The BEM CSS class.
 *
 * @example
 * let delimiters = ["__", "--", "-"];
 * 
 * formatBemClass("menu", delimiters);
 * // => "menu"
 * 
 * formatBemClass("menu", "item", delimiters);
 * // => "menu__item"
 * 
 * formatBemClass("menu", "item", "active", delimiters);
 * // => "menu__item--active"
 * 
 * formatBemClass("menu", "item", "active", false, delimiters);
 * // => "menu__item"
 * 
 * formatBemClass("menu", "item", "active", true, delimiters);
 * // => "menu__item--active"
 * 
 * formatBemClass("menu", "item", "level", 42, delimiters);
 * // => "menu__item--level-42"
 * 
 * formatBemClass("menu", "item", "level", "42", delimiters);
 * // => "menu__item--level-42"
 *
 * @example
 * let delimiters = ["__", "--", "-"];
 * 
 * formatBemClass("button", null, "active", delimiters);
 * // => "button--active"
 * 
 * formatBemClass("button", null, "active", false, delimiters);
 * // => "button"
 * 
 * formatBemClass("button", null, "active", true, delimiters);
 * // => "button--active"
 * 
 * formatBemClass("button", null, "level", 42, delimiters);
 * // => "button--level-42"
 * 
 * formatBemClass("button", null, "level", "42", delimiters);
 * // => "button--level-42"
 */
const formatBemClass = (...args) => {
	let block = args[0] || "";
	let delimiters = args[args.length - 1];

	_throwErrorIf((args.length < 2), "At least a string representing a BEM block and an array representing BEM delimiters should be passed as parameters.");

	let element,
		modifier,
		value = true;

	if (args.length > 2) {
		element = args[1];
	}

	if (args.length > 3) {
		modifier = args[2];
	}

	if (args.length > 4) {
		value = args[3];
	}

	let radical = _formatBemRadical(block, element, delimiters);
	let classModifier = _formatBemModifier(modifier, value, delimiters);

	return `${radical}${classModifier}`;
};

export default formatBemClass;
