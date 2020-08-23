const { toDate, addDays, toDateStr } = require("../dateStr");

describe("Gestão de Data no formato String", () => {
  it("Deve converter para Datas", () => {
    expect(toDate("2012-02-01")).toEqual(new Date(Date.UTC(2012, 1, 1)));
  });

  it("Deve adicionar dias", () => {
    expect(addDays("2012-02-01", 3)).toEqual("2012-02-04");
    expect(addDays(new Date(Date.UTC(2012, 1, 1)), 3)).toEqual("2012-02-04");
    expect(addDays("2012-02-01", -3)).toEqual("2012-01-29");
    expect(addDays(new Date(Date.UTC(2012, 1, 1)), -3)).toEqual("2012-01-29");
  });

  it("Deve converter para String", () => {
    expect(toDateStr(new Date(Date.UTC(2012, 1, 1)))).toEqual("2012-02-01");
    expect(toDateStr("2012-02-01")).toEqual("2012-02-01");
    expect(() => toDateStr("2012-50-50")).toThrow();
  });
});
