const userEmail = 'ammy@example.com'; // Replace with actual logged-in user email

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const product = {
            user_email: userEmail,
            item_id: this.dataset.itemId,
            quantity: 1
        };

        fetch('https://h5md3m40j9.execute-api.eu-north-1.amazonaws.com/dev/add_to_cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => {
            alert('✅ Item added to cart!');
        })
        .catch(error => {
            console.error('❌ Error:', error);
            alert('Something went wrong while adding to cart!');
        });
    });
});

document.querySelectorAll('.buy-now-btn').forEach(button => {
    button.addEventListener('click', function () {
        const itemId = this.dataset.itemId;
        
        // Redirecting to payment.html
        window.location.href = 'payment.html';  // Adjust this path based on your file structure
    });
});

// Show cart content
function showCart() {
    fetch('https://h5md3m40j9.execute-api.eu-north-1.amazonaws.com/dev/get_cart?user_email=' + userEmail)
        .then(response => response.json())
        .then(data => {
            const cartContainer = document.getElementById('cart-items');
            cartContainer.innerHTML = '';

            if (data && data.items.length > 0) {
                data.items.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('cart-item');
                    itemElement.innerHTML = `
                        <p>${item.product_title} - ${item.quantity} x $${item.price}</p>
                    `;
                    cartContainer.appendChild(itemElement);
                });
            } else {
                cartContainer.innerHTML = '<p>Your cart is empty.</p>';
            }
        })
        .catch(error => {
            console.error('❌ Error:', error);
        });
}

// Handle Checkout
document.getElementById('checkout-btn').addEventListener('click', function () {
    window.location.href = '/payment.html/checkout';
});

// On page load, show cart items if on the cart page
if (window.location.pathname.includes('cart.html')) {
    showCart();
}
