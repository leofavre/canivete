import _joinBemEntityWithDelimiter from "./_joinBemEntityWithDelimiter";

function _formatBemModifier(modifier, value, delimiterArr) {
	let modifierDelimiter = delimiterArr[1],
		modifierBase = _joinBemEntityWithDelimiter(modifier, modifierDelimiter);

	let valueDelimiter = delimiterArr[2],
		valueBase = _joinBemEntityWithDelimiter(value, valueDelimiter);

	return (value === true) ? modifierBase : (value !== false && value != null) ? `${modifierBase}${valueBase}` : "";
}

export default _formatBemModifier;
