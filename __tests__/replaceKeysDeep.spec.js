const replaceKeysDeep = require("../replaceKeysDeep");

describe("replaceKeysDeep", () => {
  it("deve substituir chave nivel 0 em array", () => {
    expect(replaceKeysDeep([{ a: 1 }], { a: "b" })).toEqual([{ b: 1 }]);
  });
  it("deve substituir chave nivel 0", () => {
    expect(replaceKeysDeep({ a: 1 }, { a: "b" })).toEqual({ b: 1 });
  });

  it("deve substituir chave nivel 1", () => {
    expect(replaceKeysDeep({ c: { a: 1 } }, { a: "b" })).toEqual({
      c: { b: 1 },
    });
  });

  it("deve substituir chave nivel 1 em array", () => {
    expect(replaceKeysDeep([{ c: { a: 1 } }, { c: { a: 2 } }], { a: "b" })).toEqual([{ c: { b: 1 } }, { c: { b: 2 } }]);
  });

  it("deve substituir chave nivel 2", () => {
    expect(replaceKeysDeep({ d: { c: { a: 1 } } }, { a: "b" })).toEqual({
      d: { c: { b: 1 } },
    });
  });

  it("deve substituir chaves niveis diferentes", () => {
    expect(replaceKeysDeep({ d: { a: { a: 1 } } }, { a: "b", d: "e" })).toEqual({
      e: { b: { b: 1 } },
    });
  });
});
