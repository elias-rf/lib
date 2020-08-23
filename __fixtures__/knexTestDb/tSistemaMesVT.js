let table = [{ inicio: '2020-01-01' }];

module.exports = (qry) => {
  if (
    (qry.method === 'first' || qry.method === 'select') &&
    /select .* from .tSistemaMesVT. .*/.test(qry.sql)
  ) {
    return table;
  }
  return undefined;
};
