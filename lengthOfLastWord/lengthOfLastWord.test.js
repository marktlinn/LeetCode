const lengthOfLastWord = require("./lengthOfLastWord");

describe("Sample tests for code challenge", () => {
  it("Should return 5", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });
  it("Should work with random amounts of whitespace at end", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });
  it("Should return 6", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
  it("Should work with random amounts of whitespace throughout string", () => {
    expect(lengthOfLastWord("what      is      this")).toBe(4);
  });
  it("Should work with single letter string", () => {
    expect(lengthOfLastWord("a")).toBe(1);
  });
  it("Should work with 2 letter strings with no space", () => {
    expect(lengthOfLastWord("ab")).toBe(2);
  });
  it("Should work with short strings with space", () => {
    expect(lengthOfLastWord("a b")).toBe(1);
  });
});
