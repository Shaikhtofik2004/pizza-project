import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import CardList from './components/CardList';
import Footer from './components/Footer';
import PizzaSelector from './components/PizzaSelector';
import ShoppingCart from './components/ShoppingCart';

import pizzaData from './data/pizzaData';

const App = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('all');

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('pizzaCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedCardSetter, setSelectedCardSetter] = useState(null);

  const handleFilterChange = (newFilter) => setFilter(newFilter);
  const handleSortChange = (value) => setSortBy(value);

  const openPopup = (pizza) => {
    setSelectedPizza(pizza);
    if (pizza.setCount) setSelectedCardSetter(() => pizza.setCount);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPizza(null);
    setSelectedCardSetter(null);
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (p) =>
          p.id === item.id &&
          p.size === item.size &&
          JSON.stringify(p.toppings) === JSON.stringify(item.toppings)
      );

      let updatedCart;
      if (existingIndex >= 0) {
        updatedCart = [...prev];
        updatedCart[existingIndex].quantity += 1;
        updatedCart[existingIndex].price =
          updatedCart[existingIndex].basePrice *
          updatedCart[existingIndex].quantity;
      } else {
        updatedCart = [
          ...prev,
          { ...item, quantity: 1, basePrice: item.price },
        ];
      }

      localStorage.setItem('pizzaCart', JSON.stringify(updatedCart));

      if (selectedCardSetter) {
        selectedCardSetter((prev) => prev + 1);
      }

      return updatedCart;
    });

    closePopup();
  };

  const displayedItems = useMemo(() => {
    let arr = [...pizzaData];

    if (filter === 'veg') arr = arr.filter((p) => p.isVeg === true);
    else if (filter === 'nonveg') arr = arr.filter((p) => !p.isVeg);

    if (sortBy === 'price-high') arr.sort((a, b) => b.price - a.price);
    if (sortBy === 'price-low') arr.sort((a, b) => a.price - b.price);
    if (sortBy === 'name-a') arr.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'name-z') arr.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === 'rating-high') arr.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'rating-low') arr.sort((a, b) => a.rating - b.rating);

    return arr;
  }, [filter, sortBy]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                cartCount={cart.reduce((acc, c) => acc + c.quantity, 0)}
              />

              <FilterBar
                filter={filter}
                sortBy={sortBy}
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
              />

              <CardList
                items={displayedItems}
                openPopup={openPopup}
                cart={cart}
                setCart={setCart}
              />

              {showPopup && (
                <PizzaSelector
                  pizza={selectedPizza}
                  addToCart={addToCart}
                  closePopup={closePopup}
                />
              )}

              <Footer />
            </>
          }
        />

        <Route
          path="/cart"
          element={<ShoppingCart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
