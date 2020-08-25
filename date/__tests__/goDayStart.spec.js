const startOfDay = require("../goDayStart");

describe("dateToday", () => {
  it("", () => {
    const dt = new Date("2000-1-1");
    expect(startOfDay(dt)).toEqual(new Date("2000-01-01"));
  });
});
