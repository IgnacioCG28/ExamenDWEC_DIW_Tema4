import { Vehiculo } from "./vehiculo.js";

class AutomovilDeportivo extends Vehiculo{
    #potenciaMotor

    constructor(modelo, color, añoFabricacion,cilindrada,potenciaMotor){
        super(modelo,color,añoFabricacion,cilindrada);
        this.#potenciaMotor = potenciaMotor
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