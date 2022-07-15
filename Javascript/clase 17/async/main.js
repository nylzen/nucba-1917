const buttonSubmit = document.getElementById('submit');
const allNames = document.querySelector('#allNames');

// Crear el array con los nombres
let names = ['Nelson', 'Juancito', 'Pepito', 'Pepita'];
// console.log(names[Aca va el numero random que genero el Math.random])

// Vamos a hacer una funcion que elija cualquiera de estos nombres y vamos a hacer que esta funcion tarde.
// Vamos a usar el setTimeOut que hace que espera un tiempo determinado para ejecutar ese bloque de codigo.

// Cuando hablamos de asincronismo estamos hablando de algo que va a tardar, no sabemos cuanto va a tardar, puede ser milesimas o x tiempo (MILENIOS).

const nameSelector = () => {
  // Va a retornar una promesa
  return new Promise((resolve, reject) => {
    // Si queremos retornar un valor OK usamos resolve, si queremos retornar un error usamos el reject
    // Entonces, si esta todo ok va a caer resolve y esto va a ir a la otra funcion en la variable nameValue
    // resolve('hola');
    // Esto nos devuelve hola en la funcion onClick, que es asincrona, si no es asincrona, nos va a devolver un objeto promesa
    // reject('hola');
    // Nos devuelve el error, no nos imprime nada en el html
    setTimeout(() => {
      // Hagamos entonces que devuelva un numero random
      let selectedName = null;
      let randomNumber = Math.floor(Math.random() * 10);
      console.log(randomNumber);
      selectedName = names[randomNumber];
      //   resolve(selectedName);

      //   Por ultimo, podemos hacer que tire un random entre 0 y 10, obviamente como no hay 10 elementos en el array nos tiene que devolver un error (reject)
      if (selectedName) {
        resolve(selectedName);
      } else {
        reject(`No hay nombres en el indice ${randomNumber}`);
      }
    }, 1000);
  });
};

const onClick = async () => {
  // En esta funcion tenemos que esperar un valor (nameValue), le decimos que espere con la palabra await,si guardamos sin usar async nos da un error, porque la palabra await solo esta disponible en funciones asincronas (async), tenemos que decirle a la funcion que va a ser asincrona (async)
  try {
    const nameValue = await nameSelector();

    const tagH4 = document.createElement('h4');
    tagH4.innerHTML = nameValue;
    allNames.appendChild(tagH4);
  } catch (err) {
    // alert(err);
    const error = document.createElement('p');
    error.innerText = err;
    allNames.appendChild(error);
  }
};

buttonSubmit.addEventListener('click', onClick);
