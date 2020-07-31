const multiplicatorio = require('./multiplicator')

/** @test multiplicatorio */
describe('multiplicatorio', () => {
  let atual
  let esperado
  it('para dv1 de cnpj', () => {
    atual = multiplicatorio([1, 8, 7, 8, 1, 2, 0, 3, 0, 0, 0, 1], [6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9])

    esperado = [6, 56, 56, 72, 2, 6, 0, 15, 0, 0, 0, 9]
    expect(atual).toEqual(esperado)
  })

  it('para dv2 de cnpj', () => {
    atual = multiplicatorio([1, 8, 7, 8, 1, 2, 0, 3, 0, 0, 0, 1, 2], [5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9])
    esperado = [5, 48, 49, 64, 9, 4, 0, 12, 0, 0, 0, 8, 18]
    expect(atual).toEqual(esperado)
  })

  it('para dv1 de cpf', () => {
    atual = multiplicatorio([2, 8, 0, 0, 1, 2, 3, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
    esperado = [2, 16, 0, 0, 5, 12, 21, 64, 81]
    expect(atual).toEqual(esperado)
  })

  it('para dv2 de cpf', () => {
    atual = multiplicatorio([2, 8, 0, 0, 1, 2, 3, 8, 9, 3], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    esperado = [0, 8, 0, 0, 4, 10, 18, 56, 72, 27]
    expect(atual).toEqual(esperado)
  })

  it('com tamanhos diferentes', () => {
    atual = multiplicatorio([2, 8, 0, 0, 1, 2, 3, 8, 9, 3], [0, 1, 2, 3, 4, 5, 6, 7])
    esperado = [0, 8, 0, 0, 4, 10, 18, 56]
    expect(atual).toEqual(esperado)
  })
})
