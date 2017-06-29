const _createFragment = htmlStr => {
	let domEl = document.createElement("div"),
		result = document.createDocumentFragment();

	domEl.innerHTML = htmlStr;

	Array.from(domEl.children).forEach(child => {
		result.appendChild(child);
	});

	return result;
};

export default _createFragment;
