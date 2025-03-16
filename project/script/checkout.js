
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartSummaryTotal = document.querySelector(".cart-summary p");
  const placeOrderButton = document.querySelector(".place-order-button");

 
  const cart = JSON.parse(localStorage.getItem("cart")) || [];


  function displayCartItems() {
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
            </div>
          </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
      });

     
      const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
      if (cartSummaryTotal) {
        cartSummaryTotal.textContent = `Total: $${total}`;
      }
    }
  }

  
  if (placeOrderButton) {
    placeOrderButton.addEventListener("click", () => {
      const shippingForm = document.getElementById("shipping-form");
      const paymentForm = document.getElementById("payment-form");

      if (shippingForm.checkValidity() && paymentForm.checkValidity()) {
        alert("Order placed successfully!");
        localStorage.removeItem("cart"); 
        window.location.href = "home.html"; 
      } else {
        alert("Please fill out all required fields.");
      }
    });
  }


  displayCartItems();
});

document.querySelector('a[href="#"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});