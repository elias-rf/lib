import { quartilExc } from './quartilExc';

/**
 * Remove os outliers de uma lista e retorna a nova lista
 * @requires quartilExc
 * @param {Array<number>} lista Lista de números para analisar e limpar
 * @returns {Array<number>} Lista com outliers removidos
 */
export function removeOutliers(lista) {
  const q1 = quartilExc(lista, 1);
  const q3 = quartilExc(lista, 3);
  const menor = q1 - 1.5 * (q3 - q1);
  const maior = q3 + 1.5 * (q3 - q1);
  return lista.filter((vlr) => vlr > menor && vlr < maior);
}
