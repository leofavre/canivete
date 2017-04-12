import beforeLast from "../dist/beforeLast";

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
