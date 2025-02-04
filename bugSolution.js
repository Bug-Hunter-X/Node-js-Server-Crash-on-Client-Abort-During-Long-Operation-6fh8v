```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation
  const timeoutId = setTimeout(() => {
    // Check if the request has been aborted
    if (req.aborted) {
      console.error('Request aborted');
      clearTimeout(timeoutId);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate a long-running operation

  req.on('aborted', () => {
    clearTimeout(timeoutId);
  });
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\n\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```