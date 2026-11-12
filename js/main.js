// ---------- Mobile menu ----------
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// ---------- Cart (saved in the browser with localStorage) ----------
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const total = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').textContent = total;
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;      // already in cart: add one more
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
  updateCartCount();
}

// Delegate so both static and dynamically rendered product buttons work.
document.addEventListener('click', event => {
  const button = event.target.closest('.add-to-cart');
  if (!button) return;

  addToCart({
    id: button.dataset.id,
    name: button.dataset.name,
    price: Number(button.dataset.price)
  });

  button.textContent = 'Added';
  button.classList.add('added');
  setTimeout(() => {
    button.textContent = 'Add to cart';
    button.classList.remove('added');
  }, 1200);
});

document.querySelectorAll('.order-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const fieldLines = Array.from(form.querySelectorAll('[data-label]'))
      .map(field => `${field.dataset.label}: ${field.value.trim()}`)
      .filter(line => !line.endsWith(': '));
    const subject = `${form.dataset.orderType} inquiry`;
    const body = [form.dataset.orderType, '', ...fieldLines].join('\n');
    const mailtoUrl = `mailto:metierstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    form.querySelector('.order-status').textContent = 'Your email app should open with the inquiry. Review it and press Send.';
    window.location.href = mailtoUrl;
  });
});

document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const email = form.querySelector('[name="email"]').value.trim();
    const subject = 'Newsletter signup request';
    const body = `Please add ${email} to the daily Metier Artifice updates and newsletter mailing list.`;
    const mailtoUrl = `mailto:metierstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    form.querySelector('.newsletter-status').textContent = 'Your email app should open with the signup request. Review it and press Send to subscribe.';
    window.location.href = mailtoUrl;
  });
});

updateCartCount();
