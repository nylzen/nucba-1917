// Traernos los elementos necesarios
const tbody = document.querySelector('tbody');
const prevBTN = document.querySelector('.left');
const nextBTN = document.querySelector('.right');
const pageNumber = document.querySelector('.page-number');
const form = document.querySelector('.form');
const searchInput = document.querySelector('.input-search');
const top100 = document.querySelector('.top-btn');
const btnContainer = document.querySelector('.pagination');

// Funciones para formatear.
// Funcion para formatear numeros a USD, queremos tener digitos de 3 en 3
const formatearNumeros = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// Funcion para formatear el numero a Millones, miles,etc eetc etc
const nFormatter = (num, digits) => {
  const symbol = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'MM' },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let item = symbol
    .slice()
    .reverse()
    .find(item => {
      return num >= item.value;
    });

  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
};

// Funcion para Retornar el html
const renderCoin = coin => {
  // Desestructuramos el objeto
  const {
    rank,
    market_cap_usd,
    name,
    symbol,
    price_usd,
    volume24,
    percent_change_24h,
    percent_change_7d,
  } = coin;
  return `
  <tr>
    <td>#${rank}</td>
    <td class="coin-title">${name} (${symbol.toUpperCase()})</td>
    <td>$${formatearNumeros(price_usd)}</td>
    <td>$${nFormatter(market_cap_usd)}</td>
    <td>$${nFormatter(volume24)}</td>
    <td><span class="${
      percent_change_24h < 0 ? 'down' : 'up'
    }">${percent_change_24h}</span></td>
    <td><span class="${
      percent_change_7d < 0 ? 'down' : 'up'
    }">${percent_change_7d}</span></td>
  </tr>
  `;
};

// Funcion para renderizar las monedas
const renderCoins = (coins, current) => {
  if (!coins.length) {
    tbody.innerHTML = `<h1>No se encontraron resultados, realice una nueva busqueda ...</h1>`;
    top100.classList.remove('hidden');
    btnContainer.classList.add('hidden');
    form.reset();
    return;
  }

  //   Si encuentra, aparece la paginacion y mapeamos las monedas en la posicion del arr que esta ahora
  btnContainer.classList.remove('hidden');
  tbody.innerHTML = coins[current].map(renderCoin).join('');
};

// Funcion para deshabilitar prev
// Checkear si prev es null o no, si es null, deshabilita el boton
const disablePreviousBTN = prev => {
  if (prev === null) {
    prevBTN.classList.add('disabled');
  } else {
    prevBTN.classList.remove('disabled');
  }
};

// Funcion para deshabilitar el next
// Checkear el total de paginas, si es igual a la pagina actual, deshabilita el boton
const disableNextBTN = (next, total) => {
  if (next === total) {
    nextBTN.classList.add('disabled');
  } else {
    nextBTN.classList.remove('disabled');
  }
};

// Funcion para resetear el objeto de las monedas
const resetCount = coins => {
  prev = coins.prev;
  current = coins.current;
  next = coins.next;
  total = coins.total;
  results = coins.results;
};

// Funcion para cargar las monedas
const loadCoins = async e => {
  e.preventDefault();
  const searchedValue = searchInput.value.trim();
  let coins = await requestCoins(searchedValue);
  // Reseteamos la cuenta
  resetCount(coins);

  //   Si hay un valor en el searchInput, mostramos el boton, si no lo ocultamos
  if (searchedValue) {
    top100.classList.remove('hidden');
    form.reset();
  } else {
    top100.classList.add('hidden');
  }

  //   Page number es el numero de pagina que se va a mostrar en el html, le pasamos el numero de pagina actual (current) + 1, por que +1?
  pageNumber.innerHTML = current + 1;
  renderCoins(results, current);
  disablePreviousBTN(prev);
  disableNextBTN(next, total);

  // addEventListener para el boton next
  nextBTN.addEventListener('click', e => {
    e.stopImmediatePropagation();
    // Si next es igual a total, no hace nada. Por que? Porque no quiero que avance.
    if (next === total) return;
    // Convertimos prev en la pagina actual
    // Current pasa a ser next y a next le sumamos uno
    // Cuando llamemos de nuevo va a agarrar el current que va a cambiar por el siguiente arr. Acuerdense que estos valores son de la funcion que esta en request.
    prev = current;
    current = next;
    next += 1;

    // Ahora renderizamos de nuevo, porque estamos cambiando de "pagina" (arr)
    renderCoins(results, current);
    pageNumber.innerHTML = current + 1;
    // Checkeamos de nuevo el estado de los botones prev y next. (Para saber si tiene que deshabilitar o no el boton)
    disablePreviousBTN(prev);
    disableNextBTN(next, total);
  });

  // addEventListener para el boton prev
  // Esta funcion va a hacer lo contrario a next.
  prevBTN.addEventListener('click', e => {
    e.stopImmediatePropagation();
    if (prev === null) return;
    // Primero le restamos uno a current para bajar en la pagina (el arr anterior)
    current -= 1;

    // En prev vamos a checkar que si es 0 va a ser null y si no le restamos uno
    prev = prev === 0 ? null : prev - 1;
    // Next restamos 1
    next -= 1;

    // Renderizar
    renderCoins(results, current);
    // El pageNumber es + 1, porque arriba ya le restamos
    pageNumber.innerHTML = current + 1;

    // Checkear el estado de los botones prev y next
    disablePreviousBTN(prev);
    disableNextBTN(next, total);
  });
};

// Funcion para mostrar el top 100
// const showTop100 = () => {
//   loadCoins();
// };

// Funcion principal
const init = () => {
  window.addEventListener('DOMContentLoaded', loadCoins);
  form.addEventListener('submit', loadCoins);
  top100.addEventListener('click', loadCoins);
};

init();
