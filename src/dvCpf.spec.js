const calcDvCpf = require('./dvCpf')

describe(__filename, () => {
  let atual
  it('deve funcionar com formatação', () => {
    atual = calcDvCpf('003.709.877-21')
    expect(atual).toEqual('21')
  })

  it('deve funcionar sem formatação', () => {
    atual = calcDvCpf('00370987721')
    expect(atual).toEqual('21')
  })

  it('deve funcionar sem formatação sem dv', () => {
    atual = calcDvCpf('003709877')
    expect(atual).toEqual('21')
  })

  it('deve funcionar sem formatação sem dv errado', () => {
    atual = calcDvCpf('000000877')
    expect(atual).toEqual('00')
  })
})
