const removeOutliers = require("../removeOutliers");

describe("removeOutliers", () => {
  it("deve aceitar array", () => {
    expect(removeOutliers([501, 504, 493, 499, 497, 503, 525, 495, 506, 502])).toEqual([
      501,
      504,
      493,
      499,
      497,
      503,
      495,
      506,
      502,
    ]);
    expect(removeOutliers([25, 26, 225, 24, 23, 24, 25, 325, 28, 27, 10])).toEqual([25, 26, 24, 23, 24, 25, 28, 27]);
  });
});
