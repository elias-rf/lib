/**
 * @module
 */
const variance = require("./variance");

/**
 * Calcula o desvio padrão de uma população ou amostrar
 *
 * @requires variancia
 * @param {Array<number>} lista Array com valores para calcular desvio padrão
 * @param {boolean} [usarPopulacao=false] Define se irá trabalhar com toda a população ou apenas uma amostra
 * @returns {number} Valor do desvio padrão
 */
function standardDeviation(lista, usarPopulacao = false) {
  return Math.sqrt(variance(lista, usarPopulacao));
}

module.exports = standardDeviation;
