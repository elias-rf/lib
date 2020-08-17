const dateUsToString = require('./dateUsToString')

describe('dateUsToString', () => {
  it('dever receber uma string', () => {
    expect(dateUsToString(new Date(2000, 1, 1))).toBe('2000-02-01')
  })
})
