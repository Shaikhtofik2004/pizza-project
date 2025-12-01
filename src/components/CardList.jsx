import React from 'react';
import Card from './Card';

const CardList = ({ items = [], openPopup, cart, setCart }) => {
  return (
    <div className="pizza-cards-container">
      <div className="cards-wrapper">
        {items.length ? (
          items.map((item) => (
            <Card
              key={item.id}
              {...item}
              openPopup={openPopup}
              cart={cart}
              setCart={setCart}
            />
          ))
        ) : (
          <p style={{ padding: 20 }}>No pizzas found.</p>
        )}
      </div>
    </div>
  );
};

export default CardList;
