const analyzeArray = require("../js/analyzeArray");

test("Average", () => {
    const object = analyzeArray([2, 4, 8, 12, 10, 6, 7])


    expect(object).toEqual({
        min: 2,
        max: 12,
        average: 7,
        length: 7,
    });
});