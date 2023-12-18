const challenge2 = require('./challenge-2')

describe('challenge 2', () => {
  it('handles two element array', () => {
    expect(challenge2([10, 1])).toBe(9)
  })

  it('handles input with more elements', () => {
    expect(challenge2([4, 3, 2, 10, 1])).toBe(9)
  })

  it('handles input with negative values', () => {
    expect(challenge2([4, 3, 2, 10, -1])).toBe(11)
  })

  it('handles input with duplicate values', () => {
    expect(challenge2([1, 4, 3, 2, 2, 2, 2, 2, 2, 10])).toBe(9)
  })
})
