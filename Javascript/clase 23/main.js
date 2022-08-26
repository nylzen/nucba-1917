const { log } = console;

// const Pelicula = {
//   nombre: 'Spiderman',
//   id: 1,
//   reproducir() {
//     return `La pelicula ${this.nombre} esta ao vivo`;
//   },
// };

// log(Pelicula.reproducir());

// const PeliculaDos = {
//   nombre: 'Volver al futuro',
//   id: 1,
//   reproducir() {
//     return `La pelicula ${this.nombre} esta ao vivo`;
//   },
// };

// log(PeliculaDos.reproducir());

class Pelicula {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }

  reproducir() {
    return `La pelicula ${this.nombre} esta ao vivo`;
  }
}

const peliculaClase = new Pelicula('Spiderman', 1);
// log(peliculaClase.reproducir());

// Herencia
class Serie extends Pelicula {
  // Que pasa si queremos agregar un parametro nuevo?
  constructor(nombre, id, capitulo) {
    // Con super le estamos diciendo que vamos a usar el nombre y el id de donde estamos extendiendo, peliculas
    super(nombre, id);
    this.capitulo = capitulo;
  }
  reproducirCapitulo() {
    return `Reproduciendo capitulo ${this.capitulo} de la serie ${this.nombre}`;
  }
}

const serieUno = new Serie('Suits', 10);
// log(serieUno.reproducirCapitulo());
// log(serieUno);

// this
const user = {
  name: 'Nel',
  age: 27,
  showUser() {
    log(this);
    return 'Nel 27';
  },
};

// log(user);
// log(user.showUser());

class Persona {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.displayName = function () {
      return `${this.name} ${this.lastname}`;
    };
  }
}

// Hagamos una instancia
const pepito = new Persona('Pepito', 'Perez');
// log(pepito.name);
// pepito.name = 'Josecito';
// log(pepito.displayName());

// Creemos un nuevo metodo pero solamente para pepito/josecito
// pepito.saludar = function () {
//   return `Hola soy ${this.name}`;
// };

// log(pepito.saludar());

const fede = new Persona('Fede', 'Martin');
// log(fede.saludar());

// Si queremos que este nuevo metodo este disponible para todas las instancias de objetos tenemos que usar el prototype y modificarlo/agregar el metodo que necesitamos
Persona.prototype.saludar = function () {
  return `Hola soy ${this.name}`;
};

// log(pepito);
// log(fede.saludar());
// log(pepito.saludar());

// Casi todo en js es un objeto
// Tipos de datos primitivos
// log(typeof 'holis');
// log(typeof 100);
// log(typeof true);

// //
// log(typeof {});
// log(typeof []);

// log(typeof new Date());
// log(typeof new RegExp());

// log(new Number(250));
// log(new String('holis'));
// log(new Boolean(true));
// log(new Array([1, 2]));

// log('pepito'.toUpperCase());

// Creemos algunos metodos
// log('holis'.findLetter('o'));

String.prototype.findLetter = function (letter) {
  return this.indexOf(letter);
};

// log('hola'.findLetter('a'));
// log('Scaloneta'.findLetter('o'));

Array.prototype.getLastItem = function () {
  return this[this.length - 1];
};

// log([1, 2, 6, 432].getLastItem());

// Bind/Call/Apply
const usuario = {
  name: 'Pantera',
};

const producto = {
  name: 'Pc Gamer',
};

function showInfo(pedidos, cuotas) {
  return `${this.name} tiene ${pedidos} pedido(s) en ${cuotas} cuotas`;
}

log(showInfo(1, 3));

// Aca entra el call
// Cuando usamos call nos pide dos parametros, el primero es el objeto a referenciar, y el segundo son los parametros que me pide la funcion
log(showInfo.call(usuario, 3, 28));
log(showInfo.call(producto, 3, 28));
log(showInfo.call(pepito, 3, 2));

// Apply
// Similar a Call , nos pide dos parametros el primero es el objeto a referenciar y el segundo pasado como array los parametros de la funcion
log(showInfo.apply(usuario, [1, 6]));

// Bind
// Nos devuelve una funcion despues de haber asociado el objeto, para que esa funcion sepa como manejar el this
const nuevaFuncion = showInfo.bind(pepito);
log(nuevaFuncion(4, 1));
