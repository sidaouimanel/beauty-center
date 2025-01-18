import React from 'react';
import './UserPage.css';

const UserPage = () => {
  const cartItems = [
    { id: 1, name: 'Face Oil', price: 10, image: './assets/product1.png' },
    { id: 2, name: 'Day Cream', price: 20, image: './assets/product2.png' },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="user-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default UserPage;
