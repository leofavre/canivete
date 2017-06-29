const _setAttrBase = (domEl, attrName, value) => {
	if (value != null && value !== "") {
		if (typeof value === "boolean") {
			if (value === false) {
				domEl.removeAttribute(attrName);
			}
			else {
				domEl.setAttribute(attrName, "");
			}
		}
		else {
			domEl.setAttribute(attrName, value);
		}
	}
};

export default _setAttrBase;
