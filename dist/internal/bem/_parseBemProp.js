import addClass from "../../addClass";
import removeClass from "../../removeClass";
import _hasNoModifiers from "./_hasNoModifiers";
import _hasAllModifiersSetToFalse from "./_hasAllModifiersSetToFalse";
import _parseModifier from "./_parseModifier";

function _parseBemProp(bemObj, domNode, delimiters, shouldRepeatBemRadical) {
	return function(radical) {
		let modifierObj = bemObj[radical];

		if (shouldRepeatBemRadical || _hasNoModifiers(modifierObj) || _hasAllModifiersSetToFalse(modifierObj)) {
			addClass(domNode, radical);
		}
		else {
			removeClass(domNode, radical);
		}

		_parseModifier(modifierObj, domNode, radical, delimiters);
	};
}

export default _parseBemProp;
