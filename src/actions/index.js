import axios from 'axios';

const FETCHDOGS = () => async dispatch => {
  console.log('hi');
  const data = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
  dispatch({
    type: 'FETCH_DATA',
    payload: data,
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
