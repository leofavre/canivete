import _joinBemEntityWithDelimiter from "./_joinBemEntityWithDelimiter.js";

function _formatBemRadical(block, element, delimiters) {
	let elementDelimiter = delimiters[0],
		elementBase = _joinBemEntityWithDelimiter(element, elementDelimiter);

	return `${block}${elementBase}`;
}

export default _formatBemRadical;
