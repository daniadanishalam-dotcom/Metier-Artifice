const grid = document.getElementById('product-grid');
const filters = document.getElementById('filters');

// If the link was shop.html?category=trays, start on that filter
const startCategory = new URLSearchParams(window.location.search).get('category') || 'all';

// Mixed display order so tall and wide photos sit side by side on the "All" view.
const displayOrder = [
  'royal-fleurie', 'golden-hour-clock',   'verdant-empire',
  'glided-cosmos', 'luminara-geode', 'gold-vein-bowl', 'noor-e-nikkah',
  'aurelia-glimmers-tray', 'emerald-tide-chronicle', 'glided-drift',
  'elysian-dish', 'maison-pearl', 'emerald-serenity'
];
const orderOf = p => {
  const index = displayOrder.indexOf(p.id);
  return index === -1 ? displayOrder.length : index;
};

function renderProducts(category) {
  const list = (category === 'all'
    ? products
    : products.filter(p => p.category === category)
  ).slice().sort((a, b) => orderOf(a) - orderOf(b));

  grid.innerHTML = list.map(p => {
    const images = p.images || [p.image];
    const thumbnails = images.length > 1
      ? `<div class="product-gallery" aria-label="${p.name} photos">${images.map((image, index) => `
          <button class="product-thumb" type="button" data-image="${image}" data-alt="${p.name}, view ${index + 1}" aria-label="View ${p.name}, angle ${index + 1}" aria-pressed="${index === 0}">
            <img src="${image}" alt="">
          </button>
        `).join('')}</div>`
      : '';

    return `
      <article class="card" data-product-id="${p.id}">
        <div class="card-img">
          <img src="${p.image}" alt="${p.name}" onerror="this.remove()">
        </div>
        ${thumbnails}
        <h3>${p.name}</h3>
        <p class="product-description">${p.description || ''}</p>
        <p class="price">PKR ${p.price.toLocaleString()}</p>
        <button class="btn btn-small add-to-cart" type="button"
          data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">Add to cart</button>
      </article>
    `;
  }).join('');

  layoutColumns();
}

// Deal the cards across the columns left to right so every column is filled
function columnCount() {
  const width = window.innerWidth;
  if (width <= 440) return 1;
  if (width <= 700) return 2;
  if (width <= 1000) return 3;
  return 4;
}

function layoutColumns() {
  const cards = Array.from(grid.querySelectorAll('.card'));
  const count = Math.min(columnCount(), Math.max(cards.length, 1));
  const columns = Array.from({ length: count }, () => {
    const column = document.createElement('div');
    column.className = 'shop-col';
    return column;
  });
  cards.forEach((card, index) => columns[index % count].appendChild(card));
  grid.replaceChildren(...columns);
  grid.dataset.columns = count;
}

let lastColumnCount = columnCount();
window.addEventListener('resize', () => {
  const next = columnCount();
  if (next !== lastColumnCount) {
    lastColumnCount = next;
    const cards = Array.from(grid.querySelectorAll('.card'))
      .sort((a, b) => orderOf({ id: a.dataset.productId }) - orderOf({ id: b.dataset.productId }));
    grid.replaceChildren(...cards);
    layoutColumns();
  }
});

grid.addEventListener('click', event => {
  const thumbnail = event.target.closest('.product-thumb');
  if (!thumbnail) return;

  const card = thumbnail.closest('.card');
  const image = card.querySelector('.card-img img');
  image.src = thumbnail.dataset.image;
  image.alt = thumbnail.dataset.alt;
  card.querySelectorAll('.product-thumb').forEach(button => {
    button.setAttribute('aria-pressed', button === thumbnail);
  });
});

function setActiveFilter(category) {
  filters.querySelectorAll('button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

// Build the filter buttons from categoryNames
filters.innerHTML =
  `<button data-category="all">All</button>` +
  Object.entries(categoryNames)
    .map(([key, label]) => `<button data-category="${key}">${label}</button>`)
    .join('');

filters.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  const category = e.target.dataset.category;
  setActiveFilter(category);
  renderProducts(category);
});

setActiveFilter(startCategory);
renderProducts(startCategory);