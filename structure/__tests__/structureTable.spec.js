const structure = require("../__fixtures__/structure");
const structureTable = require("../structureTable");

test("structureTable", () => {
  expect(structureTable(structure, "user")).toEqual({
    name: "user",
    title: "Usuários",
    type: "User",
    fields: [
      { name: "id", type: "id", required: true, unique: true, title: "Código", size: 21 },
      { name: "user", type: "string", required: true, unique: true, title: "Usuário" },
      { name: "name", type: "string", required: true, unique: true, title: "Nome" },
      { name: "password", type: "password", required: true, title: "Senha" },
      { name: "active", type: "boolean", title: "Ativo" },
      { name: "createdAt", type: "datetime", title: "Data de criação" },
      { name: "updatedAt", type: "datetime", title: "Data de alteração" },
    ],
  });
});
