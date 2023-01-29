const http = require("http");
const url = require("url");
const port = 8080;
const host = "127.0.0.1";

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    const param = url.parse(req.url, true).query;
    if (param.nome) res.write("<br>" + param.nome);
    if (param.idade) res.write("<br>" + param.idade);
    res.end();
  })
  .listen(port, host, () => {
    console.log("Servidor ativo");
  });
