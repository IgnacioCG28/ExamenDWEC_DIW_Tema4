import { Vehiculo } from "./vehiculo.js";
import{ AutomovilDeportivo} from "./AutomovilDeportivo.js"

// Que aparezca por pantalla
const resultContainer = document.createElement("div");
document.body.appendChild(resultContainer);

export function mostrarResult(text) {
  resultContainer.innerHTML += `<p>${text}</p>`;
}


// Vehiculo
const vehiculo1 = new Vehiculo("BMW", "CLK", "Rojo", 1992, 2400);
mostrarResult("<h2>Vehiculo 1</h2>")
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

//Deportivo

const deportivo1 = new AutomovilDeportivo("Ferrari", "Spider", "Amarillo", 2020, 4000 , 500);
mostrarResult("<h2>Deportivo 1</h2>")
deportivo1.mostrarDatos()
deportivo1.arrancar()
deportivo1.activarModoDeportivo()
deportivo1.acelerar(140)
deportivo1.frenar()

