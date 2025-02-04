```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    // If the request is aborted before the timeout completes, this will throw an error.
    if (req.aborted) {
      console.error('Request aborted');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate a long-running operation
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request

');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```