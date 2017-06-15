const _isPlainObject = arg =>
	arg != null && typeof arg == "object" && arg.constructor == Object;

export default _isPlainObject;
