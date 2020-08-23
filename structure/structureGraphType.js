/**
 * converte os tipos da estrutura para tipos knex
 *
 * @param {string} type tipo na estrutura
 * @returns tipo knex
 */
const structureKnexType = (type) => {
  const types = {
    boolean: "Boolean",
    datetime: "DateTime",
    date: "Date",
    time: "Time",
    timestamp: "DateTime",
    decimal: "Float",
    float: "Float",
    id: "ID",
    integer: "Int",
    password: "String",
    string: "String",
    text: "String",
  };
  return types[type];
};

module.exports = structureKnexType;
