const _hasAllModifiersSetToFalse = modifierObj =>
  Object.keys(modifierObj).every(key => modifierObj[key] === false);

export default _hasAllModifiersSetToFalse;
