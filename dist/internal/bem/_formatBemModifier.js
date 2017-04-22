import _joinBemEntityWithDelimiter from "./_joinBemEntityWithDelimiter";

function _formatBemModifier(modifier, value, connectors) {
	let modifierDelimiter = connectors[1],
		modifierBase = _joinBemEntityWithDelimiter(modifier, modifierDelimiter);

	let valueDelimiter = connectors[2],
		valueBase = _joinBemEntityWithDelimiter(value, valueDelimiter);

	return (value === true) ? modifierBase : (value !== false && value != null) ? `${modifierBase}${valueBase}` : "";
}

export default _formatBemModifier;
