const dateToday = require("../goToday");

describe("dateToday", () => {
  it("", () => {
    expect(Object.prototype.toString.call(dateToday())).toBe("[object Date]");
  });
});
