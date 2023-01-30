(async () => {
  const db = require("./db");

  console.log("Inserindo novo usuário...");
  await db.insertUsuarios({ nome: "Guilherme", idade: 18 });

  console.log("Obtendo todos os usuários...");
  const usuarios = await db.getUsuarios();
  console.log(usuarios);
})();
