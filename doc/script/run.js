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

const readJsonAsPromise = (target, options) => toPromise(read, target, options, "Falha ao carregar o JSON.", JSON.parse);

const execAsPromise = (target, options) => toPromise(exec, target, options, "Falha ao executar comando no terminal.");

const createDir = path => () => execAsPromise(`mkdir -p ${path}`);

const removeDir = path => () => execAsPromise(`rm -r ${path}`);

const exportCommentsAsJsonFile = (path, data, template = "./node_modules/jsdoc-json") => () => execAsPromise(`jsdoc ${path} -d ${data} -t ${template}`);

const readJsonFile = input => () => readJsonAsPromise(input);

const convertJsonToDocs = json => json.docs ? json.docs.filter(doc => doc.name != undefined) : [];

const exportDocsUsingTemplate = (path, template) => docs => docs.forEach(exportDocUsingTemplate(path, template));

const exportDocUsingTemplate = (path, template) => doc => {
	let content = prepareContent(doc);
	return execAsPromise(`ejs-cli ${template} > ${path}/${doc.name}.html -O '${content}'`);
};

const prepareContent = (doc, menu) => JSON.stringify(doc);

Promise.resolve()
	.then(createDir("./doc/temp")) // *
	.then(exportCommentsAsJsonFile("./dist", "./doc/temp/data.json"))
	.then(readJsonFile("./doc/temp/data.json")) // *
	.then(convertJsonToDocs)
	.then(exportDocsUsingTemplate("./doc", "./doc/templates/post.ejs"))
	.then(removeDir("./doc/temp")) // *
	.catch();

// * etapas desnecessárias se eu conseguisse exportar o conteúdo do JSON na Promise, e não num arquivo
