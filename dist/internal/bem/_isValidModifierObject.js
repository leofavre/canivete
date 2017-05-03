import isString from "lodash-es/isString";
import isBoolean from "lodash-es/isBoolean";
import isPlainObject from "lodash-es/isPlainObject";

const _isValidModifierObject = modifierObj => {
	return isPlainObject(modifierObj) && Object.keys(modifierObj).every(key => {
		let prop = modifierObj[key];
		return isBoolean(prop) || isString(prop) || Number.isFinite(prop);
	});
};

export default _isValidModifierObject;
