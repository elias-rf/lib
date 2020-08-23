const parseNumberBr = require("../stringToNumberBr");

const testes = [
  ["-1.234,1234", -1234.1234],
  ["-1,0000", -1],
  ["0,0000", 0],
  ["1,0000", 1.0],
  ["1,1235", 1.1235],
  ["1.234,1200", 1234.12],
  ["123.456.789,1200", 123456789.12],
  ["0", 0],
  ["1", 1],
  ["-1", -1],
  ["123.456.789,1200", 123456789.12],
];

describe(__filename, () => {
  testes.forEach((item) => {
    it(`deve retornar ${item[1]}`, () => {
      expect(parseNumberBr(item[0])).toEqual(item[1]);
    });
  });
});
