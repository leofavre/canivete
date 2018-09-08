import _defaultComparator from "./_defaultComparator.js";
import _customComparator from "./_customComparator.js";
import _isString from "../helpers/_isString.js";

const _parseSortField = field => {
	let useDefault = _isString(field);

	return {
		path: (useDefault) ? field : field.path,
		comparator: (useDefault) ? _defaultComparator : _customComparator(field.primer, field.reverse)
	};
};

export default _parseSortField;
