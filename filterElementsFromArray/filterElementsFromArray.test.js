const filter = require("./filterElementsFromArray");

describe("should", () => {
  it("should filter out all falsey values according to the function passed", () => {
    const arr = [0, 10, 20, 30];
    fn = function greaterThan10(n) {
      return n > 10;
    };
    expect(filter(arr, fn)).toEqual([20, 30]);
  });

  it("should work with the index value passed", () => {
    const arr = [1, 2, 3];
    fn = function firstIndex(n, i) {
      return i === 0;
    };
    expect(filter(arr, fn)).toEqual([1]);
  });

  it("should remove all falsey values e.g. -1", () => {
    const arr = [-2, -1, 0, 1, 2];
    fn = function plusOne(n) {
      return n + 1;
    };
    expect(filter(arr, fn)).toEqual([-2, 0, 1, 2]);
  });
});
