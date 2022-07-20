// const getValueAfterMS = (value) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const keys = {
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5,
//       };

//       const v = keys[value];

//       if (!v) {
//         reject('No existe ese valor');
//       } else {
//         resolve({ value });
//       }
//     }, 1500);
//   });
// };

// setTimeout(() => {
//   console.log('hola');
// }, 1500);

// getValueAfterMS('e')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Simulamos una llamada erronea a una api
// fetch('https://nosirve.practicando') // Se rechazo la promesa y esto cae en el catch
//   .then((response) => response.json())
//   .catch((err) => alert(err));

// * Otras promesas
const miPromesa = () => {
  return new Promise((resolve, reject) => {
    resolve('Oki');
    // reject('asd');
  });
};

// * Ejemplo con then y catch
// const llamarMiPromesa = () => {
//   // Llamar a la promesa, con .then le pasamos el valor, no sabemos que recibimos de la api, por defecto lo llamamos res o response.
//   miPromesa()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// llamarMiPromesa();

// Pasemos este mismo ej a async await
const llamarMiPromesa = async () => {
  try {
    const res = await miPromesa();
    console.log(res);
    const data = null;
    console.log(data.toString());
  } catch (err) {
    console.log(`Te cayo este error: ${err}`);
  }
};

// llamarMiPromesa();

// Ejemplo de valida tu cuenta, mail que nunca llega
const submitButton = document.getElementById('submit');

// La promesa
const esMiFetch = () => {
  return new Promise((resolve, reject) => {
    // reject('error');
    resolve('Ok ');
  });
};

// La ejecucion
// const enviarMail = () => {
//   esMiFetch();
//   alert('se envio tu mail');
// };

// como lo arreglamos
const enviarMail = async () => {
  try {
    const response = await esMiFetch();
    alert(response);
  } catch (err) {
    alert(err);
  }
};

submitButton.addEventListener('click', enviarMail);
