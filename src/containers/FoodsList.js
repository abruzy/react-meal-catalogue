import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FETCH_RECIPIES, FILTER_FOODLIST } from '../actions';
import Food from '../components/Food';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/scss/FoodsList.scss';

const FoodsList = ({
  foods, FETCH_RECIPIES, FILTER_FOODLIST,
}) => {
  useEffect(() => FETCH_RECIPIES(), []);

  const handleFilterChange = value => (value.toLowerCase() === 'all' ? FETCH_RECIPIES() : FILTER_FOODLIST(value));

  return foods.length === 0 ? <p>Is Loading</p> : (
    <div className="book-list">
      <div className="header">
        <div className="header-title">Meal Recipe Catalogue</div>
        <div className="category-container">
          <CategoryFilter handleChange={handleFilterChange} />
        </div>
      </div>
      <div className="books-container">
        {foods.map(food => (
          <Link key={food.idMeal} to={{ pathname: `/food/${food.idMeal}`, state: food }}>
            <Food key={food.idMeal} food={food} />
          </Link>
        ))}
      </div>
    </div>
  );
};

FoodsList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
  FETCH_RECIPIES: PropTypes.func.isRequired,
  FILTER_FOODLIST: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  foods: state.foods.foods_recipies,
});

export default connect(mapStateToProps, { FETCH_RECIPIES, FILTER_FOODLIST }, null)(FoodsList);
