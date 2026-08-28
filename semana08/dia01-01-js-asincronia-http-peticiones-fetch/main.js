// OBJETIVO: Consultar información en formato JSON desde un servicio web y su URL

console.log(fetch('https://jsonplaceholder.typicode.com/posts')) // Promise {<pending>} -> DEvuelve una promesa (Promise)

// Estados de una promesa -> pending, fulfilled(OK), rejected (Falló)

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())  // Se ejecuta cuando la respuesta llegó correctamente y además convertimos la respuesta a un objeto JS
  .then(data => {
    console.log(data)
    console.log(data[0])
    console.log(data[0].title)
  })