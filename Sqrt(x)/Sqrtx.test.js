const mySqrt = require("./Sqrtx");

describe("Code challenge functionality tests for square root function", () => {
  it("should return Sqrt", () => {
    expect(mySqrt(2)).toBe(1);
  });
  it("should return Sqrt", () => {
    expect(mySqrt(4)).toBe(2);
  });
  it("should return Sqrt", () => {
    expect(mySqrt(9)).toBe(3);
  });
  it("should round decimal Sqrts", () => {
    expect(mySqrt(8)).toBe(2);
  });
  it("should round decimal Sqrts", () => {
    expect(mySqrt(10)).toBe(3);
  });
  it("should round decimal Sqrts", () => {
    expect(mySqrt(50)).toBe(7);
  });
  it("should handle case of argument being 0", () => {
    expect(mySqrt(0)).toBe(0);
  });
  it("should handle case of argument being 1", () => {
    expect(mySqrt(1)).toBe(1);
  });
});
