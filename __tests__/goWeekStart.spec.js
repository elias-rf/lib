const dateStartOfWeek = require("../goWeekStart");

describe("dateStartOfWeek", () => {
  it("domingo", () => {
    const dt = new Date("2017-01-29");
    expect(dateStartOfWeek(dt)).toEqual(new Date("2017-01-29"));
  });
  it("segunda", () => {
    const dt = new Date("2017-01-30");
    expect(dateStartOfWeek(dt)).toEqual(new Date("2017-01-29"));
  });
  it("terca", () => {
    const dt = new Date("2017-01-31");
    expect(dateStartOfWeek(dt)).toEqual(new Date("2017-01-29"));
  });
  it("quarta", () => {
    const dt = new Date("2017-02-01");
    expect(dateStartOfWeek(dt)).toEqual(new Date("2017-01-29"));
  });
  it("quinta", () => {
    const dt = new Date("2017-02-02");
    expect(dateStartOfWeek(dt)).toEqual(new Date("2017-01-29"));
  });
  it("sexta", () => {
    const dt = new Date("2017-02-03");
    expect(dateStartOfWeek(dt)).toEqual(new Date("2017-01-29"));
  });
  it("sabado", () => {
    const dt = new Date("2017-02-04");
    expect(dateStartOfWeek(dt)).toEqual(new Date("2017-01-29"));
  });
});
