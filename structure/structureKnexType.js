/**
 * converte os tipos da estrutura para tipos knex
 *
 * @param {string} type tipo na estrutura
 * @returns tipo knex
 */
const structureKnexType = (type) => {
  const types = {
    id: "string",
    password: "string",
  };
  if (types.hasOwnProperty(type)) {
    return types[type];
  }
  return type;
};

module.exports = structureKnexType;
