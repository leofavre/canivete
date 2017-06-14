import _defaultComparator from "./_defaultComparator";
import _customComparator from "./_customComparator";
import isString from "lodash-es/isString";

const _parseSortField = field => {
	let useDefault = isString(field);

	return {
		path: (useDefault) ? field : field.path,
		comparator: (useDefault) ? _defaultComparator : _customComparator(field.primer, field.reverse)
	};
};

export default _parseSortField;
