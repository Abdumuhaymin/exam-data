const jsonServer = require("json-server");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(next, 500);
});
setTimeout(() => {
  server.use(router);
  app.use(server);
}, 500);

const app = express();

const PORT = 7777;
app.listen(PORT, () => {
  console.log(`database is running on port http://localhost:${PORT}`);
});
