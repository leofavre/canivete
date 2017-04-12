function _sliceOnOccurrence(slice, position, delimiter, str) {
	let index = (delimiter === "") ? -1 : (position === "first") ? str.indexOf(delimiter) : str.lastIndexOf(delimiter);
	return (slice === "before") ? (index > -1) ? str.substr(0, index) : "" : (index > -1) ? str.substr(index + delimiter.length) : "";
}

/**
 * Dadas duas strings – sentença e delimitador –,
 * retorna uma string com os caracteres **anteriores
 * à primeira ocorrência** do delimitador na sentença.
 * Caso o delimitador não seja encontrado, retorna
 * uma string vazia.
 * 
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