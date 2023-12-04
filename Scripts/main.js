import { Vehiculo } from "./vehiculo.js";

// Que aparezca por pantalla
const resultContainer = document.createElement("div");
document.body.appendChild(resultContainer);

export function mostrarResult(text) {
  resultContainer.innerHTML += `<p>${text}</p>`;
}


// Vehiculos
const vehiculo1 = new Vehiculo("BMW", "CLK", "Rojo", 1992, 2400);
mostrarResult("Vehiculo 1")
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();
