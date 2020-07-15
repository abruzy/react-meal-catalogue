import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Food.scss';

const Food = ({ food }) => (
  <div className="book-page">
    <div className="cards">
      <img src={food.strMealThumb} alt="meals" />
      <p>{food.strMeal}</p>
    </div>
  </div>
);

Food.propTypes = {
  food: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default Food;
