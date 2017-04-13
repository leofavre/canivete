const can = require("../../.canivete.config.js");
const exec = require("child_process").exec;

const action = "mkdir -p " + can.jsdoc.outputDir +
	"&& jsdoc " + can.jsdoc.inputDir + " -t " + can.jsdoc.template + " -d " + can.jsdoc.data +
	"&& node ./doc/script/exportDocFiles.js";

exec(action);