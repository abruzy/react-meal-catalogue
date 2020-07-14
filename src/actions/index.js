import axios from 'axios';

const FETCHDOGS = () => async dispatch => {
  const allCategories = ['Beef', 'Chicken', 'Dessert'];
  const allCategoriesResult = [];

  allCategories.map(async category => {
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    console.log(data);
    allCategoriesResult.push(...data.data.meals);
  });

  console.log(allCategoriesResult);
  dispatch({
    type: 'FETCH_DATA',
    payload: allCategoriesResult,
  });
};

const FETCHDOG = dogId => async dispatch => {
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dogId}`);
  dispatch({
    type: 'FETCH_DOG',
    payload: data,
  });
};

const FILTERDOGLIST = category => async dispatch => {
  dispatch({
    type: 'RESET_DATA',
  });
  console.log('hi');
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  dispatch({
    type: 'FETCH_BY_CATEGORY',
    payload: data,
  });
};

export { FETCHDOGS, FETCHDOG, FILTERDOGLIST };
