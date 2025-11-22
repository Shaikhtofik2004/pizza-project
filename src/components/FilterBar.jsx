import React from 'react';

const FilterBar = ({ filter, sortBy, onFilterChange, onSortChange }) => {
  return (
    <div className="filter-bar">
      <div className="filter-sort">
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="all">-- Select to sort --</option>
          <option value="price-high">Price: high to low</option>
          <option value="price-low">Price: low to high</option>
          <option value="name-a">Name: A to Z</option>
          <option value="name-z">Name: Z to A</option>
          <option value="rating-high">Rating: High to Low</option>
          <option value="rating-low">Rating: Low to High</option>
        </select>
      </div>

      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active-filter' : ''}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={filter === 'veg' ? 'active-filter' : ''}
          onClick={() => onFilterChange('veg')}
        >
          Veg
        </button>
        <button
          className={filter === 'nonveg' ? 'active-filter' : ''}
          onClick={() => onFilterChange('nonveg')}
        >
          Non Veg
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
