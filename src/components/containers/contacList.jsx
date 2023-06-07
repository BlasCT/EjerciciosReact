import React from "react";
import { Contacto } from "../../models/classContac";
import { LEVELS } from "../../models/ConectadoEnum";
import ContacComponent from "../puro/contac";

const ContacList = () => {
  const defaultContac = new Contacto(
    "Blas",
    "Condori",
    "blas.condori.taipe@gmail.com",
    LEVELS.conectado
  );
  return (
    <div>
      <div>
        <h1>Contactos</h1>
      </div>
      <ContacComponent Contacto={defaultContac}></ContacComponent>
    </div>
  );
};

export default ContacList;
