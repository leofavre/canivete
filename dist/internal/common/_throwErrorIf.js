const _throwErrorIf = (condition, error) => {
	if (condition) {
		throw new Error(error);
	}
};

export default _throwErrorIf;
