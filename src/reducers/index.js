// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import booksReducer from './books';
import authorsReducer from './authors';

// State holding in combine reducers
const rootReducer = combineReducers({
	books: booksReducer,
	authors: authorsReducer
});

export default rootReducer;
