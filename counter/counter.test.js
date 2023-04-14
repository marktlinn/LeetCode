const createCounter = require("./counter");

describe("Closure should increment value on each call", () => {
  //Initial function
  const result = createCounter(10);

  it("Should return initial value of 10", () => {
    expect(result(10)).toBe(10);
  });
  it("Should return incremented value of 11", () => {
    expect(result(10)).toBe(11);
  });
  it("Should return incremented value of 12", () => {
    expect(result(10)).toBe(12);
  });
  it("Should return incremented value of 13", () => {
    expect(result(10)).toBe(13);
  });
});
