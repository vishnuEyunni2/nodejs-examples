const fs = require('fs')
const path = require('path')

const val = path.resolve(__dirname);
console.log(val)

fs.writeFileSync(path.join(val, 'data.txt'), 'Hello this is the text file', 'utf-8')
const data = fs.readFileSync(path.join(val, 'data.txt'), 'utf-8')

console.log(data.buffer)