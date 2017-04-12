import multiEntry from "rollup-plugin-multi-entry";
const caniveteConfig = require("./canivete.config.js");

export default {
	entry: caniveteConfig.rollup.input,
	dest: caniveteConfig.rollup.output,
	plugins: [multiEntry()],
	format: "es"
}
