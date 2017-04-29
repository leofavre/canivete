/**
 * Returns the time passed since a timestamp, in milliseconds;
 *
 * @category Time
 * @param  {number} timestamp The time stamp.
 * @return {number} Time passed since the timestamp, in milliseconds.
 *
 * @example
 * let timestamp = +new Date(),
 * 	result = 0;
 * 
 * setTimeout(() => {
 * 	result = timeSince(timestamp);
 * }, 150);
 *
 * console.log(result);
 * // => 150
 * // approximately.
 */
const timeSince = timestamp => {
	return Number.isFinite(timestamp) ? ((+new Date()) - timestamp) : undefined;
};

export default timeSince;
