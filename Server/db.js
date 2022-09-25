/* eslint-disable no-undef */
async function connect() {
  if (global.connection && global.connection.state !== "disconnected") {
    return global.connection;
  }
  const mysql = require("mysql2/promise");
  require("dotenv").config();

  var config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  };

  const connection = await mysql.createConnection(config);
  global.connection = connection;
  return connection;
}

async function cadastrar(login, senha) {
  const conn = await connect();
  const sql = `insert into usuario values (default, '${login}', '${senha}')`;

  return await conn.query(sql);
}

async function logar(login, senha) {
  const conn = await connect();
  const dados = await conn.query(
    `select * from usuario where login = '${login}' and senha = '${senha}'`
  );
  return dados;
}

async function buscarUsuario(login) {
  const conn = await connect();
  const dados = await conn.query(
    `select * from usuario where login = '${login}'`
  );
  return dados;
}

async function registrarCliente(cpf, nome, data) {
  const conn = await connect();
  const sql = `insert into cliente values (default, '${cpf}', '${nome}', '${data}')`;

  return await conn.query(sql);
}

async function buscarCliente(cpf) {
  const conn = await connect();
  const dados = await conn.query(
    `select * from cliente where cpf = '${cpf}' limit 1`
  );
  return dados;
}

async function listarAgendamentos(id) {
  const conn = await connect();
  const dados = await conn.query(`select * from cliente order by data`);
  return dados;
}

async function atualizar(id, data) {
  const conn = await connect();
  const sql = `update cliente set data = '${data}' where id = '${id}'`;

  return await conn.query(sql);
}

async function deletarAgendamento(id) {
  const conn = await connect();
  const sql = `delete from cliente where id = '${id}'`;

  return await conn.query(sql);
}

module.exports = {
  cadastrar,
  logar,
  buscarUsuario,
  buscarCliente,
  registrarCliente,
  atualizar,
  listarAgendamentos,
  deletarAgendamento,
};
