const _joinBemEntityWithDelimiter = (entity, delimiter) => {
	return (entity != null && entity !== "" && typeof entity !== "boolean") ? `${delimiter}${entity}` : "";
};

export default _joinBemEntityWithDelimiter;
