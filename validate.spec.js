const validate = require('./validate')
const isAlpha = require('./isAlpha')
const isUppercase = require('./isUppercase')

describe('validate', () => {
  test('validar 1 função', () => {
    expect(validate('a', [isAlpha])).toBeNull()
    expect(validate('2', 'Campo', [isAlpha])).toBe('Campo não é alfabético')
    expect(validate('.', 'Campo', [isAlpha])).toBe('Campo não é alfabético')
  })

  test('validar 2 funções', () => {
    expect(validate('A', [isAlpha, isUppercase])).toBeNull()
    expect(validate('b', 'Campo', [isAlpha, isUppercase])).toBe('Campo não é maiúsculo')
  })
})
