const validate = require('./validate')
const isMinLength = require('./isMinLength')

describe('validate isMinLength', () => {
  test('validar isMinLength', () => {
    const teste = ['A12', 'ABcd', 'AZ23sd.', 'DEDO']
    for (const vlr of teste) {
      expect(validate(vlr, [isMinLength(3)])).toBeNull()
      expect(validate(vlr, 'Campo', [isMinLength(3)])).toBeNull()
    }
  })

  test('não validar isMinLength', () => {
    const teste = ['a ', '45', 'ab', '']
    for (const vlr of teste) {
      expect(validate(vlr, [isMinLength(3)])).toBe(`${vlr} deve ter mais que 3 caracteres`)
      expect(validate(vlr, 'Campo', [isMinLength(3)])).toBe(`Campo deve ter mais que 3 caracteres`)
    }
  })
})
