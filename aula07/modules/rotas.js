const express = require("express");
const rotas = express.Router();

let pessasInfo = [
  { nome: "guilherme", idade: 18 },
  { nome: "juliana", idade: 16 },
  { nome: "pyetra", idade: 0 },
  { nome: "penelope", idade: 0 },
];

rotas.get("/", (req, res) => {
  res.send("Ola, seja bem vindo");
});

rotas.get("/:pessoaid", (req, res) => {
  let pessoa = req.params.pessoaid;
  let pessoaInfo = pessasInfo.find((p) => p.nome == pessoa);
  if (!pessoaInfo) {
    res
      .status(404)
      .json({ erro: "pessoa não encontrada", pessoaPesquisada: pessoa });
  } else {
    res.status(200).json(pessoaInfo);
  }
});

module.exports = rotas;
