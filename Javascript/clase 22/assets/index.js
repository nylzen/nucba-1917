// Traernos lo que necesitemos del html

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const caja = document.querySelector('#caja');
const loader = document.querySelector('.pokeballs-container');

// Definir una variable 'isFetching' para acativarla cuando estemos haciendo una llamada. Y un objeto que va almacenar la siguiente llamada a la api, en un principio va a ser null, porque todavia no hicimos ninguna llamada a al  api
let isFetching = false;
const nextURL = {
  next: null,
};

const fetchPokemons = async () => {
  isFetching = true;
  const res = await fetch(`${baseURL}?limit=8&offset=0`);
  const data = await res.json();
  isFetching = false;
  console.log(data);
  return data;
};
fetchPokemons();
function init() {}
init();
