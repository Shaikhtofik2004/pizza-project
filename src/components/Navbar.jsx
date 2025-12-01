import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPizzaSlice,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleCartClick = (e) => {
    if (cartCount === 0) {
      e.preventDefault();
      return;
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/">
            <FontAwesomeIcon icon={faPizzaSlice} />
            <span>Only pizza</span>
          </Link>

          <Link
            to="/cart"
            className="cart-icon"
            onClick={handleCartClick}
            style={{ cursor: cartCount === 0 ? 'not-allowed' : 'pointer' }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
