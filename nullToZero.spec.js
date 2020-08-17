const nullToZero = require('./nullToZero')

describe('nullToZero', () => {
  it('null -> 0', () => {
    expect(nullToZero(null)).toBe(0)
  })
  it('null -> ""', () => {
    expect(nullToZero(null, '')).toBe('')
  })
  it('not null', () => {
    expect(nullToZero(1, '')).toBe(1)
  })
  it('undefined -> ""', () => {
    expect(nullToZero(undefined, '')).toBe('')
  })
})
