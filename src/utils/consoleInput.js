const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const read = prompt => {
  return new Promise((resolve, reject) => {
    rl.question(prompt, resolve)
  })
}

module.exports = read;