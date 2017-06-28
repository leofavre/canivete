const _isPlainObject = obj =>
	obj != null && typeof obj === "object" &&
	(obj.constructor === Object || obj.constructor == null) &&
	Object.prototype.toString.call(obj) === "[object Object]";

export default _isPlainObject;
