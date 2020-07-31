const crypto = require('crypto')

module.exports = async function hash(text, algoritm) {
  const h = crypto.createHash(algoritm)
  h.update(text)
  return h.digest('hex')
}
