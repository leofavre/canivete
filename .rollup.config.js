import multiEntry from "rollup-plugin-multi-entry";

export default {
	entry: "./test/*.js",
	dest: "./test/temp/allSpecs.js",
	plugins: [multiEntry()],
	format: "es"
};
