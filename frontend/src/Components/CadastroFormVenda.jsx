// CadastroFormVenda.jsx
import React, { useState } from "react";
import {Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import "../css/formularios.css";
import Imagem from "../imagens/imgvendas.png";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroFormVenda = () => {
  const [formData, setFormData] = useState({
    cliente: "",
    descVenda: "",
    prodVenda: "",
    qtdProduto: "",
    precoVenda: "",
    dataVenda: "",
    statusVenda: "",
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
      await axios.post("http://localhost:3001/gerenciamento", formData);
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        cliente: "",
        descVenda: "",
        prodVenda: "",
        qtdProduto: "",
        precoVenda: "",
        dataVenda: "",
        statusVenda: "",
      });
    } catch (error) {
      console.error("Erro ao criar cadastro:", error);
      alert("Erro ao criar cadastro. Verifique o console para mais detalhes.");
    }
  };

  return (
    <Form className="form-container vendas my-3" onSubmit={handleSubmit}>
      <Row className="justify-content-center">
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label>
              Nome do Cliente<span className="Asterisco">*</span>
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                name="cliente"
                placeholder="Nome"
                value={formData.cliente}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label>
              Informações do show<span className="Asterisco">*</span>
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                name="descVenda"
                placeholder="Informações"
                value={formData.descVenda}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label>
              Produto Vendido<span className="Asterisco">*</span>
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                name="prodVenda"
                placeholder="Nome do Produto"
                value={formData.prodVenda}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>
                Quantidade do Ingressos<span className="Asterisco">*</span>
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  name="qtdProduto"
                  placeholder="0 Unidades"
                  value={formData.qtdProduto}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                Valor Total<span className="Asterisco">*</span>
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  name="precoVenda"
                  placeholder="R$ 00,00"
                  value={formData.precoVenda}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>
                Data da Compra<span className="Asterisco">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                name="dataVenda"
                placeholder="Data da Transação"
                value={formData.dataVenda}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Status do pagamento<span className="Asterisco">*</span>
              </Form.Label>
              <Form.Select defaultValue="Pendente">
                <option>Pendente</option>
                <option>Pago</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <button variant="primary" type="submit" className="">
            Enviar
          </button>
        </Col>

        <Col md={6} sm={12} className="centralizar my-auto">
          <img className="imgVenda my-3" src={Imagem} alt="Imagem" />
          <p className="estoqueTxt py-3 px-3">
            Os campos com asterisco (<span className="Asterisco">*</span>) são{" "}
            <b className="Asterisco">obrigatórios</b>.
          </p>
        </Col>
      </Row>
    </Form>
  );
};

export default CadastroFormVenda;
