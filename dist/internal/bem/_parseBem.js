import _parseBemEntityWithFunc from "./_parseBemEntityWithFunc.js";
import _parseBemProp from "./_parseBemProp.js";

const _parseBem = (...args) => {
	return _parseBemEntityWithFunc(_parseBemProp, ...args);
};

export default _parseBem;
