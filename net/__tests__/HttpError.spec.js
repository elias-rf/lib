const HttpError = require("../HttpError");

describe("HttpError", () => {
  it("Deve gerar as mensagens automaticamente", () => {
    const error = new HttpError(404);
    expect(error.message).toEqual(
      "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
    );
    expect(error.name).toEqual("NOT_FOUND");
    expect(error.status).toEqual(404);
  });

  it("Deve usar as mensagens informadas", () => {
    const error = new HttpError(404, "Não encontrado");
    expect(error.message).toEqual("Não encontrado");
    expect(error.name).toEqual("NOT_FOUND");
    expect(error.status).toEqual(404);
  });
});
