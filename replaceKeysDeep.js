const { isArray, isObject, transform } = require("lodash");

/**
 * Altera os nomes das propriedades de um objeto
 *
<<<<<<< HEAD
 * @param obj Objeto que será alterado
 * @param keysMap Objeto com propriedades iguais ao obj e valores que substituirão as propriedades.
=======
<<<<<<< HEAD
 * @param {Object} obj Objeto que será alterado
 * @param {Object} keysMap Objeto com propriedades iguais ao obj e valores que substituirão as propriedades.
>>>>>>> 6ea2cb307125b445f6edf148eb59497de03c4d2d
 * @returns obj com nomes das propriedades alteradas
 */
function replaceKeysDeep(obj, keysMap) {
  let rsp;
  if (isArray(obj)) {
<<<<<<< HEAD
    rsp = obj.map((key) => replaceKeysDeep(key, keysMap));
    return rsp;
=======
    return obj.map((key) => replaceKeysDeep(key, keysMap));
=======
 * @param obj Objeto que será alterado
 * @param keysMap Objeto com propriedades iguais ao obj e valores que substituirão as propriedades.
 * @returns obj com nomes das propriedades alteradas
 */
function replaceKeysDeep(obj, keysMap) {
  let rsp;
  if (isArray(obj)) {
    rsp = obj.map((key) => replaceKeysDeep(key, keysMap));
    return rsp;
>>>>>>> 99bc7fb57968c5222f55be93c22c990f1383a9ff
>>>>>>> 6ea2cb307125b445f6edf148eb59497de03c4d2d
  }

  if (!isObject(obj)) {
    return obj;
  }
<<<<<<< HEAD

  rsp = Object.entries(obj).reduce((result, [key, value]) => {
    const currentKey = keysMap[key] || key;
    result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;
=======
<<<<<<< HEAD
  return transform(obj, (result, value, key) => {
    const currentKey = keysMap[key] || key;
    result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;
  });
=======

  rsp = Object.entries(obj).reduce((result, [key, value]) => {
    const currentKey = keysMap[key] || key;
    result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;
>>>>>>> 6ea2cb307125b445f6edf148eb59497de03c4d2d
    return result;
  }, {});

  return rsp;
  // return transform(obj, (result, value, key) => {
  //   const currentKey = keysMap[key] || key;
  //   result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;
  // });
<<<<<<< HEAD
=======
>>>>>>> 99bc7fb57968c5222f55be93c22c990f1383a9ff
>>>>>>> 6ea2cb307125b445f6edf148eb59497de03c4d2d
}

module.exports = replaceKeysDeep;
