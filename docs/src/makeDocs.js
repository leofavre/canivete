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
	let names = docs.map(doc => doc.name).filter(name => name != null);
	console.log(names);
	return names;
}

readJsonPromise("./docs/src/data.json")
	.then(data => {
		let docs = data.docs;
		docs.forEach(doc => {
			if (doc.name != undefined) {
				let docJson = JSON.stringify(doc);
				exec(`ejs-cli ./docs/templates/post.ejs > ./docs/dist/${doc.name}.html -O '{"name":"${doc.name}"}'`);
			}
		});
	})
	.catch();
