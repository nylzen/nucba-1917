// Llamamos a los elementos
const caja = document.getElementById('caja');
const loader = document.querySelector('.pokeballs-container');

// Definimos una base URL para la llamada a la api.
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

// Definir una variable isFetching para activarla cuando hagamos una llamada a la api.
let isFetching = false;
// Creamos un objeto donde se va almacenar la siguiente llamada a la api. Arranca en null porque todavia no hicimos ninguna peticion
const nextURL = {
  next: null,
};

//  Funcion para el HTML
const renderPokemon = pokemon => {
  const { id, name, sprites, height, weight, types, base_experience } = pokemon;

  return `
  <div class='poke'>
    <img src="${sprites.other.home.front_default}" alt="poke" />
    <h2>${name.toUpperCase()}</h2>
    <span class='exp'>EXP: ${base_experience}</span> 
    <div class="tipo-poke">
      ${types
        .map(tipo => {
          return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
        })
        .join('')}
    </div>
    <p class="id-poke">#${id}</p>
    <p class="height">Height: ${height / 10}</p>
    <p class="weight">Weight: ${weight / 10} Kg</p>
  </div>
  `;
};

// Funcion con la logica para renderizar
const renderPokemonList = pokeList => {
  const cards = pokeList
    .map(pokemon => {
      return renderPokemon(pokemon);
    })
    .join('');
  caja.innerHTML += cards;
};

// Funcion para traer la data del pokemon.
const fetchPokemons = async () => {
  isFetching = true;
  const res = await fetch(`${baseURL}?limit=8&offset=0`);
  const data = await res.json();
  // console.log(data);
  isFetching = false;
  return data;
};

// Agregar la clase show al loader, le vamos a generar un timeout para que el loader se muestre durante un tiempito(1500ms) y al finalizar ese tiempo, se va a ocultar las pokebolas y se va a renderizar la nueva lista de pokemones

const loadAndPrint = pokemonList => {
  loader.classList.add('show');
  setTimeout(() => {
    loader.classList.remove('show');
    renderPokemonList(pokemonList);
  }, 1500);
};

// Funcion para tener todo mas organizado, aca vamos a meter los addEventListener necesarios
const init = () => {
  // Cuando se cargue el contenido del dom vamos a querer que pasen estas cosas:
  // 1. Se haga la llamada a la api y nos traemos mediante el destructuring los resultados y la url para la proxima llamada que esta en next.
  // 2. Cam,biamos la propiedad del objeto next (que al principio es null), por la variable next que nos trajimos de la data de la llamada a la api
  // 3. Hacemos una variable URLS en la cual almacenamos un array con todas las url de cada objeto que vino en la llamada.
  // 4. Usando un Promise.all, en una constante nueva alamcenamos un nuevo array. En cada posicion de ese array vamos a tener los datos de un pokemon. Porque por cada url hacemos un fetch donde nos traemos toda la data de cada poke.
  // 5. Renderizar los pokemones
  window.addEventListener('DOMContentLoaded', async () => {
    let { next, results } = await fetchPokemons();

    nextURL.next = next;

    const URLS = results.map(pokemon => pokemon.url);
    // console.log(URLS);

    const InfoPokemons = await Promise.all(
      URLS.map(async url => {
        const nextPokemons = await fetch(url);
        return await nextPokemons.json();
      })
    );

    renderPokemonList(InfoPokemons);
  });

  // Cuando scrolleemos queremos que pase:
  // 1. Del documentElement vamos a querer 3 cosas,
  // scrollTop: Obtiene o establece el numero de pixeles que se haya scrolleado hacia arriba.
  // clientHeight: Nos devuelve la altura de un elemento en pixeles
  // scrollHeight: Solo lectura, es una medida de la altura del contenido

  // 2. Cramos una variable bottom en donde nos va a indicar si estamos al final de la pagina. Como sabemos que estamos al final de la pagina? Con la cuenta que hicimos en esa variable. Si la suma entre el valor de desplazamiento hacia arriba y la altura de el viewport es mayor o igual a la altura del elemento -2 (este -2 se puede variar segund cuando queremos que se haga el fetch), significa que estamos abajo de todo.

  // 3. Si estamos al final de la pagina, va a hacer un fetch de nextURL(guarda la siguiente tanda de pokemones que tiene que traer la api.) Y despues repetimos el proceso de cuando se cargo el documento pero este ultimo addEventListener (scroll) en vez de usar la funcion renderPokemonList, usamos la ultima funcion creada que fue loadAndPrint. Por que? Porque queremos que se active el loader.

  window.addEventListener('scroll', async e => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    const bottom = scrollTop + clientHeight >= scrollHeight - 2;

    if (bottom) {
      const nextPokemons = await fetch(nextURL.next);
      const { next, results } = await nextPokemons.json();
      nextURL.next = next;
      // console.log(next);

      const URLS = results.map(pokemon => pokemon.url);

      const infoPokemones = await Promise.all(
        URLS.map(async url => {
          const nextPokemons = await fetch(url);
          return await nextPokemons.json();
        })
      );

      loadAndPrint(infoPokemones);
    }
  });
};

init();
