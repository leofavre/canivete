import _joinBemEntityWithDelimiter from './_joinBemEntityWithDelimiter';

const _formatBemModifier = (modifier, value, delimiters) => {
  const modifierDelimiter = delimiters[1];
  const modifierBase = _joinBemEntityWithDelimiter(modifier, modifierDelimiter);
  const valueDelimiter = delimiters[2];
  const valueBase = _joinBemEntityWithDelimiter(value, valueDelimiter);

  if (value === true) {
    return modifierBase;
  }

  return (value !== false && value != null) ?
    `${modifierBase}${valueBase}` : '';
};

export default _formatBemModifier;
