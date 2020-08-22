function isAlpha(str, label) {
  if (/^[-.\d]+$/i.test(str)) {
    return null
  }
  return `${label} não é numérico`
}

module.exports = isAlpha
