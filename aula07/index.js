const express = require("express");
const app = express();
const rotas = require("./modules/rotas");
const port = process.env.PORT || 3000;

app.use("/", rotas);
app.get("*", (req, res) => {
  res.send("Show");
});
app.listen(port, () => console.log("servidor ativo"));
