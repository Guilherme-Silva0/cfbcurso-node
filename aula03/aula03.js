const http = require("http");
const port = 8080;
const host = "127.0.0.1";

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url == "/") {
      res.write("<h1>Seja bem vindo!</h1>");
    } else if (req.url == "/perfil") {
      res.write(
        "<h1>Segue la no insta ;)</h1><h2><a href='https://www.instagram.com/guisilva_0_0/'>guisilva_0_0</a></h2>"
      );
    } else {
      res.write(
        "<h1>Essa página não existe :(</h1><h2><a href='/'>Voltar para página principal</a></h2>"
      );
    }
    res.end();
  })
  .listen(port, host, () => {
    console.log("Servidor ativo");
  });
