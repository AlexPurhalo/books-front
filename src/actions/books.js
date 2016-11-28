// Node modules import
import axios from 'axios';

// Actions types import
import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, FETCH_BOOK_SUCCESS, FETCH_BOOK_FAILURE } from '../constants/books';

// API service url address
const ROOT_URL = 'https://books-back.herokuapp.com/';

// Receives books list
export function fetchBooks(genre) {
	return function(dispatch) {
		let paramGenre = '';
		if (genre) paramGenre = `?genre=${genre}`;
		return axios.get(`${ROOT_URL}/books${paramGenre}`)
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


// Receives info about single book
export function fetchBook(id) {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/books/${id}`)
			.then(res => dispatch(fetchBookSuccess(res.data)))
			.catch(req => dispatch(fetchBookFailure(req.response.data.errors)));
	}
}

function  fetchBookSuccess(data) {
	// console.log(`book info from action: ${data}`);
	return {
		type: FETCH_BOOK_SUCCESS,
		payload: data
	}
}

function fetchBookFailure(errors) {
	return {
		type: FETCH_BOOK_FAILURE,
		payload: errors
	}
}
