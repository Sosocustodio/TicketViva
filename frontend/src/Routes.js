import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
// import Contato from "./Pages/Contato";
import LoginAdm from "./Components/LoginAdm";
import CadastroVendas from "./Pages/CadastroVenda";
// import TabelaUsuarios from "./Pages/ListaUsuarios";
import CadastroClientes from "./Pages/CadastroClientes.js";


const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/contato" element={<Contato />} />
        {/* <Route path="/listaUsuarios" element={<TabelaUsuarios />} /> */}
        <Route path="/cadastroClientes" element={<CadastroClientes />} />
        <Route path="/loginadm" element={<LoginAdm />} />
        <Route path="/gerenciamento" element={<CadastroVendas />} />

        {/* <Route path="/" exact element={<Home />} /> */}

      </Routes>
    </>
  );
};

export default Rotas;
