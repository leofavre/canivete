import addClass from '../../addClass';
import removeClass from '../../removeClass';
import _removeClassesBeginningWithButNot from '../classname/_removeClassesBeginningWithButNot';
import formatBemClass from '../../formatBemClass';

const _parseModifierProp = (modifierObj, domEl, radical, delimiters) =>
  (modifier) => {
    const blockDelimiter = delimiters[0];
    const block = radical.split(blockDelimiter)[0];
    const element = radical.split(blockDelimiter)[1];
    const value = modifierObj[modifier];

    const removedBemClass =
      formatBemClass(block, element, modifier, true, delimiters);

    const addedBemClass =
      formatBemClass(block, element, modifier, value, delimiters);

    if (value === false) {
      removeClass(domEl, removedBemClass);
    } else if (value !== true) {
      _removeClassesBeginningWithButNot(domEl, removedBemClass);
    }

    if (value !== false) {
      addClass(domEl, addedBemClass);
    }
  };

export default _parseModifierProp;
