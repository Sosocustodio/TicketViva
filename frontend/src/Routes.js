import React from "react";
import {Routes, Route} from "react-router-dom";
import CadastroClientes from "./Pages/CadastroClientes.js";

const Rotas = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/cadastroClientes" element={<CadastroClientes />} />
      </Routes>
    </>
  );
};

export default Rotas;
