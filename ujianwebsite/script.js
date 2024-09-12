let cart = [];

function addToCart(productName, price) {
    // Tambahkan produk ke keranjang
    cart.push({ productName, price });

    // Update tampilan keranjang
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartLink = document.getElementById('cart');
    cartLink.textContent = `Keranjang (${cart.length})`;
}

// Tambahan untuk melihat keranjang
document.getElementById('cart').addEventListener('click', () => {
    alert(`Produk dalam keranjang:\n${cart.map(item => `${item.productName}: Rp ${item.price}`).join('\n')}`);
});
