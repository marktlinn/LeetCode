const climbStairs = require("./climbingStairs");

describe("Base tests: should return the correct number of permutations to complete the task ", () => {
  it("Given 2 it should return 2", () => {
    expect(climbStairs(2)).toBe(2);
  });
  it("Given 3 it should return 3", () => {
    expect(climbStairs(3)).toBe(3);
  });
  it("Given 5 it should return 8", () => {
    expect(climbStairs(5)).toBe(8);
  });
});
