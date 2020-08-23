const hash = require("./hash");

/**
 * Checking the password hash
 *
 * @param {string} password Senha para validar
 * @param {string} original Senha criptografada
 * @return {boolean} True se a senha for correta
 */
module.exports = async function verify(password, original, algoritm = "sha256") {
  const passwordHash = await hash(password, algoritm);
  return passwordHash === original;
};
