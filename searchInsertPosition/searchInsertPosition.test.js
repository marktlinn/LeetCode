const searchInsert = require("./searchInsertPosition");

describe("Search test", () => {
  it("should ", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });
  it("should ", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });
  it("should ", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
  it("should ", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });
  it("should ", () => {
    expect(searchInsert([3, 6, 7, 8, 10], 5)).toBe(1);
  });
  it("should ", () => {
    expect(searchInsert([2, 3, 4, 7, 8, 9], 11)).toBe(6);
  });
  it("should ", () => {
    expect(searchInsert([2, 3, 4, 8, 10], 0)).toBe(0);
  });
  it("should ", () => {
    expect(searchInsert([3, 4, 9, 10], 5)).toBe(2);
  });
});
