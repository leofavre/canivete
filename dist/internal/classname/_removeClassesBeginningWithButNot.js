import _removeClassesBeginningWithButNotBase from "./_removeClassesBeginningWithButNotBase.js";
import _domElementsToArray from "../dom/_domElementsToArray.js";

const _removeClassesBeginningWithButNot = (domEls, str) => {
	_domElementsToArray(domEls).forEach(domEl => _removeClassesBeginningWithButNotBase(domEl, str));
};

export default _removeClassesBeginningWithButNot;
