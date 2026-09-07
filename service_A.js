const http = require('http');

http.createServer(async (req, res) => {
  const data = await fetch('http://localhost:9090').then(r => r.json());
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ from: 'A', data }));
}).listen(9090);