import axios from 'axios';

const FETCHDOGS = () => dispatch => {
  const allCategories = ['Beef', 'Chicken', 'Dessert'];
  const allCategoriesResult = [];

  // eslint-disable-next-line array-callback-return
  allCategories.map(category => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        allCategoriesResult.push(...res.data.meals);
      }).then(() => {
        dispatch({
          type: 'FETCH_DATA',
          payload: allCategoriesResult,
        });
      });
  });
};

const FETCHDOG = dogId => async dispatch => {
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dogId}`);
  dispatch({
    type: 'FETCH_DOG',
    payload: data.data.meals[0],
  });
};

const FILTERDOGLIST = category => async dispatch => {
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  dispatch({
    type: 'FETCH_BY_CATEGORY',
    payload: data,
  });
};

const CLEAR_DATA = () => dispatch => {
  dispatch({
    type: 'RESET_DATA',
  });
};

export {
  FETCHDOGS, FILTERDOGLIST, FETCHDOG, CLEAR_DATA,
};
