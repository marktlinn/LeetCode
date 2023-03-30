const romanToInt = require("./romanToInteger");

describe("basic tests for roman numeral to integer conversions", () => {
  it("Test to return 3 as an Integer", () => {
    expect(romanToInt("III")).toEqual(3);
  });
  it("Test to return 58 as an Integer", () => {
    expect(romanToInt("LVIII")).toEqual(58);
  });
  it("Test to return 1994 as an Integer", () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });
});
