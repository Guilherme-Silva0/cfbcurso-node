const fs = require("fs");
const path = require("path");

//criando uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (err) => {
  if (err) return console.log(err);
  console.log("pasta criada");

  // Criando um arquivo

  fs.appendFile(
    path.join(__dirname, "/teste", "test.txt"),
    "Arquivo criado com NodeJS",
    (err) => {
      if (err) return console.log(err);
      console.log("Arquivo criado");

      //removendo arquivo

      fs.rm("./teste/test.txt", (err) => {
        if (err) return console.log(err);
        console.log("arquivo removido");

        //removendo pasta
        fs.rmdir("teste", (err) => {
          if (err) return console.log(err);
          console.log("pasta removida");
        });
      });
    }
  );
});
