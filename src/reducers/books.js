// Actions types import
import { FETCH_BOOKS_SUCCESS } from '../constants/books';


// Initializations for states
const INITIAL_STATE = {
	booksList: []
};

// Mapping payload to states
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_BOOKS_SUCCESS:
			// console.log(`books from reducer: ${action.payload}`);
			return { ...state, booksList: action.payload };
		default:
			return state
	}
}

