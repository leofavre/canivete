import _parsePath from "./_parsePath";
import _isPlainObject from "./_isPlainObject";

const _simpleSet = (obj, path, value) =>
	_parsePath(path).reduce((obj, key, index, arr) => {
		let isLast = (index === arr.length - 1);

		if (!obj.hasOwnProperty(key) || (!isLast && !_isPlainObject(obj[key]))) {
			obj[key] = {};
		}

		return (!isLast) ? obj[key] : obj[key] = value;
	}, obj);

export default _simpleSet;
