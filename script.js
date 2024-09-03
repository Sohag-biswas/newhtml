let cart = [];

function addToCart(productId) {
    const product = document.querySelector(`.product[data-id='${productId}'] h3`).textContent;
    const price = document.querySelector(`.product[data-id='${productId}'] p`).textContent;
    
    const cartItem = {
        id: productId,
        name: product,
        price: parseFloat(price.replace('$', ''))
    };

    cart.push(cartItem);
    updateCart();
}

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in cart.</p>';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(itemElement);
        total += item.price;
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartItems.appendChild(totalElement);
}
