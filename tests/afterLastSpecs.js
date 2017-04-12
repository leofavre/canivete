import afterLast from "../dist/afterLast";

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
