const parseNumber = require("../stringToNumber");

describe("numberParse", () => {
  it("string inteiro zero", () => {
    expect(parseNumber("0")).toBe(0);
  });
  it("string inteiro positivo", () => {
    expect(parseNumber("1")).toBe(1);
  });
  it("string inteiro negativo", () => {
    expect(parseNumber("-1")).toBe(-1);
  });
  it("numero inteiro positivo", () => {
    expect(parseNumber(1)).toBe(1);
  });
  it("numero inteiro negativo", () => {
    expect(parseNumber(-1)).toBe(-1);
  });
  it("string float zero", () => {
    expect(parseNumber("0.0")).toBe(0.0);
  });
  it("string float positivo", () => {
    expect(parseNumber("1.1")).toBe(1.1);
  });
  it("string float negativo", () => {
    expect(parseNumber("-1.1")).toBe(-1.1);
  });
  it("numero float positivo", () => {
    expect(parseNumber(1.1)).toBe(1.1);
  });
  it("numero float negativo", () => {
    expect(parseNumber(-1.1)).toBe(-1.1);
  });
  it("string formatado float zero", () => {
    expect(parseNumber("0,000.0")).toBe(0.0);
  });
  it("string formatado float positivo", () => {
    expect(parseNumber("1,000.1")).toBe(1000.1);
  });
  it("string formatado float negativo", () => {
    expect(parseNumber("-1,000.1")).toBe(-1000.1);
  });
  it("string formatado BR float positivo", () => {
    expect(parseNumber("11,11", ".", ",")).toBe(11.11);
  });
  it("string formatado BR float negativo", () => {
    expect(parseNumber("-11,11", ".", ",")).toBe(-11.11);
  });
  it("string formatado BR float positivo grande", () => {
    expect(parseNumber("1.111,11", ".", ",")).toBe(1111.11);
  });
  it("string formatado BR float negativo grande", () => {
    expect(parseNumber("-1.111,11", ".", ",")).toBe(-1111.11);
  });
});
