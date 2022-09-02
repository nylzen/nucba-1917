// Nos traemos los elementos necesarios
// Contenedor de productos
const products = document.querySelector('.products-container');
// Contenedor de productos del carrito
const productsCart = document.querySelector('.cart-container');
// El total en precio del carrito
const total = document.querySelector('.total');
// El contenedor de las categorias
const categories = document.querySelector('.categories');
//Un htmlcollection de Botones de todas las categorias
const categoriesList = document.querySelectorAll('.category');
// Boton de ver mas
const btnLoad = document.querySelector('.btn-load');
// Boton de comprar
const buyBtn = document.querySelector('.btn-buy');
// Boton para abrir y cerrar el menu
const barsBtn = document.querySelector('.menu-label');
// Boton para abrir y cerrar el carrito
const cartBtn = document.querySelector('.cart-label');
// Carrito
const cartMenu = document.querySelector('.cart');
// Menu Hamburguesa
const barsMenu = document.querySelector('.navbar-list');
// Para tirar facha, el overlay que va a ir debajo del menu/cart
const overlay = document.querySelector('.overlay');

// Seteamos el carrito vacio o lo que este en el localStorage segun nos corresponda, esto es igual a proyectos anteriores
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Funcion para guardar el carrito en el localStorage
const saveLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
};

// Renderizado de productos
// Funcion para renderizar html
const renderProduct = product => {
  const { id, name, bid, user, userImg, cardImg } = product;
  return `
  <div class="product">
  <img src=${cardImg} alt=${name} />
  <div class="product-info">
      <!-- top -->
      <div class="product-top">
          <h3>${name}</h3>
          <p>Current Bid</p>
      </div>

      <!-- mid -->
      <div class="product-mid">
          <div class="product-user">
              <img src=${userImg} alt="user" />
              <p>@${user}</p>
          </div>
          <span>${bid} eTH</span>
      </div>

      <!-- bot -->
      <div class="product-bot">
          <div class="product-offer">
              <div class="offer-time">
                  <img src="./assets/img/fire.png" alt="" />
                  <p>05:12:07</p>
              </div>
              <button class="btn-add"
              data-id='${id}'
              data-name='${name}'
              data-bid='${bid}'
              data-img='${cardImg}'>Add</button>
          </div>
      </div>
  </div>
</div>`;
};

// Funcion para renderizar todos los productos. Recibe una categoria y un index.
// Si la categoria es todas va a renderizar todos los productos que esten en el array de arrays de 6 elementos, en el contendor de productos.
// En caso de que se reciba otra categoria, vamos a crear una constante donde vamos a guardar el filter por categoria que le pasemos. El filter se lo hacemos directamente al array de productos (El que tiene todos los productos) y despues renderizamos en el contenedor de productos
const renderProducts = (category, index) => {
  if (category === 'todas') {
    products.innerHTML += allProducts.productList[index]
      .map(renderProduct)
      .join('');
    return;
  }
  const productList = productsData.filter(p => p.category === category);
  products.innerHTML = productList.map(renderProduct).join('');
};

// ---------------------- Filter ---------------------- //
// Funcion para cambiar el filtro (Colorsito Azul)
// Primero almacenamos la categoria que esta en el dataset del boton clickeado
// Segundo transformamos el HTMLCollection de categorias a un array con spread operator
// Por cada categoria vamos a chequear si es la selectedCategory. Si no es, le removemos la clase active y si no se la agregamos.
// Si la categoria seleccionada es distinta, ocultamos el boton de ver mas, si no la hacemos aparecer
const changeFilterState = e => {
  const selectedCategory = e.target.dataset.category;
  const categories = [...categoriesList];
  categories.forEach(category => {
    if (category.dataset.category !== selectedCategory) {
      category.classList.remove('active');
    } else {
      category.classList.add('active');
    }
  });
  if (selectedCategory !== 'todas') {
    btnLoad.classList.add('hidden');
  } else {
    btnLoad.classList.remove('hidden');
  }
};

// Funcion que renderiza los productos al apretar alguno de los botones de filtro.
// Primero, si lo que clickeamos dentro del contenedor de categorias no contiene la clase category, retornamos sin hacer nada.
// Despues cambiamos el filtro activo en el html con la funcion que creamos arriba (changeFilterState)
// Si tiene la clase category y el dataset.category es igual a todas, vaciamos el innerHTML del contenedor y renderizamos los productos pasandole todas como categoria y un 0 como index para que agarre el primer array
// Si la categoria no es todas, renderizamos segun el e.target.dataset.category (Basicamente la categoria clickeada)
const filterProducts = e => {
  if (!e.target.classList.contains('category')) return;
  changeFilterState(e);
  if (e.target.dataset.category.toLowerCase() === 'todas') {
    products.innerHTML = '';
    renderProducts('todas', 0);
  } else {
    renderProducts(e.target.dataset.category);
  }
};

// Funcion para mostrar mas
// Funciona como la paginacion de Crypto. Al apretar el boton de ver mas, carga el siguiente array de 6 elementos de nuestro array de arrays. (Ya que pasamos next como indice para renderProducts) y suma 1 a next. En caso de que luego de hacer esto next tenga el mismo valor que limit, ocultamos el boton de ver mas
const showMore = () => {
  renderProducts('todas', allProducts.next);
  allProducts.next++;
  if (allProducts.next === allProducts.limit) {
    btnLoad.classList.add('hidden');
  }
};

/// --------- Logica para el carro ---------------------- //
// Renderizado del producto del carrito
const renderCartProduct = cartProduct => {
  const { id, name, bid, img, quantity } = cartProduct;
  return `
  <div class="cart-item">
    <img src="${img}" alt="NFt del carro" />
    <div class="item-info">
      <h3 class="item-title">${name}</h3>
      <p class="item-bid">Current Bid</p>
      <span class="item-price">${bid}</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>
  `;
};

// Logica para renderizar el carro
const renderCart = cartList => {
  if (!cartList.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
  }
  productsCart.innerHTML = cartList.map(renderCartProduct).join('');
};

// Funcion para renderizar el total de la suma del precio de todo lo que esta en el carrito. Limitamos los decimales a 2
// Por cada iteracion multiplicar el precio por la cantidad del producto que hay en el carrito y lo suma al acumulado
const showTotal = cartList => {
  total.innerHTML = `${cartList
    .reduce((acc, cur) => acc + Number(cur.bid) * cur.quantity, 0)
    .toFixed(2)} ETH`;
};

// Si no hay nada en el carro, deshabilita el boton de compra, si no lo habilita
const disableBuyBtn = () => {
  if (!cart.length) {
    buyBtn.classList.add('disabled');
  } else {
    buyBtn.classList.remove('disabled');
  }
};

// Funcion para el manejo de mas y menos dentro del carrito
const handleQuantity = e => {
  if (e.target.classList.contains('down')) {
    const existingCartItem = cart.find(item => item.id === e.target.dataset.id);

    // Si tocamos en un item que tine una sola cantidad
    if (existingCartItem.quantity === 1) {
      if (window.confirm('¿Desea Eliminar el producto del carrito?')) {
        cart = cart.filter(prod => prod.id !== existingCartItem.id);
        saveLocalStorage(cart);
        renderCart(cart);
        showTotal(cart);
        disableBuyBtn();
        return;
      }
      // Si no
    }
    cart = cart.map(item => {
      return item.id === existingCartItem.id
        ? { ...item, quantity: Number(item.quantity) - 1 }
        : item;
    });

    // Si se toco el boton de up
  } else if (e.target.classList.contains('up')) {
    const existingCartItem = cart.find(item => item.id === e.target.dataset.id);

    cart = cart.map(item => {
      return item.id === existingCartItem.id
        ? { ...item, quantity: Number(item.quantity) + 1 }
        : item;
    });
  }
  // Para todos los casos
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBuyBtn();
};

const addProduct = e => {
  if (!e.target.classList.contains('btn-add')) return;
  const product = {
    id: e.target.dataset.id,
    name: e.target.dataset.name,
    bid: e.target.dataset.bid,
    img: e.target.dataset.img,
  };

  // Vamos a hacer una variable para checkear si el producto existe en el carrito, si existe vamos a sumar + 1 a la cantidad
  //
  const existingCartItem = cart.find(item => item.id === product.id);

  if (existingCartItem) {
    cart = cart.map(item => {
      return item.id === product.id
        ? { ...item, quantity: Number(item.quantity) + 1 }
        : item;
    });
  } else {
    cart = [...cart, { ...product, quantity: 1 }];
  }
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBuyBtn();
};

// Si el carrito esta vacio, apretar el boton de compra no va  a hacer nada, sino triggerea a una nueva ventana de confirmacion en caso de confirmar, sacamos del localstorage el item cart y recargamos la pagina
const completeBuy = () => {
  if (!cart.length) return;
  if (window.confirm('¿Desea finalizar su compra?')) {
    localStorage.removeItem('cart');
    window.location.reload();
  }
};

// ----------------------Menu Interface ---------------//

const toggleMenu = () => {
  barsMenu.classList.toggle('open-menu');
  if (cartMenu.classList.contains('open-cart')) {
    cartMenu.classList.remove('open-cart');
    return;
  }
  overlay.classList.toggle('show-overlay');
};

const toggleCart = () => {
  cartMenu.classList.toggle('open-cart');
  if (barsMenu.classList.contains('open-menu')) {
    barsMenu.classList.remove('open-menu');
    return;
  }
  overlay.classList.toggle('show-overlay');
};

//
const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains('open-menu') &&
    !cartMenu.classList.contains('open-cart')
  )
    return;

  barsMenu.classList.remove('open-menu');
  cartMenu.classList.remove('open-cart');
  overlay.classList.remove('show-overlay');
};

// Funcion para tener todos los eventos
const init = () => {
  document.addEventListener('DOMContentLoaded', renderProducts('todas', 0));
  document.addEventListener('DOMContentLoaded', renderCart(cart));
  document.addEventListener('DOMContentLoaded', showTotal(cart));
  categories.addEventListener('click', filterProducts);
  products.addEventListener('click', addProduct);
  productsCart.addEventListener('click', handleQuantity);
  btnLoad.addEventListener('click', showMore);
  buyBtn.addEventListener('click', completeBuy);
  cartBtn.addEventListener('click', toggleCart);
  barsBtn.addEventListener('click', toggleMenu);
  disableBuyBtn();
  window.addEventListener('scroll', closeOnScroll);
};

init();
