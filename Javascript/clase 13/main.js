// Traemos los elementos del html
const nombre = document.getElementById('nombre');
// console.log(nombre);
const email = document.getElementById('email');
const pass = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');
const form = document.getElementById('form');
const parrafo = document.getElementById('errores');
const phone = document.getElementById('phone');

// Escuchador de eventos
form.addEventListener('submit', (e) => {
  // Prevenimos por defecto el comportamiento del submit
  e.preventDefault();

  //   Crear una variable para almacenar errores
  let error = '';
  //   Creaoms una variable de enviar para controlar si tenemos errores
  let enviar = false;
  // Creamos la variable de regexEmail para validar el email
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  //   Validemos el nombre de usuario
  //   Si el nombre tiene menos de 6 caracteres, quiero que muestre un error
  if (nombre.value.length < 6) {
    error += `El nombre tiene menos de 6 caracteres <br>`;
    enviar = true;
  }

  //*   Validemos la contraseña
  // Si la contraseña tiene menos de 8 caracteres que tire un error
  //   if (pass.value.length < 8) {
  //     error += `La contraseña tiene menos de 8 caracteres <br>`;
  //     enviar = true;
  //   }

  //*   Validemos la contraseña con mayuscula, minuscula y numero
  //   if (!validatePassword(pass.value)) {
  //     error += `La contraseña tiene que tener una mayuscula, una minuscula y un numero <br>`;
  //     enviar = true;
  //   }

  // * Validemos la contraseña con Mayuscula, minuscula, numero y simbolo
  if (!validatePasswordSymbol(pass.value)) {
    error += `La contraseña tiene que tener una mayuscula, minuscula, numero y simbolo <br>`;
    enviar = true;
  }

  //   * Validacion de la confirmacion de la contraseña
  if (!confirmPassword(pass.value, confirmPass.value)) {
    error += `Las contraseñas no coinciden <br>`;
    enviar = true;
  }

  //   Validemos el email
  //
  if (!regexEmail.test(email.value)) {
    error += `El email no es valido <br>`;
    enviar = true;
  }

  //   * Validamos el telefono
  if (!validatePhone(phone.value)) {
    error += `El telefono no es valido <br>`;
    enviar = true;
  }

  //   Si enviar es true mostramos los errores
  if (enviar) {
    parrafo.classList.add('errores');
    parrafo.innerHTML = error;
  } else {
    parrafo.classList.add('ok');
    parrafo.innerHTML = 'Enviado';
  }
});

// Crear una funcion que valide con una expresion regular que la contraseña tenga una mayuscula, una minuscula y un numero
const validatePassword = (password) => {
  // La expresion regular
  let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  //   Nos tiene que devolver true si la expresion regular coincide con la contraseña
  return re.test(password);
};

// Crear una funcion que valide con una expresion regular que la contraseña tenga Mayuscula, Minuscula, Numero y un Simbolo
const validatePasswordSymbol = (password) => {
  // La expresion regular
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  //   Nos retorna true si la expresion regular coincide
  return re.test(password);
};

// Creamos una funcion que valide que la contraseña sean iguales
const confirmPassword = (password, confirmPassword) => {
  // Devolver true si las contraseñas son iguales
  return password === confirmPassword;
};

// Crear una funcion que valide el numero de telefono
const validatePhone = (phone) => {
  // Expresion regular para el telefono
  let re = /^\d{10}$/;
  //   Retorna true si la expresion coincide
  return re.test(phone);
};

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   validacionInputs();
// });

// const validacionInputs = () => {
//   // Capturar los valores que ponga el usuario
//   const nombreUsuarioValue = nombre.value.trim();

//   //   validar el usuario
//   // if (nombre.value.length < 6) {
//   //     error += `El nombre tiene menos de 6 caracteres <br>`;
//   //     enviar = true;
//   //   }

//   if(!nombreUsuarioValue){
//     falloValidacion()
//   }
// };

// const falloValidacion= ()=>{

// }
