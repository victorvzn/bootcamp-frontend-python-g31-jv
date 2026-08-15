const taskInput = document.getElementById('task-input')
// const taskInput = document.querySelector('#task-input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// EVENTOS
// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón 'Añadir tarea'
  console.log('Click!!!', taskInput.value)

  // TODO: 01 - Añadir el elemento li al elemento con la clase task__list
  const li = document.createElement('li')

  // TODO: 01 Añadir un checkbox al li

  // TODO: 02 - Añadir el elemento span al elemento li con el texto de la caja taskInput
  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  //TODO: 03 Añadir el elemento button al elemento li

  taskList.appendChild(li)

  // MANEJO DEL DOM: Forma de crear elementos dinámicamente con el DOM de Javascript
  // const button = document.createElement('button')
  // console.log({ button })
  // button.textContent = 'Hola soy un botón'
  // document.body.appendChild(button)
})