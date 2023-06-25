const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
let cartItems = [];
let cartTotal = 0;

addToCartButtons.forEach((button) => {
button.addEventListener('click', addToCart);
});

  // Add item to the shopping cart
  function addToCart(event) {
    const button = event.target;
    const productName = button.dataset.name;
    const productPrice = button.dataset.price;

    // Create a new cart item object
    const cartItem = {
      name: productName,
      price: productPrice
    };

    // Add the item to the cart array
    cartItems.push(cartItem);

    // Update the cart display
    displayCartItems();
    updateCartTotal();
  }

  // Display the cart items
  function displayCartItems() {
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = `${item.name} - €${item.price}`;
      cartItemsContainer.appendChild(li);
    });
  }

  // Update the cart total
  function updateCartTotal() {
    cartTotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    cartTotalElement.innerText = cartTotal.toFixed(2);
  }

  // Checkout button event listener
  const checkoutButton = document.getElementById('checkout-btn');
  checkoutButton.addEventListener('click', checkout);

  // Checkout function
  function checkout() {
    // Perform the necessary actions for checkout
    // For example, redirect to a checkout page or display a confirmation message
    alert('Thank you for your purchase!');
  }
