// vendas.js
const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/vendas', (req, res) => {
  connection.query('SELECT * FROM vendas', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/vendas/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM vendas WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/vendas', (req, res) => {
  const { cliente, descVenda, prodVenda, qtdProduto, precoVenda, dataVenda, statusVenda } = req.body;
  connection.query('INSERT INTO vendas (cliente, descVenda, prodVenda, qtdProduto, precoVenda, dataVenda, statusVenda) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [cliente, descVenda, prodVenda, qtdProduto, precoVenda, dataVenda, statusVenda], (err, result) => {
    if (err) {
      console.error('Erro ao criar o registro:', err);
      res.status(500).json({ error: 'Erro ao criar o registro' });
      return;
    }
    res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
  });
});

// Rota para atualizar um registro existente pelo ID
router.put('/vendas/:id', (req, res) => {
  const { id } = req.params;
  const { cliente, descVenda, prodVenda, qtdProduto, precoVenda, dataVenda, statusVenda} = req.body;
  connection.query('UPDATE vendas SET cliente = ?, descVenda = ?, prodVenda = ?, qtdProduto = ?, precoVenda = ?, dataVenda = ?, statusVenda = ? WHERE id = ?', 
    [cliente, descVenda, prodVenda, qtdProduto, precoVenda, dataVenda, statusVenda, id ], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar o registro:', err);
      res.status(500).json({ error: 'Erro ao atualizar o registro' });
      return;
    }
    res.json({ message: 'Registro atualizado com sucesso' });
  });
});

// Rota para excluir um registro pelo ID
router.delete('/vendas/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM vendas WHERE idTransacao = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
