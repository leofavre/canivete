import _joinBemEntityWithDelimiter from "./_joinBemEntityWithDelimiter";

function _formatBemModifier(modifier, value, delimiters) {
	let modifierDelimiter = delimiters[1],
		modifierBase = _joinBemEntityWithDelimiter(modifier, modifierDelimiter);

	let valueDelimiter = delimiters[2],
		valueBase = _joinBemEntityWithDelimiter(value, valueDelimiter);

	return (value === true) ? modifierBase : (value !== false && value != null) ? `${modifierBase}${valueBase}` : "";
}

export default _formatBemModifier;
