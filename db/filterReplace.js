const replaceKeysDeep = require("../replaceKeysDeep");

function filterReplace(obj) {
  const keysMap = {
    greater: ">",
    greaterEqual: ">=",
    less: "<",
    lessEqual: "<=",
    contains: "like",
    null: "isnull",
    equal: "=",
  };
  return replaceKeysDeep(obj, keysMap);
}

module.exports = filterReplace;
