import React from 'react';

const CadastroClientesItem = ({ cadastroClientes, onDelete }) => {
  // Verifica se cadastroClientes está definido
  if (!cadastroClientes) {
    return null; // Retorna null se cadastroClientes for undefined ou null
  }

  return (
    <tr>
      <td>{cadastroClientes.id}</td>
      <td>{cadastroClientes.nome}</td>
      <td>{cadastroClientes.sobrenome}</td>
      <td>{cadastroClientes.dataNascimento}</td>
      <td>{cadastroClientes.genero}</td>
      <td>{cadastroClientes.email}</td>
      <td>{cadastroClientes.senha}</td>
      <td>{cadastroClientes.telefone}</td>
      <td>{cadastroClientes.cpf}</td>
      <td>{cadastroClientes.cep}</td>
      <td>{cadastroClientes.cidade}</td>
      <td>
        {/* Renderiza o botão "Excluir" apenas se cadastroClientes estiver definido */}
        {cadastroClientes  (
          <button onClick={() => onDelete(cadastroClientes.id)}>Excluir</button>
        )}
      </td>
    </tr>
  );
};

export default CadastroClientesItem;
