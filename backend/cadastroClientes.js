const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastroClientes', (req, res) => {
  connection.query('SELECT * FROM cadastroClientes', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('http://localhost:3000/cadastroClientes/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastroClientes WHERE idCadastroClientes = ?', [id], (err, results) => {
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
router.post('http://localhost:3000/cadastroClientes', (req, res) => {
  const { nome, sobrenome, dataNascimento, genero, email, senha, telefone, cpf, cep, cidade } = req.body;
  connection.query('INSERT INTO cadastroFornecedores (nome, sobrenome, dataNascimento, genero, email, senha, telefone, cpf, cep, cidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [nome, sobrenome, dataNascimento, genero, email, senha, telefone, cpf, cep, cidade], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('http://localhost:3000//cadastroClientes/:id', (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, dataNascimento, genero, email, senha, telefone, cpf, cep, cidade } = req.body;
  connection.query('UPDATE cadastroFornecedores SET nome = ?, sobrenome = ?, dataNascimento = ?, genero = ?, email = ?, senha = ?, telefone = ?, cpf = ?, cep = ? cidade = ? WHERE id = ?',
    [nome, sobrenome, dataNascimento, genero, email, senha, telefone, cpf, cep, cidade], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('http://localhost:3000//cadastroClientes/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastroClientes WHERE idCadastroClientes = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
