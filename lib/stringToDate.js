const parse = require('date-fns/parse')
const isValid = require('date-fns/isValid')

/**
 * Converte uma string representando uma data para Date
 *
 * @param {string} date data no formato 'dia/mes/ano'
 * @param {string} format formato da data
 * @returns {date} data
 */
function parseDate(date, format) {
  let fmt
  if (date === null) {
    return null
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return date
  }
  // considera dia/mes/ano ou mes-dia-ano
  if (date.indexOf('/') >= 0) {
    fmt = ['d/M/yy', "dd/MM/yyyy'T'H:m:s.SSS'Z'", 'd/M/yyyy', 'd/M']
  } else {
    fmt = ['M-d-yy', 'M-d-yyyy', 'M-d']
  }

  if (format) {
    fmt = [format]
  }
  let rsp
  for (const f of fmt) {
    rsp = parse(date, f, new Date())
    if (isValid(rsp)) {
      return rsp
    }
  }

  return null
}

module.exports = parseDate
