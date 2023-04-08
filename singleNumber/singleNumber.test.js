const singleNumber = require("./singleNumber");

describe("Challenge code tests", () => {
  it("should return only the non duplicate value: 1", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });
  it("should return only the non duplicate value: 4", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });
  it("should return only the non duplicate value even with only 1 digit: 1", () => {
    expect(singleNumber([1])).toBe(1);
  });
  it("should ", () => {
    expect(singleNumber([])).toBeNull();
  });
});
