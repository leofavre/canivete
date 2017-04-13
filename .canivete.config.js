module.exports = {
	rollup: {
		input: "./test/*.js",
		output: "./test/bundle/allSpecs.js",
		outputDir: "./test/bundle"
	},
	karma: {
		input: "./test/bundle/allSpecs.js"
	},
	jsdoc: {
		data: "./doc/bundle/data.json",
		inputDir: "./dist",
		outputDir: "./doc/bundle",
		template: "./node_modules/jsdoc-json"
	}
};
