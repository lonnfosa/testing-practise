const Calculator = require("../js/calculator");

let calculator = new Calculator();

test("Addition", () => {
    expect(calculator.add(2, 3)).toEqual(5);
});

test("Subtraction", () => {
    expect(calculator.subtract(6,2)).toEqual(4);
});

test("Division", () => {
    expect(calculator.divide(10,2)).toEqual(5);
});

test("Multiplication", () => {
    expect(calculator.multiply(2, 8)).toEqual(16);
});

