import _isValidModifierObject from "./_isValidModifierObject";
import _isPlainObject from "../helpers/_isPlainObject";

const _isValidBemObject = bemObj => {
	return _isPlainObject(bemObj) && Object.keys(bemObj).every(key => _isValidModifierObject(bemObj[key]));
};

export default _isValidBemObject;
