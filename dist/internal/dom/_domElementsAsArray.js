import isElement from "../node_modules/lodash-es/isElement";

const _domElementsAsArray = arg => isElement(arg) ? [arg] : (arg != null && typeof arg.length === "number") ? Array.from(arg) : [];

export default _domElementsAsArray;
