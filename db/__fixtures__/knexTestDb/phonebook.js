let table = [
  {
    id: '100',
    name: 'nome1',
    department: 'setor1',
  },
  {
    id: '200',
    name: 'nome2',
    department: 'setor2',
  },
];

module.exports = (qry) => {
  if (
    (qry.method === 'first' || qry.method === 'select') &&
    /select .* from .phonebook. .*/.test(qry.sql)
  ) {
    return table;
  }

  if (
    (qry.method === 'first' || qry.method === 'select') &&
    /select count.* from .phonebook./.test(qry.sql)
  ) {
    return [{ counter: 1 }];
  }

  if (qry.method === 'insert' && /insert into .phonebook. .*/.test(qry.sql)) {
    return table;
  }

  if (qry.method === 'update' && /update .phonebook. set .*/.test(qry.sql)) {
    return table;
  }

  if (qry.method === 'del' && /delete from .phonebook. .*/.test(qry.sql)) {
    return 1;
  }
  return undefined;
};
