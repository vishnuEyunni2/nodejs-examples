const { readFile, writeFile } = require('fs');
const path = require('path');

const file = path.join(__dirname, 'content/subfolder');
const filePath = path.join(file, 'text.txt');

readFile(filePath, 'utf-8', (err, result) => {
  if (err) {
    console.log({ err });
    return;
  }
  const first = result;
  readFile(path.join(file, 'second.txt'), 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result;

    writeFile('./content/subfolder/result-async.txt', `Here is the result ${first}, ${second}`, (err, result) => {
      if (err) {
        console.log(err);
        return
      }
      console.log(result)
    });
  });
})
