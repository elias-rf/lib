let table = [{ kvar: '1_UF', Vlr: 'AC,AM' }];

module.exports = (qry) => {
  if (
    qry.method === 'first' &&
    /select .* from .tbl_sistema_variavel. .*/.test(qry.sql)
  ) {
    return table;
  }
  return undefined;
};
