//Cadastro
import React from "react";
import CadastroFormVenda from "../Components/CadastroFormVenda";
import graficoVendas from "../imagens/graficoVendas.jpg";
import "../css/formularios.css";
import TabelaCadastroVenda from "../Components/TabelaCadastroVenda";


const CadastroVendas = () => {
  return (
    <>
      <div>
        <h2 className="estoqueTitulo centralizar my-4">Cadastre novas vendas:</h2>
        <CadastroFormVenda />
        <img src={graficoVendas} className='graficoVendas' />
        <h2 className="estoqueTitulo centralizar my-4">Vendas realizadas:</h2>
        <TabelaCadastroVenda />
      </div>
    </>
  );
};

export default CadastroVendas;