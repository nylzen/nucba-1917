// Paso 1 Hacer el menu desplegable
// Menu hamburguesa
// Llamamos a los elementos
const menu = document.querySelector('.btn__container');
const item = document.querySelectorAll('.item');
// Contador del carrito y el total
const totalItems = document.getElementById('totalItems');
const totalProducts = document.getElementById('totalProducts');
// Boton comprar
const btnComprar = document.querySelectorAll('.product__btn');
// Div del carrito
const cart = document.getElementById('cart');
// Llamamos al navbar
const navbar = document.getElementById('navbar');

// * CLASE 15 PEDI II
// Mostrar/Ocultar menu al scrollear
let ultimoScrollTop;

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // console.log(`el scrolltop es ${scrollTop}`);
  // console.log(`el ultimo scroll es ${ultimoScrollTop}`);
  if (scrollTop > ultimoScrollTop) {
    navbar.style.top = '-100px';
  } else {
    navbar.style.top = '0';
  }

  ultimoScrollTop = scrollTop;
});

// Mostrar menu (toggle)
menu.addEventListener('click', () => {
  item.forEach((i) => i.classList.toggle('show'));
});

// Arrancamos con el carrito

// Creamos un array vacio para los productos
let products = [];

// Funcion para actualizar el contador de productos
const setCount = () => {
  let totalCount = 0;

  //   Recorremos el array y sumamos el contador
  for (let item in products) {
    totalCount += Number(products[item].count);
  }

  //   Actualizar el contador que esta en el span del carrito
  totalItems.innerText = totalCount;

  return totalCount;
};

const totalPrice = () => {
  let totalCart = 0;

  //   Reccorrer el array para hacer el total
  for (let item in products) {
    totalCart += Number(products[item].price * products[item].count);
  }

  totalProducts.innerText = totalCart;
  return totalCart;
};

const handleAddProduct = (e) => {
  // Cancelamos el comportamiento por defecto del boton
  e.preventDefault();
  //   console.log('a ver que paso');

  //
  if (
    !e.target.classList.contains('product__btn') ||
    e.target.classList.contains('disabled')
  ) {
    return;
  }

  //   Tenemos que recorrer el array de productos
  for (let item in products) {
    // Si el name del producto ews igual al target.dataset.name que se esta agregando
    if (products[item].name === e.target.dataset.name) {
      // Incrementemos el contador del producto
      products[item].count++;
      // Llamamos a la funcion que actualiza el contador
      setCount();
      //   Actualizar en el div carrito
      // products[item].price * products[item].count;
      //   Ejecutamos el total del carrito
      totalPrice();
      // Ejecutamos la funcion que pinta para que actualice el carrito
      productList();
      return;
    }
  }

  //   Guardamos los target de los data
  const newProduct = {
    img: e.target.dataset.img,
    name: e.target.dataset.name,
    price: e.target.dataset.price,
    count: e.target.dataset.count,
  };

  products.push(newProduct);
  console.log(newProduct);
  // crear una funcion que setee el contador de los items
  setCount();
  // crear una funcion que haga el total del precio
  totalPrice();
  // crear una funcion que pinte el html
  productList();
};

const productList = () => {
  cart.innerHTML = products
    .map((product) => {
      return `
    <div class="cart__item">
        <div class="cart__item--content">
        <div>
            <img
                src="${product.img}"
                alt="pinguino"
                class="item-img"
            />
            <span>x${product.count}</span>
            <span>(c/u $ ${product.price})</span>
          </div>
          <p class="cart__title">${product.name}</p>
          <span class="cart__price">$${product.price * product.count}</span>
        </div>
      </div>
        `;
    })
    .join('');
};

// Listener al boton de comprar
btnComprar.forEach((item) => {
  item.addEventListener('click', handleAddProduct);
});
