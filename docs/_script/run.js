const camelCase = require("lodash/camelCase");
const exec = require("child_process").exec;
const flow = require("lodash/flow");
const groupBy = require("lodash/groupBy");
const read = require("fs").readFile;





// Basic functions, like creating or removing folders or loading JSON files.

function asPromise(func, target, options, errMsg = "", processOut = arg => arg, processErr = processOut) {
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

const readJsonAsPromise = (target, options) => asPromise(read, target, options, "Falha ao carregar o JSON.", JSON.parse);

const execAsPromise = (target, options) => asPromise(exec, target, options, "Falha ao executar comando no terminal.");

const createDir = path => () => execAsPromise(`mkdir -p ${path}`);

const removeDir = path => () => execAsPromise(`rm -r ${path}`);

const byAlphabeticalOrder = (strA, strB) => (strA > strB) ? +1 : (strA < strB) ? -1 : 0;

const removeNewslines = str => str; // str.replace(/(?:\r\n|\r|\n)/g, " ");

const useJekyll = path => () => execAsPromise(`cd ${path} && bundle exec jekyll build`);





// Functions for generating, parsing and exporting jsdoc to a single markdown file.

const jsdocAsJson = (path, data, template = "./node_modules/jsdoc-json") => () => {
	return execAsPromise(`jsdoc ${path} -d ${data} -t ${template}`);
};

const readJsonFile = data => () => readJsonAsPromise(data);

const parseJsonFile = json => json.docs ? json.docs.filter(doc => doc.name != undefined) : [];

const exportDocsUsingTemplate = (path, docName, template) => docs => {
	let data = JSON.stringify(processDocs(docs));
	// console.log(data);
	execAsPromise(`ejs-cli ${template} > ${path}/${docName}.md -O '${data}'`);
	return docs;
};

const formatDocs = docs => docs.map(formatDoc);

const formatDoc = doc => {
	doc.description = formatDescription(doc.description);
	doc.href = formatHref(doc.name);
	doc.paramsTable = formatTable(doc.params);
	doc.returnsTable = formatTable(doc.returns);
	doc.signature = formatSignature(doc.name, doc.params);
	return doc;
};

const formatTable = params => {
	return (params != null) ? params.map(formatTableLine) : undefined;
};

const formatTableLine = param => {
	let name = param.name ? `\`${param.name}\` | ` : "";
	let defaultValue = param.defaultvalue != null ? `\`${param.defaultvalue}\` | ` : " | ";
	let type = (param.type && param.type.names.length > 0) ? "`" + formatType(param.type.names) + "` | " : "";
	let desc = param.description ? " " + formatTableDescription(param.description, param.optional) : "";
	return `| ${name}${defaultValue}${type}${desc} |`;
};

const formatTableDescription = (description, isOptional) => removeNewslines(description) + (isOptional ? " **optional**" : "");

const formatDescription = description => removeNewslines(description);

const formatHref = name => camelCase(name);

const formatSignature = (name, params) => {
	params = formatSignatureParams(params);
	return `${name}(${params})`;
};

const formatSignatureParams = params => {
	return (params != null) ? params.map(formatParam).join(", ") : "";
};

const formatParam = param => {
	let preParam = param.optional ? "[" : "";
	let postParam = param.optional ? "]" : "";
	let defaultValue = param.defaultvalue != null ? ` = ${param.defaultvalue}` : "";
	return `${preParam}${param.name}${defaultValue}${postParam}`;
};

const formatType = typeNames => {
	if (typeNames != null && typeNames.length > 0) {
		return "{" + typeNames.join("|") + "}";
	}
};

const groupDocsByCategoryName = docs => groupBy(docs, byCategoryName);

const byCategoryName = doc => doc.tags.filter(tag => tag.title === "category")[0].value;

const prepareDocs = groupedDocs => {
	let categoryNames = Object.keys(groupedDocs);

	return categoryNames
		.sort(byAlphabeticalOrder)
		.map(prepareDoc(groupedDocs));
};

const prepareDoc = groupedDocs => categoryName => {
	let categoryDoc = groupedDocs[categoryName];
	return {
		name: categoryName,
		href: formatHref(categoryName),
		items: categoryDoc
	};
};

const wrapDocs = preparedDocs => {
	return {
		docs: preparedDocs
	};
};

const processDocs = flow([
	formatDocs,
	groupDocsByCategoryName,
	prepareDocs,
	wrapDocs
]);

Promise.resolve()
	.then(createDir("./docs/temp")) // *
	.then(jsdocAsJson("./dist", "./docs/temp/data.json"))
	.then(readJsonFile("./docs/temp/data.json")) // *
	.then(parseJsonFile)
	.then(exportDocsUsingTemplate("./docs", "index", "./docs/_ejs/content.ejs"))
	.then(exportDocsUsingTemplate("./docs/_includes", "menu", "./docs/_ejs/menu.ejs"))
	.then(removeDir("./docs/temp")) // *
	.then(useJekyll("./docs"))
	.catch();

// If I could stream jsdocAsJson into exportDocsUsingTemplate,
// steps marked with an '*' would be unnecessary.
