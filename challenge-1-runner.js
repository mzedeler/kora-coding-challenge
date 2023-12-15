const assert = require('node:assert')
const fs = require('node:fs')
const childProcess = require('node:child_process')
const exp = require('node:constants')

const testCases = JSON.parse(fs.readFileSync('./challenge-1-testcases.json'))

const runTest = (target, input, expectedOutput) => new Promise(resolve => {
  const child = childProcess.spawn(target, [], {})
  let output = ''
  child.on('exit', () => {
    const pass = output === expectedOutput
    process.stdout.write(`'${input}': '${output}' === '${expectedOutput}': `)
    console.log(pass ? '✅' : '❌')
    resolve(pass)
  })
  child.stdout.on('data', data => { output = output + data.toString('utf-8') })
  child.stdin.end()
})

const runAllTests = async (target) => {
  for (let testCase of testCases) {
    await runTest(target, ...testCase)
  }
}

const runner = (target) => {
  runAllTests(target)
  let timeout
  fs.watch(__dirname, () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => runAllTests(target), 50)
  })
}

console.log(testCases)

const main = () => {
  const target = process.argv[2]
  runner(target)
}

main()
