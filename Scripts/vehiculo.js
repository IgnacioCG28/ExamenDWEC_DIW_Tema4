class Vehiculo{
    #marca;
    #modelo;
    #color;
    #añoFabricacion;
    #cilindrada;

    constructor(marca,modelo,color,añoFabricacion,cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#añoFabricacion = añoFabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        const texto = `
        La marca del vehiculo es ${marca} <br>
        El modelo del vehículo es ${modelo} <br>
        El color del vehículo es ${color} <br>
        El año de fabricación es ${cilindrada}<br>
        `
    }

    acelerar(value){
         const speed = `Este vehiculo ha acelerado ${value} km/h`; 
         return speed;
    }

    arrancar(){
        const start = `Este vehiculo ha arrancado`
        return start;
    }

    
}