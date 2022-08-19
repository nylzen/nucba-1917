// Primero vamos a llamar a la api
const requestCoins = async value => {
  const baseURL = 'https://api.coinlore.net/api/tickers/?start=0&limit=100';

  const response = await fetch(baseURL);
  const json = await response.json();
  const data = json.data;

  // console.log(data);
  //   1er paso es traernos todas las monedas (100 en este caso)
  //   2do paso en donde pueden pasar dos cosas:
  //   1 Que querramos las 100 monedas o 2. Que querramos buscar una moneda puntual (el search input)
  //   Guardar esto en un resultado (results) y pueden pasar las 2 cosas de arriba, que traiga el valor que buscamos o si no, que nos muestre las 100 monedas divididas en arrs de 10
  const results = value
    ? chunkArrayInGroups(
        data.filter(coin =>
          coin.name.toLowerCase().includes(value.toLowerCase())
        ),
        10
      )
    : chunkArrayInGroups(data, 10);

  // Vamos a retornar un objeto
  //   Por un lado vamos a retornar el result de arriba (o el filtro o las 100)
  //   total: el total basicamente es el largo del arr de results
  //   current: arranca en 0 porque es el primer arr de results
  //   prev: es null porque no podemos tener la pagina 0
  //   next: Es el siguiente arr de resultas en la siguiente posicion del arr current
  return {
    results: results,
    total: results.length,
    current: 0,
    prev: null,
    next: 1,
  };
};

// requestCoins();

// Esta funcion se va encargar de hacer los grupitos de 10
// Recibe un arr (los de la api) y el tamaño max de elementos que va a tener cada grupo

const chunkArrayInGroups = (arr, size) => {
  // Creamos un arr vacio donde vamos a guardar cada grupo
  let chunk = [];
  //   Iniciamos en 0, el length del arr equivale a los 100 que trae la api y el i += size va a ser el loop que recorre el arr
  for (let i = 0; i < arr.length; i += size) {
    // Pusheamos al arr el tramo de el indice del loop (i) hasta el valor size + el indicador (i)
    // Acuerdense que el slice trae de un principio a un final no incluido, por eso tenemos que sumar
    chunk.push(arr.slice(i, i + size));
  }

  //   Retornamos el arr
  console.log(chunk);
  return chunk;
};
