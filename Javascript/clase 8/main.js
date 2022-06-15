// EJERCICIO 1
// Devolver un string pero reverse
/*
1. Necesitamos convertir el string a un array
2. Ese array darlo vuelta
3. y despues convertirlo en un string
 */

function reverseString(str) {
  // Convertimos el string que llega por parametro a un array con el metodo de split('')
  let splitString = str.split("");

  // Una vez que tenemos este array, lo damos vuelta con el metodo para arrays .reverse()
  let reverseArray = splitString.reverse();

  // Por ultimo lo pasamos de nuevo a un string usando el metodo .join('')
  let joinArray = reverseArray.join("");
  console.log(joinArray);
}

// reverseString("Hola como andas?");
// output: ?sadna omoc aloH

// Lo mismo pero en funcion flecha

let darVuelta = (str) => str.split("").reverse().join("");

// console.log(darVuelta("Hola como estas?"));

// EJERCICIO 2
// Quiero hacer una funcion que me repita un string n veces
// function repetir(str, n) {
//   return str.repeat(n);
// }

// console.log(repetir("messi", 100));

// Otra solucion de carni
// function repetir(str, veces) {
//   for (let i = 0; i <= veces; i++) {
//     console.log(`el nombre ${str} se repitio ${i} veces`);
//   }
// }
// repetir("messi", 10);

// EJERCICIO 3
// Tomar un booleano y si es true quiero que imprima en consola 'Si' y si es false que imprima 'No'

// function booleanoAPalabra(bool) {
//   // Aca va el code
//   if (bool) {
//     return "Si";
//   } else {
//     return "No";
//   }
// }

// console.log(booleanoAPalabra(true));
// expected output: 'Si'

// Otra forma de escribir esa funcion

function booleanoAPalabra(bool) {
  // Aca va el code
  return bool ? "Si" : "No";
}

// console.log(booleanoAPalabra(10));

// function booleanoPalabra(bool) {
//   return bool ? "si" : "No";
// }
// console.log(booleanoPalabra());

// EJERCICIO 4

// Voy a tener un array de objetos y quiero imprimir todas las personas con nombre y apellido

// const personas = [
//   { nombre: "Nelson", apellido: "Tugores" },
//   { nombre: "Carlitos", apellido: "Tevez" },
//   { nombre: "Lionel", apellido: "Messi" },
//   { nombre: "Cristiano", apellido: "Ronaldo" },
// ];

// // output: Lionel Messi

// personas.forEach((persona) => {
//   //Codigo html
//   /*
//     // En un futuro tranquix
//   <li>${persona.nombre} ${persona.apellido}</li>

//   */
//   console.log(`${persona.nombre} ${persona.apellido}`);
//   // console.log(persona.nombre + " " + persona.apellido);
// });

// EJERCICIO 5
// Teniendo un array, quiero devolver un nuevo array con todos los elementos en mayusculas

let array = [
  "Nemo",
  "Nahuel",
  "Messi",
  "Mundial",
  "Taza",
  "Velador",
  "Eber Ludueña",
];

// El metodo ganador era el map y toUpperCase
let arrayMayus = array.map((elemento) => elemento.toUpperCase());
//Original sin modificaciones
// console.log(array);

//Array en mayus
// console.log(arrayMayus);

// Solucion de diego
let array1 = ["hola", "como", "andas", "gato"];

let toUpper = array1.toString().toUpperCase().split(",");
// console.log(toUpper);
// console.log(array1);

// EJERCICIO 6
// Tengo un array de comidas y quiero imprimir en consola solamente las comidas que tengan mas de 6 letras

let comiditas = [
  "hamburguesa",
  "pizza",
  "huevo",
  "fideos",
  "ensalada",
  "lechuga",
  "asado",
  "guiso",
  "empanadas",
  "locro",
];

// let palabrasMas6 = comiditas.filter((palabra) => palabra.length > 6);
// console.log(palabrasMas6);
//output: hamburguesa, ensalada, lechuga, empanadas

// Solucion de Leo
function analizador(arr) {
  let res = [];
  arr.map((palabra) => {
    palabra.length > 6 && res.push(palabra);
  });
  return res;
}

// console.log(analizador(comiditas));

// Solucion de Carni
// for (comida of comiditas) {
//   if (comida.length > 6) {
//     comida.shift;
//     console.log(comida);
//   }
// }

// Solucion de Facu
// let comidas = [
//   "hamburguesa",
//   "pizza",
//   "huevo",
//   "fideos",
//   "ensalada",
//   "lechuga",
//   "asado",
//   "empanadas",
//   "locro",
// ];
// let seis = [];
// let menos = [];

// let separoComidas = (comidas) => {
//   for (let i = 0; i < comidas.length; i++) {
//     if (comidas[i].length >= 6) {
//       seis.push(comidas[i]);
//     } else {
//       menos.push(comidas[i]);
//     }
//   }
// };

// separoComidas(comidas);
// console.log(`Estos tienen 6 o mas ${seis}`);
// console.log(`Estos tienen menos ${menos}`);

// SOlucion Nahue
// console.log(comiditas.filter((words) => words.length > 6));

// let len6 = [];
// comiditas.forEach((e) => {
//   if (e.length > 6) {
//     len6.push(e);
//   }
// });

// console.log(len6);

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("holissssss estoy tocando el dom");
});
