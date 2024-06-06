const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Importa as rotas do backend
const vendas = require("./vendas");


const app = express();
const port = 3002; // Defina a porta que deseja utilizar

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Usa as rotas do backend
app.use('/', routes);
app.use("/", loginadm);
app.use("/", vendas);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
