const { merge, isEmpty } = require("lodash");
/**
 * Converte um env para json
 *
 * @param {*} name nome do aplicativo que será usado selecionar as variaveis
 * @param {*} env
 * @returns
 */
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
>>>>>>> 99bc7fb57968c5222f55be93c22c990f1383a9ff
    return obj;
  }, {});
};

module.exports = envJson;
