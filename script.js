// ============================================
// PRODUCTOS - Edita aquí nombres, descripciones y precios
// FOTOS: coloca la imagen en la carpeta "images/" con el mismo
// nombre de archivo que aparece en "image" (ej: images/obl1.jpg).
// Si el archivo no existe, se muestra un ícono de reemplazo.
// ============================================

var categories = ['Obleas', 'A Otro Nivel', 'Helados', 'Repollas', 'Postres', 'Bebidas', 'Empanadas'];

var data = {
  // Cada oblea tiene precio por tamaño: sizes.grande y sizes.pequena.
  // Ajusta aquí los valores de "pequena" (por ahora quedaron iguales a "grande").
  Obleas: [
    { id: 'obl1', name: 'Tradicional', desc: 'Manjar de leche', sizes: { grande: 8500, pequena: 8500 }, image: 'obl1.jpg' },
    { id: 'obl2', name: 'Dietética', desc: 'Crema y queso o Crema y coco', sizes: { grande: 9000, pequena: 9000 }, image: 'obl2.jpg' },
    { id: 'obl3', name: 'Campesina', desc: 'Manjar de leche y Queso de hoja', sizes: { grande: 9000, pequena: 9000 }, image: 'obl3.jpg' },
    { id: 'obl4', name: 'Primer beso', desc: 'Manjar de leche y Crema ', sizes: { grande: 7500, pequena: 7500 }, image: 'obl4.jpg' },
    { id: 'obl5', name: 'Noviazgo', desc: 'Manjar de leche y Queso', sizes: { grande: 9500, pequena: 9500 }, image: 'obl5.jpg' },
    { id: 'obl6', name: 'Primer Amor', desc: 'Manjar de leche , Dulce de Mora y Crema', sizes: { grande: 8500, pequena: 8500 }, image: 'obl6.jpg' },
    { id: 'obl7', name: ' Amor Apasionado', desc: 'Dulce de mora , Queso y Crema', sizes: { grande: 8500, pequena: 8500 }, image: 'obl7.jpg' },
    { id: 'obl8', name: 'Compromiso ', desc: 'Manjar de leche y Dulce de mora', sizes: { grande: 9000, pequena: 9000 }, image: 'obl8.jpg' },
    { id: 'obl9', name: 'Amor Platonico', desc: 'Manjar de leche , Dulce de Maracuya Queso y Crema', sizes: { grande: 9000, pequena: 9000 }, image: 'obl9.jpg' },
    { id: 'obl10', name: 'Mi Gran Amor', desc: 'Manjar de leche , Dulce de mora , Queso y Crema', sizes: { grande: 8000, pequena: 8000 }, image: 'obl10.jpg' },
    { id: 'obl11', name: 'Reconciliacion', desc: 'Manjar de leche , Queso , Crema y Lechera', sizes: { grande: 9000, pequena: 9000 }, image: 'obl11.jpg' },
    { id: 'obl12', name: 'Amor Libre', desc: 'Manjar de leche , Queso y Crema', sizes: { grande: 9500, pequena: 9500 }, image: 'obl12.jpg' },
    { id: 'obl13', name: 'Matrimonio', desc: 'Manjar de leche , Dulce de Durazno , Queso y Crema', sizes: { grande: 9000, pequena: 9000 }, image: 'obl13.jpg' },
    { id: 'obl14', name: 'Aguayique', desc: 'Manjar de leche , Queso y Dulce de Guayaba', sizes: { grande: 8000, pequena: 8000 }, image: 'obl14.jpg' },
    { id: 'obl15', name: 'Amorique', desc: 'Manjar de leche , Queso y Dulce de Mora', sizes: { grande: 9500, pequena: 9500 }, image: 'obl15.jpg' },
    { id: 'obl16', name: 'Tentacion', desc: 'Manjar de leche , Queso y Frutas ( Mango , Guanabana , Fresa)', sizes: { grande: 9500, pequena: 9500 }, image: 'obl16.jpg' },
    { id: 'obl17', name: 'Antojito de Mango', desc: 'Manjar de leche , Crema , Mango y Lechera', sizes: { grande: 9000, pequena: 9000 }, image: 'obl17.jpg' },
    { id: 'obl18', name: 'Amor Pecoso', desc: 'Manjar de leche , Queso , Crema y Chocolate ( Liquido o Rayado )', sizes: { grande: 9000, pequena: 9000 }, image: 'obl18.jpg' },
    { id: 'obl19', name: 'Sensacion', desc: 'Manjar de leche ,  Crema , Guanabana y Lechera', sizes: { grande: 9000, pequena: 9000 }, image: 'obl19.jpg' },
    { id: 'obl20', name: 'Ice', desc: 'Manjar de leche , Crema , Helado y Lechera', sizes: { grande: 8500, pequena: 8500 }, image: 'images/obl20.jpg' },
    { id: 'obl21', name: 'Capuchino', desc: 'Manjar de cafe , Queso y Crema ', sizes: { grande: 9500, pequena: 9500 }, image: 'obl21.jpg' },
    { id: 'obl22', name: 'Pasion de Fresa', desc: 'Manjar de leche , Crema , Trozos de fresa y Lechera', sizes: { grande: 10000, pequena: 10000 }, image: 'obl22.jpg' },
    { id: 'obl23', name: 'Tropical', desc: 'Manjar de leche , Trozos de Piña y Lechera', sizes: { grande: 8500, pequena: 8500 }, image: 'images/obl23.jpg' },
    { id: 'obl24', name: 'Fantasia', desc: 'Nutella , Trozos de Fresa y Crema', sizes: { grande: 9000, pequena: 9000 }, image: 'obl24.jpg' },
    { id: 'obl25', name: 'Antojito de Durazno', desc: 'Manjar de leche , Crema , Trozos de Durazno y Lechera', sizes: { grande: 9000, pequena: 9000 }, image: 'obl25.jpg' },
    { id: 'obl26', name: 'Destape', desc: 'Manjar de leche , Dulce de Guayaba , Queso y Crema', sizes: { grande: 8000, pequena: 8000 }, image: 'images/obl26.jpg' },
    { id: 'obl27', name: 'Hawaiiana', desc: 'Manjar de leche , Dulce de piña y Queso', sizes: { grande: 9000, pequena: 9000 }, image: 'obl27.jpg' },
    { id: 'obl28', name: 'Recreo', desc: 'Manjar de leche , Crema y Galleta oreo', sizes: { grande: 8000, pequena: 8000 }, image: 'obl28.jpg' },
    { id: 'obl29', name: 'Exotica', desc: 'Manjar de leche , Cocada de leche y Crema', sizes: { grande: 9500, pequena: 9500 }, image: 'obl29.jpg' },
    { id: 'obl30', name: 'Arcoiris', desc: 'Manjar de leche , Variedad de Dulces , Queso y Crema', sizes: { grande: 8000, pequena: 8000 }, image: 'obl30.jpg' },
    { id: 'obl31', name: 'Afrodisiaca', desc: 'Manjar de leche , Dulce de borojo , Queso y Crema', sizes: { grande: 8500, pequena: 8500 }, image: 'obl31.jpg' },
    { id: 'obl32', name: 'Amor Prohibido', desc: 'Manjar de leche , Dulce de cidra , Queso y Crema', sizes: { grande: 9000, pequena: 9000 }, image: 'obl32.jpg' },
    { id: 'obl33', name: 'Divorcio', desc: 'Manjar de leche , Dulce de cidra y Queso', sizes: { grande: 9500, pequena: 9500 }, image: 'obl33.jpg' },
    { id: 'obl34', name: 'Mujer Perfecta', desc: 'Manjar de leche , Breva , Queso y Crema', sizes: { grande: 9000, pequena: 9000 }, image: 'images/obl34.jpg' },
    { id: 'obl35', name: 'Amor Eterno', desc: 'Manjar de leche , Brownie y Crema', sizes: { grande: 10000, pequena: 10000 }, image: 'obl35.jpg' },
    { id: 'obl36', name: 'Mi Unica Ilusion', desc: 'Manjar de leche , Cocada de Tamarindo y Crema', sizes: { grande: 9500, pequena: 9500 }, image: 'obl36.jpg' },
    { id: 'obl37', name: 'Luna de Miel', desc: 'Manajar de leche , Mielmesabe y Crema', sizes: { grande: 10500, pequena: 10500 }, image: 'obl37.jpg' }
  ],
  'A Otro Nivel': [
    { id: 'aon1', name: 'A Otro Nivel Original', desc: 'Nuestra combinación estrella', price: 10500, image: 'images/aon1.jpg' },
    { id: 'aon2', name: 'A Otro Nivel Explosión', desc: 'Todos los toppings en una', price: 11500, image: 'images/aon2.jpg' }
  ],
  Helados: [
    { id: 'hel1', name: 'Splot', desc: 'Helado, crema, cono y chicles', price: 13000, image: 'hel1.jpg' },
    { id: 'hel2', name: 'Nuggets de Milo', desc: 'Helado, crema y nuggets de milo', price: 16000, image: 'hel2.jpg' },
    { id: 'hel3', name: 'Copa Placer', desc: 'Helado, chocolatinas, crema y chocolate', price: 16000, image: 'hel3.jpg' },
    { id: 'hel4', name: 'Copa Brownie', desc: 'Helado, crema, trozos de brownie y chocolate', price: 16000, image: 'hel4.jpg' },
    { id: 'hel5', name: 'Copa Piazza', desc: 'Helado, crema, piazza, fresas y lechera', price: 16000, image: 'hel5.jpg' },
    { id: 'hel6', name: 'Chocodisk', desc: 'Helado, galletas de vainilla y chocodisk', price: 13000, image: 'hel6.jpg' },
    { id: 'hel7', name: 'Copa Millows', desc: 'Helado, crema y millows', price: 13000, image: 'hel7.jpg' },
    { id: 'hel8', name: 'Copa Grissly', desc: 'Helado, crema, gomitas y lechera', price: 13000, image: 'hel8.jpg' },
    { id: 'hel9', name: 'Copa Marina', desc: 'Helado, crema y gomitas marinas', price: 13000, image: 'hel9.jpg' },
    { id: 'hel10', name: 'Brownie', desc: 'Helado, crema y brownie', price: 17000, image: 'hel10.jpg' },
    { id: 'hel11', name: 'Copa Oreo', desc: 'Helado, crema, galletas oreo y chocolate', price: 16000, image: 'hel11.jpg' },
    { id: 'hel12', name: 'Copa Fantasía', desc: 'Helado, crema y trozos de durazno', price: 17000, image: 'hel12.jpg' },
    { id: 'hel13', name: 'Merengon', desc: 'Divertido y colorido', price: 6000, image: 'hel13.png' },
    { id: 'hel14', name: 'Cholao pasion', desc: 'Suave y natural', price: 6000, image: 'hel14.jpg' },
    { id: 'hel15', name: 'Cholao ice', desc: 'Fruta exótica cremosa', price: 6500, image: 'hel15.jpg' },
    { id: 'hel16', name: 'Salpicon', desc: 'Dulce y refrescante', price: 6000, image: 'hel16.jpg' },
    { id: 'hel17', name: 'Cholao tropical', desc: 'Intenso sabor frutal', price: 6500, image: 'hel17.jpg' },
    { id: 'hel18', name: 'Fresas con Crema', desc: 'Sabor gourmet', price: 7000, image: 'hel18.jpg' },
    { id: 'hel19', name: 'Banana split', desc: 'Cremoso y tostado', price: 7000, image: 'hel19.jpg' },
    { id: 'hel20', name: 'Maracumango', desc: 'Con trozos de galleta', price: 7000, image: 'hel20.jpg' },
    { id: 'hel21', name: 'Ensalada de frutass', desc: 'Chocolate con trozos de brownie', price: 7000, image: 'hel21.jpg' },
    { id: 'hel22', name: 'Parfait', desc: 'Clásico con chocolate', price: 6500, image: 'hel22.jpg' },
    { id: 'hel23', name: 'Vaso de helado', desc: 'Mezcla frutal intensa', price: 6500, image: 'hel23.jpg' },
    { id: 'hel24', name: 'Cono de helado', desc: 'Piña y coco tropical', price: 6500, image: 'hel24.png' }
  ],
  Repollas: [
    { id: 'rep1', name: 'Repolla Tradicional', desc: 'Manjar de leche', price: 7000, image: 'images/rep1.jpg' },
    { id: 'rep2', name: 'Repolla Noviazgo', desc: 'Manjar de leche y Queso', price: 7500, image: 'images/rep2.jpg' },
    { id: 'rep3', name: 'Repolla Amor libre', desc: 'Manjar de leche , Queso y Crema', price: 7500, image: 'images/rep3.jpg' },
    { id: 'rep4', name: 'Repolla Compromiso', desc: 'Manjar de leche y Dulce de mora', price: 7000, image: 'images/rep4.jpg' },
    { id: 'rep5', name: 'Repolla Frutti tentacion', desc: 'Manjar de leche, Mango , fresa , Guanabana y Crema', price: 8000, image: 'images/rep5.jpg' },
    { id: 'rep6', name: 'Repolla Gran amor', desc: 'Manjar de leche , Queso , Crema y Dulce de mora', price: 8500, image: 'images/rep6.jpg' }
  ],
  Postres: [
    { id: 'pos1', name: 'Torta de Tres Leches', desc: 'Porción individual', price: 8000, image: 'images/pos1.jpg' },
    { id: 'pos2', name: 'Flan de Caramelo', desc: 'Receta tradicional', price: 6500, image: 'images/pos2.jpg' }
  ],
  Bebidas: [
    { id: 'beb1', name: 'Limonada Natural', desc: 'Refrescante y ácida', price: 5000, image: 'images/beb1.jpg' },
    { id: 'beb2', name: 'Café Especial', desc: 'Grano seleccionado', price: 4500, image: 'images/beb2.jpg' }
  ],
  Empanadas: [
    { id: 'emp1', name: 'Empanada de Carne', desc: 'Masa crocante', price: 3500, image: 'emp1.webp' },
    { id: 'emp2', name: 'Empanada de Pollo', desc: 'Relleno jugoso', price: 3500, image: 'images/emp2.jpg' }
  ]
};

// ============================================
// DATOS DE CONTACTO - Edita aquí
// ============================================
var contact = {
  email: 'ventastentacionesdo@gmail.com',
  phone: '318 693 2963',
  address: 'Cra 7 # 4-51, Floridablanca, Casco Antiguo',
  instagram: '@tentaciones_dulcesyobleas',
  tiktok: '@tentaciones.dulces'
};

// Número de WhatsApp para recibir los pedidos (formato internacional, sin +, sin espacios)
var whatsappNumber = '573186932963';

var currentTab = categories[0];
var cart = loadCart();

var cartCountEl = document.getElementById('cartCount');
var hamburgerBtn = document.getElementById('hamburgerBtn');
var mainNav = document.getElementById('mainNav');
var cartBtn = document.getElementById('cartBtn');
var cartPanel = document.getElementById('cartPanel');
var cartOverlay = document.getElementById('cartOverlay');
var closeCartBtn = document.getElementById('closeCartBtn');
var cartItemsList = document.getElementById('cartItemsList');
var cartTotalEl = document.getElementById('cartTotal');
var goToCheckoutBtn = document.getElementById('goToCheckoutBtn');
var checkoutModal = document.getElementById('checkoutModal');
var checkoutOverlay = document.getElementById('checkoutOverlay');
var closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
var checkoutItemsList = document.getElementById('checkoutItemsList');
var checkoutTotalEl = document.getElementById('checkoutTotal');
var payBtn = document.getElementById('payBtn');
var customerAddressInput = document.getElementById('customerAddress');
var customerPhoneInput = document.getElementById('customerPhone');

function loadCart() {
  var saved = localStorage.getItem('cartItems');
  return saved ? JSON.parse(saved) : [];
}

function saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(cart));
}

function addToCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id) {
      cart[i].qty++;
      saveCart();
      updateCartCount();
      renderCartItems();
      return;
    }
  }
  cart.push({ id: item.id, name: item.name, price: item.price, image: item.image, qty: 1 });
  saveCart();
  updateCartCount();
  renderCartItems();
}

function changeQty(id, delta) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty += delta;
      if (cart[i].qty <= 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  saveCart();
  updateCartCount();
  renderCartItems();
}

function removeFromCart(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
      break;
    }
  }
  saveCart();
  updateCartCount();
  renderCartItems();
}

function cartTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
  }
  return total;
}

function updateCartCount() {
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
    count += cart[i].qty;
  }
  cartCountEl.textContent = count;
}

function renderCartItems() {
  cartItemsList.innerHTML = '';

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
    cartTotalEl.textContent = '$0';
    return;
  }

  for (var i = 0; i < cart.length; i++) {
    cartItemsList.appendChild(buildCartRow(cart[i]));
  }

  cartTotalEl.textContent = '$' + formatPrice(cartTotal());
}

function buildCartRow(item) {
  var row = document.createElement('div');
  row.className = 'cart-item';

  var thumb = document.createElement('div');
  thumb.className = 'cart-item-thumb';
  if (item.image) {
    thumb.style.backgroundImage = 'url(' + item.image + ')';
  }

  var info = document.createElement('div');
  info.className = 'cart-item-info';
  info.innerHTML = '<div class="cart-item-name">' + item.name + '</div><div class="cart-item-price">$' + formatPrice(item.price) + ' c/u</div>';

  var qtyControl = document.createElement('div');
  qtyControl.className = 'qty-control';

  var minusBtn = document.createElement('button');
  minusBtn.className = 'qty-btn';
  minusBtn.textContent = '−';
  minusBtn.addEventListener('click', function() {
    changeQty(item.id, -1);
  });

  var qtySpan = document.createElement('span');
  qtySpan.textContent = item.qty;

  var plusBtn = document.createElement('button');
  plusBtn.className = 'qty-btn';
  plusBtn.textContent = '+';
  plusBtn.addEventListener('click', function() {
    changeQty(item.id, 1);
  });

  var removeBtn = document.createElement('button');
  removeBtn.className = 'remove-item-btn';
  removeBtn.textContent = '✕';
  removeBtn.addEventListener('click', function() {
    removeFromCart(item.id);
  });

  qtyControl.appendChild(minusBtn);
  qtyControl.appendChild(qtySpan);
  qtyControl.appendChild(plusBtn);
  qtyControl.appendChild(removeBtn);

  row.appendChild(thumb);
  row.appendChild(info);
  row.appendChild(qtyControl);
  return row;
}

function openCart() {
  cartPanel.classList.add('open');
  cartOverlay.classList.add('open');
  renderCartItems();
}

function closeCart() {
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('open');
}

cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function renderCheckoutSummary() {
  checkoutItemsList.innerHTML = '';
  for (var i = 0; i < cart.length; i++) {
    var row = document.createElement('div');
    row.className = 'summary-item-row';
    row.innerHTML = '<span>' + cart[i].qty + 'x ' + cart[i].name + '</span><span>$' + formatPrice(cart[i].price * cart[i].qty) + '</span>';
    checkoutItemsList.appendChild(row);
  }
  checkoutTotalEl.textContent = '$' + formatPrice(cartTotal());
}

function openCheckout() {
  if (cart.length === 0) {
    showToast('Tu carrito está vacío');
    return;
  }
  closeCart();
  renderCheckoutSummary();
  clearFieldError(customerAddressInput);
  clearFieldError(customerPhoneInput);
  checkoutModal.classList.add('open');
  checkoutOverlay.classList.add('open');
}

function closeCheckout() {
  checkoutModal.classList.remove('open');
  checkoutOverlay.classList.remove('open');
}

goToCheckoutBtn.addEventListener('click', openCheckout);
closeCheckoutBtn.addEventListener('click', closeCheckout);
checkoutOverlay.addEventListener('click', closeCheckout);

function buildWhatsAppMessage(address, phone) {
  var lines = ['¡Hola! Quiero hacer este pedido:', ''];
  for (var i = 0; i < cart.length; i++) {
    lines.push(cart[i].qty + 'x ' + cart[i].name + ' - $' + formatPrice(cart[i].price * cart[i].qty));
  }
  lines.push('');
  lines.push('Total: $' + formatPrice(cartTotal()));
  lines.push('');
  lines.push('Dirección exacta y barrio: ' + address);
  lines.push('Teléfono de contacto: ' + phone);
  return lines.join('\n');
}

function setFieldError(input, hasError) {
  input.closest('.form-group').classList.toggle('invalid', hasError);
}

function clearFieldError(input) {
  setFieldError(input, false);
}

function isValidPhone(value) {
  var digits = value.replace(/\D/g, '');
  return digits.length >= 7;
}

customerAddressInput.addEventListener('input', function() {
  clearFieldError(customerAddressInput);
});

customerPhoneInput.addEventListener('input', function() {
  clearFieldError(customerPhoneInput);
});

payBtn.addEventListener('click', function() {
  var address = customerAddressInput.value.trim();
  var phone = customerPhoneInput.value.trim();

  var addressValid = address.length >= 5;
  var phoneValid = isValidPhone(phone);

  setFieldError(customerAddressInput, !addressValid);
  setFieldError(customerPhoneInput, !phoneValid);

  if (!addressValid || !phoneValid) {
    showToast('Completa la dirección y el teléfono para continuar');
    (addressValid ? customerPhoneInput : customerAddressInput).focus();
    return;
  }

  var message = buildWhatsAppMessage(address, phone);
  window.open('https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message), '_blank');
  showToast('Redirigiendo a WhatsApp...');
  cart = [];
  saveCart();
  updateCartCount();
  customerAddressInput.value = '';
  customerPhoneInput.value = '';
  closeCheckout();
});

hamburgerBtn.addEventListener('click', function() {
  mainNav.classList.toggle('open');
});

document.getElementById('navContacto').addEventListener('click', function(e) {
  currentTab = 'Contáctanos';
  renderTabs();
  renderContent();
});

function formatPrice(num) {
  return num.toLocaleString('es-CO');
}

function showToast(message) {
  var existing = document.querySelector('.toast');
  if (existing) {
    existing.remove();
  }
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.remove();
  }, 1800);
}

function renderTabs() {
  var tabsEl = document.getElementById('tabs');
  tabsEl.innerHTML = '';

  for (var i = 0; i < categories.length; i++) {
    tabsEl.appendChild(buildTabButton(categories[i], categories[i].toUpperCase()));
  }

  tabsEl.appendChild(buildTabButton('Contáctanos', '📍 CONTÁCTANOS'));
}

function buildTabButton(tabId, label) {
  var btn = document.createElement('button');
  btn.className = 'tab-btn' + (tabId === currentTab ? ' active' : '');
  btn.textContent = label;
  btn.setAttribute('data-tab', tabId);
  btn.addEventListener('click', function() {
    currentTab = this.getAttribute('data-tab');
    renderTabs();
    renderContent();
  });
  return btn;
}

function renderContent() {
  var contentEl = document.getElementById('menuContent');
  contentEl.innerHTML = '';

  if (currentTab === 'Contáctanos') {
    contentEl.appendChild(buildContactPanel());
  } else {
    contentEl.appendChild(buildCategoryPanel(currentTab));
  }
}

function buildCategoryPanel(cat) {
  var panel = document.createElement('div');
  panel.className = 'category-panel active';

  var header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = '<h3>' + cat + '</h3>';
  panel.appendChild(header);

  var grid = document.createElement('div');
  grid.className = 'item-grid';

  var items = data[cat];
  for (var j = 0; j < items.length; j++) {
    grid.appendChild(buildCard(items[j]));
  }

  panel.appendChild(grid);
  return panel;
}

var sizeLabels = { grande: 'Grande', pequena: 'Pequeña' };

function buildSizeButton(key, price, buttons, onSelect) {
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'size-btn';
  btn.textContent = sizeLabels[key] + ' · $' + formatPrice(price);
  btn.addEventListener('click', function() {
    onSelect(key);
    for (var k in buttons) {
      buttons[k].classList.toggle('active', k === key);
    }
  });
  return btn;
}

function buildCard(item) {
  var card = document.createElement('div');
  card.className = 'item-card';

  var photo = document.createElement('div');
  photo.className = 'item-photo';

  var img = document.createElement('img');
  img.loading = 'lazy';
  img.decoding = 'async';
  img.src = item.image;
  img.alt = item.name;
  img.addEventListener('error', function() {
    photo.classList.add('empty');
    img.remove();
  });
  photo.appendChild(img);

  card.appendChild(photo);

  var info = document.createElement('div');
  info.className = 'item-info';

  var name = document.createElement('h4');
  name.className = 'item-name';
  name.textContent = item.name;

  var desc = document.createElement('p');
  desc.className = 'item-desc';
  desc.textContent = item.desc;

  var hasSizes = !!item.sizes;
  var selectedSize = 'grande';

  var priceRow = document.createElement('div');
  priceRow.className = 'item-price-row';

  function updatePrice() {
    var price = hasSizes ? item.sizes[selectedSize] : item.price;
    priceRow.innerHTML = '$<span class="item-price">' + formatPrice(price) + '</span>';
  }

  info.appendChild(name);
  info.appendChild(desc);

  if (hasSizes) {
    var sizeRow = document.createElement('div');
    sizeRow.className = 'size-selector';
    var sizeButtons = {};

    var sizeKeys = ['grande', 'pequena'];
    for (var i = 0; i < sizeKeys.length; i++) {
      var key = sizeKeys[i];
      sizeButtons[key] = buildSizeButton(key, item.sizes[key], sizeButtons, function(newSize) {
        selectedSize = newSize;
        updatePrice();
      });
    }
    sizeButtons[selectedSize].classList.add('active');

    for (var s in sizeButtons) {
      sizeRow.appendChild(sizeButtons[s]);
    }
    info.appendChild(sizeRow);
  }

  updatePrice();
  info.appendChild(priceRow);

  var addToCartBtn = document.createElement('button');
  addToCartBtn.className = 'btn-add';
  addToCartBtn.textContent = 'AGREGAR AL CARRITO 🛒';
  addToCartBtn.addEventListener('click', function() {
    var cartItem = hasSizes
      ? { id: item.id + '-' + selectedSize, name: item.name + ' (' + sizeLabels[selectedSize] + ')', price: item.sizes[selectedSize], image: item.image }
      : item;
    addToCart(cartItem);
    showToast(cartItem.name + ' agregado al carrito');
  });

  info.appendChild(addToCartBtn);

  card.appendChild(info);
  return card;
}

function buildContactPanel() {
  var panel = document.createElement('div');
  panel.className = 'category-panel contact-panel active';

  var header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = '<h3>Contáctanos</h3>';
  panel.appendChild(header);

  var card = document.createElement('div');
  card.className = 'contact-card';

  card.appendChild(buildContactRow('✉️', 'Correo electrónico', 'email'));
  card.appendChild(buildContactRow('📞', 'Teléfono', 'phone'));
  card.appendChild(buildContactRow('📍', 'Dirección', 'address'));
  card.appendChild(buildContactRow('📷', 'Instagram', 'instagram'));
  card.appendChild(buildContactRow('🎵', 'TikTok', 'tiktok'));

  panel.appendChild(card);
  return panel;
}

function buildContactRow(icon, label, field) {
  var row = document.createElement('div');
  row.className = 'contact-row';

  var iconEl = document.createElement('div');
  iconEl.className = 'contact-icon';
  iconEl.textContent = icon;

  var details = document.createElement('div');
  details.className = 'contact-details';

  var labelEl = document.createElement('div');
  labelEl.className = 'contact-label';
  labelEl.textContent = label;

  var valueEl = document.createElement('div');
  valueEl.className = 'contact-value';
  valueEl.textContent = contact[field];

  details.appendChild(labelEl);
  details.appendChild(valueEl);
  row.appendChild(iconEl);
  row.appendChild(details);
  return row;
}

updateCartCount();
renderTabs();
renderContent();