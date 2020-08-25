const cacheDefault = require("../cache");

/**
 * Cria um cacheSql que armazena queries em cache
 *
 * @param {object} [configurations={}]
 * @param {object} [configurations.cache] função de cache
 * @returns {(query: any) => Promise<any>} cacheSql
 */
function createCacheSql(configurations = {}) {
  const cache = configurations.cache || cacheDefault;
  /**
   * Executa uma query se não estiver cacheada
   *
   * @param {*} query query knex
   * @returns registro cacheado
   */
  async function cacheSql(query) {
    const sql = query.toString();

    if (cache.has(sql)) {
      return cache.get(sql);
    }
    const rsp = await query;
    cache.set(sql, rsp);
    return rsp;
  }
  return cacheSql;
}

module.exports = createCacheSql;
