import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import CardList from './components/CardList';
import Footer from './components/Footer';
import pizzaData from './data/pizzaData';

const App = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const displayedItems = useMemo(() => {
    let arr = [...pizzaData];

    if (filter === 'veg') arr = arr.filter((p) => p.isVeg === true);
    else if (filter === 'nonveg') arr = arr.filter((p) => p.isVeg === false);

    if (sortBy === 'price-high') {
      arr.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortBy === 'price-low') {
      arr.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === 'name-a') {
      arr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-z') {
      arr.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'rating-high') {
      arr.sort((a, b) => Number(b.rating) - Number(a.rating));
    } else if (sortBy === 'rating-low') {
      arr.sort((a, b) => Number(a.rating) - Number(b.rating));
    }
    return arr;
  }, [filter, sortBy]);

  return (
    <div>
      <Navbar />
      <FilterBar
        filter={filter}
        sortBy={sortBy}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <CardList items={displayedItems} /> <Footer />
    </div>
  );
};

export default App;
