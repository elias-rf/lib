const somatorio = require("../sum");

describe("somatorio", () => {
  it("deve aceitar array", () => {
    expect(somatorio([1, 2, 3, 2, 4, 1])).toEqual(13);
    expect(somatorio([10, 2, 38, 23, 38, 23, 21])).toEqual(155);
    expect(somatorio([100, 100, 100.1, 100])).toEqual(400.1);
  });
});
