import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/classContac";

const ContacComponent = ({ Contacto }) => {
  return (
    <div>
      <h2>Nombre: {Contacto.nombre} </h2>
      <h3>Apellido: {Contacto.apellido}</h3>
      <h4>Email: {Contacto.email}</h4>
      <h5>Conectado: {Contacto.conectado}</h5>
    </div>
  );
};

ContacComponent.propTypes = {
  Contacto: PropTypes.instanceOf(Contacto),
};

export default ContacComponent;
