function _sliceOnOccurrence(slice, position, delimiter, str) {
	let index = (delimiter === "") ? -1 : (position === "first") ? str.indexOf(delimiter) : str.lastIndexOf(delimiter);
	return (slice === "before") ? (index > -1) ? str.substr(0, index) : "" : (index > -1) ? str.substr(index + delimiter.length) : "";
}

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **posteriores
 * à primeira ocorrência** do delimitador na sentença.
 * Caso o delimitador não seja encontrado, retorna
 * uma string vazia.
 *
 * @category String
 * @param  {string} str
 * @param  {string} delimiter
 * @return {string}
 * @public
 *
 * @example
 * afterFirst("paralelepípedo", "le");
 * // => "lepípedo"
 */
const afterFirst = (str, delimiter) => _sliceOnOccurrence("after", "first", delimiter, str);

describe("afterFirst", function() {
	it("“Paralelepípedo” depois do primeiro “a” é “ralelepípedo”.", function() {
		expect(
			afterFirst("Paralelepípedo", "a")
		).toBe("ralelepípedo");
	});

	it("“Paralelepípedo” depois do primeiro “e” é “lepípedo”.", function() {
		expect(
			afterFirst("Paralelepípedo", "e")
		).toBe("lepípedo");
	});

	it("“Paralelepípedo” depois do primeiro “le” é “lepípedo”.", function() {
		expect(
			afterFirst("Paralelepípedo", "le")
		).toBe("lepípedo");
	});

	it("“Paralelepípedo” depois do primeiro “P” é “aralelepípedo”.", function() {
		expect(
			afterFirst("Paralelepípedo", "P")
		).toBe("aralelepípedo");
	});

	it("“Paralelepípedo” depois do primeiro “x” (não encontrado) é “”.", function() {
		expect(
			afterFirst("Paralelepípedo", "x")
		).toBe("");
	});
});

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **posteriores
 * à última ocorrência** do delimitador na sentença.
 * Caso o delimitador não seja encontrado, retorna
 * uma string vazia.
 *
 * @category String
 * @param  {string} str
 * @param  {string} delimiter
 * @return {string}
 * @public
 *
 * @example
 * afterLast("paralelepípedo", "le");
 * // => "pípedo"
 */
const afterLast = (str, delimiter) => _sliceOnOccurrence("after", "last", delimiter, str);

describe("afterLast", function() {
	it("“Paralelepípedo” depois do último “a” é “lelepípedo”.", function() {
		expect(
			afterLast("Paralelepípedo", "a")
		).toBe("lelepípedo");
	});

	it("“Paralelepípedo” depois do último “e” é “do”.", function() {
		expect(
			afterLast("Paralelepípedo", "e")
		).toBe("do");
	});

	it("“Paralelepípedo” depois do último “le” é “pípedo”.", function() {
		expect(
			afterLast("Paralelepípedo", "le")
		).toBe("pípedo");
	});

	it("“Paralelepípedo” depois do último “P” é “aralelepípedo”.", function() {
		expect(
			afterLast("Paralelepípedo", "P")
		).toBe("aralelepípedo");
	});

	it("“Paralelepípedo” depois do último “x” (não encontrado) é “”.", function() {
		expect(
			afterLast("Paralelepípedo", "x")
		).toBe("");
	});
});

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **anteriores
 * à primeira ocorrência** do delimitador na sentença.
 * Caso o delimitador não seja encontrado, retorna
 * uma string vazia.
 *
 * @category String
 * @param  {string} str
 * @param  {string} delimiter
 * @return {string}
 * @public
 *
 * @example
 * beforeFirst("paralelepípedo", "le");
 * // => "para"
 */
const beforeFirst = (str, delimiter) => _sliceOnOccurrence("before", "first", delimiter, str);

describe("beforeFirst", function() {
	it("“Paralelepípedo” antes do primeiro “a” é “P”.", function() {
		expect(
			beforeFirst("Paralelepípedo", "a")
		).toBe("P");
	});

	it("“Paralelepípedo” antes do primeiro “e” é “Paral”.", function() {
		expect(
			beforeFirst("Paralelepípedo", "e")
		).toBe("Paral");
	});

	it("“Paralelepípedo” antes do primeiro “le” é “Para”.", function() {
		expect(
			beforeFirst("Paralelepípedo", "le")
		).toBe("Para");
	});

	it("“Paralelepípedo” antes do primeiro “P” é “”.", function() {
		expect(
			beforeFirst("Paralelepípedo", "P")
		).toBe("");
	});

	it("“Paralelepípedo” antes do primeiro “x” (não encontrado) é “”.", function() {
		expect(
			beforeFirst("Paralelepípedo", "x")
		).toBe("");
	});
});

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **anteriores
 * à última ocorrência** do delimitador na sentença.
 * Caso o delimitador não seja encontrado, retorna
 * uma string vazia.
 *
 * @category String
 * @param  {string} str
 * @param  {string} delimiter
 * @return {string}
 * @public
 *
 * @example
 * beforeLast("paralelepípedo", "le");
 * // => "parale"
 */
const beforeLast = (str, delimiter) => _sliceOnOccurrence("before", "last", delimiter, str);

describe("beforeLast", function() {
	it("“Paralelepípedo” antes do último “a” é “Par”.", function() {
		expect(
			beforeLast("Paralelepípedo", "a")
		).toBe("Par");
	});

	it("“Paralelepípedo” antes do último “e” é “Paralelepíp”.", function() {
		expect(
			beforeLast("Paralelepípedo", "e")
		).toBe("Paralelepíp");
	});

	it("“Paralelepípedo” antes do último “le” é “Parale”.", function() {
		expect(
			beforeLast("Paralelepípedo", "le")
		).toBe("Parale");
	});

	it("“Paralelepípedo” antes do último “P” é “”.", function() {
		expect(
			beforeLast("Paralelepípedo", "P")
		).toBe("");
	});

	it("“Paralelepípedo” antes do último “x” (não encontrado) é “”.", function() {
		expect(
			beforeLast("Paralelepípedo", "x")
		).toBe("");
	});
});
