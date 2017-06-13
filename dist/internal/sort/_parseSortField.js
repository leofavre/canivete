import _defaultComparator from "./_defaultComparator";
import _customComparator from "./_customComparator";

const _parseSortField = field => {
	let isString = (typeof field === "string");

	return {
		prop: (isString) ? field : field.prop,
		comparator: (isString) ? _defaultComparator : _customComparator(field.primer, field.reverse)
	};
};

export default _parseSortField;
