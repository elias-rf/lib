const variance = require("../variance");

describe("variancia", () => {
  it("deve aceitar array", () => {
    expect(variance([1, 2, 3, 2, 4, 1])).toEqual(1.3666666666666667);
    expect(variance([10, 2, 38, 23, 38, 23, 21])).toEqual(176.47619047619045);
    expect(variance([100, 100, 100.1, 100])).toEqual(0.0024999999999997156);
  });

  it("deve aceitar array para toda a população", () => {
    expect(variance([10, 2, 38, 23, 38, 23, 21], true)).toEqual(151.26530612244895);
  });
});
