const currencyBrToString = require('./currencyBrToString')

const testes = [
  [-1234.1234, '-1.234,12'],
  [-1.0, '-1,00'],
  [0, '0,00'],
  [1.0, '1,00'],
  [1.12345, '1,12'],
  [1234.12, '1.234,12'],
  [123456789.12, '123.456.789,12'],
]

describe(__filename, () => {
  testes.forEach(item => {
    it(`deve retornar ${item[1]}`, () => {
      expect(currencyBrToString(item[0])).toEqual(item[1])
    })
  })
})
