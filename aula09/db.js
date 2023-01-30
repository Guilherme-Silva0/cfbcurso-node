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

const insertUsuarios = async (usuario) => {
  const conn = await conectar();
  const sql = "INSERT INTO usuarios VALUES(null,?,?)";
  const values = [usuario.nome, usuario.idade];
  await conn.query(sql, values);
};

module.exports = { getUsuarios, insertUsuarios };
