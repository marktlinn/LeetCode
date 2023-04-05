const plusOne = require("./plusOne");

describe("Basic Unit tests", () => {
  it("Should increment single ending digits by 1 ", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("Should increment single ending digits by 1 ", () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });
  it("Should increment digits to next ten unit if  digit is a 9", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });
  it("Should increment multiple digits to next ten unit if  digit is a 9", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
  it("Should increment work on large numbers less thann 100 digits in length ", () => {
    expect(plusOne([9, 9, 9, 1, 4, 5, 6])).toEqual([9, 9, 9, 1, 4, 5, 7]);
  });
  it("Should increment work on large numbers less thann 100 digits in length ending in 9", () => {
    expect(plusOne([9, 9, 9, 1, 4, 5, 6, 9])).toEqual([9, 9, 9, 1, 4, 5, 7, 0]);
  });
  it("Should increment work on large numbers of all 9s", () => {
    expect(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9])).toEqual([
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
  });
});
