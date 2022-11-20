// Modules

// Node uses commonJS under its hood.

// CommonJS, every file is a module(by default)
// Modules - Encapsulated code

// const john = 'john'
// const peter = 'peters'
require('./7-mindgrenade'); // Any functions called inside 7-mindgrenade.js is called
const names = require('./4-names')

const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}

for (i in names) {
  sayHi(i)
}

// sayHi('susuan')
// sayHi(john)
// sayHi(peter)

module.exports = sayHi

// console.log(module)