import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ShoppingCart = ({ cart, setCart }) => {
  const handleRemovePizza = (item) => {
    const updatedCart = cart.filter(
      (p) =>
        !(
          p.id === item.id &&
          p.size === item.size &&
          JSON.stringify(p.toppings) === JSON.stringify(item.toppings)
        )
    );

    localStorage.setItem('pizzaCart', JSON.stringify(updatedCart));

    const cardCountKey = 'cardCount_' + item.id;
    const currentCount = parseInt(localStorage.getItem(cardCountKey)) || 0;
    const newCount = currentCount - item.quantity;
    localStorage.setItem(cardCountKey, newCount >= 0 ? newCount : 0);

    setCart(updatedCart);
  };

  return (
    <>
      <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} />

      <div className="shopping-cart-page">
        <h1 className="cart-title">Shopping Cart :</h1>

        {cart.length === 0 && (
          <h2 style={{ padding: 20 }}>Your cart is empty.</h2>
        )}

        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-item-image">
              <img src={item.img_url} alt={item.name} />
            </div>

            <div className="cart-item-details">
              <h2 className="item-name">{item.name}</h2>

              <div className="details-row">
                <div>
                  <h4 className="label">SIZE</h4>
                  <p>{item.size}</p>
                </div>

                <div>
                  <h4 className="label">TOPPINGS</h4>
                  <p>{item.toppings.join(', ')}</p>
                </div>
              </div>
            </div>

            <div className="cart-item-price">
              <h4 className="label">PRICE</h4>
              <p>RS {item.price}</p>

              <h4 className="total-price-text">
                TOTAL : <span>RS {item.price}</span>
              </h4>

              <button
                className="remove-btn"
                onClick={() => handleRemovePizza(item)}
                style={{
                  marginTop: '10px',
                  padding: '5px 10px',
                  background: 'crimson',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <hr />

        {cart.length > 0 && (
          <div className="cart-bottom">
            <h2 className="final-total">
              Total: Rs {cart.reduce((acc, curr) => acc + curr.price, 0)}
            </h2>

            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ShoppingCart;
