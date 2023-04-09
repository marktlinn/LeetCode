const maxProfit = require("./bestTimeToBuyAndSellStock");

describe("first", () => {
  it("should return the correct number if transaction done", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  it("should return 0 if no appropriate transaction is found", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
  it("should return 0 if no appropriate transaction is found", () => {
    expect(maxProfit([1, 2])).toBe(1);
  });
  it("should return 0 if no appropriate transaction is found", () => {
    expect(maxProfit([2, 4, 1])).toBe(2);
  });
  it("should return 0 if no appropriate transaction is found", () => {
    expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4);
  });
});
