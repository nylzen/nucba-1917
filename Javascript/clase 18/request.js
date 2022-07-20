// GET (Obtener), POST(Crear/subir), DELETE(borrar), PUT(editar)

// Peticiones a reqres.in
// creamos una variable de url base
const baseURL = 'https://reqres.in';
const caja = document.getElementById('caja');

const getRequest = async () => {
  // Hicimos una variable para almacenar la respuesta
  //   Usamos fetch, que es el metodo que trae javascript para hacer peticiones a los backend, lo trae por defecto js
  const response = await fetch(`${baseURL}/api/users?page=1`);

  //  consoleemos la respuesta, esto nos da error de cors
  //   console.log(response);

  //   A la respuesta la vamos a pasar a json, tiene que ser await porque tiene que esperar la respuesta
  const json = await response.json();
  //   console.log(json.data);

  //   Pintar esto en el html
  json.data.forEach((person) => {
    console.log(person);
    const h3 = document.createElement('h3');
    const text = `Id: ${person.id}, name: ${person.first_name}, lastName: ${person.last_name}`;
    h3.innerText = text;
    caja.appendChild(h3);
  });
};

getRequest();
