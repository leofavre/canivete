import addClass from "../../addClass.js";
import removeClass from "../../removeClass.js";
import _hasNoModifiers from "./_hasNoModifiers.js";
import _hasAllModifiersSetToFalse from "./_hasAllModifiersSetToFalse.js";
import _parseModifier from "./_parseModifier.js";

function _parseBemProp(bemObj, domEl, delimiters, shouldRepeatBemRadical) {
	return function(radical) {
		let modifierObj = bemObj[radical];

		if (shouldRepeatBemRadical || _hasNoModifiers(modifierObj) || _hasAllModifiersSetToFalse(modifierObj)) {
			addClass(domEl, radical);
		}
		else {
			removeClass(domEl, radical);
		}

		_parseModifier(modifierObj, domEl, radical, delimiters);
	};
}

export default _parseBemProp;
