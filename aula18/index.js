const mongodb = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.omwkdsg.mongodb.net/?retryWrites=true&w=majority`;

mongodb.connect(url, { useNewUrlParser: true }, (err, banco) => {
  if (err) throw err;
  const dbo = banco.db("teste-node");
  // const obj = { nome: "Natália", idade: 33 };

  // dbo.collection("usuarios").insertOne(obj, (err, res) => {
  //   if (err) throw err;
  //   console.log(`Nova linha adicionada`);
  //   // banco.close();
  // });

  // const obj = [
  //   { nome: "Fernanda", idade: 34 },
  //   { nome: "Mathias", idade: 12 },
  //   { nome: "João", idade: 14 },
  //   { nome: "Priscila", idade: 2 },
  // ];
  // dbo.collection("usuarios").insertMany(obj, async (err, res) => {
  //   if (err) throw err;
  //   await console.log(res.insertedCount + " nova(s) linha(s) adicionada(s)");
  //   banco.close();
  // });

  // dbo
  //   .collection("usuarios")
  //   .find({}, { projection: { _id: 0 } })
  //   .toArray((err, res) => {
  //     if (err) throw err;
  //     console.log(res[0].nome);
  //     banco.close();
  //   });

  const query = {};
  dbo
    .collection("usuarios")
    .find(query, { projection: { _id: 0 } })
    .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
      banco.close();
    });

  // const ordenacao = { idade: 1 };
  // const query = {};

  // dbo
  //   .collection("usuarios")
  //   .find(query)
  //   .sort(ordenacao)
  //   .toArray((err, res) => {
  //     if (err) throw err;
  //     console.log(res);
  //     banco.close();
  //   });

  // const query = { nome: "Fernanda" };

  // dbo.collection("usuarios").deleteOne(query, (err, _) => {
  //   if (err) throw err;
  //   console.log("Linha deletada");
  //   banco.close();
  // });
});
