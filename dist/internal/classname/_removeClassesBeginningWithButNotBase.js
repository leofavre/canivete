import removeClass from "../../removeClass";

const _removeClassesBeginningWithButNotBase = (domEl, str) => {
	for (let i = domEl.classList.length - 1; i >= 0; i--) {
		let currentClass = domEl.classList.item(i);

		if (currentClass !== str && currentClass.startsWith(str)) {
			removeClass(domEl, currentClass);
		}
	}
	return domEl;
};

export default _removeClassesBeginningWithButNotBase;
