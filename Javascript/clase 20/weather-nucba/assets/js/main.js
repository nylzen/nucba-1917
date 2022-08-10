// Tenemos que traernos los elementos del html que necesitemos
const form = document.getElementById('form');
const cityInput = document.querySelector('.search-input');
const cardContainer = document.querySelector('.card-container');
const waitMsg = document.querySelector('.wait');

// Convertir Kelvin a Celsius
const convertCelsius = kelvin => {
  celsius = Math.round(kelvin - 273.15);
  return celsius;
};

// Tenemos que crear el array para guardar las ciudades
let cities = JSON.parse(localStorage.getItem('cities')) || [];

// Tenemos que crear la funcion para guardar en el localstorage
const saveLocalStorage = citiesList => {
  localStorage.setItem('cities', JSON.stringify(citiesList));
};

// Funcion para renderizar html ciudad
const renderCity = city => {
  const imageName = city.weather[0].icon;
  return `
  <div class="card-clima animate">
  <i class="fa-solid fa-x close" data-id="${city.id}"></i>
  <div class="clima-info">
    <h2 class="info-title">${city.name}</h2>
    <p class="info-subtitle">${city.weather[0].description}</p>
    <div class="info-temp">
      <span class="temp">${convertCelsius(city.main.temp)}°</span>
      <span class="st">${convertCelsius(city.main.feels_like)}° ST</span>
    </div>
  </div>
  <div class="clima-img">
    <img src="./assets/img/${imageName}.png" alt="" />
  </div>
  <div class="clima-temp">
    <div class="clima-max-min">
      <span class="clima-max"
        ><i class="fa-solid fa-arrow-up-long"></i>Max: ${convertCelsius(
          city.main.temp_max
        )}</span
      >
      <span class="clima-min"
        ><i class="fa-solid fa-arrow-down-long"></i>Min: ${convertCelsius(
          city.main.temp_min
        )}</span
      >
    </div>
    <span class="clima-humedad">${city.main.humidity}% Humedad</span>
  </div>
</div> 
  `;
};

const renderCitiesList = citiesList => {
  cardContainer.innerHTML = citiesList.map(city => renderCity(city)).join('');
};

// Funcion para buscar ciudad
const searchCity = async e => {
  e.preventDefault();
  //   Capturamos el valor del input
  const searchedCity = cityInput.value.trim();
  //   console.log(searchedCity);
  if (searchedCity === '') {
    alert('Por favor ingresa una ciudad');
    return;
  }

  //   Vamos a pasarle el valor del input a la funcion requestCity
  const fetchedCity = await requestCity(searchedCity);
  //   Alerta por si no existe ninguna ciudad con ese id
  if (!fetchedCity.id) {
    alert('La ciudad ingresada no existe');
    form.reset();
    return;
  } else if (cities.some(city => city.id === fetchedCity.id)) {
    alert('Ya estamos mostrando el clima de esa ciudad');
    form.reset();
    return;
  }
  console.log(fetchedCity);
  cities = [fetchedCity, ...cities];
  renderCitiesList(cities);
  saveLocalStorage(cities);
  hideWaitMsg(cities);
  form.reset();
};

// Funcion para eliminar una ciudad
const removeCity = e => {
  if (!e.target.classList.contains('close')) return;
  const filterId = Number(e.target.dataset.id);
  if (window.confirm('¿Estas seguro que queres eliminar esta card de clima?')) {
    cities = cities.filter(city => city.id !== filterId);
    renderCitiesList(cities);
    saveLocalStorage(cities);
    hideWaitMsg(cities);
  }
};

// Vamos a hacer una funcion para ocultar el Ingrese una ciudad cuando ya tengamos una ciudad en el array
const hideWaitMsg = citiesList => {
  if (citiesList.length !== 0) {
    waitMsg.classList.add('hidden');
    return;
  }
  waitMsg.classList.remove('hidden');
};

// Funcion General para llamar todo
const init = () => {
  renderCitiesList(cities);
  hideWaitMsg(cities);
  form.addEventListener('submit', searchCity);
  cardContainer.addEventListener('click', removeCity);
};

init();
