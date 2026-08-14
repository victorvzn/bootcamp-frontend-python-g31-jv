let numeroActual = '0'
let operador = ''
let operando = ''

// Consultar un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')
// console.log({inputDisplay})
// Consultar multiples elementos a la vez
const buttons = document.querySelectorAll('.button')
console.log(buttons)

// EVENTOS

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    console.log('Hice click!')
  })
})
