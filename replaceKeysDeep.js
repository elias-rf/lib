const { isArray, isObject, transform } = require("lodash");

/**
 * Altera os nomes das propriedades de um objeto
 *
 * @param {Object} obj Objeto que será alterado
 * @param {Object} keysMap Objeto com propriedades iguais ao obj e valores que substituirão as propriedades.
 * @returns obj com nomes das propriedades alteradas
 */
function replaceKeysDeep(obj, keysMap) {
  if (isArray(obj)) {
    return obj.map((key) => replaceKeysDeep(key, keysMap));
  }

  if (!isObject(obj)) {
    return obj;
  }
  return transform(obj, (result, value, key) => {
    const currentKey = keysMap[key] || key;
    result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;
  });
}

module.exports = replaceKeysDeep;
