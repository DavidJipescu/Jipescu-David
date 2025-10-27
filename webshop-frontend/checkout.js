const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
const orderList = document.getElementById("orderList");
let total = 0;

cartFromStorage.forEach(item => {
  const itemTotal = item.price * item.qty;
  total += itemTotal;
  orderList.innerHTML += `<li>${item.title} x${item.qty} - ${itemTotal} RON</li>`;
});

document.getElementById("orderTotal").innerText = total + " RON";

document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Comanda plasata! Multumim pentru achizitie.");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
});
