import _formatBemModifier from "./internal/bem/_formatBemModifier";

function formatBemClassFromRadical(radical, modifier, value, delimiterArr) {
	let classModifier = _formatBemModifier(modifier, value, delimiterArr);
	return `${radical}${classModifier}`;
}

export default formatBemClassFromRadical;
