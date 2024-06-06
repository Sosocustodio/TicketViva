//Cadastro
import React from "react";
import CadastroFormVenda from "../Components/CadastroFormVenda";
import graficos from "../imagens/graficos.jpg";
import "../css/formularios.css";
import TabelaCadastroVenda from "../Components/TabelaCadastroVenda";


const CadastroVendas = () => {
  return (
    <>
      <div>
        <h2 className="estoqueTitulo centralizar my-4">Cadastre novas vendas:</h2>
        <CadastroFormVenda />
        <img src={graficos} className='graficos' />
        <h2 className="estoqueTitulo centralizar my-4">Vendas realizadas:</h2>
        <TabelaCadastroVenda />
      </div>
    </>
  );
};

export default CadastroVendas;