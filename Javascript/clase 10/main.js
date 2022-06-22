// Add event listener desde JS
// 1.Llamamos al elemento
// 2. A ese elemento pasarle el escuchado de evento

const h3Alert = document.getElementById("h3");
// console.log(h3);

// h3Alert.addEventListener("click", () => {
//   alert("Escuchando un evento desde JS");
// });

h3Alert.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
  alert("Escuchando un evento desde JS, pasando una funcion");
}
// const mostrarAlerta = () => {}

// <---------------------------------------------------------->
// Focus/Blur
// 1. Llamar al elemento y guardarlo en una variable
// 2. A ese elemento pasarle el escuchador de evento

const inputBlur = document.getElementById("inputBlur");
// console.log(inputBlur);

// events listeners
inputBlur.addEventListener("focus", focusFunction);
inputBlur.addEventListener("blur", blurFunction);

// Cuando hacemos focus sobre el input hace tal cosa
function focusFunction() {
  // el .style nos agrega el atributo style dentro de la etiqueta html
  inputBlur.style.backgroundColor = "yellow";
  inputBlur.style.padding = "20px";
  // alert("hiciste focus en el input");
}

// Cuando deseleccionemos al elemento
function blurFunction() {
  // Tenemos que sacar los estilos que pusimos en el focus
  inputBlur.style.backgroundColor = "";
  inputBlur.style.padding = "";
}

// <---------------------------------------------------------->
// Change
// 1. Llamamos al elemento
// 2. Le pasamos el evento
const comida = document.getElementById("comida");

comida.onchange = mostrarAlert;

function mostrarAlert() {
  alert("cambie");
}

// <---------------------------------------------------------->
// Create elements
// Creamos un nodo de tipo elemento, en este caso la etiqueta p
let parrafo = document.createElement("p");
// Creamos un nodo de tipo texto con el contenido de Hola Mundo!
let contenido = document.createTextNode("Hola Mundo!");

// Agregamos el nodo texto como hijo del nodo elemento
parrafo.appendChild(contenido);

// Agregamos el nodo elemento como hijo de la pagina
document.body.appendChild(parrafo);

// Mostar y ocultar una imagen
// 1. Llamar a los elementos
// 2. Agregar sus escuchadores de eventos

const image = document.getElementById("img");
const hide = document.getElementById("hide");
const show = document.getElementById("show");

// Agregar events listeners
// Ocultamos la imagen
hide.addEventListener("click", () => {
  // image.classList.toggle("show");
  image.style.display = "none";
});

// Mostramos la imagen
show.addEventListener("click", () => {
  image.style.display = "block";
});

// Hacer un toggle con un solo boton
const toggle = document.getElementById("toggle");
const imgToggle = document.getElementById("imgToggle");

toggle.addEventListener("click", () => {
  imgToggle.classList.toggle("show");
});

// Events Keyboards
const keyBoard = document.querySelector(".keyboard");

// Si mantengo apretada una tecla se imprime
// keyBoard.addEventListener("keydown", (e) => {
//   console.log(e);
// });

// Cuando suelto la tecla se activa el evento
// keyBoard.addEventListener("keyup", (e) => {
//   console.log(e);
// });

keyBoard.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode === 50) {
    alert(`No podes usar ${e.key}`);
    e.preventDefault();
  }
});

// Contador
// 1. Llamamos a los elementos
// 2. Despues escuchador
const resultado = document.getElementById("resultado");
const btnAumentar = document.querySelector(".btn-aumentar");
const btnDisminuir = document.querySelector(".btn-disminuir");
const reset = document.querySelector(".btn-reset");

// Iniciamos una variable de contador que arranque en 0
let contador = 0;

// ejecuto la funcion

btnAumentar.addEventListener("click", () => {
  contador++;
  resultado.innerHTML = contador;
});

btnDisminuir.addEventListener("click", () => {
  contador--;
  resultado.innerHTML = contador;
});

reset.addEventListener("click", () => {
  contador = 0;
  resultado.innerHTML = contador;
  // updateResultado()
});

// Mi resultado (span) tiene hardcodeado un -, quiero que arranque en 0. Crear una funcion que lo haga

// function updateResultado(){}

// Cambiar estilos con js
// Cuando este en negativo muestre rojo y positivo verde
