const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.end("Pagina principal");
});

app.get("/perfil", (req, res) => {
  res.end("Guilherme Silva\n18 Anos");
});

app.get("/curso", (req, res) => {
  res.json({ curso: "NodeJS" });
});

app.listen(port || 8080, () => {
  console.log("servidor ativo");
});
