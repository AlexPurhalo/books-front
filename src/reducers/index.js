// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import booksReducer from './books';

// State holding in combine reducers
const rootReducer = combineReducers({
	books: booksReducer
});

export default rootReducer;
