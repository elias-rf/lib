/**
 * Verifica se o item é um objecto
 */
function isObject(item) {
  if (Object.prototype.toString.call(item) === '[object Object]') {
    if (item === null) {
      return false
    }
    return true
  }
  return false
}

module.exports = isObject
