import formatBemClass from "../dist/formatBemClass";

describe("formatBemClass", function() {
	let delimiters = ["__", "--", "-"];

	it("Should format a CSS classe according to the BEM methodology.", function() {
		expect(formatBemClass("menu", null,   null,     null,  delimiters)).toBe("menu");
		expect(formatBemClass("menu", "item", null,     null,  delimiters)).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", null,  delimiters)).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", false, delimiters)).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", true,  delimiters)).toBe("menu__item--active");
		expect(formatBemClass("menu", "item", "level",  42,    delimiters)).toBe("menu__item--level-42");
		expect(formatBemClass("menu", "item", "level",  "42",  delimiters)).toBe("menu__item--level-42");
		expect(formatBemClass("menu", null,   "active", null,  delimiters)).toBe("menu");
		expect(formatBemClass("menu", null,   "active", false, delimiters)).toBe("menu");
		expect(formatBemClass("menu", null,   "active", true,  delimiters)).toBe("menu--active");
		expect(formatBemClass("menu", null,   "level",  42,    delimiters)).toBe("menu--level-42");
		expect(formatBemClass("menu", null,   "level",  "42",  delimiters)).toBe("menu--level-42");
		expect(formatBemClass("",     null,   "active", null,  delimiters)).toBe("");
		expect(formatBemClass("",     null,   "active", false, delimiters)).toBe("");
		expect(formatBemClass("",     null,   "active", true,  delimiters)).toBe("--active");
		expect(formatBemClass("",     null,   "level",  "42",  delimiters)).toBe("--level-42");
		expect(formatBemClass(null,   null,   "active", null,  delimiters)).toBe("");
		expect(formatBemClass(null,   null,   "active", false, delimiters)).toBe("");
		expect(formatBemClass(null,   null,   "active", true,  delimiters)).toBe("--active");
		expect(formatBemClass(null,   null,   "level",  "42",  delimiters)).toBe("--level-42");
	});

	it("Should format a CSS classe according to the BEM methodology even when BEM entity parameters are ommited.", function() {
		expect(formatBemClass("menu",                          delimiters)).toBe("menu");
		expect(formatBemClass("menu", "item",                  delimiters)).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active",        delimiters)).toBe("menu__item--active");
		expect(formatBemClass("menu", "item", "active", false, delimiters)).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", true,  delimiters)).toBe("menu__item--active");
		expect(formatBemClass("menu", "item", "level",  42,    delimiters)).toBe("menu__item--level-42");
		expect(formatBemClass("menu", "item", "level",  "42",  delimiters)).toBe("menu__item--level-42");
		expect(formatBemClass("menu", null,   "active",        delimiters)).toBe("menu--active");
		expect(formatBemClass("menu", null,   "active", false, delimiters)).toBe("menu");
		expect(formatBemClass("menu", null,   "active", true,  delimiters)).toBe("menu--active");
		expect(formatBemClass("menu", null,   "level",  42,    delimiters)).toBe("menu--level-42");
		expect(formatBemClass("menu", null,   "level",  "42",  delimiters)).toBe("menu--level-42");
		expect(formatBemClass("",     null,   "active",        delimiters)).toBe("--active");
		expect(formatBemClass("",     null,   "active", false, delimiters)).toBe("");
		expect(formatBemClass("",     null,   "active", true,  delimiters)).toBe("--active");
		expect(formatBemClass("",     null,   "level",  "42",  delimiters)).toBe("--level-42");
		expect(formatBemClass(null,   null,   "active",        delimiters)).toBe("--active");
		expect(formatBemClass(null,   null,   "active", false, delimiters)).toBe("");
		expect(formatBemClass(null,   null,   "active", true,  delimiters)).toBe("--active");
		expect(formatBemClass(null,   null,   "level",  "42",  delimiters)).toBe("--level-42");
	});

	it("Should ignore empty BEM entities", function(){
		expect(formatBemClass("menu", "",        "active", delimiters)).toBe("menu--active");
		expect(formatBemClass("menu", undefined, "active", delimiters)).toBe("menu--active");
		expect(formatBemClass("menu", null,      "active", delimiters)).toBe("menu--active");
	});

	it("Should not accept less than two parameters", function(){
		expect(() => formatBemClass()).toThrow();
		expect(() => formatBemClass("menu")).toThrow();
	});
});
