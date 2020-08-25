let table = [{}];

module.exports = (qry) => {
  if (
    (qry.method === 'first' || qry.method === 'select') &&
    /select .* from .tbl_Produto_Item. .*/.test(qry.sql)
  ) {
    return table;
  }
  return undefined;
};
