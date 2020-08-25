const Knex = require("knex");

function knexConnections(db) {
  const resp = {};
  Object.entries(db).forEach(([item, valor]) => {
    valor.debug = process.env.NODE_ENV === "development";
    valor.useNullAsDefault = true;
    resp[item] = Knex(valor);
  });
  return resp;
}

module.exports = knexConnections;
