const conectar = async () => {
  if (global.conexao && global.conexao.state != "disconected")
    return global.conexao;
  const mysql = require("mysql2/promise");
  const conn = mysql.createConnection(
    "mysql://root:@localhost:3306/node_testes"
  );
  console.log("Banco conectado");
  global.conexao = conn;
  return conn;
};

const getUsuarios = async () => {
  const conn = await conectar();
  const [linhas] = await conn.query("SELECT * FROM usuarios");
  return await linhas;
};

module.exports = { getUsuarios };
