/**
 * verifica se é do tipo Date
 *
 * @param {any} date
 * @returns {boolean} verdadeiro se o tipo é Date
 */
function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]'
}

module.exports = isDate
