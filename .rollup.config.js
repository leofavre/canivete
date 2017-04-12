import multiEntry from "rollup-plugin-multi-entry";
const can = require("./.canivete.config.js");

export default {
	entry: can.rollup.input,
	dest: can.rollup.output,
	plugins: [multiEntry()],
	format: "es"
}
