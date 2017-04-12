const fs = require("fs");
const exec = require("child_process").exec;

function readJsonPromise(file, charset = "utf8") {
	return new Promise(function(resolve, reject) {
		fs.readFile(file, charset, (err, json) => {
			if (err) {
				console.log("Falha ao carregar o JSON.");
				reject();
			}
			else {
				resolve(JSON.parse(json));
			}
		});
	});
}

const getDocsFromJson = json => json.docs ? json.docs.filter(doc => doc.name != undefined) : [];

const exportDocs = docs => docs.forEach(exportDoc);

const exportDoc = doc => {
	let content = prepareContent(doc);
	exec(`ejs-cli ./docs/templates/post.ejs > ./docs/${doc.name}.html -O '${content}'`);
};

const prepareContent = (doc, menu) => JSON.stringify(doc);

readJsonPromise("./docs/src/data.json")
	.then(getDocsFromJson)
	.then(exportDocs)
	.catch();
