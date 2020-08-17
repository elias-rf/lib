const formatDate = require('./dateToString')

describe('formatDateBr', () => {
  it('dever receber uma string', () => {
    expect(formatDate(new Date(2000, 1, 1), 'dd/MM/yyyy')).toBe('01/02/2000')
  })
})
