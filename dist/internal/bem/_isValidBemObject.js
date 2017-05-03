import _isValidModifierObject from "./_isValidModifierObject";
import isPlainObject from "lodash-es/isPlainObject";

const _isValidBemObject = bemObj => {
	return isPlainObject(bemObj) && Object.keys(bemObj).every(key => _isValidModifierObject(bemObj[key]));
};

export default _isValidBemObject;
