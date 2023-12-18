module.exports = input => {
    let maxLengthSeen = 0
    let maxSubstringSeen = ''
    let currentSubstring = ''

    for (const char of input) {
      const index = currentSubstring.indexOf(char)

      if (index !== -1) {
        currentSubstring = currentSubstring.substring(index + 1)
      }

      currentSubstring += char

      if (currentSubstring.length > maxLengthSeen) {
        maxLengthSeen = currentSubstring.length
        maxSubstringSeen = currentSubstring
      }
    }

    return maxSubstringSeen
  }
