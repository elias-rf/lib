const requireDirectory = require('require-directory');
const db = requireDirectory(module);

module.exports = function knexTestDb(qry) {
  let rsp;
  for (const query in db) {
    if (!rsp) {
      rsp = db[query](qry);
    }
  }

  if (rsp === undefined) {
    // eslint-disable-next-line no-console
    console.log('Query desconhecida: knexTestDb -> qry', qry);
    rsp = { response: [{}] };
  }
  return rsp;
};
