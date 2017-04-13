const read = require("fs").readFile;
const exec = require("child_process").exec;
const groupBy = require("lodash/groupBy");





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





// funções de exportação 

const jsdocAsJson = (path, data, template = "./node_modules/jsdoc-json") => () => execAsPromise(`jsdoc ${path} -d ${data} -t ${template}`);

const readJsonFile = data => () => readJsonAsPromise(data);

const parseJsonFile = json => json.docs ? json.docs.filter(doc => doc.name != undefined) : [];

const exportDocsUsingTemplate = (path, template) => docs => {
	let menu = prepareMenu(docs);
	return docs.forEach(exportDocUsingTemplate(path, template, menu));
};

const exportDocUsingTemplate = (path, template, menu) => doc => {
	let content = prepareContent(doc, menu);
	let name = getDocName(doc);
	return execAsPromise(`ejs-cli ${template} > ${path}/${name}.html -O '${content}'`);
};

const prepareMenu = docs => {
	let groupedMenu = groupBy(docs, byCategoryName);
	let categoryNames = Object.keys(groupedMenu);

	return categoryNames
		.sort(inAlphabeticalOrder)
		.map(prepareSubmenu(groupedMenu));
};

const prepareSubmenu = (groupedMenu) => categoryName => {
	let categoryDoc = groupedMenu[categoryName];
	return {
		name: categoryName,
		items: getCategoryFunctions(categoryDoc)
	};
};

const prepareContent = (doc, menu) => {
	doc.menu = menu;
	return JSON.stringify(doc);
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
	// .then(removeDir("./doc/temp")) // *
	.catch();

// * etapas desnecessárias se eu conseguisse exportar o conteúdo do JSON na Promise, e não num arquivo
