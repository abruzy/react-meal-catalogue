import axios from 'axios';

const FETCH_RECIPIES = () => dispatch => {
  const allCategories = ['Beef', 'Chicken', 'Dessert', 'Vegan', 'Vegetarian'];

  const allCategoriesResult = [];

  // eslint-disable-next-line array-callback-return
  allCategories.map(category => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        allCategoriesResult.push(...res.data.meals);
      }).then(() => {
        dispatch({
          type: 'FETCH RECIPIES',
          payload: allCategoriesResult,
        });
      });
  });
};

const FETCH_RECIPE = foodId => async dispatch => {
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
  dispatch({
    type: 'FETCH RECIPE',
    payload: data.data.meals[0],
  });
};

const FILTER_FOODLIST = category => async dispatch => {
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  dispatch({
    type: 'FILTER BY CATEGORY',
    payload: data,
  });
};

const CLEAR_DATA = () => dispatch => {
  dispatch({
    type: 'RESET_DATA',
  });
};

export {
  FETCH_RECIPIES, FILTER_FOODLIST, FETCH_RECIPE, CLEAR_DATA,
};
