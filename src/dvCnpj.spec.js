const dvCnpj = require('./dvCnpj.js')

describe(__filename, () => {
  let atual
  it('deve funcionar com formatação', () => {
    atual = dvCnpj('18.781.203/0001-28')
    expect(atual).toEqual('28')
  })

  it('deve funcionar sem formatação', () => {
    atual = dvCnpj('18781203000128')
    expect(atual).toEqual('28')
  })

  it('deve funcionar sem formatação sem dv', () => {
    atual = dvCnpj('270569100001')
    expect(atual).toEqual('42')

    atual = dvCnpj('900000000016')
    expect(atual).toEqual('60')
  })
})
