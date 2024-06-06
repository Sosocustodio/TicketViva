import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../css/cadastroClientesForm.css'; // Importe o arquivo de estilos CSS

const CadastroClienteForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    genero: '',
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    cep: '',
    cidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/cadastroCliente', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Cliente cadastrado com sucesso!'
      });

      setFormData({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        genero: '',
        email: '',
        senha: '',
        telefone: '',
        cpf: '',
        cep: '',
        cidade: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastroClientes', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao cadastrar o cliente. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form className="cadastroClienteForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome" className="form-label">Nome:</label>
        <input type="text" name="nome" placeholder="Nome" className="form-control" value={formData.nome} onChange={handleChange} />
      </div>
      
      <div className="form-group">
        <label htmlFor="sobrenome" className="form-label">Sobrenome:</label>
        <input type="text" name="sobrenome" placeholder="Sobrenome" className="form-control" value={formData.sobrenome} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento:</label>
        <input type="text" name="dataNascimento" placeholder="Data de Nascimento" className="form-control" value={formData.dataNascimento} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="genero" className="form-label">Gênero:</label>
        <input type="text" name="genero" placeholder="Gênero" className="form-control" value={formData.genero} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" name="email" placeholder="Email" className="form-control" value={formData.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="senha" className="form-label">Senha:</label>
        <input type="senha" name="senha" placeholder="Senha" className="form-control" value={formData.senha} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="telefone" className="form-label">Telefone:</label>
        <input type="tel" name="telefone" placeholder="Telefone" className="form-control" value={formData.telefone} onChange={handleChange} />
      </div>
      
      <div className="form-group">
        <label htmlFor="cpf" className="form-label">CPF:</label>
        <input type="text" name="cpf" placeholder="CPF" className="form-control" value={formData.cpf} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="cep" className="form-label">CEP:</label>
        <input type="text" name="cep" placeholder="CEP" className="form-control" value={formData.cep} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="cidade" className="form-label">Cidade:</label>
        <input type="text" name="cidade" placeholder="Cidade" className="form-control" value={formData.cidade} onChange={handleChange} />
      </div>

      <button type="submit" className="form-button">Salvar</button>
    </form>
  );
};

export default CadastroClienteForm;
