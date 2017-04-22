import _joinBemEntityWithDelimiter from "./_joinBemEntityWithDelimiter";

function _formatBemRadical(block, element, connectors) {
	let elementDelimiter = connectors[0],
		elementBase = _joinBemEntityWithDelimiter(element, elementDelimiter);

	return `${block}${elementBase}`;
}

export default _formatBemRadical;
