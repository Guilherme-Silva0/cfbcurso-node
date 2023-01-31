const http = require("http");
const fs = require("fs");
const pathModule = require("path");
const port = process.env.PORT;
const formidable = require("formidable");

const server = http.createServer((req, res) => {
  if (req.url == "/envioDeArquivo") {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, campos, arquivos) => {
      urlantiga = arquivos.filetoupload.filepath;
      urlnova = pathModule.join(
        __dirname,
        "files_upload",
        arquivos.filetoupload.originalFilename
      );

      fs.rename(urlantiga, urlnova, (err) => {
        if (err) throw err;
        res.write("upload realizado!");
        res.end();
      });
    });
  } else {
    fs.readFile(
      pathModule.join(__dirname, "/pages", "index.html"),
      (err, file) => {
        if (err) return console.log(err);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(file);
        return res.end();
      }
    );
  }
});

server.listen(port || 3000, () => {
  console.log("servidor ativo");
});
