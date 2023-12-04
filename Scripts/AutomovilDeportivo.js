import { mostrarResult } from "./main.js";
import { Vehiculo } from "./vehiculo.js";

class AutomovilDeportivo extends Vehiculo{
    #potenciaMotor

    constructor(modelo, color, añoFabricacion,cilindrada,potenciaMotor){
        super(modelo,color,añoFabricacion,cilindrada);
        this.#potenciaMotor = potenciaMotor
    }

    mostrarDatos(){
        super.mostrarDatos();
        const texto = `La potencia motor es ${this.#potenciaMotor}`
        mostrarResult(`${texto}`)
    }

    activarModoDeportivo(){
        const transformer = "Modo deportivo activado";
        return transformer;
    }

    getPotenciaMotor(){
        return this.#potenciaMotor
    }
    setPotenciaMotor(value){
        this.#potenciaMotor = value
    }
}