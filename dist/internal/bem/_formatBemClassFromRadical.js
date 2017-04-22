import _formatBemModifier from "./internal/bem/_formatBemModifier";

function _formatBemClassFromRadical(radical, modifier, value, delimiters) {
	let classModifier = _formatBemModifier(modifier, value, delimiters);
	return `${radical}${classModifier}`;
}

export default _formatBemClassFromRadical;
