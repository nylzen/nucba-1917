// Obtenemos los elementos necesarios del HTML
const input = document.getElementById('input');
const addTaskBtn = document.getElementById('addTask');
const listTasks = document.getElementById('list-container');

// * Creamos un array vacio en donde vamos a guardar todas las tareas
let tasks = [];

// * Funcion para recuperar la data del localStorage
// Esta funcion basicamente va a ser para que los datos persistan por mas que refresquemos
function recuperarLocalStorage() {
  document.addEventListener('DOMContentLoaded', () => {
    // Obtener los items
    // ! Si lo traemos asi no nos va a imprimir nada y en consola nos va a decir que tasks no es iterable. Esto pasa porque el localStorage nos esta devolviendo un string
    // tasks = localStorage.getItem('tasks');

    // * Solucion
    tasks = JSON.parse(localStorage.getItem('tasks'));
    // Pintar en el html
    createHTML();
  });

  // Crear un addEventListener para borrar las tareas
  listTasks.addEventListener('click', deleteTask);
}
recuperarLocalStorage();

// * Funcion para borrar las tareas
function deleteTask(e) {
  // Buscamos la prop que necesitamos, en este caso tagName, vemos su valor y hacemos un condicional
  // console.dir(e.target.tagName);
  if (e.target.tagName === 'SPAN') {
    // Nos guardamos en una variable el id de la tarea con el metodo de getAttribute
    // Este deleteId nos devuelve un string del data-id, necesitamos que sea un numero
    //! const deleteId = e.target.getAttribute('data-id');
    // console.log(deleteId);

    // * Solucion
    const deleteId = parseInt(e.target.getAttribute('data-id'));
    tasks = tasks.filter((task) => task.id !== deleteId);
    // console.log(tasks);

    //Pintar en el html el nuevo array
    createHTML();
  }
}

// * Ahora tenemos que traernos lo que escribamos en el input cuando hagamos click al boton
addTaskBtn.addEventListener('click', addTasks);

// * Funcion para agregar tareas
function addTasks() {
  // console.dir para ver las props a las que podemos acceder
  // console.dir(input.value);
  const task = input.value;

  //   Si el input esta vacio que nos devuelva un error
  if (task === '') {
    // console.log("error");
    showError('La tarea esta vacia');
    return;
  }

  // Si ya existe en el array que no lo imprima
  if (tasks.some((item) => task === item.task)) {
    alreadyExist('La tarea ya existe');
    return;
  }

  //   Creamos un objeto de tasks donde vamos a guardar dos valores, el task y el id. Para el id vamos a usar Date.now(), que nos muestra esto? Nos muestra todos los milisegundos que pasaron desde el 1 de enero de 1970

  const taskObj = {
    task: task,
    id: Date.now(),
  };

  // Este objeto vamos a agregarlo a nuestro array de tasks, lo vamos a hacer con la prop de spread operator. Que hace el spread operator? Clona el array y le vamos a concatenar el objeto

  tasks = [...tasks, taskObj];

  //   Ejecutamos una funcion para que nos pinte la tarea
  createHTML();

  //   Limpiamos el input
  input.value = '';
}

// * Funcion para pintar las tareas
function createHTML() {
  // Con esto arreglamos el duplicado de tareas
  listTasks.innerHTML = '';
  tasks.forEach((task) => {
    // Crear un elemento li para que vaya dentro del ul
    const li = document.createElement('li');

    // Le pasamos lo que va a tener el li adentro
    li.innerHTML = `${task.task}<span data-id='${task.id}'>X</span>`;

    // Lo pintamos en el html
    listTasks.appendChild(li);
    // console.log(task);
  });

  // * Guardar el array en el localstorage
  // Cada vez que se ejecute la funcion createHTML va a llamar a la funcion sendLocalStorage y esto va a setear todo el localstorage
  sendLocalStorage();
}

// * Funcion para guardar el array en el localstorage
function sendLocalStorage() {
  // Usamos localStorage y llamamos al metodo de setItem, que recibe dos parametros, el primero el nombre de la key con la que queremos guardar en el storage, y el segundo valor lo que queremos guardar
  // ! Esto nos va a guardar en el localStorage [object, object] porque le estammos pasando un objeto para que guarde y el localstorage solo acepta strings
  // localStorage.setItem('tasks', tasks);
  // *Para solucionarlo
  // Tenemos que convertir el objeto a un string, lo arreglamos con el JSON.stringify()
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// * Creamos la funcion para mostrar el error
function showError(error) {
  // Creamos la etiqueta p que nos muestre el error
  const msgError = document.createElement('p');

  //   Tenemos que pasarle el texto que va a tener ese p, en este caso el error
  msgError.textContent = error;

  // Le asignamos una clase de CSS con los estilos del error
  msgError.classList.add('error');

  // Tenemos que agregar ese p dentro del ul
  listTasks.appendChild(msgError);

  // Tenemos un problema, el mensaje de error se queda ahi y no se va, tenemos que hacer que dure 2 o 3 segundos con setTimeOut

  setTimeout(() => {
    msgError.remove();
  }, 2000);
}

// * Funcion para que muestre un mensaje si hay una tarea igual
function alreadyExist(exists) {
  // console.log(exists);
  // Creamos la etiqueta p que nos muestre el error
  const msgExists = document.createElement('p');

  //   Tenemos que pasarle el texto que va a tener ese p, en este caso el error
  msgExists.textContent = exists;

  // Le asignamos una clase de CSS con los estilos del error
  msgExists.classList.add('exists');

  // Tenemos que agregar ese p dentro del ul
  listTasks.appendChild(msgExists);

  // Tenemos un problema, el mensaje de error se queda ahi y no se va, tenemos que hacer que dure 2 o 3 segundos con setTimeOut

  setTimeout(() => {
    msgExists.remove();
  }, 2000);
}

// * Funcion para borrar todas las tareas
function deleteAll() {
  // Vaciamos el array
  tasks = [];
  // Pintamos en el html
  createHTML();
}
