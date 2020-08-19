const average = require("./average");
const sum = require("./sum");

/**
 * Calcula a variância de uma lista de números
 *
 * @requires media
 * @requires somatorio
 * @param {Array<number>} lista Array de números para calcular variância
 * @param {boolean} [usarPopulacao=false] Define se irá trabalhar com toda a população ou apenas uma amostra
 * @returns {number} Valor da variância
 */
function variance(lista, usarPopulacao = false) {
  const mediaArr = average(lista);
  return sum(lista.map((vlr) => (vlr - mediaArr) ** 2)) / (lista.length - (usarPopulacao ? 0 : 1));
}

module.exports = variance;
