
import * as http from 'http'
import * as fsB from 'fs'
import { fileURLToPath } from 'url';
import { dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fs = fsB.promises
const server = http.createServer(async (req, res) => {
  // Enable CORS for all routes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

 if (req.url === '/') {
    const filePath = join(__dirname, 'public', 'index.html');

    // Read the HTML file
    try {
      const data = await fs.readFile(filePath, 'utf8', (e, d) => {
      // console.log("🚀 ~ file: server.js:27 ~ data ~ d:", d)
        
      });

      // Respond with the HTML content
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    } catch (err) {
      console.log("🚀 ~ file: server.js:30 ~ server ~ err:", err)
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  } else if (req.url === '/public/index.js') {
    const jsFilePath = join(__dirname, 'public', 'index.js');

    // Read the JavaScript file
    try {
      const jsData = await fs.readFile(jsFilePath, 'utf8', (e, d) =>{

      });

      // Respond with the JavaScript content
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(jsData);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }

  } else if (req.url === '/public/bundle.js') {
    const jsFilePath = join(__dirname, 'public', 'bundle.js');

    // Read the JavaScript file
    try {
      const jsData = await fs.readFile(jsFilePath, 'utf8', (e, d) =>{
        
      });

      // Respond with the JavaScript content
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(jsData);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }

  } else if (req.url === '/node_modules/axios/index.js ') {
    const jsFilePath = join(__dirname, 'node_modules', 'axios', 'index.js');

    // Read the JavaScript file
    try {
      const jsData = await fs.readFile(jsFilePath, 'utf8', (e, d) =>{
        
      });

      // Respond with the JavaScript content
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(jsData);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }

  }else {
    // Handle other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
