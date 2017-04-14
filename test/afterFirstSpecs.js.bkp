import afterFirst from "../dist/afterFirst";

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
