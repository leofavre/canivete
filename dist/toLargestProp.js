import set from "../node_modules/lodash-es/set";

const toLargestProp = key => (prevObj, nextObj) => {
	if (prevObj[key] >= nextObj[key]) {
		return prevObj;
	}
	else {
		return nextObj;
	};
};

export default toLargestProp;
