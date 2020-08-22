function isMinLength(min) {
  return (str, label) => {
    if (str.length >= min) {
      return null
    }
    return `${label} deve ter mais que ${min} caracteres`
  }
}

module.exports = isMinLength
