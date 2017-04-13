import beforeFirst from "../dist/beforeFirst";

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
