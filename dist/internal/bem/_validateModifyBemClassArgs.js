import isElement from "lodash-es/isElement";
import _isValidBemObject from "./_isValidBemObject";
import _isValidDelimiterArray from "./_isValidDelimiterArray";
import _throwErrorIf from "../common/_throwErrorIf";

const _validateModifyBemClassArgs = (domEl, bemObj, delimiters) => {
	_throwErrorIf(!isElement(domEl), `An HTMLElement is expected as the first parameter.`);
	_throwErrorIf(!_isValidBemObject(bemObj), `An object describing BEM class changes is expected as the second parameter.`);
	_throwErrorIf(!_isValidDelimiterArray(delimiters), `An array with three strings representing BEM delimiters is expected as the third parameter.`);
};

export default _validateModifyBemClassArgs;
