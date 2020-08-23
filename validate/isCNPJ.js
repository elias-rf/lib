const dvCnpj = require("../dvCnpj");

/**
 * Valida um cnpj
 *
 * @param {string} str CNPJ com ou sem formato
 * @returns {boolean} True se for válido
 */
function isCNPJ(cnpj) {
  const dv = dvCnpj(cnpj);
  return dv === cnpj.substr(-2, 2);
}

module.exports = isCNPJ;
