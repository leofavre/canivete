module.exports = {
	rollup: {
		input: "./tests/*.js",
		output: "./tests/bundle/allSpecs.js",
		outputDir: "./tests/bundle"
	},
	karma: {
		input: "./tests/bundle/allSpecs.js"
	}
};