import _simpleAt from "./internal/helpers/_simpleAt";
import _simpleSet from "./internal/helpers/_simpleSet";

/**
 * Groups the contents of an array by one or more iteratees.
 * This function is similar to Lodash
 * [`groupBy()`](https://lodash.com/docs/4.17.4#groupBy),
 * except it can create nested groups but cannot receive
 * strings for iteratees.
 *
 * @category Collection
 * 
 * @param  {Array} collection The original array.
 * @param  {...Function} [...iteratees] The functions used to group the array of objects by their results.
 * @return {Object} The resulting object.
 *
 * @example
 *
 * const getLength = str => str.length;
 * const getFirstLetter = str => str.slice(0, 1);
 *
 * deepGroupBy(["one", "two", "three"], getLength, getFirstLetter);
 * // => {
 * // => 	"3": {"o": ["one"], "t": ["two"]},
 * // => 	"5": {"t": ["three"]}
 * // => }
 * 
 * @example
 *
 * const getLength = str => str.length;
 * const getFirstLetter = str => str.slice(0, 1);
 *
 * deepGroupBy(["one", "two", "three"], getFirstLetter, getLength);
 * // => {
 * // => 	"o": {"3": ["one"]},
 * // => 	"t": {"3": ["two"], "5": ["three"]}
 * // => }
 *
 * @example
 *
 * const stores = [{
 * 	"name": "Iguatemi",
 * 	"city": "Campinas",
 * 	"state": "SP"
 * }, {
 * 	"name": "Jardins",
 * 	"city": "São Paulo",
 * 	"state": "SP"
 * }, {
 * 	"name": "Iguatemi",
 * 	"city": "São Paulo",
 * 	"state": "SP"
 * }, {
 * 	"name": "Pedras",
 * 	"city": "Búzios",
 * 	"state": "RJ"
 * }, {
 * 	"name": "Ipanema",
 * 	"city": "Rio de Janeiro",
 * 	"state": "RJ"
 * }, {
 * 	"name": "Leblon",
 * 	"city": "Rio de Janeiro",
 * 	"state": "RJ"
 * }, {
 * 	"name": "ParkShopping",
 * 	"city": "Brasília",
 * 	"state": "DF"
 * }];
 * 
 * const getStateName = item => item.state;
 * const getCityName = item => item.city;
 *
 * deepGroupBy(stores, getStateName, getCityName);
 * // => {
 * // => 	"SP": { "Campinas": [...], "São Paulo": [...] },
 * // => 	"RJ": { "Búzios": [...], "Rio de Janeiro": [...] },
 * // => 	"DF": { "Brasília": [...] }
 * // => }
 */
const deepGroupBy = (collection, ...iteratees) => {
	let paths = collection.map(value => iteratees.map(iteratee => iteratee(value))),
		result = {};

	paths.forEach((path, index) => {
		let currentValue = _simpleAt(result, path) || [],
			newValue = currentValue.concat([collection[index]]);

		_simpleSet(result, path, newValue);
	});

	return result;
};

export default deepGroupBy;
