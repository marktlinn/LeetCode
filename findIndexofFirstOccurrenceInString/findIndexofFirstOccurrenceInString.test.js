const strStr = require("./findIndexofFirstOccurrenceInString");

describe("Sample tests", () => {
  it("Index 0 is first match: return 1", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0);
  });
  it("No match should be found: return -1", () => {
    expect(strStr("leetcode", "leeto")).toBe(-1);
  });
  it("Index 3 is start of match: return 3", () => {
    expect(strStr("haahellopeople!", "hello")).toBe(3);
  });
});
