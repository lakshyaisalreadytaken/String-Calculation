const strCalculator = require("../src/function")

test("Empty string check", () => {
    expect(strCalculator("")).toBe(0);
})

test("Check Addition", () => {
    expect(strCalculator("1,2,5")).toBe(8);
})

test("Check Addition with number bigger than 1000", () => {
    expect(strCalculator("1,2,5,1001")).toBe(9);
})

test("Check values with new line(\n)", () => {
    expect(strCalculator("1\n2,3")).toBe(6);
})

test("Check values with new line(\n) and delimiter", () => {
    expect(strCalculator("//;\n1;2")).toBe(3);
})

test("Check values with new line(\n) and any length of delimiter", () => {
    expect(strCalculator("//[*][%]\n1*2%3")).toBe(6);
    // expect(strCalculator("//[***]\n1***2***3")).toBe(6);
})

test("Check negetive values", () => {
    expect(strCalculator("1,-8,2,5,-1,-11,-4")).toBe("negative numbers not allowed -8,-1,-11,-4");
})