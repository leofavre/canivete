import multiEntry from "rollup-plugin-multi-entry";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
	entry: "./test/*.js",
	dest: "./test/temp/allSpecs.js",
	plugins: [
		multiEntry(),
		nodeResolve({
			jsnext: true
		})
	],
	format: "es"
};
