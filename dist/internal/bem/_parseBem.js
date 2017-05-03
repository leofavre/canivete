import _parseBemEntityWithFunc from "./_parseBemEntityWithFunc";
import _parseBemProp from "./_parseBemProp";

const _parseBem = (...args) => {
	return _parseBemEntityWithFunc(_parseBemProp, ...args);
};

export default _parseBem;
