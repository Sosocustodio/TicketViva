// TabelaCadasroVenda.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/formularios.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table  } from 'react-bootstrap';

const TabelaCadastroVenda = () => {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/gerenciamento");
        setVendas(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idVenda) => {
    try {
      await axios.delete(`http://localhost:3001/gerenciamento/${idVenda}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/gerenciamento");
      setVendas(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div className="container tableEstoque">
      <Table responsive className="tabelaEstoque" border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr className="categoriaEstoque">
            <th>Id da Transação</th>
            <th>Cliente</th>
            <th>Descrição</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Data</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {vendas.map((transacao) => (
            <tr className="produtos" key={transacao.idVenda}>
              <td>{transacao.idVenda}</td>
              <td>{transacao.cliente}</td>
              <td>{transacao.descVenda}</td>
              <td>{transacao.prodVenda}</td>
              <td>{transacao.qtdProduto}</td>
              <td>{transacao.precoVenda}</td>
              <td>{transacao.dataVenda}</td>
              <td>
                <Button variant="danger" onClick={() => handleExcluirUsuario(transacao.idVenda)}>Excluir</Button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TabelaCadastroVenda;