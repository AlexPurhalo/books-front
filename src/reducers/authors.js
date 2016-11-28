// Actions types import
import { FETCH_AUTHORS_SUCCESS, FETCH_AUTHOR_SUCCESS } from '../constants/authors';

// Initializations for states
const INITIAL_STATE = {
	authorsList: [],
	authorInfo: null
};

// Mapping payload to states
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_AUTHORS_SUCCESS:
			// console.log(`authors from reducer: ${action.payload}`);
			return { ...state, authorsList: action.payload };
		case FETCH_AUTHOR_SUCCESS:
			// console.log(`author from reducer: ${action.payload}`);
			return { ...state, authorInfo: action.payload };
		default:
			return state
	}
}

