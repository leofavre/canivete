const _createFragment = (htmlStr) => {
  const domEl = document.createElement('div');
  const result = document.createDocumentFragment();

  domEl.innerHTML = htmlStr;

  Array.from(domEl.children).forEach((child) => {
    result.appendChild(child);
  });

  return result;
};

export default _createFragment;
