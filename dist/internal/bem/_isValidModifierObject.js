import _isString from '../helpers/_isString';
import _isBoolean from '../helpers/_isBoolean';
import _isPlainObject from '../helpers/_isPlainObject';

const _isValidModifierObject = modifierObj =>
  _isPlainObject(modifierObj) && Object.keys(modifierObj).every((key) => {
    const prop = modifierObj[key];
    return _isBoolean(prop) || _isString(prop) || Number.isFinite(prop);
  });

export default _isValidModifierObject;
