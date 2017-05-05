import addClass from "../../addClass";
import removeClass from "../../removeClass";
import _removeClassesBeginningWithButNot from "../classname/_removeClassesBeginningWithButNot";
import formatBemClass from "../../formatBemClass";

function _parseModifierProp(modifierObj, domEl, radical, delimiters) {
	return function(modifier) {
		let blockDelimiter = delimiters[0],
			block = radical.split(blockDelimiter)[0],
			element = radical.split(blockDelimiter)[1];

		let value = modifierObj[modifier];

		let removedBemClass = formatBemClass(block, element, modifier, true, delimiters),
			addedBemClass = formatBemClass(block, element, modifier, value, delimiters);

		if (value === false) {
			removeClass(domEl, removedBemClass);
		}
		else if (value !== true) {
			_removeClassesBeginningWithButNot(domEl, removedBemClass);
		}

		if (value !== false) {
			addClass(domEl, addedBemClass);
		}
	};
}

export default _parseModifierProp;
