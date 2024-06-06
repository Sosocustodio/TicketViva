//Cadastro
import React from "react";
import CadastroFormVenda from "../Components/CadastroFormVenda";
import graficoVendas from "../imagens/graficoVendas.jpg";
import "../css/formularios.css";


const CadastroVendas = () => {
  return (
    <>
      <div>
        <h2 className="estoqueTitulo centralizar my-4">Cadastre novas vendas:</h2>
        <CadastroFormVenda />
        <img src={graficoVendas} className='graficoVendas' />
      </div>
    </>
  );
};

export default CadastroVendas;