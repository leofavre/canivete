const fs = require("fs");
const exec = require("child_process").exec;

function readJsonPromise(file, charset = "utf8") {
	return new Promise(function(resolve, reject) {
		fs.readFile(file, charset, (err, data) => {
			if (err) {
				console.log("Falha ao carregar o JSON da documentação.");
				reject();
			}
			else {
				resolve(JSON.parse(data));
			}
		});
	});
}

function getTitles(docs) {
	return docs.map(doc => doc.name).filter(name => name != null);
}

function exportDoc(doc) {
	let docJson = JSON.stringify(doc);
	exec(`ejs-cli ./doc/templates/post.ejs > ./doc/${doc.name}.html -O '${docJson}'`);
}

readJsonPromise("./doc/src/data.json")
	.then(data => {
		return data.docs.forEach(exportDoc);
	})
	.catch();
