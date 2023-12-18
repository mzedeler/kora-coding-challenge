const challenge3 = require('./challenge-3')

describe('challenge 3', () => {
  it('handles a single char', () => {
    expect(challenge3('a')).toBe('a')
  })

  it('handles a single repeated char', () => {
    expect(challenge3('aaa')).toBe('a')
  })

  it('handles the empty string', () => {
    expect(challenge3('')).toBe('')
  })

  it('handles "bbbaaaverylongstrapo"', () => {
    expect(challenge3('bbbaaaverylongstrapo')).toBe('averylongst')
  })

  it('handles overlapping candidates', () => {
    expect(challenge3('abcada')).toBe('bcad')
  })

  it('handles overlapping candidates 2', () => {
    expect(challenge3('abcada')).toBe('bcad')
  })
})
