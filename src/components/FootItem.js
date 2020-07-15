/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/FoodItem.scss';
import { connect } from 'react-redux';
import { FETCH_RECIPE, CLEAR_DATA } from '../actions/index';

function ShowDog({
  location, FETCH_RECIPE, CLEAR_DATA, food,
}) {
  useEffect(() => {
    FETCH_RECIPE(location.state.idMeal);
    return CLEAR_DATA();
  }, [FETCH_RECIPE, CLEAR_DATA]);

  return Object.entries(food).length === 0 ? <p>Loading</p> : (
    <div className="dog">
      <div className="show-item">
        <img src={food.strMealThumb} alt="" />
        <p>{food.strMeal}</p>
      </div>
      <div className="info">
        <h2 className="title">
          Ingredients Used
        </h2>
        <ul className="ingredients">
          <li className="item">{food.strIngredient1}</li>
          <li className="item">{food.strIngredient2}</li>
          <li className="item">{food.strIngredient3}</li>
          <li className="item">{food.strIngredient4}</li>
          <li className="item">{food.strIngredient5}</li>
          <li className="item">{food.strIngredient6}</li>
          <li className="item">{food.strIngredient7}</li>
          <li className="item">{food.strIngredient8}</li>
        </ul>
        <h2 className="instructions">Instructions</h2>
        <p className="instruction">{food.strInstructions}</p>
      </div>
    </div>
  );
}

ShowDog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  food: PropTypes.object.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  FETCH_RECIPE: PropTypes.func.isRequired,
  CLEAR_DATA: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  food: state.foods.food_item,
});

export default connect(mapStateToProps, { FETCH_RECIPE, CLEAR_DATA })(ShowDog);
