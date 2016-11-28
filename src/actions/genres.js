// Node modules import
import axios from 'axios';

// Action types import
import { FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../constants/genres';

// API service url address
const ROOT_URL = 'https://books-back.herokuapp.com/';

// Receives genres list
export function fetchGenres() {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/genres`)
			.then(res => dispatch(fetchGenresListSuccess(res.data)))
			.catch(req => dispatch(fetchGenresListFailure(req.response.data.errors)));
	}
}

function fetchGenresListSuccess(data) {
	// console.log(`genres from action: ${data}`);
	return {
		type: FETCH_GENRES_SUCCESS,
		payload: data
	}
}

function fetchGenresListFailure(errors) {
	return {
		type: FETCH_GENRES_FAILURE,
		payload: errors
	}
}
