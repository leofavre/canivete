import toAverage from "./toAverage";
import set from "../node_modules/lodash-es/set";

function toAverageProp(key) {
	let average;

	return function(prevObj, nextObj, index, arr) {
		average = average || arr.map(obj => obj[key]).reduce(toAverage);

		if (Math.abs(prevObj[key] - average) <= Math.abs(nextObj[key] - average)) {
			return prevObj;
		}
		else {
			return nextObj;
		}
	};
}

export default toAverageProp;
