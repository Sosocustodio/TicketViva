// login.js
const express = require("express");
const connection = require("./db");
const router = express.Router();

router.post("/loginadm", (req, res) => {
  const { cpf, senha } = req.body;
  connection.query(
    "SELECT * FROM cadastroClientes WHERE cpf = ? AND senha = ?",
    [cpf, senha],
    (error, results) => {
      if (error) {
        console.error("Erro ao buscar dados:", error);
        res.status(500).send("Erro ao buscar dados");
      } else {
        if (results.length > 0) {
          res.json(results[0]);
        } else {
          res
            .status(401)
            .send(
              "Credenciais inválidas. Por favor, verifique seu CPF e senha."
            );
        }
      }
    }
  );
});

module.exports = router;
