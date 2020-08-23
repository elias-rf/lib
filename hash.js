const crypto = require("crypto");

/**
 * Create password hash using Password based key derivative function 2
 *
 * @param {string} password Senha para ser criptografada
 * @param {string} algoritm 'sha256'
 * @return {string} retorna o salt$hash
 */
module.exports = async function hash(text, algoritm = "sha256") {
  const h = crypto.createHash(algoritm);
  h.update(text);
  return h.digest("hex");
};
