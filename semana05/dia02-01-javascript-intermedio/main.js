// console.log('Hola JS!')

// TIPOS DE DATOS PRIMITIVOS (Number, String, Boolean, null, undefined, BigInt, Symbol)

// TIPOS DE DATOS NO PRIMITIVOS Arrays(Arreglos), Objects(Objetos), Function, etc

// ARRAYS

// Un arreglo puede contener elementos de cualquier tipo: cadena, números, booleans, null, arrays, objetos, etc)

// DECLARACIÓN

const arregloVacio = []
const listaDeNumeros = [25, 36, 89, -99, 15.60]
const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', 'Código', true, null, undefined]

console.log(arregloVacio)
console.log(listaDeNumeros)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[3]) // Victor
console.log(listaDeValores[3] + ' ' + listaDeValores[4]) // VictorVillazón
console.log(listaDeValores[5]) // Código
console.log(listaDeValores[99]) // undefined

// Escritura en un arreglo

listaDeValores[3] = 'Jhoel'
listaDeValores[7] = 1689

console.log(listaDeValores)

Object.freeze(listaDeValores)
listaDeValores[8] = 'Hola a todos'
console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo al final (push)

const listaDeNombres = ['Daril', 'Jhoel']

console.log(listaDeNombres)

listaDeNombres.push('Victor')
listaDeNombres.push('Carlos')

console.log(listaDeNombres)

// Remover elementos del final de un arreglo (pop)

listaDeNombres.pop()
listaDeNombres.pop()

console.log(listaDeNombres)

// Insertar un elemento en una posición determinada

listaDeNombres.splice(0, 0, 'CÓDIGO')
listaDeNombres.splice(2, 0, 'TECSUP')

console.log(listaDeNombres)

// Eliminar un elemento en un posición determinada

listaDeNombres.splice(2, 1)

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length) // 3
console.log('bienvenido'.length) // 10

// Obtener el último elemento del arreglo

console.log(listaDeNombres[3 - 1]) // Jhoel
console.log(listaDeNombres[listaDeNombres.length - 1]) // Jhoel
console.log(listaDeNombres.at(0)) // CÓDIGO
console.log(listaDeNombres.at(-1)) // Jhoel
console.log(listaDeNombres.at(-2)) // Daril

// TODO: Otras funciones - slice (Investiguen)

// MÉTODOS DE ARREGLOS (INCLUDES, FILTER, MAP, SORT, FOREACH, REDUCE)