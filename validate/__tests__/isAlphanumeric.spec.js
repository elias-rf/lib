const validate = require("../validate");
const isAlphanumeric = require("../isAlphanumeric.js");

describe("validate isAlphanumeric", () => {
  test("validar Alpha", () => {
    const teste = ["a1", "2abc", "23", "3ayk4"];
    for (const vlr of teste) {
      expect(validate(vlr, [isAlphanumeric])).toBeNull();
      expect(validate(vlr, "Campo", [isAlphanumeric])).toBeNull();
    }
  });

  test("não validar isAlphanumeric", () => {
    const teste = ["a ", "445 ", "a.b", "a-"];
    for (const vlr of teste) {
      expect(validate(vlr, [isAlphanumeric])).toBe(`${vlr} não é alfanumérico`);
      expect(validate(vlr, "Campo", [isAlphanumeric])).toBe(`Campo não é alfanumérico`);
    }
  });
});
