const jwt = require("jsonwebtoken");
const httpStatus = require("./net/httpStatus");
const HttpError = require("./net/HttpError");

/**
 * Decodifica o token de autorização
 *
 * @param authorization Header de autorização
 * @return {object} Objeto com dados do usuario decodificados do token
 */
function decode(authorization, secret) {
  let token = authorization;
  let user = {};

  if (/\s/g.test(authorization)) {
    token = token.split(" ")[1];
  }

  if (token === undefined) {
    throw new HttpError(httpStatus.UNAUTHORIZED, "Token não informado");
  }

  try {
    user = jwt.verify(token, secret);
  } catch (err) {
    user = {};
  }
  return user;
}

function encode(user, secret, expiration = "8h") {
  return jwt.sign(user, secret, {
    expiresIn: expiration,
  });
}

module.exports = { decode, encode };
