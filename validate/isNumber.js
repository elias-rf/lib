/**
 * Verifica se o item é um Number
 */

function isNumber(item) {
  if (Object.prototype.toString.call(item) === '[object Number]') {
    if (Number.isNaN(item)) {
      return false
    }
    return true
  }
  return false
}

module.exports = isNumber
