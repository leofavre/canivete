import set from "../node_modules/lodash-es/set";

const toClosestProp = (key, num) => (prevObj, nextObj, index, arr) => {
	if (Math.abs(prevObj[key] - num) <= Math.abs(nextObj[key] - num)) {
		return prevObj;
	}
	else {
		return nextObj;
	};
};

export default toClosestProp;
