const can = require("../../.canivete.config.js");
const exec = require("child_process").exec;

const action = "mkdir -p " + can.rollup.outputDir +
	"&& rollup -c .rollup.config.js" +
	"&& karma start .karma.config.js" +
	"&& rm -r " + can.rollup.outputDir;

exec(action);
