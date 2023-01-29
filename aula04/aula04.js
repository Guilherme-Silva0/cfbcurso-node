const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

const server = http.createServer((req, res) => {
  //Lendo conteudo de um arquivo
  fs.readFile(path.join(__dirname, "site.html"), (err, file) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(file);
    return res.end();
  });
});

server.listen(port, () => {
  console.log("servidor ativo");
});
