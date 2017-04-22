import formatBemClass from "../dist/formatBemClass";

describe("formatBemClass", function() {
	it("Should format a CSS classe according to the BEM methodology.", function() {
		expect(formatBemClass("menu", null,   null,     null,  ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", "item", null,     null,  ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", null,  ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", false, ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", true,  ["__", "--", "-"])).toBe("menu__item--active");
		expect(formatBemClass("menu", "item", "level",  42,    ["__", "--", "-"])).toBe("menu__item--level-42");
		expect(formatBemClass("menu", "item", "level",  "42",  ["__", "--", "-"])).toBe("menu__item--level-42");
		expect(formatBemClass("menu", null,   "active", null,  ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", null,   "active", false, ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", null,   "active", true,  ["__", "--", "-"])).toBe("menu--active");
		expect(formatBemClass("menu", null,   "level",  42,    ["__", "--", "-"])).toBe("menu--level-42");
		expect(formatBemClass("menu", null,   "level",  "42",  ["__", "--", "-"])).toBe("menu--level-42");
	});

	it("Should format a CSS classe according to the BEM methodology even when BEM entity parameters are ommited.", function() {
		expect(formatBemClass("menu",                          ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", "item",                  ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active",        ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", false, ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item", "active", true,  ["__", "--", "-"])).toBe("menu__item--active");
		expect(formatBemClass("menu", "item", "level",  42,    ["__", "--", "-"])).toBe("menu__item--level-42");
		expect(formatBemClass("menu", "item", "level",  "42",  ["__", "--", "-"])).toBe("menu__item--level-42");
		expect(formatBemClass("menu", null,   "active",        ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", null,   "active", false, ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", null,   "active", true,  ["__", "--", "-"])).toBe("menu--active");
		expect(formatBemClass("menu", null,   "level",  42,    ["__", "--", "-"])).toBe("menu--level-42");
		expect(formatBemClass("menu", null,   "level",  "42",  ["__", "--", "-"])).toBe("menu--level-42");
	});
});
