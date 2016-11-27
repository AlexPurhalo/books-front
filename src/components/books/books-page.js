// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components import
import GenresList from './books-page/genres-list';
import BooksList from './books-page/books-list';

// Actions import
import { fetchBooks } from '../../actions/books';

// Shows books page
class BooksPage extends Component {
	componentWillMount() {
		this.props.fetchBooks();
	}

	render() {
		// console.log(`books list from BooksPage component: ${this.props.booksList}`);
		return (
			<div className="books-page">
				<GenresList />
				<BooksList books={this.props.booksList} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { booksList: state.books.booksList }
}

export default connect(mapStateToProps, { fetchBooks })(BooksPage);
