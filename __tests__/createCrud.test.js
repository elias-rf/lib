const crud = require("../createCrud");
const knexConnections = require("../knexConnections");
const knexTest = require("../__fixtures__/knexTest");

describe("Crud", () => {
  beforeAll(() => {
    knexTest([knexConnections.local]);
  });

  const crudGeneric = crud([knexConnections.local], "user", "id");
  it("deve ler dados", async () => {
    const rec = await crudGeneric.read("100");
    expect(rec).toMatchObject({
      id: "1",
      name: "Usuario1",
      user: "usuario1",
      active: true,
    });
  });
});
