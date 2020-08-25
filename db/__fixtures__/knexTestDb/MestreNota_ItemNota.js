let tableItem = [
  { categoria: 'categoria1', quantidade: 1, total: 2 },
  { categoria: 'categoria2', quantidade: 2, total: 4 },
];

let tableCli = [
  {
    diasCompra: 90,
    idCliente: 1,
    nomeCliente: 'CLIENTE1',
    uf: 'AC',
    ultimaCompra: new Date('2018-01-01T00:00:00.000Z'),
  },
  {
    diasCompra: 120,
    idCliente: 2,
    nomeCliente: 'CLIENTE2',
    uf: 'AM',
    ultimaCompra: new Date('2017-01-01T00:00:00.000Z'),
  },
];

module.exports = (qry) => {
  if (
    (qry.method === 'first' || qry.method === 'select') &&
    /select .* from .MestreNota. inner join .ItemNota. .*/.test(qry.sql)
  ) {
    return tableItem;
  }

  if (
    (qry.method === 'first' || qry.method === 'select') &&
    /select .* from .MestreNota. inner join .CadCli. .*/.test(qry.sql)
  ) {
    return tableCli;
  }
  return undefined;
};
