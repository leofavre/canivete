import multiEntry from 'rollup-plugin-multi-entry';

export default {
	entry: "tests/**/*.js",
	dest: "tests/bundle/allSpecs.js",
	plugins: [
		multiEntry()
	],
	format: "es"
};
