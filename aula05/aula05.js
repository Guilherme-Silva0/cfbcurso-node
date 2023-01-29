const http = require("http");
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Show de bola</h1>");
  res.end();
});

server.listen(port || 8080, () => {
  console.log("servidor ativo");
});
