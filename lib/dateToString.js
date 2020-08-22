const dfns = require('date-fns')
/**
 * formata uma data para qualquer formato indicado
 *
 * @param {date} date
 * @param {string} fmt
 * @returns {string} data no formato indicado
 */
function formatDate(date, fmt) {
  return dfns.format(date, fmt)
}

module.exports = formatDate
