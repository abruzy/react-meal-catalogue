import React from 'react'
import PropTypes from 'prop-types';
import '../styles/scss/BooksForm.scss';

function ShowDog({ location, match }) {
  console.log(location, match);
  return (
    <div className="dog">
      <div className="show-item">
        <img src={location.state.strMealThumb} alt="" />
        <p>{location.state.strMeal}</p>
      </div>
      <div className="info">
        <h2 className="title">
          Ingredients Used
        </h2>
        <ul className="ingredients">
          <li className="item">{location.state.strIngredient1}</li>
          <li className="item">{location.state.strIngredient2}</li>
          <li className="item">{location.state.strIngredient3}</li>
          <li className="item">{location.state.strIngredient4}</li>
          <li className="item">{location.state.strIngredient5}</li>
          <li className="item">{location.state.strIngredient6}</li>
          <li className="item">{location.state.strIngredient7}</li>
          <li className="item">{location.state.strIngredient8}</li>
        </ul>
        <h2 className="instructions">Instructions</h2>
        <p className="instruction">{location.state.strInstructions}</p>
      </div>
    </div>
  );
}

ShowDog.propTypes = {

};

export default ShowDog;
