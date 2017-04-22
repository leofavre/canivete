import addClass from "../../addClass";
import removeClass from "../../removeClass";
import removeClassesStartingWithButNot from "../../removeClassesStartingWithButNot";
import formatBemClassFromRadical from "../../formatBemClassFromRadical";

function _parseModifierProp(modifierObj, domNode, radical, delimiterArr) {
	return function(modifier) {
		let value = modifierObj[modifier],
			removedBemClass = formatBemClassFromRadical(radical, modifier, true, delimiterArr),
			addedBemClass = formatBemClassFromRadical(radical, modifier, value, delimiterArr);

		if (value === false) {
			removeClass(domNode, removedBemClass);
		}
		else if (value !== true) {
			removeClassesStartingWithButNot(domNode, removedBemClass);
		}

		if (value !== false) {
			addClass(domNode, addedBemClass);
		}
	};
}

export default _parseModifierProp;
