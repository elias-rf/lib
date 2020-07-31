function isAlpha(str, label) {
  if (/^[a-z]+$/i.test(str)) {
    return null
  }
  return `${label} não é alfabético`
}

module.exports = isAlpha
