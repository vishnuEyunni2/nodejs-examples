const _ = require('lodash')

const items = [1, [1, 2, [3]]]
const newItems = _.flattenDeep(items)
// console.log(newItems)

let arr = [];

function flat(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      return flat(item)
    } else {
      arr.push(item)
    }
  })
}

flat(items);

console.log(arr);