const map = require("./applyTransformOverEachElementInArray");

describe("Name of the group", () => {
  it("Each element should be increased by 1 ", () => {
    const arr = [1, 2, 3];
    const fn = function plusone(n) {
      return n + 1;
    };
    expect(map(arr, fn)).toEqual([2, 3, 4]);
  });

  it("Each Element should be increased by the amount of its index", () => {
    const arr = [1, 2, 3];
    const fn = function plusI(n, i) {
      return n + i;
    };
    expect(map(arr, fn)).toEqual([1, 3, 5]);
  });

  it("Each Element should be increased by the amount of its index", () => {
    const arr = [10, 20, 30];
    const fn = function constant() {
      return 42;
    };
    expect(map(arr, fn)).toEqual([42, 42, 42]);
  });
});
