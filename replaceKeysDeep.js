const { isArray, isObject } = require("lodash");

/**
 * Altera os nomes das propriedades de um objeto
 *
 * @param {Object} obj Objeto que será alterado
 * @param {Object} keysMap Objeto com propriedades iguais ao obj e valores que substituirão as propriedades.
 * @returns obj com nomes das propriedades alteradas
 */

function replaceKeysDeep(obj, keysMap) {
  let rsp;
  if (isArray(obj)) {
    rsp = obj.map((key) => replaceKeysDeep(key, keysMap));
    return rsp;
  }

  if (!isObject(obj)) {
    return obj;
  }

  // rsp = Object.entries(obj).reduce((result, [key, value]) => {
  //   const currentKey = keysMap[key] || key;
  //   result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;

  // return transform(obj, (result, value, key) => {
  //   const currentKey = keysMap[key] || key;
  //   result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;
  // });

  rsp = Object.entries(obj).reduce((result, [key, value]) => {
    const currentKey = keysMap[key] || key;
    result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;

    return result;
  }, {});

  return rsp;
}

module.exports = replaceKeysDeep;
