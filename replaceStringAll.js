/**
 * Substitui todas as ocorrência de um texto em outro
 *
 * @param {string} texto - Texto completo
 * @param {string} subStr - Texto procurado
 * @param {string} newSubStr - Texto substituto
 * @returns texto limpo
 */
function replaceStringAll(texto, procurar, substituir) {
  return texto.split(procurar).join(substituir)
}

module.exports = replaceStringAll
