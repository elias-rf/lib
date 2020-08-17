// @ts-check
/**
 * @module
 */
import { somatorio } from './somatorio';

/**
 * Calcula a média aritmetica de um array
 *
 * @requires somatorio
 * @param {Array<number>} lista Array com os valores
 * @returns {number} Média aritmetica
 */
export function media(lista) {
  return somatorio(lista) / lista.length;
}
