// LoginFuncionarios.jsx
import React, { useState } from "react";
import axios from "axios";
import "../css/formularios.css";


const LoginAdm = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/loginadm", {
        cpf,
        senha,
      });
      setMensagem("");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setMensagem(
        "Credenciais inválidas. Por favor, verifique seu CPF e senha."
      );
    }
  };

  return (
    <div>
      <h2 className="centralizar my-4">
        Faça seu login:
      </h2>
      <form className="form-container vendas my-3" onSubmit={handleSubmit}>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <br />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default LoginAdm;
