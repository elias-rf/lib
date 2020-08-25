let table = [
  {
    id: '1',
    name: 'Usuario1',
    user: 'usuario1',
    active: true,
    password:
      'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', // 123
  },
  {
    id: '2',
    name: 'Usuario2',
    user: 'usuario2',
    active: true,
    password:
      'b3a8e0e1f9ab1bfe3a36f231f676f78bb30a519d2b21e6c530c0eee8ebb4a5d0', // 456
  },
];

module.exports = (qry) => {
  if (
    qry.method === 'select' &&
    /select count\(\*\) as .counter. from .user./.test(qry.sql)
  ) {
    return [{ counter: 1 }];
  }

  if (qry.method === 'insert' && /insert into .user. .*/.test(qry.sql)) {
    return table;
  }

  if (qry.method === 'update' && /update .user. set .*/.test(qry.sql)) {
    return table;
  }

  if (qry.method === 'del' && /delete from .user. .*/.test(qry.sql)) {
    return 1;
  }

  if (
    (qry.method === 'first' || qry.method === 'select') &&
    /select .* from .user. .*/.test(qry.sql)
  ) {
    return table;
  }

  return undefined;
};
