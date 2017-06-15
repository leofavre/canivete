const _parsePath = path =>
	Array.isArray(path) ? path : `${path}`.split(".");

export default _parsePath;
