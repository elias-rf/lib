const { encode, decode } = require("./jwt");

describe("jwt", () => {
  it("deve codificar e decodificar", () => {
    const payload = { nome: "Fulano", nivel: 3 };
    const token = encode(payload);
    const decodificado = decode(token);
    expect(decodificado).toMatchObject(payload);
  });

  it("deve decodificar Bearer Token", () => {
    const payload = { nome: "Fulano", nivel: 3 };
    const token = `Bearer ${encode(payload)}`;
    const decodificado = decode(token);
    expect(decodificado).toMatchObject(payload);
  });

  it("deve retornar erro se não houver token", () => {
    expect(() => decode(undefined)).toThrow();
  });

  it("deve retornar erro se token for incorreto", () => {
    expect(() => decode("abc")).toThrow();
  });
});
