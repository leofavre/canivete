import _formatBemModifier from "./internal/bem/_formatBemModifier";

function _formatBemClassFromRadical(radical, modifier, value, connectors) {
	let classModifier = _formatBemModifier(modifier, value, connectors);
	return `${radical}${classModifier}`;
}

export default _formatBemClassFromRadical;
