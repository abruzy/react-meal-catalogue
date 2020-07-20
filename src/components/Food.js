import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Food.scss';

const Food = ({ food }) => (
  <div className="food-page">
    <div className="cards">
      <img className="meal-img" src={food.strMealThumb} alt="meals" />
      <p className="meal-name">{food.strMeal}</p>
    </div>
  </div>
);

Food.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
};

export default Food;
