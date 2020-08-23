const isCNPJ = require("../isCNPJ");

describe(__filename, () => {
  let atual;
  it("recusa digitos iguais 0", () => {
    atual = isCNPJ("00.000.000/0000-00");
    expect(atual).toEqual(false);
  });

  it("recusa digitos iguais 1", () => {
    atual = isCNPJ("111.111.111-11");
    expect(atual).toEqual(false);
  });

  it("deve funcionar com formatacao", () => {
    atual = isCNPJ("27.056.910/0001-42");
    expect(atual).toEqual(true);
  });

  it("deve funcionar sem formatacao", () => {
    atual = isCNPJ("27056910000142");
    expect(atual).toEqual(true);
  });

  it("deve estar incorreto", () => {
    atual = isCNPJ("27.056.910/0001-44");
    expect(atual).toEqual(false);
  });
});
