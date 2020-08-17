const addDaysDate = require('./addDaysDate')

describe('dateAdd', () => {
  const dia = new Date('2000-02-15')
  it('Positivo dentro do mês', () => {
    expect(addDaysDate(dia, 1)).toEqual(new Date('2000-02-16'))
  })
  it('Positivo avançando 1 mês', () => {
    expect(addDaysDate(dia, 40)).toEqual(new Date('2000-03-26'))
  })
  it('Zero', () => {
    expect(addDaysDate(dia, 0)).toEqual(new Date('2000-02-15'))
  })
  it('Negativo dentro do mês', () => {
    expect(addDaysDate(dia, -1)).toEqual(new Date('2000-02-14'))
  })
  it('Negativo avançando 1 mês', () => {
    expect(addDaysDate(dia, -20)).toEqual(new Date('2000-01-26'))
  })
})
