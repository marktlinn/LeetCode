const climbStairs = require("./climbingStairs");

describe("Base tests", () => {
  it("should return the correct number of permutations to complete the task ", () => {
    expect(climbStairs(2)).toBe(2);
  });
  it("should return the correct number of permutations to complete the task ", () => {
    expect(climbStairs(3)).toBe(3);
  });
  it("should return the correct number of permutations to complete the task ", () => {
    expect(climbStairs(5)).toBe(8);
  });
});
