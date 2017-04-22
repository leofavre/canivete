import formatBemClass from "../dist/formatBemClass";

describe("formatBemClass", function() {
	it("Should format a CSS classe according to the BEM methodology.", function() {
		expect(formatBemClass("menu", null,      null,     null,  ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", "item",    null,     null,  ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item",    "active", null,  ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item",    "active", false, ["__", "--", "-"])).toBe("menu__item");
		expect(formatBemClass("menu", "item",    "active", true,  ["__", "--", "-"])).toBe("menu__item--active");
		expect(formatBemClass("menu", "item",    "level",  42,    ["__", "--", "-"])).toBe("menu__item--level-42");
		expect(formatBemClass("menu", "item",    "level",  "42",  ["__", "--", "-"])).toBe("menu__item--level-42");
		expect(formatBemClass("menu", undefined, "active", null,  ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", undefined, "active", false, ["__", "--", "-"])).toBe("menu");
		expect(formatBemClass("menu", undefined, "active", true,  ["__", "--", "-"])).toBe("menu--active");
		expect(formatBemClass("menu", undefined, "level",  42,    ["__", "--", "-"])).toBe("menu--level-42");
		expect(formatBemClass("menu", undefined, "level",  "42",  ["__", "--", "-"])).toBe("menu--level-42");
	});
});
