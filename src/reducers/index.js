import { combineReducers } from 'redux';
import dogs from './dogs';
import filter from './filter';

const rootReducer = combineReducers({
  dogs,
  filter,
});

export default rootReducer;
