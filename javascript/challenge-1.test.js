const challenge1 = require('./challenge-1')

describe('challenge 1', () => {
  it('handles empty string', () => {
    expect(challenge1('')).toBe('')
  })

  it('handles 123', () => {
    expect(challenge1('123')).toBe('000')
  })

  it('handles 4', () => {
    expect(challenge1('4')).toBe('0')
  })

  it('handles 5', () => {
    expect(challenge1('5')).toBe('1')
  })

  it('handles 6', () => {
    expect(challenge1('6')).toBe('1')
  })

  it('handles 789', () => {
    expect(challenge1('789')).toBe('111')
  })

  it('handles 0123456789', () => {
    expect(challenge1('0123456789')).toBe('0000011111')
  })

  it('handles 995511', () => {
    expect(challenge1('995511')).toBe('111100')
  })
})
