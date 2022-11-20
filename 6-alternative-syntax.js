module.exports.items = ['item1', 'item2']

const person = {
  name: 'bob'
}

module.exports.singlePerson = person

console.log(module)

// Module {
//   id: '.',
//   path: '/home/vishnu/git/personal/github-vishnu/nodejs',
//   exports: { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } },
//   filename: '/home/vishnu/git/personal/github-vishnu/nodejs/6-alternative-syntax.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/home/vishnu/git/personal/github-vishnu/nodejs/node_modules',
//     '/home/vishnu/git/personal/github-vishnu/node_modules',
//     '/home/vishnu/git/personal/node_modules',
//     '/home/vishnu/git/node_modules',
//     '/home/vishnu/node_modules',
//     '/home/node_modules',
//     '/node_modules'
//   ]
// }
