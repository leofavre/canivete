const read = require("fs").readFile;
const exec = require("child_process").exec;

function toPromise(func, target, errMsg = "", processFunc = arg => arg) {
	return new Promise((resolve, reject) => {
		func(target, (err, success) => {
			if (err) {
				console.log(errMsg);
				reject(err);
			}
			else {
				resolve(processFunc(success));
			}
		});
	});
}

const readJsonPromise = (target) => toPromise(read, target, "Falha ao carregar o JSON.", data => JSON.parse(data));

const execPromise = (target) => toPromise(exec, target, "Falha ao executar comando no terminal.");

const getDocsFromJson = json => json.docs ? json.docs.filter(doc => doc.name != undefined) : [];

const exportDocs = docs => docs.forEach(exportDoc);

const exportDoc = doc => {
	let content = prepareContent(doc);
	return execPromise(`ejs-cli ./docs/templates/post.ejs > ./docs/${doc.name}.html -O '${content}'`);
};

const prepareContent = (doc, menu) => JSON.stringify(doc);

readJsonPromise("./docs/src/data.json")
	.then(getDocsFromJson)
	.then(exportDocs)
	.catch();
