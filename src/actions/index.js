import axios from 'axios';

const FETCHDOGS = () => dispatch => {
  // dispatch({
  //   type: 'RESET_DATA',
  // });

  const allCategories = ['Beef', 'Chicken', 'Dessert'];
  const allCategoriesResult = [];

  // eslint-disable-next-line array-callback-return
  allCategories.map(category => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        console.log(res);
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
  console.log(data.data.meals[0]);
  dispatch({
    type: 'FETCH_DOG',
    payload: data.data.meals[0],
  });
};

const FILTERDOGLIST = category => async dispatch => {
  // dispatch({
  //   type: 'RESET_DATA',
  // });
  // console.log('hi');
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
