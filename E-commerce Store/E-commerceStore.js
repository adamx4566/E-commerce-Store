const products = [
  { id: 1, name: "Laptop", price: 1200, img: "https://freesvg.org/img/metalmarious_Laptop.png" },
  { id: 2, name: "Headphones", price: 150, img: "https://freesvg.org/img/headphones.png" },
  { id: 3, name: "Smartphone", price: 800, img: "https://freesvg.org/img/Nexus5.png" },
  { id: 4, name: "Camera", price: 500, img: "https://www.publicdomainpictures.net/pictures/170000/nahled/camera-1463753431bhe.jpg" }
];

const productsContainer = document.getElementById("products");
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const cartItemsEl = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalEl = document.getElementById("total");
const clearCartBtn = document.getElementById("clear-cart");

let cartItems = [];

function renderProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cartItems.push(product);
  updateCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} 
      <button onclick="removeFromCart(${index})">x</button>`;
    cartItemsEl.appendChild(li);
  });

  cartCount.textContent = cartItems.length;
  totalEl.textContent = `Total: $${total}`;
}

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

clearCartBtn.addEventListener("click", () => {
  cartItems = [];
  updateCart();
});

renderProducts();
