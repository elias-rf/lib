const structureTable = require("./structureTable");
const structureKnexType = require("./structureKnexType");

/**
 * converte uma tabela da estrutura para knex
 *
 * @param {string} tableName name da tabela na estrutura
 * @param {*} knex conexão knex
 * @returns
 */
const structureKnexTable = (structure, tableName, knex) => {
  const tbl = structureTable(structure, tableName);
  return knex.schema.createTable(tbl.name, (table) => {
    const flds = tbl.fields.forEach((field) => {
      const fld = table[structureKnexType(field.type)](field.name, field.size);
      if (field.required) {
        fld.notNullable();
      }
      if (field.unique) {
        fld.unique();
      }
      if (field.title) {
        fld.comment(field.title);
      }
    });
    tbl.relations?.forEach((relation) => {
      table.foreign(relation.field).references(relation.foreignField).inTable(relation.foreignTable);
    });
    return flds;
  });
};

module.exports = structureKnexTable;
