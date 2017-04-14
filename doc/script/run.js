const ejs = require("ejs");
const exec = require("child_process").exec;
const groupBy = require("lodash/groupBy");
const markdown = require("markdown");
const read = require("fs").readFile;





// funções básicas, como criar e remover pastas ou carregar um JSON de um arquivo.

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

const inAlphabeticalOrder = (strA, strB) => (strA > strB) ? +1 : (strA < strB) ? -1 : 0;

const removeNewslines = str => str.replace(/(?:\r\n|\r|\n)/g, " ");





// funções de exportação 

const jsdocAsJson = (path, data, template = "./node_modules/jsdoc-json") => () => execAsPromise(`jsdoc ${path} -d ${data} -t ${template}`);

const readJsonFile = data => () => readJsonAsPromise(data);

const parseJsonFile = json => json.docs ? json.docs.filter(doc => doc.name != undefined) : [];

const exportDocsUsingTemplate = (path, template) => docs => {
	docs = docs.map(prepareDoc);
	let menu = prepareMenu(docs);
	let page = joinDocsAndMenu(docs, menu);

	let data = JSON.stringify(page);
	return execAsPromise(`ejs-cli ${template} > ${path}/index.md -O '${data}'`);
};

const prepareMenu = docs => {
	let groupedDocs = groupBy(docs, byCategoryName);
	let categoryNames = Object.keys(groupedDocs);

	return categoryNames
		.sort(inAlphabeticalOrder)
		.map(prepareSubmenu(groupedDocs));
};

const prepareSubmenu = (groupedDocs) => categoryName => {
	let categoryDoc = groupedDocs[categoryName];
	return {
		name: categoryName,
		items: getCategoryFunctions(categoryDoc)
	};
};

const prepareDoc = doc => {
	doc.description = removeNewslines(doc.description);
	return doc;
};

const joinDocsAndMenu = (docs, menu) => {
	let page = {};
	page.body = docs;
	page.menu = menu;
	return page;
};

const byCategoryName = doc => doc.tags.filter(tag => tag.title === "category")[0].value;

const getDocName = doc => doc.name;

const getCategoryFunctions = categoryDoc => categoryDoc.map(getDocName);

Promise.resolve()
	.then(createDir("./doc/temp")) // *
	.then(jsdocAsJson("./dist", "./doc/temp/data.json"))
	.then(readJsonFile("./doc/temp/data.json")) // *
	.then(parseJsonFile)
	.then(exportDocsUsingTemplate("./doc", "./doc/templates/index.ejs"))
	.then(removeDir("./doc/temp")) // *
	.catch();

// * etapas desnecessárias se eu conseguisse exportar o conteúdo do JSON na Promise, e não num arquivo
