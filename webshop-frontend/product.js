// Obținem parametrul din URL
const params = new URLSearchParams(window.location.search);
const item = params.get("item");

// Lista produselor
const products = {
  fender: {
    title: "Chitară electrică Fender",
    price: 2300,
    desc: "Chitară electrică de calitate profesională pentru muzicieni rock.",
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=400&q=60"
  },
  akg: {
    title: "Căști Studio AKG",
    price: 750,
    desc: "Căști profesionale pentru înregistrări și mixaje.",
    img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=400&q=60"
  },
  roland: {
    title: "Set tobe Roland TD-1DMK",
    price: 4999,
    desc: "Set tobe electronice pentru performanțe live și practice.",
    img: "https://images.unsplash.com/photo-1598387993441-cb3f33d6e6fc?auto=format&fit=crop&w=400&q=60"
  }
};

const product = products[item] || products.fender;

// Populăm datele în HTML
document.getElementById("productTitle").innerText = product.title;
document.getElementById("productPrice").innerText = `Preț: ${product.price} RON`;
document.getElementById("productDesc").innerText = product.desc;
document.getElementById("productImg").src = product.img;

// Adaugă în coș (LocalStorage)
document.getElementById("addToCart").addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(p => p.title === product.title);
  if(existing) existing.qty += 1;
  else cart.push({ title: product.title, price: product.price, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produs adăugat în coș!");
});
