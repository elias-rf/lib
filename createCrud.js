// @ts-check
const { whereFilter } = require("knex-filter-loopback");
const filterReplace = require("./filterReplace");
const sortReplace = require("./sortReplace");

/**
 * Executa operações CRUD em uma tabela informada
 *
 * @param {object} knex Conexão knex
 * @param {string} tableName Tabela onde as ações serão executadas
 * @param {string} pk chave primária da tabela
 */
function createCrud(knex, tableName, pk) {
  return {
    /**
     * Lê os dados de um registro
     *
     * @param {string|number} pkValue Objeto com campo chave e valor procurado
     * @returns {Promise<object>} Registro procurado
     * @memberof Crud
     */
    read: async (pkValue) => {
      return knex(tableName).first().where(pk, pkValue);
    },

    /**
     * Lê lista de registros filtrados e ordenados
     *
     * @param {object} filter filtro para a lista
     * @param {object[]} [orderBy] ordem = [{ field: chave, order: 'desc' }] } Argumentos
     * @param {string} orderBy.field ordem = [{ field: chave, order: 'desc' }] } Argumentos
     * @param {'asc'|'desc'} orderBy.order ordem = [{ field: chave, order: 'desc' }] } Argumentos
     * @returns {Promise<object>} Lista de registros
     * @memberof Crud
     */
    list: async (filter = {}, orderBy) => {
      const flt = filterReplace(filter);
      let ord = orderBy;
      if (typeof orderBy === "undefined") {
        ord = [{ field: pk, order: "desc" }];
      }
      let rsp = knex(tableName).where(whereFilter(flt));
      rsp = rsp.orderBy(sortReplace(ord));

      return rsp;
    },

    /**
     * Conta quantos registros retornam no filtro
     *
     * @param {object} filter { filtro = {} }
     * @returns {Promise<number> }
     * @memberof Crud
     */
    count: async (filter = {}) => {
      const flt = filterReplace(filter);
      const rsp = await knex(tableName).count({ counter: "*" }).where(whereFilter(flt));
      return rsp[0].counter;
    },

    /**
     * Cria um novo registro
     *
     * @param {object} record Registros para ser criado
     * @returns {Promise<object>} Retorna o registro criado
     * @memberof Crud
     */
    create: async (record) => {
      const rsp = await knex(tableName).insert(record, "*");
      return rsp[0];
    },

    /**
     * Altera o registro indicado pelo valor da chave
     *
     * @param {string} pkValue Valor da chave
     * @param {object} record Registros para ser alterado
     * @returns {Promise<object>} Registro atualizado
     * @memberof Crud
     */
    update: async (pkValue, record) => {
      const rsp = await knex(tableName).update(record, ["*"]).where(pk, pkValue);
      return rsp[0];
    },

    /**
     * Exclui o registro indicado pelo valor da chave
     *
     * @param {string|number} pkValue Valor da chave primária do registro
     * @returns {Promise<number>} Quantidade de registros excluidos
     * @memberof Crud
     */
    del: async (pkValue) => {
      const rsp = await knex(tableName).del().where(pk, pkValue);
      return rsp;
    },
  };
}

module.exports = createCrud;
