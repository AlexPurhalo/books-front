// Node modules import
import axios from 'axios';

// Actions types import
import {
	FETCH_AUTHORS_SUCCESS,
	FETCH_AUTHORS_FAILURE,
	FETCH_AUTHOR_SUCCESS,
	FETCH_AUTHOR_FAILURE
} from '../constants/authors';

// API service url address
const ROOT_URL = 'https://books-back.herokuapp.com/';

// Receives authors list
export function fetchAuthors() {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/authors`)
			.then(res => dispatch(fetchAuthorsSuccess(res.data)))
			.catch(req => dispatch(fetchAuthorsFailure(req.response.data.errors)));
	}
}

function fetchAuthorsSuccess(data) {
	// console.log(`authors from action: ${data}`);
	return {
		type: FETCH_AUTHORS_SUCCESS,
		payload: data
	}
}

function fetchAuthorsFailure(errors) {
	return {
		type: FETCH_AUTHORS_FAILURE,
		payload: errors
	}
}


// Receives data about author
export function fetchAuthor(id) {
	return function(dispatch) {
		return axios.get(`${ROOT_URL}/authors/${id}`)
			.then(res => dispatch(fetchAuthorSuccess(res.data)))
			.catch(req => dispatch(fetchAuthorFailure(req.response.data.errors)));
	}
}

function fetchAuthorSuccess(data) {
	// console.log(`author from action: ${data}`);
	return {
		type: FETCH_AUTHOR_SUCCESS,
		payload: data
	}
}

function fetchAuthorFailure(errors) {
	return {
		type: FETCH_AUTHOR_FAILURE,
		payload: errors
	}
}
