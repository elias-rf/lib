const parseDate = require("../stringToDate");

const ano = new Date().getFullYear();

describe("dateParse", () => {
  const exp = new Date(2016, 1, 1); // 01/02/2016
  const exp2 = new Date(ano, 1, 1);

  it("deve receber Date", () => {
    expect(parseDate(exp, "d/M/y")).toEqual(exp);
  });

  it("deve receber 01/02/2016 from full", () => {
    expect(parseDate("01/02/2016T00:00:00.000Z")).toEqual(exp);
  });

  it("deve receber 01/02/2016", () => {
    expect(parseDate("01/02/2016", "dd/MM/yyyy")).toEqual(exp);
  });

  it("deve receber data dd/mm/yyyy", () => {
    expect(parseDate("01/02/2016", "dd/MM/yyyy")).toEqual(exp);
  });

  it("deve receber data dd/mm/yy", () => {
    expect(parseDate("01/02/16", "dd/MM/yy")).toEqual(exp);
  });

  it("deve receber data dd/mm", () => {
    expect(parseDate("01/02", "dd/MM")).toEqual(exp2);
  });

  it("deve receber data dd-mm-yyyy", () => {
    expect(parseDate("01-02-2016", "dd-MM-yyyy")).toEqual(exp);
  });

  it("deve receber data dd-mm-yy", () => {
    expect(parseDate("01-02-16", "dd-MM-yy")).toEqual(exp);
  });

  it("deve receber dd-mm", () => {
    expect(parseDate("01-02", "dd-MM")).toEqual(exp2);
  });

  it("deve receber 2016-02-01", () => {
    expect(parseDate("2016-02-01", "yyyy-MM-dd")).toEqual(exp);
  });

  it("deve receber 16-02-01", () => {
    expect(parseDate("16-02-01", "yy-MM-dd")).toEqual(exp);
  });

  it("deve receber 02-01", () => {
    expect(parseDate("02-01", "MM-dd")).toEqual(exp2);
  });

  it('deve receber ""', () => {
    expect(parseDate("", "d-M-y")).toBeNull();
  });

  it("deve receber null", () => {
    expect(parseDate(null, "d-M-y")).toBeNull();
  });

  it("deve receber qualquer coisa", () => {
    expect(parseDate(null)).toBeNull();
    expect(parseDate("1")).toBeNull();

    expect(parseDate("2-1")).toEqual(exp2);
    expect(parseDate("02-01")).toEqual(exp2);
    expect(parseDate("02-1")).toEqual(exp2);
    expect(parseDate("2-01")).toEqual(exp2);

    expect(parseDate("02-01-16")).toEqual(exp);
    expect(parseDate("02-01-2016")).toEqual(exp);

    expect(parseDate("1/2")).toEqual(exp2);
    expect(parseDate("01/02")).toEqual(exp2);

    expect(parseDate("01/02/16")).toEqual(exp);
    expect(parseDate("01/02/2016")).toEqual(exp);
  });
});
