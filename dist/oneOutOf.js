import random from "../node_modules/lodash-es/random";

/**
 * Returns `true` approximately one out of `num` times,
 * randomly.
 *
 * @category Random
 * 
 * @param  {number} num A number greater than zero.
 * @return {boolean} Return `true` approximately one out of `num` times.
 *
 * @example
 * oneOutOf(2);
 * // => true
 *
 * oneOutOf(2);
 * // => false
 *
 * oneOutOf(2);
 * // => false
 *
 * oneOutOf(2);
 * // => true
 */
const oneOutOf = num => {
	if (!Number.isFinite(num) || num < 1) {
		throw new Error("A number greater than 1 is expected as parameter.");
	}

	if (num === 1) {
		return true;
	}

	return random(1, num) === num;
};

export default oneOutOf;
