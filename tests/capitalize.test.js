const capitalize = require("../js/capitalize");

test("Capitalize test 1", () => {
    expect(capitalize("hi")).toBe("Hi");
});

test("Capitalize test 2", () => {
    expect(capitalize("")).toBe("");
});

test("Capitalize test 3", () => {
    expect(capitalize("hI tHis is A test")).toBe("HI tHis is A test");
});