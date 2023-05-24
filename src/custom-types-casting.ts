/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* ----------------------- TIPO CUSTOM -------------------------------

Para tener una lista de valores controladosen un tipado.
Al crear el tipado con type indicamos que el tipado Country tiene que tener un valor controlado dentro de la lista de valores que le pasamos separados por or. */

type Country = "Spain" | "Portugal" | "Germany"

const myCountry: Country = "Spain"
console.log(`Mi país es ${myCountry}`)
console.log(typeof myCountry)

// ------------------------- ENUMERADOS -----------------------------------------------------

// ENUMERADOS:
// Es un mapa de CLAVE/VALOR.
// Es otra manera de tener una lista de valores controlados.

enum Direction {
  UP = "ARRIBA", // La propiedad sería el nombre interno y el valor lo que se muestra al usuario.
  DOWN = "ABAJO",
  LEFT = "IZQUIERDA",
  RIGHT = "DERECHA"
}

//  Indicamos que la variable tendrá un tipado Country con el valor de Country.UP.

const myDirection: Direction = Direction.UP
console.log(`Mi dirección es ${myDirection}`)
console.log(typeof myDirection)

// --------------------------- CASTING (CAMBIO DE TIPADOS EN TS) -----------------------------------------

const a: number | string = 10 // Tmbien está permitido decirle que puede tener más de un tipo definido.
let b: any = "5" // ANY porque cambiara de string a number
let result: any = a + b
console.log(result)
console.log(typeof result)

b = parseInt(b)
result = a + b
console.log(result)
console.log(typeof result)

b = b.toString()
result = a + b
console.log(result)
console.log(typeof result)

/* Ejemplo de AS
Indica que una variable se tomará como tipo diferente.
Sólo para desarrollo.

El tipo uknown indica que el tipo de la variable pasa a ser desconocido.

*/

const miCadena: string = "Hola amigos"
const miNumero: number = miCadena as unknown as number
console.log(miNumero)
console.log(typeof miNumero) // no cambia el js es sólo para desarrollo
