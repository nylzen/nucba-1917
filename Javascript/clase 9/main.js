// Nos muestra todo el documento
// console.log(document);

//Acceder a un elemento por su id con getElementById()
// Bueno, quiero guardar en una variable logo...
// Che, del documento traeme el elemento que tenga el id logo
const logo = document.getElementById("logo");
const div = document.getElementById("header");
// console.log(logo.innerHTML);
// console.log(div.innerHTML);

//Acceder a un elemento por su clase con getElementsByClassName)
const logoClase = document.getElementsByClassName("logo");
// basicamente es lo mismo que tengamos un array, accedemos de la misma forma
let array = [1, 2];
// console.log(array[0]);
// console.log(logoClase);

// Tambien podemos iterar de la misma forma que veniamos haciendo antes
// for (let i = 0; i <. logoClase.length; i++) {
//   console.log(logoClase[i].innerHTML);
// }

//Acceder a un elemento por su etiqueta con getElementsByTagName()
const pTag = document.getElementsByTagName("p");
// console.log(pTag);
// console.log(pTag[1]);

//Acceder al primer elemento que coincida con querySelector()
const aQuery = document.querySelector("#logo");
// console.log(aQuery);
const headerQuery = document.querySelector("#header");
// console.log(headerQuery);

//Acceder a todos los elementos que coincidan con querySelectorAll()
const aAll = document.querySelectorAll("a");
// console.log(aAll[6]);

// Cambiarle el texto al p con la clase p-dinamico
const parrafo = document.querySelector(".p-dinamico");
// console.log(parrafo);
// con console.dir podemos ver todas las propiedades a las que podemos acceder
// console.dir(parrafo);

// Ahora bien, como cambio el texto?
// parrafo.textContent = 'Hola cambie el texto desde JS'

// Podemos agregar etiquetas html
const crearP = document.querySelector(".p-crear");
// console.log(crearP);
// console.dir(crearP);
crearP.innerHTML = "<b>Estoy agregando</b> dentro de parrafo";

/*
1. Nos trajimos del HTML el elemento, en este caso el p con la clase p-crear
2. Usando la prop de innerHTML le dijimos que cree una etiqueta b
3. Esto nos devuelve ese html dentro del parrafo que llamamos
*/

// Ejercicio crear una etiqueta li dentro de ese ul con el id de lista
// 1.Traernos el ul desde el html y guardarlo en una variable
// 2.con esa variable usar la prop de innerHTML
// 3.Crear la etiqueta de li

const lista = document.getElementById("lista");
lista.innerHTML = "<li class='lista'>Holi soy un li desde js</li><li>Hola</li>";

let crearLi = document.querySelector(".lista");
console.log(crearLi);
