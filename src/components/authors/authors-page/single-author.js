// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';

// Shows data about single author
export default class SingleAuthor extends Component {
	constructor() {
		super();

		this.state = { onShowBooks: false }
	}

	handleShowBooksSwitch() {
		this.setState({ onShowBooks: !this.state.onShowBooks })
	}

	showAuthorBooks(books) {
		return (
			<div className="opened-books-list-section">
				<ul className="single-author-books-list">
					{ books.map(book =>
						<li
							className='single-author-book'
							key={book.id}>
							<Link to={`/books/${book.id}`}><h3 className="book-title">{book.title}</h3></Link>
						</li>
					)}
					<li>
						<button
							onClick={this.handleShowBooksSwitch.bind(this)}
							className="hide-books-btn non-styled-btn">
							hide books
						</button>
					</li>
				</ul>
			</div>
		);
	}

	showOpenBooksSwitch() {
		return (
			<div className="open-book-switch">
				<button
					onClick={this.handleShowBooksSwitch.bind(this)}
					className="show-books-btn non-styled-btn">
					show books
				</button>
			</div>
		);
	}

	render() {
		return (
			<div className="single-author col-md-12">
				<Link to={`authors/${this.props.id}`}>
					<h2 className="author-name">{this.props.name}</h2>
				</Link>
				{this.state.onShowBooks ? this.showAuthorBooks(this.props.books) : this.showOpenBooksSwitch() }
			</div>
		);
	}
}
