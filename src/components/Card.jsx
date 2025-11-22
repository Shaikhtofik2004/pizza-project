import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ name, price, isVeg, rating, img_url, description }) => {
  return (
    <div className="card-container">
      <img src={img_url} alt={name} />

      <div className="title-row">
        <span className="category-icon">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: isVeg ? 'green' : 'red' }}
          />
        </span>

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
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default Card;
