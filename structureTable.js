/**
 * Seleciona uma tabela específica na structure
 *
 * @param {*} tableName
 */
const structureTable = (structure, tableName) => structure.tables.find((tbl) => tbl.name === tableName);

module.exports = structureTable;
