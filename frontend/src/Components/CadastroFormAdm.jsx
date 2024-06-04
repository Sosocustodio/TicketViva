// CadastroFormAdm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CadastroFormAdm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    cpf: "",
    endereco: "",
    salario: "",
    cargo: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/Administrador", formData);
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        cpf: "",
        endereco: "",
        salario: "",
        cargo: "",
      });
    } catch (error) {
      console.error("Erro ao criar cadastro:", error);
      alert("Erro ao criar cadastro. Verifique o console para mais detalhes.");
    }
  };


  return (
    <form className="form-container produtos my-3" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={handleChange}
      />
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={formData.cpf}
        onChange={handleChange}
      />
      <input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={formData.endereco}
        onChange={handleChange}
      />
      <input
        type="number"
        name="salario"
        placeholder="Salário"
        value={formData.salario}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cargo"
        placeholder="Cargo"
        value={formData.cargo}
        onChange={handleChange}
      />
      <button variant="primary" type="submit">
        Salvar
      </button>
    </form>
  );
};



export default CadastroFormAdm;
