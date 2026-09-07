const http = require('http');

http.createServer(async (req, res) => {
  const data = await fetch('http://127.0.0.2:9090').then(r => r.json());
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ from: 'A', data }));
}).listen(9090, '127.0.0.1', () => {
  console.log('Service A prêt sur http://127.0.0.1:9090');
});