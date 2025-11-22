import React from 'react';

const PizzaSelector = () => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <span className="popup-close-icon">&times;</span>

        <h2 className="popup-title">Margherita</h2>

        <div className="popup-content">
          <div className="popup-left">
            <h3 className="section-heading">Size</h3>
            <hr />

            <div className="options-list">
              <label className="option-item">
                <input type="radio" name="size" value="Small" />
                Small
              </label>

              <label className="option-item">
                <input type="radio" name="size" value="Medium" />
                Medium
              </label>

              <label className="option-item">
                <input type="radio" name="size" value="Large" />
                Large
              </label>
            </div>
          </div>

          <div className="popup-right">
            <h3 className="section-heading">Toppings</h3>
            <hr />

            <div className="options-list">
              <label className="option-item">
                <input type="checkbox" value="Tomato Sauce" />
                Tomato Sauce
              </label>

              <label className="option-item">
                <input type="checkbox" value="Mozzarella Cheese" />
                Mozzarella Cheese
              </label>

              <label className="option-item">
                <input type="checkbox" value="Basil" />
                Basil
              </label>
            </div>
          </div>
        </div>

        <button className="popup-add-button">Add to cart</button>
      </div>
    </div>
  );
};

export default PizzaSelector;
