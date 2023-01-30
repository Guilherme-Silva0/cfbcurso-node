const http = require("http");
const eventos = require("events");
const EventoEmissor = new eventos.EventEmitter();
const port = process.env.PORT || 3000;

EventoEmissor.on("start", () => console.log("Início do processo"));
EventoEmissor.on("end", () => console.log("Fim do processo"));

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  EventoEmissor.emit("start");
  res.write("<h1 style='text-align: center;'>oikkk<h1/>");
  EventoEmissor.emit("end");
  res.end();
});

server.listen(port, () => console.log("Servidor ativo"));
