import isString from "lodash-es/isString";

const _defaultComparator = (a, b) => (isString(a) && isString(b)) ?
	a.localeCompare(b) : (a == b) ? 0 : (a < b) ? -1 : 1;

export default _defaultComparator;
