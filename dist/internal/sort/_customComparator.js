import _defaultComparator from "./_defaultComparator";

const _customComparator = (primer, reverse) => {
	let result = _defaultComparator;

	if (primer) {
		result = (a, b) => _defaultComparator(primer(a), primer(b));
	}

	if (reverse) {
		return (a, b) => -1 * result(a, b);
	}

	return result;
};

export default _customComparator;
