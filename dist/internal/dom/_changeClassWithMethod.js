const _changeClassWithMethod = (domNode, str, methodName) => {
	if (str) {
		domNode.classList[methodName](str);
	}
};

export default _changeClassWithMethod;
