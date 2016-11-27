// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components import
import SingleBook from './single-book';



// Shows the books list
class BooksList extends Component {
	renderBooksList(books) {
		return (
			<ul className="books-list">
				{
					books.map( book =>
						<SingleBook
							key={book.id}
							title={book.title}
							authors={book.authors} />
					)
				}
			</ul>
		);
	}

	renderEmptyMessage() {
		return <div>Data processing...</div>;
	}

	render() {
		// console.log(`books list from child BooksList component ${this.props.books}`);
		return (
			<div className="books-section">
				<h1 className="books-title">Books List</h1>
				<div className="row">
					{ this.props.books.length > 0 ? this.renderBooksList(this.props.books) : this.renderEmptyMessage() }
				</div>
			</div>
		);
	}
}

export default connect(null)(BooksList)
