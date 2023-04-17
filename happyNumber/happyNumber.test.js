const isHappy = require("./happyNumber");

describe("first", () => {
  it("Should return true for 19", () => {
    expect(isHappy(19)).toBe(true);
  });
  it("Should return true for 7", () => {
    expect(isHappy(7)).toBe(true);
  });
  it("Should return true for 10", () => {
    expect(isHappy(10)).toBe(true);
  });
  it("Should return true for 13", () => {
    expect(isHappy(13)).toBe(true);
  });
  it("Should return false for 5", () => {
    expect(isHappy(5)).toBe(false);
  });
  it("Should return false for 8", () => {
    expect(isHappy(8)).toBe(false);
  });
  it("Should return false for 17", () => {
    expect(isHappy(17)).toBe(false);
  });
  it("Should return false for 11", () => {
    expect(isHappy(11)).toBe(false);
  });
});
