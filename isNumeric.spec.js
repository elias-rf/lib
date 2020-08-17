const validate = require('./validate')
const isNumeric = require('./isNumeric.js')

describe('validate isNumeric', () => {
  test('validar Alpha', () => {
    const teste = ['1', '-2', '2.3', '-3.7']
    for (const vlr of teste) {
      expect(validate(vlr, [isNumeric])).toBeNull()
      expect(validate(vlr, 'Campo', [isNumeric])).toBeNull()
    }
  })

  test('não validar isNumeric', () => {
    const teste = ['a ', '445 ', 'a.b', 'a-']
    for (const vlr of teste) {
      expect(validate(vlr, [isNumeric])).toBe(`${vlr} não é numérico`)
      expect(validate(vlr, 'Campo', [isNumeric])).toBe(`Campo não é numérico`)
    }
  })
})
