import toAverage from "./toAverage";
import at from "../node_modules/lodash-es/at";

/**
 * When used as the first parameter of
 * `Array.prototype.reduce()`, returns the object in
 * which an specific property, passed as parameter, has
 * the closest value to the average.
 *
 * This function expects that the array being reduced to
 * be formed by objects with the same set of properties.
 *
 * @category Reduce
 * @param {string} path The path to the property of an object.
 * @return {object} The object in which an specific property has the closest value to the average.
 * @public
 *
 * @example
 * var cities = [{
 * 	city: "Rio de Janeiro",
 * 	temperature: 96,
 * 	demographics: {
 * 		population: 6.32
 * 	}
 * }, {
 * 	city: "São Paulo",
 * 	temperature: 82.5,
 * 	demographics: {
 * 		population: 12.04
 * 	}
 * }, {
 * 	city: "Curitiba",
 * 	temperature: 70,
 * 	demographics: {
 * 		population: 1.752
 * 	}
 * }, {
 * 	city: "Florianópolis",
 * 	temperature: 86,
 * 	demographics: {
 * 		population: 0.249
 * 	}
 * }];
 *
 * // cities.reduce(toAverageProp("temperature"));
 * // => { city: "São Paulo", [...] }
 *
 * // cities.reduce(toAverageProp("demographics.population"));
 * // => { city: "Rio de Janeiro", [...] }
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
