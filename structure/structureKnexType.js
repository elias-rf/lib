/**
 * converte os tipos da estrutura para tipos knex
 *
 * @param {string} type tipo na estrutura
 * @returns tipo knex
 */
const structureKnexType = (type) => {
  const types = {
    boolean: "boolean",
    datetime: "datetime",
    date: "date",
    time: "time",
    timestamp: "timestamp",
    decimal: "decimal",
    float: "float",
    id: "string",
    integer: "integer",
    password: "string",
    string: "string",
    text: "text",
  };
  return types[type];
};

module.exports = structureKnexType;
