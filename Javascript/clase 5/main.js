// Objetos
// Coleccion de distintos datos

// let auto = {
//   propiedad:valor,
//   key:value,
//   clave:valor,
// };

// let auto = {
//   marca: "Fiat",
//   modelo: "Uno",
//   anio: 2002,
//   seguro: true,
//   color: {
//     valor: "azul",
//   },
// };
// console.log(auto.marca.modelo);
// // Con el punto podemos acceder a una prop

// let auto2 = {
//   marca: "Ferrari",
//   modelo: "200",
//   anio: 2020,
//   seguro: false,
//   color: {
//     valor: "rojo",
//   },
// };

// Clases y Constructores
// Ejemplo 1 sin metodos
// class Auto {
//   constructor(marca, modelo, anio, seguro) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.anio = anio;
//     this.seguro = seguro;
//   }
// }

// let auto1 = new Auto("Fiat", "Uno", 2002, true);
// let auto2 = new Auto("Audi", "A3", 2008, false);
// console.log(auto1, auto2);

// auto1.marca = "Ferrari";
// console.log(auto1);
// console.log(auto2.marca);

// Ejemplo 2 Con metodos
// class Auto {
//   constructor(marca, modelo, anio, seguro) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.anio = anio;
//     this.seguro = seguro;
//   }

//   // Voy a crear un metodo
//   arrancar = function () {
//     return "El auto arranco";
//   };

//   // Metodo para traer la marca
//   getMarca = function () {
//     return this.marca;
//   };
// }

// // Tenemos que inicializar el objeto
// let auto1 = new Auto("Fiat", "Uno", 2008, true);

// console.log(auto1.arrancar());
// // Devuelve el metodo de arrancar
// console.log(auto1.getMarca()); // Devuelve la marca con el metodo
// console.log(auto1.marca); // Devuelve la marca como propiedad

// arrancar() / nos devuelve not defined porque no podemos acceder a la funcion(metodo) desde fuera del objeto

// Resumen lv5
/*
1. Clases: Definimos las caracteristicas del Objeto.
2. Objeto: Instancia de esa clase (lo creamos con el let).
3. Propiedades: Caracteristicas de ese objeto, por ejemplo la marca.
4. Metodos: Capacidad del objeto, como puede ser el metodo arrancar.
5. Constructor: Metodo llamado a la hora de crear las instancias.
6. This: Si es dentro de una funcion, se refiere a si misma, y si es dentro de un objeto, se refiere al objeto
*/

// Ejemplo del robot

// class Robot {
//   constructor(color, posicionX, posicionY) {
//     this.color = color;
//     this.posicionX = posicionX;
//     this.posicionY = posicionY;
//   }

//   // Voy a crear un metodo para desplazar al robot
//   desplazar = function (X, Y) {
//     this.posicionX = X;
//     this.posicionY = Y;
//   };

//   // Voy a crear un metodo para imprimir en la consola la posicion del robot
//   posicion = function () {
//     console.log(
//       `El robot ${this.color} esta en X:${this.posicionX} y en Y:${this.posicionY}`
//     );
//   };
// }

// // Creamos la instancia del robot azul y sus posiciones
// let robot1 = new Robot("Azul", 20, 40);
// let robot2 = new Robot("Rojo", 11, 40);

// // Mostramos el robot en consola
// // console.log(robot1);
// // Llamamos al metodo posicion que nos devuelve donde esta parado el robot
// robot1.posicion();
// // robot2.posicion();
// // Quiero mover la posicion de mi robot, llamo al metodo desplazar
// robot1.desplazar(50, 50);
// // Para que me muestre los cambios, tengo que volver a llamar a su posicion
// robot1.posicion();

/*
1. Paso uno creamos la clase con la palabra reservada de class seguido del nombre de la clase
2. Llamamos al constructor y le pasamos los parametros(propiedades) que va a tener mi objeto
3. Llamamos a this.nombrePropiedad igual a propiedad. ej this.color = color;
-
4. Creamos la instancia de ese objeto diciendole let robot1 = (usamos la palabra reservada new nombre de la clase) (los parametros)
*/

// Ejemplo Personas / Variables privadas
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    // Aca cree una variable privada, o sea que no puedo acceder desde afuera
    let pass = 12345;

    // Aca creo el metodo para que me devuelva la pass
    this.getPass = function () {
      return pass;
    };
  }
  saludar = function () {
    console.log(
      `Hola soy ${this.nombre}, tengo ${
        this.edad
      } y mi pass es ${this.getPass()}`
    );
  };
}

// Creo una instancia de obj persona
let jorgito = new Persona("Jorgito", 24);
// console.log(jorgito);

// Accedemos al nombre
// console.log(jorgito.nombre);

// Que pasa si quiero acceder a la pass?
// console.log(jorgito.pass);

// Ahora con el metodo creado que onda?
// console.log(jorgito.getPass());

// Llamamos al metodo de saludar
jorgito.saludar();

let ingredientes = ["ingrediente1", 2, 3, 4, 5, 67];
let par = [];
let impar = [];
// crean su funcion .push()
