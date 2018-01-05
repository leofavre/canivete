import _joinBemEntityWithDelimiter from './_joinBemEntityWithDelimiter';

function _formatBemRadical(block, element, delimiters) {
  const elementDelimiter = delimiters[0];
  const elementBase = _joinBemEntityWithDelimiter(element, elementDelimiter);
  return `${block}${elementBase}`;
}

export default _formatBemRadical;
