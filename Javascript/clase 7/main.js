// function saludar(nombre) {
//   console.log(`Hola ${nombre}`);
// }

// function procesarEntradaUsuario(saludar) {
//   let nombre = prompt("Por favor pone tu nombre");
//   saludar(nombre);
// }

// procesarEntradaUsuario(saludar);

// function crearDicho(dicho, callback) {
//   let miDicho = `Como les digo siempre: ${dicho}`;
//   callback(miDicho);
// }

// function logDicho(dicho) {
//   console.log(dicho);
// }

// crearDicho("estudien javascript", logDicho);

// const names = ["Facu", "Maxi", "Nahue"];

// names.forEach((name) => {
//   console.log(name);
// });

// Lo que hace aca esta funcion como callback, es que se completa en el forEach cuando accede a un elemento del array.

// Metodos de array
const peliculas = [
  {
    id: 1,
    title: "Volver al futuro",
    image: "https://img.com/1",
    tags: ["ficcion", "aventura"],
  },
  {
    id: 2,
    title: "Tiempos violentos",
    // image: "https://img.com/2",
    tags: ["accion", "drama"],
  },
  {
    id: 3,
    title: "Jurassic Parque",
    image: "https://img.com/3",
    tags: ["ficcion", "aventura"],
  },
  {
    id: 4,
    title: "Harry Potter",
    image: undefined,
    tags: ["ficcion", "fantasia"],
  },
];

// Quiero usar un metodo que busque
// Metodo Find
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

// console.log(peliculas.find((pelicula) => pelicula.id === 1));

// Metodo includes y some
// Includes: Determina si un array incluye un determinado elemento, devuelve true o false
// Some: Comprueba si al menos un elemento del array cumplia con una condicion

// console.log(peliculas.some((pelicula) => pelicula.tags.includes("ficcion"))); // Devuelve true

// Combinamos metodo find + includes, nos devuelve un solo elemento, el primero que cumple con la condicion
// console.log(peliculas.find((pelicula) => pelicula.tags.includes("ficcion")));

// Metodo every
// Lo que hace el metodo every, es que comprueba si se cumple la condicion en todos los elementos, devuelve true o false

// console.log(peliculas.every((pelicula) => pelicula.tags.includes("aventura")));

// Metodo filter
// Este metodo devuelve todo lo que cumpla la condicion
// console.log(peliculas.filter((pelicula) => pelicula.tags.includes("ficcion")));

// console.log(peliculas.filter((pelicula) => pelicula.image !== undefined));

// Metodo Map
// Devuelve un array con lo que le pedimos
// console.log(peliculas.map((pelicula) => pelicula.title));

// Otro ejemplo con map.

// const navbar = ["Home", "Nosotros", "Contacto"];
// const navbarConMap = navbar.map((item) => `<li>${item}</li>`);
// console.log(navbarConMap);

// findIndex
// Devuelve el indicide del primer elemento que cumple con la condicion.

// console.log(peliculas.findIndex((pelicula) => pelicula.id === 4));

// flat
// Crea un nuevo array con todos los elementos de un sub-array.

// const arrayConSubArray = [1, 2, 3, [4, 5, 6]];
// console.log(arrayConSubArray.flat());
// console.log(arrayConSubArray);

// sort()
// Ordena los elementos de un array y despues nos devuelve ese array ordenado.

// let numbers = [0, 1, 2, 3, 10, 20, 30];
// console.log(numbers.sort());

// pop()
// Elimina el ultimo elemento de un array y lo devuelve. Este metodo cambia la longitud del array

const array = ["pizza", "hamburguesa", "asado", "empanadas"];
// console.log(array.pop());
// console.log(array);
// array.pop();
// console.log(array);

// shift()
// Este metodo borra el primer elemento de un array, tambien modifica la longitud del array

// console.log(array.shift());
// console.log(array);

// Reverse
// Este metodo invierte el orden del array
// console.log(array.reverse());

// unshift()
// Agrega uno o mas elementos al principio del array
// const array1 = [1, 2, 3];
// console.log(array1.unshift(4, 5));

// console.log(array1);

// Arrays
//A. Devolver solo un array
// mes1.concat(mes2)

//B. Devolver de febrero hasta abril
// mes1.slice(1,4)

//C. Devolver un array que solo tenga los meses con mas de 4 letras
// mes1.filter(mes => mes.length > 4)

// Strings
// let dias= "lunes, martes, miércoles, jueves, viernes";
//A. Traer la longitud del string
// dias.length; Nos devuelve 41

//B. String a mayusculas
// dias.toUpperCase() // nos devuevle LUNES,MARTES,MIERCOLES,JUEVES,VIERNES

//C. Reemplazar todas las comas por guion medio
// let re = /,/gi;
// let sinComas = dias.replace(re, "-");
// console.log(sinComas);

//D. Devolver un array y que cada elemento de ese array sea un dia
// dias.split(',')

// Los metodos que mas vamos a usar
/*
- length()
- every()
- filter() => Muy usado
- find() => Muy usado
- findIndex()
- some()
- map() => Muy usado
- forEach()
- join()
*/
