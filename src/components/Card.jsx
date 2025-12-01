import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({
  id,
  name,
  price,
  isVeg,
  rating,
  img_url,
  description,
  openPopup,
  cart,
  setCart,
}) => {
  const savedCount = parseInt(localStorage.getItem('cardCount_' + id)) || 0;
  const [count, setCount] = useState(savedCount);

  useEffect(() => {
    localStorage.setItem('cardCount_' + id, count);
  }, [count, id]);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    openPopup({ id, name, price, img_url });
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);

      setCart((prevCart) => {
        const index = prevCart.findIndex((p) => p.id === id);

        if (index >= 0) {
          const updatedCart = [...prevCart];

          if (updatedCart[index].quantity <= 1) {
            updatedCart.splice(index, 1);
          } else {
            updatedCart[index].quantity -= 1;
            updatedCart[index].price =
              updatedCart[index].basePrice * updatedCart[index].quantity;
          }

          localStorage.setItem('pizzaCart', JSON.stringify(updatedCart));
          return updatedCart;
        }

        return prevCart;
      });
    }
  };

  return (
    <div className="card-container">
      <img src={img_url} alt={name} />

      <div className="title-row">
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: isVeg ? 'green' : 'red' }}
        />
        <h3>{name}</h3>
      </div>

      <p>{description}</p>

      <div className="food-info">
        <p className="star">
          <FontAwesomeIcon icon={faStar} /> {rating}
        </p>
        <p className="food-price">RS. {price}</p>
      </div>

      <div className="food-box">
        <button onClick={handleDecrement} disabled={count === 0}>
          -
        </button>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Card;
