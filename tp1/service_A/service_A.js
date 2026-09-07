const http = require('http');

http.createServer(async (req, res) => {
  const data = await fetch('http://service_b:9090').then(r => r.json());
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ from: 'A', data }));
}).listen(9090, '0.0.0.0', () => {
  console.log('Service A prêt sur le port 9090');
});