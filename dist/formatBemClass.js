import _formatBemRadical from "./internal/bem/_formatBemRadical";
import formatBemClassFromRadical from "./formatBemClassFromRadical";

function formatBemClass(block, element, modifier, value, delimiterArr) {
	let radical = _formatBemRadical(block, element, delimiterArr);
	return formatBemClassFromRadical(radical, modifier, value, delimiterArr);
}

export default formatBemClass;
