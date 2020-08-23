const replaceKeysDeep = require("../libs/replaceKeysDeep");

function orderReplace(obj) {
  const keysMap = {
    field: "column",
    order: "order",
  };
  return replaceKeysDeep(obj, keysMap);
}

module.exports = orderReplace;
