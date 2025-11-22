import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ShoppingCart = () => {
  return (
    <>
      <Navbar />
      <div className="shopping-cart-page">
        <h1 className="cart-title">Shopping Cart :</h1>

        <div className="cart-item">
          <div className="cart-item-image">
            <img
              src="https://github.com/sameerkindia/Food-App-JS/blob/main/images/1.jpg?raw=true"
              alt="Pizza"
            />
          </div>

          <div className="cart-item-details">
            <h2 className="item-name">Margherita</h2>

            <div className="details-row">
              <div>
                <h4 className="label">SIZE</h4>
                <p>Small</p>
              </div>

              <div>
                <h4 className="label">TOPPINGS</h4>
                <p>Basil</p>
              </div>
            </div>
          </div>

          <div className="cart-item-price">
            <h4 className="label">PRICE</h4>
            <p>10.99</p>

            <h4 className="total-price-text">
              TOTAL : <span>RS 10.99</span>
            </h4>
          </div>
        </div>

        <hr />

        <div className="cart-bottom">
          <h2 className="final-total">Total: Rs 10.99</h2>

          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
