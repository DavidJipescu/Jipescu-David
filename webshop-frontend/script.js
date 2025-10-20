let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} a fost adăugat în coș!`);
}

function displayCart() {
  const list = document.getElementById('cart-items');
  const total = document.getElementById('total-price');
  if (!list) return;

  list.innerHTML = '';
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} RON`;
    list.appendChild(li);
    sum += item.price;
  });

  total.textContent = `Total: ${sum} RON`;

  document.getElementById('clear-cart').onclick = () => {
    cart = [];
    localStorage.removeItem('cart');
    displayCart();
  };
}

window.onload = displayCart;
