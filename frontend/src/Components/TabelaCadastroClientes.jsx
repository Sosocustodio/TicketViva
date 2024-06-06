import React, { useState, useEffect } from "react";
import axios from "axios";


const TabelaCadastroClientes = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastros");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idCadastro) => {
    try {
      await axios.delete(`http://localhost:3001/cadastros/${idCadastro}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastros");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  nome, sobrenome, dataNascimento, genero, email, senha, telefone, cpf, cep, cidade
  return (
    <div>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Data de Nascimento</th>
            <th>Gênero</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>CEP</th>
            <th>Cidade</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>

        nome, sobrenome, dataNascimento, genero, email, senha, telefone, cpf, cep, cidade
        <tbody>
          {cadastros.map((cadastro) => (
            <tr key={cadastro.idCadastro}>
              <td>{cadastro.idCadastro}</td>
              <td>{cadastro.nome}</td>
              <td>{cadastro.sobrenome}</td>
              <td>{cadastro.dataNascimento}</td>
              <td>{cadastro.genero}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.senha}</td>
              <td>{cadastro.telefone}</td>
              <td>{cadastro.cpf}</td>
              <td>{cadastro.cep}</td>
              <td>{cadastro.cidade}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(cadastro.idCadastro)}
                >
                  Excluir
                </button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCadastroClientes;