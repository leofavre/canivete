import addClass from '../../addClass';
import removeClass from '../../removeClass';
import _hasNoModifiers from './_hasNoModifiers';
import _hasAllModifiersSetToFalse from './_hasAllModifiersSetToFalse';
import _parseModifier from './_parseModifier';

const _parseBemProp = (bemObj, domEl, delimiters, shouldRepeatBemRadical) =>
  (radical) => {
    const modifierObj = bemObj[radical];

    if (
      shouldRepeatBemRadical ||
      _hasNoModifiers(modifierObj) ||
      _hasAllModifiersSetToFalse(modifierObj)
    ) {
      addClass(domEl, radical);
    } else {
      removeClass(domEl, radical);
    }

    _parseModifier(modifierObj, domEl, radical, delimiters);
  };

export default _parseBemProp;
