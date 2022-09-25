const cors = require("cors");
const express = require("express");
const db = require("./db");
const server = express();
const port = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.post("/cadastrar", async (req, res) => {
  db.cadastrar(req.body.login, req.body.senha);
  res.send();
});

server.post("/logar", async (req, res) => {
  const resultado = await db.logar(req.body.login, req.body.senha);

  if (resultado[0][0]) {
    console.log(resultado[0][0]);
    res.json(resultado[0][0]);
  } else {
    res.send(false);
  }
});

server.post("/registrar", async (req, res) => {
  db.registrarCliente(req.body.cpf, req.body.nome, req.body.data);
  res.send();
});

server.post("/buscarUsuario", async (req, res) => {
  const resultado = await db.buscarUsuario(req.body.login);
  res.json(resultado[0][0]);
});

server.post("/buscarCliente", async (req, res) => {
  const resultado = await db.buscarCliente(req.body.cpf);
  res.json(resultado[0][0]);
});

server.post("/atualizar", async (req, res) => {
  db.atualizar(req.body.id, req.body.data);
  res.send();
});

server.delete("/deletarAgendamento/:id", async (req, res) => {
  db.deletarAgendamento(req.params.id);
  res.send();
});

server.get("/agendamentos", async (req, res) => {
  const resultado = await db.listarAgendamentos();
  res.json(resultado[0]);
});

server.listen(port, () => {
  console.log("Para fechar o servidor: ctrl + c");
});
