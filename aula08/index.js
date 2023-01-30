(async () => {
  const db = require("./db");
  console.log("Obtendo todos os usuários...");
  const usuarios = await db.getUsuarios();
  console.log(usuarios);
})();
