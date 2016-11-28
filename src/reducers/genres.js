// Actions types import
import { FETCH_GENRES_SUCCESS } from '../constants/genres';

// Initializations for states
const INITIAL_STATE = { genresList: null };

// Pushing action payload to state
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_GENRES_SUCCESS:
			// console.log(`genres list from reducer: ${action.payload}`);
			return { ...state, genresList: action.payload };
		default:
			return state;
	}
}
