const { pipe, compose } = require("../pipe");

describe("Gestão de Data no formato String", () => {
  it("Deve fazer pipe", () => {
    const soma2 = (n) => n + 2;
    const mult2 = (n) => n * 2;
    const p = pipe(soma2, mult2);
    const c = compose(soma2, mult2);
    expect(p(3)).toEqual(10);
    expect(c(3)).toEqual(8);
  });
});
