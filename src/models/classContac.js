import { LEVELS } from "./ConectadoEnum";
export class Contacto {
  nombre = "";
  apellido = "";
  email = "";
  conectado = LEVELS.noConectado;

  constructor(nombre, apellido, email, conectado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.conectado = conectado;
  }
}
