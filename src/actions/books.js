// Node modules import
import axios from 'axios';

// Actions types import
import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from '../constants/books';

// API service url address
const ROOT_URL = 'https://books-back.herokuapp.com/';

// Receives users list
export function fetchBooks() {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/books`)
			.then(res => dispatch(fetchBooksSuccess(res.data)))
			.catch(req => dispatch(fetchBooksFailure(req.response.data.errors)));
	}
}

function fetchBooksSuccess(data) {
	// console.log(`books from action: ${data}`);
	return {
		type: FETCH_BOOKS_SUCCESS,
		payload: data
	}
}

function fetchBooksFailure(errors) {
	return {
		type: FETCH_BOOKS_FAILURE,
		payload: errors
	}
}
