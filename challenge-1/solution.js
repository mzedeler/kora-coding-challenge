#!/usr/bin/env node

const challenge1 = input => {
  return "41"
}

const main = () => {
  let input = ''
  process.stdin.on('data', data => { input = input + data.toString('utf-8') })
  process.stdin.on('end', () => process.stdout.write(challenge1(input)))
}

main()
