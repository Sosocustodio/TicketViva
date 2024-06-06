import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

const TabelaCadastroAdm = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/administrador");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idAdm) => {
    try {
      await axios.delete(`http://localhost:3000/administrador/${idAdm}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3000/administrador");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div className="container">
      <Table
        responsive
        className="x"
        border={2}
        cellPadding={5}
        cellSpacing={5}
      >
        <thead>
          <tr className="x">
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Função</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {cadastros.map((administrador) => (
            <tr key={administrador.idAdm}>
              <td>{administrador.idAdm}</td>
              <td>{administrador.nome}</td>
              <td>{administrador.cpf}</td>
              <td>{administrador.email}</td>
              <td>{administrador.senha}</td>
              <td>{administrador.funcao}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(administrador.idAdm)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TabelaCadastroAdm;

