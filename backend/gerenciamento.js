// gerenciamento.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configuração do MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Altere conforme necessário
  password: 'Desenvolvedor@123',  // Altere conforme necessário
  database: 'ticketviva'  // Altere conforme necessário
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para gerenciar vendas
app.post('/gerenciamento', (req, res) => {
  const { cliente, descVenda, prodVenda, qtdProduto, precoVenda, dataVenda, statusVenda } = req.body;
  const query = 'INSERT INTO vendas (cliente, descVenda, prodVenda, qtdProduto, precoVenda, dataVenda, statusVenda) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [cliente, descVenda, prodVenda, qtdProduto, precoVenda, dataVenda, statusVenda], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao inserir dados');
      return;
    }
    res.status(200).send('Dados inseridos com sucesso');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
