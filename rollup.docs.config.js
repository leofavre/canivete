import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";

export default {
	entry: "./docs/index.js",
	dest: "./docs/js/index.js",
	plugins: [
		babel({
			presets: [
				[
					"es2015", {
						modules: false
					}
				]
			],
			babelrc: false
		}),
		nodeResolve({
			jsnext: true
		}),
		uglify()
	],
	format: "es",
	context: "this"
};
