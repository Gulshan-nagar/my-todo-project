// script.js
let cart = [];

function addToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} x${item.quantity}</span>
                <span>₹${item.price * item.quantity}</span>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    });
    totalPrice.innerText = total;
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Simulate payment and notification
    alert('Payment successful and order placed!');
    cart = [];
    renderCart();
}
