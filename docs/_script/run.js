const camelCase = require("lodash/camelCase");
const exec = require("child_process").exec;
const flow = require("lodash/flow");
const groupBy = require("lodash/groupBy");
const fs = require("fs");





// Basic functions, like creating or removing folders or loading JSON files.

function asPromise(func, path, data, options, errMsg = "", processOut = arg => arg, processErr = processOut) {
	return new Promise((resolve, reject) => {
		let callback = (err, stdout, stderr) => {
			if (err != null) {
				console.log(errMsg);
				reject(processErr(stderr));
			}
			else {
				resolve(processOut(stdout));
			}
		};

		let args = (data == null) ? [path, options, callback] : [path, data, options, callback];

		func(...args);
	});
}

const writeFileAsPromise = (path, data, options) => asPromise(fs.writeFile, path, data, options, "Failed to save file.");

const readJsonAsPromise = (path, options) => asPromise(fs.readFile, path, null, options, "Failed to read JSON.", JSON.parse);

const execAsPromise = (path, options) => asPromise(exec, path, null, options, "Failed to execute shell command.");

const createDir = path => () => execAsPromise(`mkdir -p ${path}`);

const removeDir = path => () => execAsPromise(`rm -r ${path}`);

const byAlphabeticalOrder = (strA, strB) => (strA > strB) ? +1 : (strA < strB) ? -1 : 0;

const removeNewslines = str => str; // str.replace(/(?:\r\n|\r|\n)/g, " ");

const useJekyll = path => () => execAsPromise(`cd ${path} && bundle exec jekyll build`);

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);





// Functions for generating, parsing and exporting jsdoc to a single markdown file.

const jsdocAsJson = (path, data, template = "./node_modules/jsdoc-json") => () => {
	return execAsPromise(`jsdoc ${path} -d ${data} -t ${template}`);
};

const readJsonFile = path => () => readJsonAsPromise(path);

const processJsonFile = json => processDocs(json.docs) || [];

const writeFile = path => data => writeFileAsPromise(path, JSON.stringify(data));

const exportDocsUsingTemplate = (pathIn, pathOut, docName, template) => () => {
	execAsPromise(`ejs-cli ${template} > ${pathOut}/${docName}.md -O '${pathIn}'`);
};

const filterFunctions = docs => docs.filter(isFunction);

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
	let tableConfig = parseTableConfig(params);

	if (params != null) {
		return [formatTableLineMarkdown(["Name", "Default", "Type", "Description"], tableConfig)]
			.concat([formatTableLineMarkdown(["---", "---", "---", "---"], tableConfig)])
			.concat(params.map(formatTableLine(tableConfig)));
	}
};

const formatTableLine = tableConfig => param => {
	let lines = [
		formatCode(param.name),
		formatCode(param.defaultvalue),
		formatType(param.type.names),
		formatParamDesc(param.description, param.optional)
	];

	return formatTableLineMarkdown(lines, tableConfig);
};

const formatTableLineMarkdown = (arr, tableConfig) => "| " + arr.filter(shouldLineExist(tableConfig)).join(" | ") + " |";

const shouldLineExist = tableConfig => (str, i) => tableConfig[i];

const formatCode = str => (str != null) ? "`" + str + "`" : undefined;

const formatType = typeNames => {
	if (typeNames != null && typeNames.length > 0) {
		return typeNames.map(capitalizeFirstLetter).join(", ");
	}
};

const formatParamDesc = (description, isOptional) => {
	if (description != null) {
		return removeNewslines(description) + (isOptional ? " **optional**" : "");
	}
};

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
	// let defaultValue = param.defaultvalue != null ? ` = ${param.defaultvalue}` : "";
	let defaultValue = "";
	return `${preParam}${param.name}${defaultValue}${postParam}`;
};

const parseTableConfig = params => {
	if (params) {
		return [
			params.some(hasParamName),
			params.some(hasParamDefault),
			params.some(hasParamType),
			params.some(hasParamDesc)
		];
	}

	return [false, false, false, false];
};

const hasParamName = param => param.name != null;

const hasParamDesc = param => param.description != null;

const hasParamDefault = param => param.defaultvalue != null;

const hasParamType = param => param.type != null && param.type.names != null && param.type.names.length > 0;

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

const wrapDocs = processedDocs => {
	return {
		docs: processedDocs
	};
};

const isParamOptions = param => param.optional;

const isFunction = docs => docs.kind === "function";

const processDocs = flow([
	filterFunctions,
	formatDocs,
	groupDocsByCategoryName,
	prepareDocs,
	wrapDocs
]);

Promise.resolve()
	.then(createDir("./docs/temp")) // *
	.then(jsdocAsJson("./dist", "./docs/temp/raw.json"))
	.then(readJsonFile("./docs/temp/raw.json")) // *
	.then(processJsonFile)
	.then(writeFile("./docs/temp/processed.json"))
	.then(exportDocsUsingTemplate("./docs/temp/processed.json", "./docs", "index", "./docs/_ejs/content.ejs"))
	.then(exportDocsUsingTemplate("./docs/temp/processed.json", "./docs/_includes", "menu", "./docs/_ejs/menu.ejs"))
	// .then(removeDir("./docs/temp")) // *
	.then(useJekyll("./docs"))
	.catch();

// If I could stream jsdocAsJson into exportDocsUsingTemplate,
// steps marked with an '*' would be unnecessary.
