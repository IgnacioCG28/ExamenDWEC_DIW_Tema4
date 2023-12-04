import { mostrarResult } from "./main.js";
import { Vehiculo } from "./vehiculo.js";

export class AutomovilDeportivo extends Vehiculo{
    #potenciaMotor

    constructor(marca,modelo, color, añoFabricacion,cilindrada,potenciaMotor){
        super(marca,modelo,color,añoFabricacion,cilindrada);
        this.#potenciaMotor = potenciaMotor
    }

    mostrarDatos(){
        super.mostrarDatos();
        const texto = `La potencia motor es ${this.#potenciaMotor}`
        mostrarResult(`${texto}`)
    }

    activarModoDeportivo(){
        const transformer = "Modo deportivo activado";
        return mostrarResult(transformer)
    }

    getPotenciaMotor(){
        return this.#potenciaMotor
    }
    setPotenciaMotor(value){
        this.#potenciaMotor = value
    }
}