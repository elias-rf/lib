const calcDvCpf = require("../dvCpf");

/**
 * Valida um cpf
 *
 * @param {string} cpf
 * @returns {boolean}
 */
function isCPF(cpf) {
  const dv = calcDvCpf(cpf);
  return dv === cpf.substr(-2, 2);
}

module.exports = isCPF;
