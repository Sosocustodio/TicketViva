import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
// import Contato from "./Pages/Contato";
// import Cadastro from "./Pages/Cadastro";
import LoginAdm from "./Components/LoginAdm";
import CadastroVendas from "./Pages/CadastroVenda";
// import TabelaUsuarios from "./Pages/ListaUsuarios";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} /> */}
        {/* <Route path="/listaUsuarios" element={<TabelaUsuarios />} /> */}
        <Route path="/loginadm" element={<LoginAdm />} />
        <Route path="/gerenciamento" element={<CadastroVendas />} />
      </Routes>
    </>
  );
};

export default Rotas;
