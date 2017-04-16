import set from "../node_modules/lodash-es/set";

const toLargestProp = key => (prevObj, nextObj) => {
	if (nextObj[key] >= prevObj[key]) {
		return prevObj;
	}
	else {
		return nextObj;
	};
};

export default toLargestProp;
