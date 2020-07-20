import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FETCH_RECIPIES, FILTER_FOODLIST } from '../actions';
import Food from '../components/Food';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/scss/FoodsList.scss';

const FoodsList = ({
  foods, fetchRecipies, filterFoodList,
}) => {
  useEffect(() => {
    fetchRecipies();
  }, [fetchRecipies]);

  const handleFilterChange = value => (value.toLowerCase() === 'all' ? fetchRecipies() : filterFoodList(value));

  return foods.length === 0 ? <div>Loading...</div> : (
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
  fetchRecipies: PropTypes.func.isRequired,
  filterFoodList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  foods: state.foods.foods_recipies,
});

const mapDispatchToProps = dispatch => ({
  fetchRecipies: () => dispatch(FETCH_RECIPIES()),
  filterFoodList: category => dispatch(FILTER_FOODLIST(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);
