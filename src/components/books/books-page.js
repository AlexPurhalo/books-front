// Node modules import
import React, { Component } from 'react';

// Components import
import GenresList from './books-page/genres-list';
import BooksList from './books-page/books-list';

// Shows books page
export default class BooksPage extends Component {
	render() {
		return (
			<div className="books-page">
				<GenresList />
				<BooksList />
			</div>
		);
	}
}
