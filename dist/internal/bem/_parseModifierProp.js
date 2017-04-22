import addClass from "../../addClass";
import removeClass from "../../removeClass";
import _removeClassesBeginningWithButNot from "./_removeClassesBeginningWithButNot";
import _formatBemClassFromRadical from "./_formatBemClassFromRadical";

function _parseModifierProp(modifierObj, domNode, radical, delimiterArr) {
	return function(modifier) {
		let value = modifierObj[modifier],
			removedBemClass = _formatBemClassFromRadical(radical, modifier, true, delimiterArr),
			addedBemClass = _formatBemClassFromRadical(radical, modifier, value, delimiterArr);

		if (value === false) {
			removeClass(domNode, removedBemClass);
		}
		else if (value !== true) {
			_removeClassesBeginningWithButNot(domNode, removedBemClass);
		}

		if (value !== false) {
			addClass(domNode, addedBemClass);
		}
	};
}

export default _parseModifierProp;
