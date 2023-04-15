const addBinary = require("./addBinary");

describe("Should add two binary numbers together correctly", () => {
  it("should return the correct binary number", () => {
    expect(addBinary("11", "1")).toEqual("100");
  });
  it("should return the correct binary number", () => {
    expect(addBinary("1010", "1011")).toEqual("10101");
  });
  it("should return the correct binary number", () => {
    expect(addBinary("10101010", "11001100")).toEqual("101110110");
  });
  it("should return the correct binary number", () => {
    expect(addBinary("1111", "1111")).toEqual("11110");
  });
  it("should return '0' for zero input", () => {
    expect(addBinary("0", "0")).toEqual("0");
  });
});
