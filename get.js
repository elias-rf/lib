/**
 * Dado um objeto pegue o valor apontado pela chave
 *
 * @param {object} obj objeto que contem dados
 * @param {string|number} key chave de procura
 * @param {*} def valor default se chave não for encontrada
 * @param {*} undef valor que será considerado undefined
 * @returns
 */
const get = (obj, key, def, undef) => {
  key = key && key.split ? key.split(".") : [key];
  for (let p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

module.exports = get;
