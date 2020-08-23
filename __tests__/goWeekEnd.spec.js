const dateEndOfWeek = require("../goWeekEnd");

describe("dateEndOfWeek", () => {
  it("domingo", () => {
    const dt = new Date("2017-01-29");
    expect(dateEndOfWeek(dt)).toEqual(new Date("2017-02-04"));
  });
  it("segunda", () => {
    const dt = new Date("2017-01-30");
    expect(dateEndOfWeek(dt)).toEqual(new Date("2017-02-04"));
  });
  it("terca", () => {
    const dt = new Date("2017-01-31");
    expect(dateEndOfWeek(dt)).toEqual(new Date("2017-02-04"));
  });
  it("quarta", () => {
    const dt = new Date("2017-02-01");
    expect(dateEndOfWeek(dt)).toEqual(new Date("2017-02-04"));
  });
  it("quinta", () => {
    const dt = new Date("2017-02-02");
    expect(dateEndOfWeek(dt)).toEqual(new Date("2017-02-04"));
  });
  it("sexta", () => {
    const dt = new Date("2017-02-03");
    expect(dateEndOfWeek(dt)).toEqual(new Date("2017-02-04"));
  });
  it("sabado", () => {
    const dt = new Date("2017-02-04");
    expect(dateEndOfWeek(dt)).toEqual(new Date("2017-02-04"));
  });
});
