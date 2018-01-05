const _joinBemEntityWithDelimiter = (entity, delimiter) =>
  (entity != null && entity !== '' && typeof entity !== 'boolean' ?
    `${delimiter}${entity}` : '');

export default _joinBemEntityWithDelimiter;
