import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPizzaSlice,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <a href="#">
              <FontAwesomeIcon icon={faPizzaSlice} />
              <span>Only pizza</span>
            </a>
            <a href="#">
              <span className="header__logo hidden"></span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
