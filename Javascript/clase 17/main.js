// EL MOTOR DE JS SOLAMENTE PUEDE EJECUTAR UNA COSA A LA VEZ

// Ejemplito Callstack
const hola = () => {
  console.log('Hola');
};

const nucba = () => {
  console.log('Nucba');
};

const main = () => {
  hola();
  nucba();
};

// main();

// Ejemplito de Memory Heap

const obj1 = { valor: 1 };
const obj2 = obj1;
obj2.valor = 2;

// console.log(obj1.valor); // 2
// console.log(obj1 === obj2); // true

// Ejemplito de Event Loop
console.log('Boooeenas');

setTimeout(() => {
  console.log('Nucba');
}, 1500);

console.log('Estamos probando el event loop');
