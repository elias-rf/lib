const isObject = require('./isObject')

/**
 * Executa um merge de dois objetos
 *
 * @param {Object} target Objeto destino
 * @param {Object} source Objeto origem
 * @returns {Object} Novo objeto
 */
function mergeDeep(target, source) {
  let rsp = Object.assign({}, target)
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          rsp = Object.assign({}, rsp, { [key]: source[key] })
        } else {
          rsp[key] = mergeDeep(target[key], source[key])
        }
      } else {
        rsp = Object.assign({}, rsp, { [key]: source[key] })
      }
    })
  }
  return rsp
}

module.exports = mergeDeep
