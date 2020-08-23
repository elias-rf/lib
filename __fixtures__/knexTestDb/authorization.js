let table = [
  { id: 1, idUser: 1, idSubject: 1, actions: 'ler,excluir' },
  { id: 2, idUser: 2, idSubject: 2, actions: 'alterar' },
];

module.exports = (qry) => {
  if (
    (qry.method === 'first' || qry.method === 'select') &&
    /select .* from .authorization. .*/.test(qry.sql)
  ) {
    return table;
  }
  return undefined;
};
