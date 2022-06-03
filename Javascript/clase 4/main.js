/* let resultado;
let numero1 = 1;
let numero2 = 2;

resultado = numero1 + numero2;
console.log(`El resultado es ${resultado}`) */

/* function sumar(num1, num2) {
  return num1 + num2;
}
console.log(`El resultado con funcion es ${sumar(1, 2)}`);
console.log(`El resultado con funcion es ${sumar(5, 851)}`); */

// Ejemplo de funcion con parametro por defecto
/* function descripcionPersonal(nombre, edad, estudio = "actuacion") {
  let mensaje = console.log(
    `Hola soy ${nombre}, tengo ${edad} y estudio ${estudio}`
  );
  return mensaje;
}

descripcionPersonal("Nelson", 26); */

// Funciones anonimas
// Una funcion es anonima cuando se define sin un nombre. La funcion se va a almacenar en la memoria. Y el uso mas comun que le vamos a dar es asignarlas a una variable.
/* let hola = function () {
  console.log("Hola Mundo soy una funcion anonima");
};

console.log(hola()); */

// Funcion Flecha o Arrow Functions
// Mismo ejemplo de arriba pero pasado a arrow function
/* let hola = () => {
  console.log("Hola mundo soy una funcion en flecha");
};
hola(); */

// Sintaxis basica de las arrow function

/* un parametro con una expresion, no necesitamos return
parametro => expresion

Varios parametros con una sola expresion no necesita return
(parametro1, parametro2) => expresion

Si tenemos un parametro no necesita parentesis y si la declaracion tiene varias lineas, va a necesitar de llaves y de return

param => {
    let a = 1;
    return a + b
}

Varias parametros necesitamos parentesis. Y que tenga varias lineas va a necesitar llaves y return

(param1, param2) => {
    let a = 1;
    return a + b
}
*/

/* const decirHola = nombre => console.log(`Hola ${nombre}`); */

/* const decirHola = (nombre, edad) =>
  console.log(`Hola ${nombre}, tengo ${edad}`);

decirHola("Josecito", 85);
decirHola("pepito", 16); */

/* const sumar = (a, b) => {
  let resultado = a + b;

  return resultado;
};

console.log(sumar(57, 128));
 */

// Recursividad
/*
La funcion recursiva en si, es una funcion que se llama asi misma. Nosotros tenemos que pasarle a esa funcion una condicion para que deje de llamarse a si misma. Si no, que pasa, se llena la pila de stack (stackoverflow) y nos cuelga todo.
*/

// Cuenta atras con for
/* let i = 0;
for (let i = 5; i > 0; i--) {
  console.log(i);
} */
//Cuenta adelante
/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */

/*let cuentaAtras = (numero) => {
  //Caso base
  if (numero === 0) {
    return "Termine de llamarme a mi misma";
  }
  console.log(numero);
  return cuentaAtras(numero - 1);
};

/* cuentaAtras(5); 
console.log(cuentaAtras(5));*/

/*
1- Llamamos a la funcion con un valor de 5
2- Que hizo la funcion aca? Se pregunto, 5 es igual a 0?
3- No, oka entonces imprimi 5 en la consola
4- Me voy a llamar a mi misma de nuevo con el numero - 1, o sea 5 - 1
5- El valor de la funcion paso a ser de 4
6- 4 es igual a 0?
7- No, imprimo 4 en consola
8- Se repite el llamarse asi misma hasta que la condicion se cumpla.
*/

// Otro ejemplo de como duplicar un numero con funcion recursiva
/* const duplicar = (num) => {
  num = num + num;
  console.log(num);
  if (num > 100) {
    return "Termine";
  }
  return duplicar(num);
};

console.log(duplicar(4)); */

// Ejemplo Fibonacci
// 0,1,1,2,3,5,8,13,21,34,55 .......
const fibonacci = (num) => {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(11));
