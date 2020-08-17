const axios = require("axios");

/**
 * Acesso api através de fetcher
 *
 * @param {object} options Opcões que podem ser passadas
 * @param {string} options.method Método de acesso
 * @param {string} options.url Endereço da api
 * @param {object} options.headers Cabeçalhos que serão enviados
 * @param {object} options.json Objeto json para enviar no corpo
 * @param {object} options.timeout Tempo em segundos para esperar resposta
 * @returns
 */
async function fetcher(options) {
  const opt = options;
  try {
    const rsp = await axios(opt);
    return rsp.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { error: error.message };
  }
}

module.exports = fetcher;
