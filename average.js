// @ts-check
/**
 * @module
 */
import sum from './sum';

/**
 * Calcula a média aritmetica de um array
 *
 * @requires somatorio
 * @param {Array<number>} lista Array com os valores
 * @returns {number} Média aritmetica
 */
export function media(lista) {
  return sum(lista) / lista.length;
}
