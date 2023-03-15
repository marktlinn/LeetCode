const removeDuplicates = require("./removeDuplicatesFromSortedArray");

describe("Function should remove all duplicate values in an array, while maintaining the size of the array", () => {
  it("Should return the length of arr ignoring all duplicates values: 2", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });

  it("Should return the length of arr ignoring all duplicates values: 5", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});
