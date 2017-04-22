import _formatBemRadical from "./internal/bem/_formatBemRadical";
import _formatBemModifier from "./internal/bem/_formatBemModifier";
// import _formatBemClassFromRadical from "./internal/bem/_formatBemClassFromRadical";

function formatBemClass(block, element, modifier, value, delimiterArr) {
	let radical = _formatBemRadical(block, element, delimiterArr);
	let classModifier = _formatBemModifier(modifier, value, delimiterArr);
	return `${radical}${classModifier}`;
	// return _formatBemClassFromRadical(radical, modifier, value, delimiterArr);
}

export default formatBemClass;
