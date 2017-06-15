import _isString from "../helpers/_isString";

const _defaultComparator = (a, b) => (_isString(a) && _isString(b)) ?
	a.localeCompare(b) : (a == b) ? 0 : (a < b) ? -1 : 1;

export default _defaultComparator;
