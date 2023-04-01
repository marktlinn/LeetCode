const removeElement = require("./removeElement");

describe("Sample tests", () => {
  it("[3,2,2,3] with val= 3 to return 2, as length is 2 with all 3's removed", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
  });
  it("[0,1,2,2,3,0,4,2] with val= 2 to return 2, as length is 2 with all 3's removed", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  });
});
