// Node modules import
import axios from 'axios';

// Actions types import
import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from '../constants/books';

// API service url address
const ROOT_URL = 'https://books-back.herokuapp.com/';

// Receives users list
export function fetchBooks() {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/authors`)
			.then(res => dispatch(fetchAuthorSuccess(res.data)))
			.catch(req => dispatch(fetchAuthorFailure(req.response.data.errors)));
	}
}

function fetchAuthorSuccess(data) {
	console.log('works!');
	console.log(data);
	return {
		type: FETCH_BOOKS_SUCCESS,
		payload: data
	}
}

function fetchAuthorFailure(errors) {
	return {
		type: FETCH_BOOKS_FAILURE,
		payload: errors
	}
}
