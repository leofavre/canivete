const _isElement = arg =>
	arg != null && typeof arg === "object" && arg.nodeType === Node.ELEMENT_NODE &&
	typeof arg.style === "object" && typeof arg.ownerDocument === "object";

export default _isElement;
