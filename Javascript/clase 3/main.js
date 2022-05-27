// Funciones
// Las funciones nos permitir agrupar varias lineas de codigo en tareas. Con un nombre para que le podamos hacer referencia mas tarde.
/* Tenemos que tener en claro 2 cositas:
- Declarar la funcion
- Ejecutar// llamar a la funcion
*/

// function identificador (parametros){
//   // aca adentro lo que tiene que hacer la funcion
// }
// Declaramos la funcion
// function saludar() {
//   console.log("Hola, soy una funcion");
// }

// Ejecutarla
// saludar();

// Declaramos Funcion con un parametro
// function saludoPersonal(nombre) {
//   console.log(`Hola ${nombre}`);
// }

// saludoPersonal("Nelson");
// saludoPersonal("Pocho");
// saludoPersonal("Otro nombre");

// Funcion con multiples parametros
// function descripcionPersonal(nombre, edad) {
//   console.log(`Hola soy ${nombre}, tengo ${edad} años`);
// }

// // Ejecutamos
// descripcionPersonal("Nelson", 26);
// descripcionPersonal("Juan", 19);

// Funcion con parametro por defecto
// function descripcionPersonal(nombre, edad, carrera = "abogacia") {
//   console.log(`Hola soy ${nombre}, tengo ${edad} años y estudio ${carrera} `);
// }

// // Ejecutamos
// descripcionPersonal("Nelson", 26, "web development");
// descripcionPersonal("Pepito", 23);

// Devolucion de valores
// function sumar(a, b) {
//   return a + b; // Devuelve la suma de a y b
//   // console.log("ya hice la suma");  Al estar despues del return no va a ejecutar este codigo
// }

// Ejecutar
// console.log(sumar(2, 7));
// let resultado = sumar(5, 5);
// resultado = 10, porque estoy guardando el return de la funcion en esa variable
// console.log(resultado);

//* BUCLES / LOOPS / CICLOS

// Estructura del For
// Estructura principal

// for (inicio; condicion; actualizacion) {
//   // lo que tiene que hacer el bucle
// }

// Ejemplo for

//  Un array basicamente es una caja donde podemos guardar varios valores, lo encerramos en [] y cada valor separado por ,
let nuevoArray = ["Auto", "Moto", "Camioneta", "Submarino"];
// console.log(nuevoArray);  imprimimos el array en consola
// console.log(nuevoArray[0]);  imprimimos el primer valor del array
// console.log(nuevoArray.length);  length nos devuelve el tamaño de nuestro array

// for (let i = 0; i < nuevoArray.length; i++) {
//   console.log(nuevoArray[i]);
// }

/*
Bien, analicemos que paso aca.
1. Inicia: creamos la variable i que tiene valor a 0. let i = 0
2. Condicion: Evaluamos la condicion, Preguntamos si i es menor a la longitud del array. i < nuevoArray.length;
3. Si la condicion es false, termina. Si i es mayor al array se corta, no imprime, se termina el bucle
4. Si la condicion es true, Ejecuta el codigo dentro del for.
5. Actualizacion: i++
6. Vuelve al punto 2.
*/

// for (let i = 1; i <= 10; i++) {
//   console.log(`El numero actual que estoy iterando es: ${i}`);
// }

// Break
//  Nos sirve para salir del bucle
// for (i = 0; i < 10; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(`El numero que estamos iterando es ${i}`);
// }

// Continue
// for (i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(`El numero que estamos iterando es ${i}`);
// }

// Como consolear numeros pares
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(`El numero ${i} es par`);
// }

// While
// Crea un bucle que ejecutar un codigo especifico mientras la condicion sea true. Esta condicion se evaula antes de ejecutar el codigo

// while (condicion) {
//   // codigo a ejecutar
// }
// let i = 0;

// while (i < 10) {
//   console.log(`El numero que estoy iterando es ${i}`);
//   i++;
// }

// El while que hace? Primero pide permiso, preguntando si es verdadero o si es falso, si es verdadero me ejecuta el codigo. si no, termina.

// El do while primero ejecuta el codigo y despues pregunta si es verdadero o si es falso.

// do {
//   //codigo a ejecutar
// } while (condicion);

// let i = 0;

// do {
//   console.log(`El numero que estoy iterando es ${i}`);
//   i++;
// } while (i < 5);

// for (let i = 0; i < 10; i++) {
//   // imprimo html
// }

// Arrays
let unArray = ["Nucba", 20, "Boquita"];
let nombre = "Nelson";
console.log(unArray);
console.log(unArray[0]);
console.log(unArray[2]);

console.log(Array.isArray(unArray));
console.log(Array.isArray(nombre));

// Array.isArray nos indica si es un array o no, devuelve true o false
