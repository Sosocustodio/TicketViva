// LoginFuncionarios.jsx
import React, { useState } from "react";
import axios from "axios";


const LoginAdm = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [dadosFuncionario, setDadosFuncionario] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/loginadm", {
        cpf,
        senha,
      });
      setDadosFuncionario(response.data);
      setMensagem("");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setDadosFuncionario(null);
      setMensagem(
        "Credenciais inválidas. Por favor, verifique seu CPF e senha."
      );
    }
  };

  return (
    <div>
      <h2 className="estoqueTitulo centralizar my-4">
        Faça seu login:
      </h2>
      <form className="form-container produtos my-3" onSubmit={handleSubmit}>
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
      {dadosFuncionario && (
        <div  className="tabelaLogin">
          <h3 className="estoqueTitulo centralizar my-4">
            Dados do Funcionário:
            </h3>
          <div className="dadosLogin">
            <div className="dados">
              <p className="dadosTabela">Nome: {dadosFuncionario.nome}</p>
              <p className="dadosTabela">Email: {dadosFuncionario.email}</p>
              <p className="dadosTabela">Telefone: {dadosFuncionario.telefone}</p>
            </div>
            <div className="dados">
              <p className="dadosTabela">Endereço: {dadosFuncionario.endereco}</p>
              <p className="dadosTabela">Salário: R$ {dadosFuncionario.salario}</p>
              <p className="dadosTabela">Cargo: {dadosFuncionario.cargo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginAdm;
