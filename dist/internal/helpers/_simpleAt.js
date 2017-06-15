import _parsePath from "./_parsePath";

const _simpleAt = (obj, path) =>
	_parsePath(path).reduce((obj, key) => {
		return (obj != null && obj.hasOwnProperty(key)) ? obj[key] : undefined;
	}, obj);

export default _simpleAt;
