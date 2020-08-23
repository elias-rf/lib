const { merge, isEmpty } = require("lodash");
/**
 * Converte um env para json
 *
 * @param {*} name nome do aplicativo que será usado selecionar as variaveis
 * @param {*} env
 * @returns
 */
<<<<<<< HEAD
<<<<<<< HEAD
const envJson = (env) => {
  return Object.entries(env).reduce((obj, [item, valor]) => {
    const prp = item.split("_");
    const rsp = prp.reduceRight((o, v) => {
      if (isEmpty(o)) {
        o[v] = valor;
      } else {
        o = { [v]: o };
      }
      return o;
    }, {});
    obj = merge(obj, rsp);

=======
=======
>>>>>>> 5caf195fc0a346920090bc1f0dbcc6bc9f108ec0
const envJson = (name, env) => {
  return Object.entries(env).reduce((obj, [item, valor]) => {
=======
<<<<<<< HEAD
const envJson = (env) => {
  return Object.entries(env).reduce((obj, [item, valor]) => {
    const prp = item.split("_");
    const rsp = prp.reduceRight((o, v) => {
      if (isEmpty(o)) {
        o[v] = valor;
      } else {
        o = { [v]: o };
      }
      return o;
    }, {});
    obj = merge(obj, rsp);

=======
const envJson = (name, env) => {
  return Object.entries(env).reduce((obj, [item, valor]) => {
>>>>>>> 6ea2cb307125b445f6edf148eb59497de03c4d2d
    if (item.startsWith(`${name}.`)) {
      const prp = item.split(".");
      const rsp = prp.reduceRight((o, v) => {
        if (isEmpty(o)) {
          o[v] = valor;
        } else {
          o = { [v]: o };
        }
        return o;
      }, {});
      obj = merge(obj, rsp);
    }
<<<<<<< HEAD
>>>>>>> 99bc7fb57968c5222f55be93c22c990f1383a9ff
=======
<<<<<<< HEAD
=======
>>>>>>> 99bc7fb57968c5222f55be93c22c990f1383a9ff
>>>>>>> 6ea2cb307125b445f6edf148eb59497de03c4d2d
>>>>>>> 5caf195fc0a346920090bc1f0dbcc6bc9f108ec0
    return obj;
  }, {});
};

module.exports = envJson;
