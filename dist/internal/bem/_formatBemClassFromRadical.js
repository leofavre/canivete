import _formatBemModifier from "./_formatBemModifier.js";

function _formatBemClassFromRadical(radical, modifier, value, delimiters) {
	let classModifier = _formatBemModifier(modifier, value, delimiters);
	return `${radical}${classModifier}`;
}

export default _formatBemClassFromRadical;
