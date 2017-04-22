const _parseBemEntityWithFunc = (func, ...args) => Object.keys(args[0]).forEach(func(...args));

export default _parseBemEntityWithFunc;
