module.exports = {
	rollup: {
		input: "./tests/*.js",
		output: "./tests/bundle/allSpecs.js"
	},
	karma: {
		input: "./tests/bundle/allSpecs.js"
	}
};