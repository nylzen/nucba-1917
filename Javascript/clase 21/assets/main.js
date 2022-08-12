// Traernos los elementos necesarios
const tbody = document.querySelector('tbody');
const prevBTN = document.querySelector('.left');
const nextBTN = document.querySelector('.right');
const pageNumber = document.querySelector('.page-number');
const form = document.querySelector('.form');
const searchInput = document.querySelector('.input-search');
const top100 = document.querySelector('.top-100');
const btnContainer = document.querySelector('.pagination');

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
    <td>$${price_usd}</td>
    <td>$${market_cap_usd}</td>
    <td>$${volume24}</td>
    <td><span class="${
      percent_change_24h < 0 ? 'down' : 'up'
    }">${percent_change_24h}</span></td>
    <td>${percent_change_7d}</td>
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
    // top100.classList.add('hidden');
  }

  //   Page number es el numero de pagina que se va a mostrar en el html, le pasamos el numero de pagina actual (current) + 1, por que +1?
  // pageNumber.innerHTML = current + 1;
  renderCoins(results, current);
};

// Funcion principal
const init = () => {
  window.addEventListener('DOMContentLoaded', loadCoins);
  form.addEventListener('submit', loadCoins);
};

init();
