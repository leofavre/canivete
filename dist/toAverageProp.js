import toAverage from "./toAverage";
import at from "../node_modules/lodash-es/at";

/**
 * Given an array of objects, returns the one in which an
 * specified property has the closest value to the average.
 * 
 * This function is curried so as to be used as the
 * first parameter of `Array.prototype.reduce()`.
 *
 * Note that this function considers that all objects in
 * the array have the same set of properties.
 *
 * @category Reduce
 * @param {string} path The path to an object's property
 * @return {number} The one in which an specified property has the closest value to the average
 * @public
 *
 * @example
 * var cities = [{
 *		city: "Rio de Janeiro",
 *		temperature: 96
 *	}, {
 *		city: "São Paulo",
 *		temperature: 82.5
 *	}, {
 *		city: "Curitiba",
 *		temperature: 70
 *	}, {
 *		city: "Florianópolis",
 *		temperature: 86
 *	}];
 *
 * // cities.reduce(toAverageProp("temperature"));
 * // => {
 * // 	city: "Rio de Janeiro",
 * // 	temperature: 96
 * // }
 *
 * // average temperature: 83.625
 * // the city in which its temperature is the
 * // closest to the average temperature: São Paulo.
 */
const toAverageProp = path => {
	let average;

	return (prevObj, nextObj, index, arr) => {
		average = average || arr.map(obj => at(obj, path)[0]).reduce(toAverage());

		if (Math.abs(at(prevObj, path)[0] - average) <= Math.abs(at(nextObj, path)[0] - average)) {
			return prevObj;
		}
		else {
			return nextObj;
		}
	};
};

export default toAverageProp;
