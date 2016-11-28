// Node modules import
import React, { Component } from 'react';

// Shows information about book
export default class BookInfo extends Component {
	renderBookInfo(book) {
		return (
			<div className="book-info">
				<h1 className="book-title">{book.title}</h1>
				<div className="row">
					<div className="col-md-4">
						<img className='book-cover' src={book.cover} alt="book" height="372" width="283px"/>
					</div>
					<div className="col-md-7">
						<p className="book-brief">{book.brief}</p>
					</div>
				</div>
				<ul className="book-authors">
					{book.authors.map(author =>
						<li key={author.id}><h3>{author.name}</h3></li>
					)}
				</ul>
			</div>
		);
	}

	loadingMessage() {
		return <div>Loading...</div>;
	}
	render() {
		// console.log(`book from nested component: ${this.props.book}`);
		return (
			<div className="book-info-section">
				{this.props.book ? this.renderBookInfo(this.props.book) : this.loadingMessage()}
			</div>
		);
	}
}
