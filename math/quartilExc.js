/**
 * Calcular o quartil de uma lista numérica
 *
 * @param {Array<number>} lista Lista de números
 * @param {number} numQuartil Define qual quartil você deseja 1,2,3
 * @returns {number} Quartil calculado
 */
function quartilExc(lista, numQuartil) {
  if (lista.length < 3) {
    throw new Error("array menor que 3 elementos");
  }
  const [...listaOrdenada] = lista;
  listaOrdenada.sort((a, b) => a - b);
  const p = numQuartil * 0.25;
  const k = p * (listaOrdenada.length + 1);
  const kInt = Math.floor(k);
  const a = k - kInt;
  if (a === 0) {
    return listaOrdenada[kInt - 1];
  }
  return listaOrdenada[kInt - 1] + a * (listaOrdenada[kInt] - listaOrdenada[kInt - 1]);
}

module.exports = quartilExc;
