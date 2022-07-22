// Variables para la pagina
const baseURL = 'https://pokeapi.co/api/v2';
const caja = document.querySelector('#caja');

const cantidadPokemones = 25;

// Hagamos un bucle para obtener los primeros 15 pokemones de la api
const fetchPokemones = async () => {
  for (let i = 1; i <= cantidadPokemones; i++) {
    await getPokemon(i);
  }
};

// Crear la funcion para traernos un pokemon por id
const getPokemon = async (id) => {
  try {
    // Hagamos fetch a la api de poke
    const response = await fetch(`${baseURL}/pokemon/${id}`);
    // console.log(response); Esto tira error de cors
    const data = await response.json();
    // console.log(data); Testeamos de que todo ande OK
    pintarPoke(data);
  } catch (error) {
    console.log(`Tenes un error ${error}`);
  }
};

const pintarPoke = (pokemon) => {
  // creamos un div para el poke
  const div = document.createElement('div');
  div.classList.add('poke');
  console.log(pokemon);
  //   Vamos a desestructurar el objeto para obtener lo que necesitamos
  const { id, name, sprites, height, weight, types } = pokemon;
  //   crear el html para el poke
  const pokeInnerHtml = `
    <img src="${sprites.front_default}"/>
    <h2>${name}</h2>
    <span>EXP: ${pokemon.base_experience}</span>
    <div class="tipo-poke">
        ${types
          .map((tipo) => {
            return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
          })
          .join('')}
    </div>
    <p class="id-poke">#${id}</p>
    <p class="height">Height:${height}</p>
    <p class="weight">Weight:${weight}Kg</p>
  `;
  //   Agregar este html al div
  div.innerHTML = pokeInnerHtml;
  caja.appendChild(div);
};

fetchPokemones();
