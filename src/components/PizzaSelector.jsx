import React, { useState } from 'react';

const PizzaSelector = ({ pizza, addToCart, closePopup }) => {
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [error, setError] = useState('');

  const toggleTopping = (t) => {
    setToppings((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const handleAdd = () => {
    if (size === '' || toppings.length === 0) {
      setError('Please select Size and at least 1 Topping.');
      return;
    }

    setError('');

    addToCart({
      ...pizza,
      size,
      toppings,
    });

    closePopup();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <span className="popup-close-icon" onClick={closePopup}>
          &times;
        </span>

        <h2 className="popup-title">{pizza.name}</h2>

        <div className="popup-content">
          <div className="popup-left">
            <h3>Size</h3>
            <hr />

            <div className="options-list">
              {['Small', 'Medium', 'Large'].map((s) => (
                <label className="option-item" key={s}>
                  <input
                    type="radio"
                    name="size"
                    value={s}
                    onChange={() => setSize(s)}
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div className="popup-right">
            <h3>Toppings</h3>
            <hr />

            <div className="options-list">
              {['Tomato Sauce', 'Mozzarella Cheese', 'Basil'].map((t) => (
                <label className="option-item" key={t}>
                  <input
                    type="checkbox"
                    value={t}
                    onChange={() => toggleTopping(t)}
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <p className="error-msg" style={{ color: 'red', marginTop: '10px' }}>
            {error}
          </p>
        )}

        <button className="popup-add-button" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default PizzaSelector;
