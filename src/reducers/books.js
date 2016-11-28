// Actions types import
import { FETCH_BOOKS_SUCCESS, FETCH_BOOK_SUCCESS } from '../constants/books';


// Initializations for states
const INITIAL_STATE = {
	booksList: [],
	singleBook: null
};

// Mapping payload to states
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_BOOKS_SUCCESS:
			// console.log(`books from reducer: ${action.payload}`);
			return { ...state, booksList: action.payload };
		case FETCH_BOOK_SUCCESS:
			// console.log(`book from reducer: ${action.payload}`);
			return { ...state, singleBook: action.payload };
		default:
			return state
	}
}

