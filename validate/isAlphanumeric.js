function isAlphanumeric(str, label) {
  if (/^[a-z\d]+$/i.test(str)) {
    return null
  }
  return `${label} não é alfanumérico`
}

module.exports = isAlphanumeric
