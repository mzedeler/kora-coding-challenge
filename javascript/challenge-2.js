module.exports = input => {
  const sorted = input.sort((a, b) => a - b)
  return sorted.pop() - sorted.shift()
}
