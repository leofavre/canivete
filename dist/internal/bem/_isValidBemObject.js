import _isValidModifierObject from "./_isValidModifierObject.js";
import _isPlainObject from "../helpers/_isPlainObject.js";

const _isValidBemObject = bemObj => {
	return _isPlainObject(bemObj) && Object.keys(bemObj).every(key => _isValidModifierObject(bemObj[key]));
};

export default _isValidBemObject;
