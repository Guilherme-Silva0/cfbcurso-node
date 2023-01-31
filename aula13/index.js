const mongodb = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.omwkdsg.mongodb.net/?retryWrites=true&w=majority`;

mongodb.connect(url, (err, banco) => {
  if (err) throw err;
  const dbo = banco.db("teste-node");
  const obj = { nome: "Juliana", idade: 16 };
  dbo.collection("usuarios").insertOne(obj, (err, res) => {
    if (err) throw err;
    console.log(`Nova linha adicionada`);
    banco.close();
  });
});
