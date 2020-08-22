const replaceKeysDeep = require('./replaceKeysDeep');

function sortReplace(obj) {
  const keysMap = {
    field: 'column',
    order: 'order',
  };
  return replaceKeysDeep(obj, keysMap);
}

module.exports = sortReplace;
