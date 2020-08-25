const httpStatus = require("./httpStatus");

class HttpError extends Error {
  constructor(status, mensagem) {
    if (!mensagem) {
      mensagem = httpStatus[`${status}_MESSAGE`];
    }
    super(mensagem);
    this.status = status;
    this.name = httpStatus[`${status}_NAME`];
  }
}

module.exports = HttpError;
