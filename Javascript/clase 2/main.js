// function sumar() {
//   let numero = 100;
//   console.log(numero);
// }
// sumar();
// Esto anda

// console.log(numero) esto no anda

var a = "Estoy Global?";

function holi() {
  var b = "Estoy en una funcion";
}

{
  var c = "estoy en bloque";
}

{
  let d = "estoy en bloque?";
}

{
  const e = "estoy en bloque const";
}

// console.log(a); Este se muestra
// console.log(b); Este no se muestra not defined
// console.log(c); Se muestra, por esto se dejo de usar var
// console.log(d); No se muestra es de bloque
// console.log(e); No se muestra es de bloque

//  Operadores
// let numeroUno = 10;
// let numeroDos = "10";
// console.log(numeroUno === numeroDos);

// if (2 + 4 == 7) {
//   console.log("imprimo esto");
// } else {
//   console.log("yyyy 2 + 4 no es 7");
// }

// console.log("Sigue el script con otra cosa");

/*if (condicion) {
  // codigo a ejecutar si se cumple la condicion
} else {
  //  si no ejecuta este codigo
}*/

// Otro ejemplito del if

// let llueve = false;

// if (llueve == true) {
//   console.log("Esta lloviendo, lleva paraguas");
// } else {
//   console.log("Anda tranqui maquina");
// }

// let edad = "hola";

// if (edad >= 18) {
//   console.log("puede tomar alcohol");
// } else if (edad === 17) {
//   console.log("que tome juguito");
// } else if (edad === 14) {
//   console.log("hola");
// } else if (edad === 13) {
//   console.log("anda a la escuela");
// } else {
//   console.log("no se maestro");
// }

// Switch
// Primero un else if

// if (mascota === "lagarto") {
//   console.log("Tengo un lagarto");
// } else if (mascota === "perro") {
//   console.log("Tengo un perro");
// } else if (mascota === "iguana") {
//   console.log("Tengo una iguana");
// } else if (mascota === "gato") {
//   console.log("Tengo un Dios en casa");
// } else {
//   console.log("No tengo mascota :(");
// }

// Asi quedaria en Switch
// const mascota = "gato";

// switch (mascota) {
//   case "lagarto":
//     console.log("Tengo un lagarto");
//     break;
//   case "perro":
//     console.log("Tengo un perro");
//     break;
//   case "iguana":
//     console.log("Tengo una iguana");
//     break;
//   case "gato":
//     console.log("Tengo un gato");
//     break;
//   default:
//     console.log("No tengo mascotas");
//     break;
// }

// let foo = 0;
// switch (foo) {
//   case -1:
//     console.log("1 negativo");
//     break;
//   case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
//     console.log(0);
//     // NOTA: el "break" olvidado debería estar aquí
//     break;
//   case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
//     console.log(1);
//     break; // Al encontrar un "break", no será ejecutado el 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }

const mandado = "Ir al kiosco";
switch (mandado) {
  case "Ir al dentista": {
    let mensaje = "No quierooooo";
    console.log(mensaje);
    break;
  }

  case "Ir al kiosco": {
    let mensaje = "Me voy a traer un alfajorcito";
    console.log(mensaje);
    break;
  }
  default:
    console.log("sin mandados");
    break;
}
