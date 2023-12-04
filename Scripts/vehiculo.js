
export class Vehiculo{
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
        `;

        mostrarResultado(`${texto}`)
    }

    acelerar(value){
         const speed = `Este vehiculo ha acelerado ${value} km/h`; 
         return speed;
    }

    arrancar(){
        const start = "Este vehiculo ha arrancado"
        return start;
    }

    frenar(){
        const stop = "Este vehiculo ha parado"
        return stop;
    }

    getMarca(){
        return this.#marca
    }
    setMarca(value){
        this.#marca = value
    }
    getModelo(){
        return this.#modelo
    }
    setModelo(value){
        this.#modelo = value
    }
    getColor(){
        return this.#color
    }
    setColor(value){
        this.#color = value
    }
    getAñoFrabricacion(){
        return this.#añoFabricacion
    }
    setAñoFrabricacion(value){
        this.#añoFabricacion = value
    }
    getCilindrada(){
        return this.#cilindrada
    }
    setCilindrada(value){
        this.#cilindrada = value
    }
}