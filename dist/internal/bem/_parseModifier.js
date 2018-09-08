import _parseBemEntityWithFunc from "./_parseBemEntityWithFunc.js";
import _parseModifierProp from "./_parseModifierProp.js";

const _parseModifier = (...args) => _parseBemEntityWithFunc(_parseModifierProp, ...args);

export default _parseModifier;
