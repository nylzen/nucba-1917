// Metodos de string
// let string = "Le dijo 'hola'";
// console.log(string);

// con .length podemos ver la longitud de un string
// console.log(string.length);

// .toUpperCase() / .toLowerCase()
// Este pasa a mayusculas
// console.log(string.toUpperCase());
// Este pasa a Minusculas
// console.log(string.toLowerCase());

// Replace
//Reemplaza un caracter o grupo de caracteres por otro
// let miChocolate = "Aguila AIREADO";
// let resultado = miChocolate.toLowerCase().replace("aguila", "Cofler");

// console.log(resultado);
// console.log(miChocolate);

// .trim()
// El trim lo que hace es borrar los espacios de al principio y al final

// let string = " Hola ";
// console.log(string);
// console.log(string.trim());

// Split
// El metodo split divide el string en un array mediante una separacion

// let nuevoString = "Hola.soy.un.string";
// console.log(nuevoString);

// const resultado = nuevoString.split(".");
// console.log(resultado);

// .substring()
// Devuelve una string que contiene la seccion extraida

// const nuevoString = "Hola soy un string";
// console.log(nuevoString.substring(3, 8));

// .startsWith()
// Nos va indicar si un string empieza con los caracteres o con el caracter que le preguntemos

// console.log(nuevoString.startsWith("Hol"));
// devuelve true
// console.log(nuevoString.startsWith("hol"));
// devuelve false

// .endWith()
// Nos va indicar si un string termina con los caracteres o con el caracter que le preguntemos

// console.log(nuevoString.endsWith("string"));

// .charAt()
// Este metodo devuelve un nuevo string, con el caracter que le pidamos
// console.log(nuevoString.charAt(3));

// Ejemplo usando toLowerCase y startWith
// let stringCombinado = "Yo tambien soy un string";

// let resultadoCombinado = stringCombinado.toLowerCase().startsWith("yo");
// console.log(resultadoCombinado);

// .includes()
// Determina si un string puede ser encontrado en el string, devuelve true o false

// const nuevoString = "Hola soy un string";
// console.log(nuevoString.includes("soy"));
// console.log(nuevoString.includes("Hola"));

/*
Ejercicio
1. Crear una funcion que reciba dos parametros
2. El primer parametro es un string
3. El segundo parametro es un string a buscar dentro del string anterior
4. Si se encuntra, que nos devuelva un console.log diciendo que lo encontro
5. Y si no lo encuentra, que nos diga que no lo encontro
*/

// const miFuncion = (stringUno, stringDos) => {
//   // Normalizamos los strings
//   const stringUnoMayuscula = stringUno.toUpperCase();
//   const stringDosMayuscula = stringDos.toUpperCase();

//   // Guardamos en una variable el resultado del includes
//   const estaEnElString = stringUnoMayuscula.includes(stringDosMayuscula);

//   if (estaEnElString) {
//     console.log(`La palabra "${stringDos}" se encontro en el "${stringUno}"`);
//   } else {
//     console.log(`No encontre la palabra "${stringDos}", proba con otra`);
//   }
// };

// miFuncion("Que ganas de que empiece el mundial", "hola");

// Metodos de Arrays
//Length
// const array = [1, 2, 3, "hola"];
// console.log(array.length);

// toString()
// Convierte un array a un string
// console.log(array.toString());
// console.log(array);

// .push()
// Este metodo nos añade uno o mas elemtnos al final de un array y nos devuelve la longitud del array

// const animales = ["Tigre", "Gato", "Perro"];

// let count = animales.push("Vaca");
// console.log(count);
// console.log(animales);

// .join()
// Junta los elemntos de un array en un string con un separador, el separador se lo especificamos dentro del join
// const arrayString = ["Fuego", "Agua", "Tierra", "Aire"];

// console.log(arrayString.join());
// //Devuelve con una ,
// console.log(arrayString.join(""));
// // Devuelve sin espacios
// console.log(arrayString.join("/"));
// // Devuelve con un / Fuego/Agua/Tierra/Aire

// .concat()
// Este metodo se usa para unir dos o mas arrays. Este metodo no cambia el array original, si no que nos da un array nuevo.
// const array = [1, 2, 3, 4, "array"];

// console.log(array.concat([5, 6, 7]));
// console.log(array);

// .slice()
// Esto nos devuelve una copia de una parte del array dentro de otro array de inicio a fin. El array original no se modifica

// let nombres = ["Pepito", "Pepita", "Carlitos", "Juana"];

// let resultado = nombres.slice(1, 3);
// // devuelve pepita, carlitos
// console.log(resultado);

// .forEach()
// Este metodo ejecuta la funcion indicada una vez para cada elemento del array

// const arrayNumeros = [1, 2, 3, 4, 5, 6];

// arrayNumeros.forEach((valor) => console.log(valor));
// arrayNumeros.forEach((item) => {
//   console.log("Estamos iterando el numero");
//   console.log(item);
// });

// includes()
// Determina si un array incluye determinado elemento, devuelve true o false

// const arrayNumeros = [1, 2, 3, 4, 5];
// console.log(arrayNumeros.includes(8));

// .some()
// Este metodo comprueba si al menos un elemento del array cumple con la condicion que le pasemos, devuelve true o false

// const arrayNumeros = [1, 2, 3, 4, 5, 6];
// console.log(arrayNumeros.some((valor) => valor > 1));

// .filter()
// Crea un nuevo array con todos los elementos que cumplen la condicion

// const arrayNumeros = [1, 2, 3, 4, 5];
// const arrayFiltrado = arrayNumeros.filter((valor) => valor > 3);
// console.log(arrayFiltrado);

// Array de objetos
// const arrayObjetos = [
//   { id: 1, nombre: "Pepito", edad: 20 },
//   { id: 2, nombre: "Ricky", edad: 16 },
//   { id: 3, nombre: "Pipa", edad: 54 },
// ];

// const arrayFiltrado = arrayObjetos.filter((valor) => valor.edad > 18);
// console.log(arrayFiltrado);

// const arrayPalabras = ["Cancun", "Ibiza", "Mar del plata", "Mar chiquita"];

// const arrayFiltrado = arrayPalabras.filter((valor) => valor.includes("Mar"));

// console.log(arrayFiltrado);

// Ejercicio
/*
Array con 10 ingredientes
Crear una funcion que acepte ese array como parametro
Necesitamos pushear los ingredientes pares a un array de pares
Necesitamos pushear los ingredientes impares a un array de impares
Imprimir en consola los ingredientes pares son
*/

let pizza = [
  "harina",
  "salsa",
  "queso",
  "jamon",
  "levadura",
  "morron",
  "aceite",
  "agua",
  "sal",
  "ceboolla",
];

let contarIngredientes = (ingredientes) => {
  let pares = [];
  let impares = [];

  for (i = 0; i < pizza.length; i++) {
    let count = pizza[i].length;

    if (count % 2 === 0) {
      pares.push(pizza[i]);
    } else {
      impares.push(pizza[i]);
    }
  }

  return (
    console.log(`Los ingredientes PARES son ${pares}`),
    console.log(`Los ingredientes IMPRAES son ${impares}`)
  );
};

contarIngredientes(pizza);
