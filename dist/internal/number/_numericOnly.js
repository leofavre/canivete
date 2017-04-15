import _isNumber from "./_isNumber";

const _numericOnly = arg => _isNumber(arg) ? arg : 0;

export default _numericOnly;
