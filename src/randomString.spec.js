const randomString = require('./randomString')

test('deve gerar uma string', () => {
  expect(randomString()).toHaveLength(6)
  expect(randomString(50)).toHaveLength(50)
})
