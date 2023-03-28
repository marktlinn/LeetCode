const search = require("./binarySearch");

describe("test cases for binary search", () => {
  it("Test target present in array => Output to be index: 4", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  });
  it("Test empty array => Output to be index: -1", () => {
    expect(search([], 2)).toEqual(-1);
  });
  it("Test target not present in array => Output to be index: -1", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });
});
