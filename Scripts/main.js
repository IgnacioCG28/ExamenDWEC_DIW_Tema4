/**
 *  Autor: Ignacio Carmona González
 *  Github: https://github.com/IgnacioCG28/ExamenDWEC_DIW_Tema4.git
 */
import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./AutomovilDeportivo.js";

// Que aparezca por pantalla
const resultContainer = document.createElement("div");
document.body.appendChild(resultContainer);

export function mostrarResult(text) {
  resultContainer.innerHTML += `<p>${text}</p>`;
}

mostrarResult ("<h1>Exámen DWEC y DIW ICG</h1>")
// Vehiculo
const vehiculo1 = new Vehiculo("BMW", "CLK", "Rojo", 1992, 2400);
mostrarResult("<h2>Vehiculo 1</h2>");
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

// Ejer 3.1
const vehiculoObject = {
  marca: "BMW",
  modelo: "CLK",
  color: "Rojo",
  añoFabricacion: 1992,
  cilindrada: 2400,
};

// Ejer 3.2
localStorage.setItem("Vehiculo", JSON.stringify(vehiculoObject));

// Ejer 3.3
console.log(JSON.parse(localStorage.getItem("Vehiculo")));
console.log(localStorage.getItem("Vehiculo"))

//Deportivo

const deportivo1 = new AutomovilDeportivo(
  "Ferrari",
  "Spider",
  "Amarillo",
  2020,
  4000,
  500
);
mostrarResult("<h2>Deportivo 1</h2>");
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.activarModoDeportivo();
deportivo1.acelerar(140);
deportivo1.frenar();

//Ejer 4.1
const deportivoObject = {
  marca: "Ferrari",
  modelo: "Spider",
  color: "Amarillo",
  añoFabricacion: 2020,
  cilindrada: 4000,
  potenciaMotor: 500,
};

// Ejer 4.2
for (let key in deportivoObject) {
  if (deportivoObject.hasOwnProperty(key)) {
    localStorage.setItem(key, deportivoObject[key]);
  }
}

// Ejer 4.3
localStorage.removeItem("modelo");
localStorage.removeItem("potenciaMotor")

// Ejer 4.4
// localStorage.clear();
