/**
 * Calcula o somatório dos itens de um array
 *
 * @param {Array<number>} lista Lista de números para somatório
 * @returns {number} Valor do somatório
 */
export function somatorio(lista) {
  return lista.reduce((acc, val) => acc + val, 0);
}
