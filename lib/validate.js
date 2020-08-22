function validate(value, label, valids) {
  let aux

  if (valids === undefined) {
    valids = label
    label = value
  }
  for (const v of valids) {
    aux = v(value, label)
    if (aux !== null) {
      return aux
    }
  }
  return null
}

module.exports = validate
