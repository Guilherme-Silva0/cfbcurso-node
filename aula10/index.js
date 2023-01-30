(async () => {
  const db = require("./db");

  console.log("Inserindo novo usuário...");
  await db.insertUsuarios({ nome: "Guilherme", idade: 18 });

  await db.updateUsuarios(1, { nome: "Guilherme", idade: 18 });
  console.log("Usuário atualizado");

  await db.deleteUsuarios(2);
  console.log("Usuário deletado");

  console.log("Obtendo todos os usuários...");
  const usuarios = await db.getUsuarios();
  console.log(usuarios);
})();
