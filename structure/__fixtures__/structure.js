const ID = { name: "id", type: "id", required: true, unique: true, title: "Código", size: 21 };
const CREATED_AT = { name: "createdAt", type: "datetime", title: "Data de criação" };
const UPDATED_AT = { name: "updatedAt", type: "datetime", title: "Data de alteração" };

const structure = {
  tables: [
    {
      name: "subject",
      title: "Assuntos",
      type: "Subject",
      fields: [
        ID,
        { name: "description", type: "string", required: true, title: "Descrição" },
        { name: "actions", type: "string", required: true, title: "Ações aceitáveis" },
        CREATED_AT,
        UPDATED_AT,
      ],
      foreignIndex: [
        { field: "idUser", foreignField: "id", foreignTable: "user" },
        { field: "idSubject", foreignField: "id", foreignTable: "subject" },
      ],
    },
    {
      name: "user",
      title: "Usuários",
      type: "User",
      fields: [
        ID,
        { name: "user", type: "string", required: true, unique: true, title: "Usuário" },
        { name: "name", type: "string", required: true, unique: true, title: "Nome" },
        { name: "password", type: "password", required: true, title: "Senha" },
        { name: "active", type: "boolean", title: "Ativo" },
        CREATED_AT,
        UPDATED_AT,
      ],
    },
    {
      name: "authorization",
      title: "Autorizações",
      type: "Authorization",
      fields: [
        ID,
        { name: "idUser", type: ID.type, required: true, title: "Código do usuário", size: ID.size },
        { name: "idSubject", type: ID.type, required: true, title: "Código da assunto", size: ID.size },
        { name: "actions", type: "string", required: true, title: "Ações permitidas" },
        CREATED_AT,
        UPDATED_AT,
      ],
      relations: [
        { field: "idUser", foreignField: "id", foreignTable: "user" },
        { field: "idSubject", foreignField: "id", foreignTable: "subject" },
      ],
    },
  ],
};

module.exports = structure;
