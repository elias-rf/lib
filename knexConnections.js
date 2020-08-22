const Knex = require("knex");
const config = require("../config");

const resp = {};

Object.entries(config.db).forEach(([item, valor]) => {
  valor.debug = process.env.NODE_ENV === "development";
  valor.useNullAsDefault = true;
  resp[item] = Knex(valor);
});

module.exports = resp;
