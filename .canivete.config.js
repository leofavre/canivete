module.exports = {
	rollup: {
		input: "./tests/*.js",
		output: "./tests/bundle/allSpecs.js",
		outputDir: "./tests/bundle"
	},
	karma: {
		input: "./tests/bundle/allSpecs.js"
	},
	jsdoc: {
		data: "./docs/bundle/data.json",
		inputDir: "./dist",
		outputDir: "./docs/bundle",
		template: "./node_modules/jsdoc-json"
	}
};
