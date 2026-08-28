// OBJETIVO: Consultar información en formato JSON desde un servicio web y su URL

console.log(fetch('https://jsonplaceholder.typicode.com/posts')) // Promise {<pending>} -> DEvuelve una promesa (Promise)

// Estados de una promesa -> pending, fulfilled(OK), rejected (Falló)

fetch('https://jsonplaceholder.typicode.com/posts')
  