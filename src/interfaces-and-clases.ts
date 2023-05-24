


/*---------------------- INTERFACE ----------------------------

Las Interface nos ayudan a controlar mejor el tipado de nuestros objetos y también de las claves que los componen
Podemos crear formatos específicos de objetos.

- Declaramos nuestra interface:
Se declara con la palabra reservada interface y el nombre de la interface a continuación en mayúsculas.
Definimos las propiedades qy¡ue debe tener y el tipo de estas.

interface Nombreinterface {clave1: string, clave2: number, clave3 : string}


- Añadimos como tipo esa interface a los objetos que deseemos que cumplan ese tipado.

const objetoEjemplo : Nombreinterface ={clave1: "Calle falsa", clave2:5, clave3: "Mdarid"} 


*///Ejemplo:

interface Address {
    street: string,
    number: number,
    city: string
}

const myAddress : Address ={street: "Calle falsa", number:5, city: "Madrid"} 

//Se pueden anidar interface como clave de otra interface.

interface Person {
    name: string,
    phone: number,
    address: Address //   Interface anindada
}

const person : Person ={
    name: "Dani",
    phone:5464645,
    address:{
        street: "Calle ",
        number: 6546,
        city: "Madrid"
    }
}




/*---------------------- CLASE ----------------------------




*/

class Animal {
    public specie: string
    public legs: number
    private habitat: string

    constructor(specie:string, legs: number, habitat: string){
        this.specie = specie,
        this.legs = legs,
        this.habitat = habitat

        console.log("creado animal")
    }

    getDescription(){
        console.log(`Soy un ${this.specie}, tengo ${this.legs} patas y vivo en ${this.habitat}`)
    } 
}

const perro = new Animal("Perro", 4, "Mi casa")

const pez = new Animal("Pez", 0, "Pecera")

perro.getDescription()

pez.getDescription()

console.log(`El perro es de la especie ${perro.specie}`)
// console.log(`El perro vive en ${perro.habitat}`)


//----------------------------------------

//Clases que cumplen interface

interface Automobile {
    wheels: number;
    brand: string;
    model: string;
}
  
class Car implements Automobile {
    public wheels: number;
    public brand: string;
    public model: string;

    constructor(brand: string, model: string,wheels: number = 4) {
        this.model = model
        this.brand = brand,
        this.wheels = wheels
    }
}
  

const coche = new Car("lexus", "ct200")
console.log(`El lexux tiene ${coche.wheels} ruedas`)

const limo = new Car ("limusine", "524", 6)
console.log(`La limo tiene ${limo.wheels} ruedas`)