const caesarCipher = require("../js/caesarCipher");

test("String unchanged with 0 shift", () => {
  expect(caesarCipher(0, "abc")).toBe("abc");
});

test("Wrapping from z to a ", () => {
  expect(caesarCipher(5, "xyz")).toBe("cde");
});

test("Keeping the same case", () => {
  expect(caesarCipher(4, "Hello Humans")).toBe("Lipps Lyqerw");
});

test("Punctuation", () => {
  expect(caesarCipher(2, "Hello world. How is it going?")).toBe(
    "Jgnnq yqtnf. Jqy ku kv iqkpi?"
  );
});
