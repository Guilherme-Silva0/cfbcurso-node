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

const updateUsuarios = async (id, usuario) => {
  const conn = await conectar();
  const sql = "UPDATE usuarios SET nome=?,idade=? WHERE id=?";
  const values = [usuario.nome, usuario.idade, id];
  await conn.query(sql, values);
};

const deleteUsuarios = async (id) => {
  const conn = await conectar();
  const sql = "DELETE FROM usuarios WHERE id=?";
  const values = [id];
  await conn.query(sql, values);
};

module.exports = {
  getUsuarios,
  insertUsuarios,
  updateUsuarios,
  deleteUsuarios,
};
