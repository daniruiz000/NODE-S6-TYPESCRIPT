// NUMBER 
let numeroEntero : number = 10
const numeroDecimal : number = 2.5
const numeroNegatibos : number = -4

/*
Typescript infiere los tipos de las variables aunque no se declare.
 let variable = "hola"
 variable = 45
 */


 // String
// Admite "",'',``
 const miTexto : string = "Hola amigos"
 const miTextoDos : string = 'Hola amigos'
 const miTextoTres : string = `Hola amigos ${numeroDecimal}`


 // Boolean

 const isSunday : boolean = false
 const isFriday : boolean = true

 /* Valores no definidos: 
 Dejamos que infiera el tipo.
 Es mejor dejar definido el tipo aunque no tenga mos el valor.
 */
 let miValor: string // valor undefined
 miValor = "Ya tengo valor"


 // ANY
 /* Cuando declaramos una variable sin asignarle ningun valor,
  le infiere un tipo any (puede ser cualquier tipo. Mala praxis)
  No aporta nada si estamos usando typescripe.
  */
 
 let pruebaAny : any = 123
 pruebaAny = "Ahora tiene un string"
 pruebaAny = false

 //OBJETOS
// No se tipan las claves del objeto, aunque el infiere los tipos de dichas claves.

const address : object ={ street: "calle false", num: "123"}

//ARRAY
/*Dos maneras :
Indicamos el tipo que deben de tener los elementos del array.
*/
 
const coches :string[] = ["audi", "ferrari", "ford"]

const ciudades : Array<string> = ["Madrid", "Valencia", "Barcelona"]

console.log(coches[1])

const notas : number[] = [7,8,9]