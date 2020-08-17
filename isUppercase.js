function isUppercase(str, label) {
  if (/^[A-Z]+$/.test(str)) {
    return null;
  }
  return `${label} não é maiúsculo`;
}

module.exports = isUppercase;
