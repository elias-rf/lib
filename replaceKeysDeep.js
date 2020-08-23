const { isArray, isObject, transform } = require("lodash");

/**
 * Altera os nomes das propriedades de um objeto
 *
<<<<<<< HEAD
<<<<<<< HEAD
 * @param {Object} obj Objeto que será alterado
 * @param {Object} keysMap Objeto com propriedades iguais ao obj e valores que substituirão as propriedades.
 * @returns obj com nomes das propriedades alteradas
 */
function replaceKeysDeep(obj, keysMap) {
  if (isArray(obj)) {
    return obj.map((key) => replaceKeysDeep(key, keysMap));
=======
=======
>>>>>>> 5caf195fc0a346920090bc1f0dbcc6bc9f108ec0
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
<<<<<<< HEAD
>>>>>>> 99bc7fb57968c5222f55be93c22c990f1383a9ff
=======
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
>>>>>>> 5caf195fc0a346920090bc1f0dbcc6bc9f108ec0
  }

  if (!isObject(obj)) {
    return obj;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

  rsp = Object.entries(obj).reduce((result, [key, value]) => {
    const currentKey = keysMap[key] || key;
    result[currentKey] = isObject(value) ? replaceKeysDeep(value, keysMap) : value;
=======
<<<<<<< HEAD
>>>>>>> 5caf195fc0a346920090bc1f0dbcc6bc9f108ec0
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
>>>>>>> 99bc7fb57968c5222f55be93c22c990f1383a9ff
=======
<<<<<<< HEAD
=======
>>>>>>> 99bc7fb57968c5222f55be93c22c990f1383a9ff
>>>>>>> 6ea2cb307125b445f6edf148eb59497de03c4d2d
>>>>>>> 5caf195fc0a346920090bc1f0dbcc6bc9f108ec0
}

module.exports = replaceKeysDeep;
