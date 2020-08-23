const trimExString = require("../trimExString.js");

describe("trimExString", () => {
  it("deve limpar tudo apos \0", () => {
    expect(trimExString("Teste\0 de escrita")).toBe("Teste");
  });
});
