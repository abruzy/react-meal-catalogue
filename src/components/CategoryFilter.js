import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/CategoryFilter.scss';

const categories = ['All', 'Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];

const CategoryFilter = ({ handleChange }) => {
  const [dropDownValue, setDropDownValue] = useState('All');

  return (
    <div className="category-filter">
      <label className="category-label" htmlFor="cat">
        {' '}
        Filter By Category:
      </label>

      <select
        className="category-button"
        name="cat"
        onChange={e => {
          console.log(e.target.value);
          setDropDownValue(e.target.value);
          handleChange(e.target.value);
        }}
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
