// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components import
import GenresList from './books-page/genres-list';
import BooksList from './books-page/books-list';

// Actions import
import { fetchBooks } from '../../actions/books';
import { fetchGenres } from '../../actions/genres';

// Shows books page
class BooksPage extends Component {
	componentWillMount() {
		this.props.fetchGenres();
		this.props.fetchBooks();
	}

	render() {
		// console.log(`books list from BooksPage component: ${this.props.booksList}`);
		// console.log(`genres list from parent component: ${this.props.genresList}`);
		return (
			<div className="books-page">
				<GenresList genres={this.props.genresList} />
				<BooksList books={this.props.booksList} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		booksList: state.books.booksList,
		genresList: state.genres.genresList
	}
}

export default connect(mapStateToProps, { fetchBooks, fetchGenres })(BooksPage);

