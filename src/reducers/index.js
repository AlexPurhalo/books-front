// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import booksReducer from './books';
import authorsReducer from './authors';
import genresReducer from './genres';

// State holding in combine reducers
const rootReducer = combineReducers({
	books: booksReducer,
	authors: authorsReducer,
	genres: genresReducer
});

export default rootReducer;
