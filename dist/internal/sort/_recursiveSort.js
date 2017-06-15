import _simpleAt from "../helpers/_simpleAt";

const _recursiveSort = fields => (objA, objB) => {
	let field = fields[0],
		path = field.path,
		result = field.comparator(_simpleAt(objA, path), _simpleAt(objB, path)),
		nextFields = fields.slice(1);

	if (result !== 0 || nextFields.length === 0) {
		return result;
	}

	return _recursiveSort(nextFields)(objA, objB);
};

export default _recursiveSort;
