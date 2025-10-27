// JS simplu frontend-only
let cart = [
  { title: "Chitară electrică Fender", price: 2300, qty: 1 },
  { title: "Căști Studio AKG", price: 750, qty: 2 }
];

function renderCart() {
  const tbody = document.getElementById("cartItems");
  tbody.innerHTML = "";
  let subtotal = 0;
  cart.forEach((item, index) => {
    const total = item.price * item.qty;
    subtotal += total;
    tbody.innerHTML += `
      <tr>
        <td>${item.title}</td>
        <td>${item.price} RON</td>
        <td><input type="number" min="1" value="${item.qty}" onchange="updateQty(${index}, this.value)"></td>
        <td>${total} RON</td>
        <td><button onclick="removeItem(${index})">Șterge</button></td>
      </tr>
    `;
  });
  document.getElementById("subtotal").innerText = subtotal + " RON";
}

function updateQty(index, value) {
  cart[index].qty = parseInt(value);
  renderCart();
}

function removeItem(index) {
  cart.splice(index,1);
  renderCart();
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
});

renderCart();
