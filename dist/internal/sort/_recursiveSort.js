const _recursiveSort = fields => (objA, objB) => {
	let field = fields[0],
		prop = field.prop,
		result = field.comparator(objA[prop], objB[prop]);

	return (result !== 0) ? result : _recursiveSort(fields.slice(1))(objA, objB);
};

export default _recursiveSort;
