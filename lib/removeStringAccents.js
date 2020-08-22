/**
 * Retira acentos de uma string
 *
 * @param {string} texto Texto qualquer
 * @returns {string} Texto sem acentos
 */

function removeStringAccents(texto) {
  const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'
  const accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz'
  const str = texto.split('')
  const strLen = str.length
  let i
  let x
  for (i = 0; i < strLen; i += 1) {
    x = accents.indexOf(str[i])
    if (x !== -1) {
      str[i] = accentsOut[x]
    }
  }
  return str.join('')
}

module.exports = removeStringAccents
