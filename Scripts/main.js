import { Vehiculo } from "./vehiculo.js";

const resultContainer = document.createElement("div");
document.body.appendChild(resultContainer);

export function mostrarResult(text) {
  resultadoContenedor.innerHTML += `<p>${text}</p>`;
}

const vehiculo1 = new Vehiculo("BMW", "CLK", "Rojo", 1992, 2400);
mostrarResult("afafefe")
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();
