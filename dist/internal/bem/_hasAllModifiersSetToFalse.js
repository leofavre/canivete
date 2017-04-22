const _hasAllModifiersSetToFalse = modifierObj => {
	return Object.keys(modifierObj).every(key => modifierObj[key] === false);
};

export default _hasAllModifiersSetToFalse;
