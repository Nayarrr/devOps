const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ from: 'B', status : 'ok' }));
}).listen(9090, '127.0.0.2', () => {
  console.log('Service B prêt sur http://127.0.0.2:9090');
});