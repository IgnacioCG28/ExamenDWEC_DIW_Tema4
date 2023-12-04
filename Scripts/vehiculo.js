import { mostrarResult } from "./main.js";
export class Vehiculo {
  #marca;
  #modelo;
  #color;
  #añoFabricacion;
  #cilindrada;

  constructor(marca, modelo, color, añoFabricacion, cilindrada) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#añoFabricacion = añoFabricacion;
    this.#cilindrada = cilindrada;
  }

  mostrarDatos() {
    const texto = `
        La marca del vehiculo es ${this.#marca} <br>
        El modelo del vehículo es ${this.#modelo} <br>
        El color del vehículo es ${this.#color} <br>
        El año de fabricación es ${this.#añoFabricacion}<br>
        La cilindrada es ${this.#cilindrada}
        `;

    mostrarResult(`${texto}`);
  }

  acelerar(value) {
    const speed = `Este vehiculo ha acelerado ${value} km/h`;
    return mostrarResult(speed);
  }

  arrancar() {
    const start = "Este vehiculo ha arrancado";
    return mostrarResult(start);
  }

  frenar() {
    const stop = "Este vehiculo ha parado";
    return mostrarResult(stop);
  }

  getMarca() {
    return this.#marca;
  }
  setMarca(value) {
    this.#marca = value;
  }
  getModelo() {
    return this.#modelo;
  }
  setModelo(value) {
    this.#modelo = value;
  }
  getColor() {
    return this.#color;
  }
  setColor(value) {
    this.#color = value;
  }
  getAñoFrabricacion() {
    return this.#añoFabricacion;
  }
  setAñoFrabricacion(value) {
    this.#añoFabricacion = value;
  }
  getCilindrada() {
    return this.#cilindrada;
  }
  setCilindrada(value) {
    this.#cilindrada = value;
  }
}
