import at from "lodash-es/at";

const _recursiveSort = fields => (objA, objB) => {
	let field = fields[0],
		path = field.path,
		result = field.comparator(at(objA, path)[0], at(objB, path)[0]),
		nextFields = fields.slice(1);

	if (result !== 0 || nextFields.length === 0) {
		return result;
	}

	return _recursiveSort(nextFields)(objA, objB);
};

export default _recursiveSort;
