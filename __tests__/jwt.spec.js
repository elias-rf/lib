const { encode, decode } = require("../jwt");

describe("jwt", () => {
  it("deve codificar e decodificar", () => {
    const payload = { nome: "Fulano", nivel: 3 };
    const token = encode(payload, "segredo");
    const decodificado = decode(token, "segredo");
    expect(decodificado).toMatchObject(payload);
  });

  it("deve decodificar Bearer Token", () => {
    const payload = { nome: "Fulano", nivel: 3 };
    const token = `Bearer ${encode(payload, "segredo")}`;
    const decodificado = decode(token, "segredo");
    expect(decodificado).toMatchObject(payload);
  });

  it("deve retornar erro se não houver token", () => {
    expect(() => decode(undefined, "segredo")).toThrow();
  });

  it("deve retornar erro se token for incorreto", () => {
    expect(decode("abc", "segredo")).toEqual({});
  });
});
