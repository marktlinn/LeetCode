const reduce = require("./arrayReduceTransformation");

describe("first", () => {
  it("should return the sum of all given values", () => {
    const nums = [1, 2, 3, 4];
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    const init = 0;
    expect(reduce(nums, fn, init)).toBe(10);
  });

  it("should square each given digit and add to the initial value", () => {
    const nums = [1, 2, 3, 4];
    const fn = function sum(accum, curr) {
      return accum + curr * curr;
    };
    const init = 100;
    expect(reduce(nums, fn, init)).toBe(130);
  });

  it("should return only the initial value supplied: 25", () => {
    const nums = [];
    const fn = function sum(accum, curr) {
      return 0;
    };
    const init = 25;
    expect(reduce(nums, fn, init)).toBe(25);
  });
});
