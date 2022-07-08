// Llamar al contenedor de produdctos
const containerProducts = document.getElementById('container__products');

// Iteramos el array de stock
stock.forEach((product) => {
  // Crear un div
  const div = document.createElement('div');
  //   A este div le vamos a asignar una clase
  div.classList.add('producto');
  //   Le vamos a pasar el html con la info que necesitamos
  div.innerHTML = `
  <img src="${product.img}" alt="" />
  <h2>${product.name}</h2>
  <p>${product.desc}</p>
  <span>$${product.price}</span>
  <span>${product.oferta ? 'Oferta' : 'No tiene oferta'}</span>
  `;

  //   Decirle que los divs que se van a crear van a estar renderizados en el contenedor de productos
  containerProducts.appendChild(div);
});
