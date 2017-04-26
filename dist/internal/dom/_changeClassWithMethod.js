const _changeClassWithMethod = (domEl, str, methodName) => {
	if (str) {
		domEl.classList[methodName](str);
	}
};

export default _changeClassWithMethod;
