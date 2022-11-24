const fs = require('fs')
const path = require('path')

const val = path.resolve(__dirname, '..', 'content/subfolder');
console.log(val)

const original_text = fs.readFileSync(path.join(val, 'text.txt'), 'utf-8');
console.log('original_text: ', original_text);

fs.writeFileSync(path.join(val, 'text.txt'), 'This is the text that will be replaced.', {
  flag: 'a'
})
const data = fs.readFileSync(path.join(val, 'text.txt'), 'utf-8')

console.log(data)