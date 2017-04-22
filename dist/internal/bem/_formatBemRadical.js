import _joinBemEntityWithDelimiter from "./_joinBemEntityWithDelimiter";

function _formatBemRadical(block, element, delimiterArr) {
	let elementDelimiter = delimiterArr[0],
		elementBase = _joinBemEntityWithDelimiter(element, elementDelimiter);

	return `${block}${elementBase}`;
}

export default _formatBemRadical;
