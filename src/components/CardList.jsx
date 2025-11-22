import React from 'react';
import Card from './Card';

const CardList = ({ items = [] }) => {
  return (
    <div className="pizza-cards-container">
      <div className="cards-wrapper">
        {items.length ? (
          items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              isVeg={item.isVeg}
              rating={item.rating}
              img_url={item.img_url}
              description={item.description}
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
