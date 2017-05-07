import groupBy from "lodash-es/groupBy";
import set from "lodash-es/set";
import at from "lodash-es/at";

/**
 * A recursive implementation of LoDash [`groupBy()`](https://lodash.com/docs/4.17.4#groupBy)
 * that can take one or more iteratees to create nested groups.
 *
 * @todo Refactor and separate functions in their own files.
 *
 * @category Collection
 * 
 * @param  {Array.<Object>} collection The array of objects.
 * @param  {...Function} [...iteratees] The functions used to group the array of objects by their results.
 * @return {Object} The resulting object.
 *
 * @example
 *
 * const getLength = str => str.length;
 * const getFirstLetter = str => str.slice(0, 1);
 *
 * groupByRecursive(["one", "two", "three"], getLength, getFirstLetter);
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
 * groupByRecursive(["one", "two", "three"], getFirstLetter, getLength);
 * // => {
 * // => 	"o": {"3": ["one"]},
 * // => 	"t": {"3": ["two"], "5": ["three"]}
 * // => }
 *
 * @example
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
 * groupByRecursive(stores, getStateName, getCityName);
 * // => {
 * // => 	"SP": { "Campinas": [...], "São Paulo": [...] },
 * // => 	"RJ": { "Búzios": [...], "Rio de Janeiro": [...] },
 * // => 	"DF": { "Brasília": [...] }
 * // => }
 */
const groupByRecursive = (collection, ...iteratees) => {

	const groupBranch = (collection, iteratee, keys = []) => (keys.length === 0) ? groupBy(collection, iteratee) : set(collection, formatPath(keys), groupBy(simpleAt(collection, keys), iteratee));
	const getKeysAt = (collection, keys = []) => (keys.length === 0) ? Object.keys(collection) : Object.keys(simpleAt(collection, keys));

	const simpleAt = (collection, keys) => at(collection, formatPath(keys))[0];
	const formatPath = (keys = []) => keys.join(".") || undefined;

	const doGroupByRecursive = (collection, iteratees = [], keys = []) => {
		if (iteratees.length > 0) {
			let result = groupBranch(collection, iteratees[0], keys);

			getKeysAt(result, keys).forEach(key => {
				doGroupByRecursive(result, iteratees.slice(1), keys.concat([key]));
			});

			return result;
		}

		return collection;
	};

	return doGroupByRecursive(collection, iteratees);
};

export default groupByRecursive;
