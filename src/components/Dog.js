import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Book.scss';

const Dog = ({ dog }) => (
  <div className="book-page">
    <div className="cards">
      <img src={dog.strMealThumb} alt="meals" />
      <p>{dog.strMeal}</p>
    </div>
  </div>
);

Dog.propTypes = {
  dog: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dog;
