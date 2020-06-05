import booksReducer from './books';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  books: booksReducer,
});

export default reducer;
