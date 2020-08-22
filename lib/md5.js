const crypto = require('crypto')

/**
 * Calcula o hash md5 de uma string.<br>
 * Somente no ambiente server pois usa uma biblioteca do node
 * @param {string} text Texto usado para calcular o hash
 * @returns {string} Hash md5 32chars
 * @requires node.crypto
 * @example
 * calcMd5('Teste de escrita') // 'aa85b2fcd47ace498c8a4182ad25d2e0'
 */
function calcMd5(text) {
  return crypto
    .createHash('md5')
    .update(text)
    .digest('hex')
}

module.exports = calcMd5
