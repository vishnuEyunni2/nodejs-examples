const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {

  if (req.url === '/about') {
    res.end(`
      <h1>Oops!</h1>
      <p> We can't seem to find the data you are searching</p>
      <a href="/">Back</a>`)
  }
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  fs.readFile('index.html', (err, data) => {
    if (err) {
      console.log({ err });
      res.writeHead(404)
      res.write('Error: File not found')
    } else {
      res.write(data)
    }
    res.end();
  })
});

server.listen(port, (err) => {
  if (err) {
    console.log('something went wrong', err)
  } else {
    console.log('Listening on port ', port)
  }
})