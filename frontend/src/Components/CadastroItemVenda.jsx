// CadastroItemVenda.jsx
import React from 'react';

const CadastroVenda = ({ transacao, onDelete }) => {
  return (
    <tr>
      <td>{transacao.id}</td>
      <td>{transacao.cliente}</td>
      <td>{transacao.descVenda}</td>
      <td>{transacao.prodVenda}</td>
      <td>{transacao.qtdProd}</td>
      <td>{transacao.precoVenda}</td>
      <td>{transacao.data}</td>
      <td>{transacao.status}</td>
      <td>
        <button onClick={() => onDelete(transacao.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroVenda;