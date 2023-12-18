module.exports = input => input
  .split('')
  .reduce((acc, curr) => +curr >= 5 ? `${acc}${1}` : `${acc}${0}`, '')
