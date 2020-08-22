const jwt = require("jsonwebtoken");
const httpStatus = require("./httpStatus");
const HttpError = require("./HttpError");
const config = require("../config");

/**
 * Decodifica o token de autorização
 *
 * @param authorization Header de autorização
 * @return {object} Objeto com dados do usuario decodificados do token
 */
function decode(authorization) {
  let token = authorization;
  let user = {};

  if (/\s/g.test(authorization)) {
    token = token.split(" ")[1];
  }

  if (token === undefined) {
    throw new HttpError(httpStatus.UNAUTHORIZED, "Token não informado");
  }

  try {
    user = jwt.verify(token, config.auth.secret);
  } catch (err) {
    user = {};
  }
  return user;
}

function encode(user) {
  return jwt.sign(user, config.auth.secret, {
    expiresIn: config.auth.expiration,
  });
}

module.exports = { decode, encode };
