const { merge, isEmpty } = require("lodash");
/**
 * Converte um env para json
 *
 * @param {*} name nome do aplicativo que será usado selecionar as variaveis
 * @param {*} env
 * @returns
 */
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
    return obj;
  }, {});
};

module.exports = envJson;
