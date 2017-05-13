import nodeResolve from "rollup-plugin-node-resolve";

export default {
	entry: "./docs/index.js",
	dest: "./docs/js/index.js",
	plugins: [
		nodeResolve({
			jsnext: true
		})
	],
	format: "es"
};
