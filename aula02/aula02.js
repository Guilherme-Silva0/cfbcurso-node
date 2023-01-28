const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Ola, tudo okay por aqui\nCurso de node JS");
    res.end();
  })
  .listen(8080);
