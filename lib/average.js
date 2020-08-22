// @ts-check
/**
 * @module
 */
const sum = require("./sum");

/**
 * Calcula a média aritmetica de um array
 *
 * @requires somatorio
 * @param {Array<number>} lista Array com os valores
 * @returns {number} Média aritmetica
 */
function average(lista) {
  return sum(lista) / lista.length;
}

module.exports = average;
