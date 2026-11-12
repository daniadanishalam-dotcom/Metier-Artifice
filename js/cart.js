// getCart(), saveCart() and updateCartCount() come from main.js (loaded first)
const cartContent = document.getElementById('cart-content');

function formatPrice(amount) {
  return 'PKR ' + amount.toLocaleString();
}

function renderCart() {
  const cart = getCart();

  // Empty state: invite the person to act
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="cart-empty">
        <p>Your cart is empty.</p>
        <a href="shop.html" class="btn">Browse the shop</a>
      </div>`;
    return;
  }

  const rows = cart.map(item => `
    <div class="cart-row" data-id="${item.id}">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p class="price">${formatPrice(item.price)}</p>
      </div>
      <div class="qty">
        <button class="qty-btn" data-action="decrease" aria-label="Decrease quantity">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" data-action="increase" aria-label="Increase quantity">+</button>
      </div>
      <p class="line-total">${formatPrice(item.price * item.qty)}</p>
      <button class="remove-btn" data-action="remove">Remove</button>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartContent.innerHTML = `
    <div class="cart-list">${rows}</div>
    <div class="cart-summary">
      <p>Subtotal <strong>${formatPrice(subtotal)}</strong></p>
      <p class="note">Delivery is calculated at checkout.</p>
      <a href="checkout.html" class="btn">Proceed to checkout</a>
    </div>`;
}

// One listener handles all the +, − and Remove buttons
cartContent.addEventListener('click', e => {
  const button = e.target.closest('[data-action]');
  if (!button) return;

  const id = button.closest('.cart-row').dataset.id;
  let cart = getCart();
  const item = cart.find(i => i.id === id);

  if (button.dataset.action === 'increase') item.qty += 1;
  if (button.dataset.action === 'decrease') item.qty -= 1;
  if (button.dataset.action === 'remove') item.qty = 0;

  // Anything at 0 leaves the cart
  cart = cart.filter(i => i.qty > 0);

  saveCart(cart);
  updateCartCount();
  renderCart();
});

renderCart();