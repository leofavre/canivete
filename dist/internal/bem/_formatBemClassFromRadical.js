import _formatBemModifier from './_formatBemModifier';

const _formatBemClassFromRadical = (radical, modifier, value, delimiters) => {
  const classModifier = _formatBemModifier(modifier, value, delimiters);
  return `${radical}${classModifier}`;
};

export default _formatBemClassFromRadical;
