const read = require("fs").readFile;
const exec = require("child_process").exec;

function toPromise(func, target, options, errMsg = "", processOut = arg => arg, processErr = processOut) {
	return new Promise((resolve, reject) => {
		func(target, options, (err, stdout, stderr) => {
			if (err != null) {
				console.log(errMsg);
				reject(processErr(stderr));
			}
			else {
				resolve(processOut(stdout));
			}
		});
	});
}

const readJsonPromise = (target, options) => toPromise(read, target, options, "Falha ao carregar o JSON.", JSON.parse);

const execPromise = (target, options) => toPromise(exec, target, options, "Falha ao executar comando no terminal.");

const getDocsFromJson = json => json.docs ? json.docs.filter(doc => doc.name != undefined) : [];

const exportDocs = docs => docs.forEach(exportDoc);

const exportDoc = doc => {
	let content = prepareContent(doc);
	return execPromise(`ejs-cli ./doc/templates/post.ejs > ./doc/${doc.name}.html -O '${content}'`);
};

const prepareContent = (doc, menu) => JSON.stringify(doc);

readJsonPromise("./doc/src/data.json")
	.then(getDocsFromJson)
	.then(exportDocs)
	.catch();
