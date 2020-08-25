const crud = require("../createCrud");
const knexConnections = require("../knexConnections");
const knexTest = require("../__fixtures__/knexTest");

describe("Crud", () => {
  const { local } = knexConnections({
    local: {
      client: "sqlite3",
      connection: {
        filename: "./mydb.sqlite",
      },
    },
  });
  beforeAll(() => {
    knexTest([local]);
  });

  const crudGeneric = crud(local, "user", "id");
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
