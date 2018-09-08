import _isString from "../helpers/_isString.js";
import _isBoolean from "../helpers/_isBoolean.js";
import _isPlainObject from "../helpers/_isPlainObject.js";

const _isValidModifierObject = modifierObj => {
	return _isPlainObject(modifierObj) && Object.keys(modifierObj).every(key => {
		let prop = modifierObj[key];
		return _isBoolean(prop) || _isString(prop) || Number.isFinite(prop);
	});
};

export default _isValidModifierObject;
