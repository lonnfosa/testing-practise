const reverse = require("../js/reverseString");

test("Reverse string test 1", () => {
    expect(reverse("hi")).toBe("ih");
});

test("Reverse string test 2", () => {
    expect(reverse("This Is A Test")).toBe("tseT A sI sihT");
});

test("Reverse string test 3", () => {
    expect(reverse("")).toBe("");
});
