
import * as http from 'http'
import * as url from 'url'
const server = http.createServer((req, res) => {
  // Enable CORS for all routes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Your other server logic here...

  // For example, handle a simple GET request
  if (req.method === 'GET' && req.url === '/index.js') {
    // Respond with the contents of your index.js file
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end('console.log("Hello from index.js");');
  } else {
    // Handle other routes or methods
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
