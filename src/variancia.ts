/**
 * @module
 */
import { media } from './media';
import { somatorio } from './somatorio';

/**
 * Calcula a variância de uma lista de números
 *
 * @requires media
 * @requires somatorio
 * @param {Array<number>} lista Array de números para calcular variância
 * @param {boolean} [usarPopulacao=false] Define se irá trabalhar com toda a população ou apenas uma amostra
 * @returns {number} Valor da variância
 */
export function variancia(lista, usarPopulacao = false) {
  const mediaArr = media(lista);
  return (
    somatorio(lista.map((vlr) => (vlr - mediaArr) ** 2)) /
    (lista.length - (usarPopulacao ? 0 : 1))
  );
}
