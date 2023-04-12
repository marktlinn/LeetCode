const fib = require("./fibonacciNumber");

describe("Base tests: should return the correct number from the Fibonacci Sequence", () => {
  it("Given 0 it should return 0 ", () => {
    expect(fib(0)).toBe(0);
  });
  it("Given 1 it should return 1 ", () => {
    expect(fib(1)).toBe(1);
  });
  it("Given 2 it should return 1 ", () => {
    expect(fib(2)).toBe(1);
  });
  it("Given 3 it should return 2 ", () => {
    expect(fib(3)).toBe(2);
  });
  it("Given 4 it should return 3 ", () => {
    expect(fib(4)).toBe(3);
  });
  it("Given 5 it should return 5 ", () => {
    expect(fib(5)).toBe(5);
  });
  it("Given 6 it should return 8 ", () => {
    expect(fib(6)).toBe(8);
  });
  it("Given 7 it should return 13 ", () => {
    expect(fib(7)).toBe(13);
  });
});
