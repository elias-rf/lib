/**
 * Multiplica cada item de um array pelo item da mesma posição em outro
 *
 * @param {number[]} array1 Array com os itens
 * @param {number[]} array2 Array com os itens
 * @returns {number[]} Novo array com resultado, length será o menor dos 2
 * @example
 * multiplicator([2,3],[4,5]) // [8,15]
 */
function multiplicator(array1, array2) {
  if (array1.length <= array2.length) {
    return array1.map((valor, index) => valor * array2[index])
  }
  return array2.map((valor, index) => valor * array1[index])
}

module.exports = multiplicator
