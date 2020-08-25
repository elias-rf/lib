const dateDiffDays = require("../diffDateDays");

describe("dateDiff", () => {
  const dia = new Date("2000-02-15");
  it("Positivo dentro do mês", () => {
    expect(dateDiffDays(dia, new Date("2000-02-16"))).toEqual(1);
  });
  it("Positivo avançando 1 mês", () => {
    expect(dateDiffDays(dia, new Date("2000-03-26"))).toEqual(40);
  });
  it("Zero", () => {
    expect(dateDiffDays(dia, new Date("2000-02-15"))).toEqual(0);
  });
  it("Negativo dentro do mês", () => {
    expect(dateDiffDays(dia, new Date("2000-02-14"))).toEqual(1);
  });
  it("Negativo avançando 1 mês", () => {
    expect(dateDiffDays(dia, new Date("2000-01-26"))).toEqual(20);
  });
});
