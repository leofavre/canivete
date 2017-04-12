// "docs": "npm run docs:dir && npm run docs:src && npm run docs:build",
// "docs:dir": "mkdir -p ./docs/src",
// "docs:src": "jsdoc ./dist -t node_modules/jsdoc-json -d ./docs/src/data.json",
// "docs:build": "node ./docs/src/makeDocs.js"

const can = require("../../.canivete.config.js");
const exec = require("child_process").exec;

const action = "mkdir -p " + can.jsdoc.outputDir +
	"&& jsdoc " + can.jsdoc.inputDir + " -t " + can.jsdoc.template + " -d " + can.jsdoc.data +
	"&& node ./docs/script/exportDocFiles.js";

exec(action);