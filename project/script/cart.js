
const cart = [];


function addToCart(productName, price, size, image) {
  const product = {
    name: productName,
    price: parseFloat(price),
    size: size,
    image: image,
  };
  cart.push(product);
  updateCartDisplay();
  saveCartToLocalStorage();
}


function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
  saveCartToLocalStorage();
}


function calculateTotal() {
  return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}


function updateCartDisplay() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartSummaryTotal = document.querySelector(".cart-summary p");

  if (cartItemsContainer) {
    
    cartItemsContainer.innerHTML = "";

    
    cart.forEach((item, index) => {
      const cartItemHTML = `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="item-details">
            <h2>${item.name}</h2>
            <p class="price">$${item.price}</p>
            <p class="size">Size: ${item.size}</p>
            <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
          </div>
        </div>
      `;
      cartItemsContainer.innerHTML += cartItemHTML;
    });

    
    if (cartSummaryTotal) {
      cartSummaryTotal.textContent = `Total: $${calculateTotal()}`;
    }
  }
}


function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart.push(...JSON.parse(savedCart));
    updateCartDisplay();
  }
}


window.addEventListener("load", () => {
  loadCartFromLocalStorage();
});


window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

document.querySelector('a[href="#"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});