const httpStatus = require('./httpStatus')

/**
 * Return new validation error
 *
 * @param {Error} errorData
 * @returns {Error|APIError}
 */
module.exports = function generateError(message, status) {
  const err = new Error(message)
  err.status = status
  err.statusText = httpStatus[status]
  return err
}
