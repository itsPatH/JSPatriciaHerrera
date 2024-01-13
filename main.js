document.addEventListener('DOMContentLoaded', () => {
	const btnCart = document.querySelector('.container-cart-icon');
	const containerCartProducts = document.querySelector('.container-cart-products');
	const rowProduct = document.querySelector('.row-product');
	const valorTotal = document.querySelector('.total-pagar');
	const countProducts = document.querySelector('#contador-productos');
	const cartEmpty = document.querySelector('.cart-empty');
	const cartTotal = document.querySelector('.cart-total');
	const productsList = document.querySelector('.container-items');
  
	let cartItems = [];
  
	btnCart.addEventListener('click', () => {
	  containerCartProducts.classList.toggle('hidden-cart');
	});
  
	productsList.addEventListener('click', (e) => {
	  if (e.target.tagName === 'BUTTON') {
		const product = e.target.closest('.item');
		const title = product.querySelector('h2').textContent;
		const price = parseFloat(product.querySelector('.price').textContent.slice(1));
  
		const existingItem = cartItems.find(item => item.title === title);
  
		if (existingItem) {
		  existingItem.quantity++;
		} else {
		  cartItems.push({ title, price, quantity: 1 });
		}
  
		updateCart();
	  }
	});
  
	rowProduct.addEventListener('click', (e) => {
	  if (e.target.classList.contains('icon-close')) {
		const product = e.target.closest('.cart-product');
		const title = product.querySelector('.titulo-producto-carrito').textContent;
  
		cartItems = cartItems.filter(item => item.title !== title);
  
		updateCart();
	  }
	});
  
	const updateCart = () => {
	  if (cartItems.length === 0) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	  } else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	  }
  
	  rowProduct.innerHTML = '';
  
	  let total = 0;
	  let totalOfProducts = 0;
  
	  cartItems.forEach(item => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');
  
		containerProduct.innerHTML = `
			<div class="info-cart-product">
				<span class="cantidad-producto-carrito">${item.quantity}</span>
				<p class="titulo-producto-carrito">${item.title}</p>
				<span class="precio-producto-carrito">$${(item.price * item.quantity).toFixed(2)}</span>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
			</svg>
		`;
  
		rowProduct.append(containerProduct);
  
		total += item.price * item.quantity;
		totalOfProducts += item.quantity;
	  });
  
	  valorTotal.innerText = `$${total.toFixed(0)}`;
	  countProducts.innerText = totalOfProducts;
	};
  });
  