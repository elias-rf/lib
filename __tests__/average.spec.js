const average = require("../average");

describe("media", () => {
  it("deve aceitar array", () => {
    expect(average([1, 2, 3, 2, 4, 1])).toBe(2.1666666666666665);
    expect(average([10, 2, 38, 23, 38, 23, 21])).toBe(22.142857142857142);
    expect(average([100, 100, 100.1, 100])).toBe(100.025);
  });
});
