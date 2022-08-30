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
// Carrito
const cartMenu = document.querySelector('.cart');
// Menu Hamburguesa
const barsMenu = document.querySelector('.navbar-list');
// Para tirar facha, el overlay que va a ir debajo del menu/cart
const overlay = document.querySelector('.overlay');
