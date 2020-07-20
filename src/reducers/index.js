import { combineReducers } from 'redux';
import foods from './foods';
import filter from './filter';

const rootReducer = combineReducers({
  foods,
  filter,
});

export default rootReducer;
