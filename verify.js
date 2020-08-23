const hash = require("./hash");

/**
 * Checking the password hash
 *
 * @param {string} password Senha para validar
 * @param {string} original Senha criptografada
 * @return {boolean} True se a senha for correta
 */
module.exports = function verify(password, original) {
  console.log("verify -> hash(password)", hash(password));
  return hash(password) === original;
};
