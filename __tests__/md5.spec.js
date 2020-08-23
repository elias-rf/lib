const md5 = require("../md5");

describe("md5", () => {
  it("deve gerar md5", () => {
    expect(md5("Teste de escrita")).toEqual("aa85b2fcd47ace498c8a4182ad25d2e0");
  });

  it("deve validar md5 errado", () => {
    expect(md5("teste de escrita")).not.toEqual("aa85b2fcd47ace498c8a4182ad25d2e0");
  });
});
