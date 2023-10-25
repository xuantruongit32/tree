// Select necessary elements
const cartIcon = document.getElementById("cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.getElementById("close-cart");
const productBoxes = document.querySelectorAll(".product-box");
const cartContent = document.querySelector(".cart-content");
const totalPrice = document.querySelector(".total-price");
const buyButton = document.querySelector(".btn-buy");

let cartItems = [];
let cartTotal = 0;

// Add product to cart
function addToCart(productBox) {
  const productTitle = productBox.querySelector(".product-title").textContent;
  const productPrice = parseFloat(productBox.querySelector(".price").textContent);
  
  const existingItem = cartItems.find(item => item.title === productTitle);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ title: productTitle, price: productPrice, quantity: 1 });
  }
  
  updateCartDisplay();
}

// Remove product from cart
function removeFromCart(productTitle) {
  cartItems = cartItems.filter(item => item.title !== productTitle);
  updateCartDisplay();
}

// Update the cart display
function updateCartDisplay() {
  cartContent.innerHTML = "";
  cartTotal = 0;
  
  cartItems.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-box");
    cartItem.innerHTML = `
      <img src="img/messi.jpg.img" alt="" class="cart-img">
      <div class="detail-box">
        <div class="cart-product-title">${item.title}</div>
        <div class="cart-price">${item.price.toFixed(2)}VND</div>
        <input type="number" value="${item.quantity}" class="cart-quantity">
      </div>
      <i class='bx bx-trash cart-remove' data-title="${item.title}"></i>
    `;
    
    cartContent.appendChild(cartItem);
    
    cartTotal += item.price * item.quantity;
  });
  
  totalPrice.textContent = `$${cartTotal.toFixed(2)}`;
}

// Event listeners
cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

buyButton.addEventListener("click", () => {
  
  cartItems = [];
  updateCartDisplay();
  cart.classList.remove("active");
});

productBoxes.forEach(productBox => {
  const addToCartButton = productBox.querySelector(".add-cart");
  
  addToCartButton.addEventListener("click", () => {
    addToCart(productBox);
  });
});

cartContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-remove")) {
    const productTitle = e.target.getAttribute("data-title");
    removeFromCart(productTitle);
  }
});

updateCartDisplay();
