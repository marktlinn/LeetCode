const compose = require("./functionComposition");

describe("Tests for composer function", () => {
  it("should return correct value from chained functions: 9", () => {
    const fn = compose([x => x + 1, x => 2 * x]);
    expect(fn(4)).toBe(9);
  });

  it("should return correct value from chained functions: 1000", () => {
    fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
    expect(fn(1)).toBe(1000);
  });

  it("should return correct value from chained functions: 65", () => {
    fn = compose((functions = [x => x + 1, x => x * x, x => 2 * x]));
    expect(fn(4)).toBe(65);
  });

  it("should return the value of x if no functions given to run on input: 42", () => {
    fn = compose((functions = []));
    expect(fn(42)).toBe(42);
  });
});
