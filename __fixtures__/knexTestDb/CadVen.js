let table = [
  { CdVendedor: 1, NmVendedor: "vendedor1" },
  { CdVendedor: 2, NmVendedor: "vendedor2" },
];

module.exports = (qry) => {
  if ((qry.method === "first" || qry.method === "select") && /select .* from .CadVen. .*/.test(qry.sql)) {
    return table;
  }
  return undefined;
};
