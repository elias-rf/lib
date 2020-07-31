const multiplicator = require('./multiplicator')

/**
 * Calcula os dígitos verificadores de um CNPJ
 *
 * @param {string} cnpj CNPJ com ou sem formato
 * @returns {string} Dígitos verificadores
 * @example <caption>Exemplos com diferentes formatações</caption>
 * cnpjDv('18.781.203/0001-28') // '28'
 * @example
 * cnpjDv('18781203000128') // '28'
 * @example
 * cnpjDv('187812030001') // '28'
 */
function calcDvCnpj(cnpj) {
  const multDig1 = [6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9]
  const multDig2 = [5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9]
  let dig1
  let dig2

  const cnpjAux = cnpj.replace(/[^\d]+/g, '')

  if (cnpjAux.substr(0, 12) === '000000000000') {
    return null
  }

  const numeros = cnpjAux
    .substring(0, 12)
    .split('')
    .map(i => parseInt(i, 10))
  // numeros = numeros;

  dig1 = multiplicator(numeros, multDig1).reduce((a, b) => a + b, 0)
  dig1 %= 11
  dig1 = dig1 > 9 ? 0 : dig1
  dig2 = multiplicator(numeros.concat(dig1), multDig2).reduce((a, b) => a + b, 0)
  dig2 %= 11
  dig2 = dig2 > 9 ? 0 : dig2
  return `${dig1}${dig2}`
}

module.exports = calcDvCnpj
