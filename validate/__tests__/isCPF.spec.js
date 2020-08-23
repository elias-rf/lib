const isCPF = require("../isCPF");

describe(__filename, () => {
  let atual;
  it("recusa digitos iguais 0", () => {
    atual = isCPF("000.000.000-00");
    expect(atual).toEqual(false);
  });

  it("recusa digitos iguais 1", () => {
    atual = isCPF("111.111.111-11");
    expect(atual).toEqual(false);
  });

  it("deve funcionar com formatação", () => {
    atual = isCPF("003.709.877-21");
    expect(atual).toEqual(true);
  });

  it("deve funcionar sem formatação", () => {
    atual = isCPF("00370987721");
    expect(atual).toEqual(true);
  });

  it("deve estar incorreto", () => {
    atual = isCPF("003.709.877-22");
    expect(atual).toEqual(false);
  });
});
