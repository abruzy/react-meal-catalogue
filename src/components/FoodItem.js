/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/FoodItem.scss';
import { connect } from 'react-redux';
import { FETCH_RECIPE, CLEAR_DATA } from '../actions/index';

function FoodItem({
  location, fetchRecipe, clearData, food,
}) {
  useEffect(() => {
    fetchRecipe(location.state.idMeal);
    return clearData();
    // eslint-disable-next-line
  }, [fetchRecipe, clearData]);

  return Object.entries(food).length === 0 ? <div className="loader">Loading...</div> : (
    <div className="food-item">
      <div className="show-item">
        <img className="meal-img" src={food.strMealThumb} alt="" />
        <p className="meal-name">{food.strMeal}</p>
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

FoodItem.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  fetchRecipe: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  food: state.foods.food_item,
});

export const mapDispatchToProps = dispatch => ({
  fetchRecipe: foodId => dispatch(FETCH_RECIPE(foodId)),
  clearData: () => dispatch(CLEAR_DATA()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
