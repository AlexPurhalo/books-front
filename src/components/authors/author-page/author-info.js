// Node modules import
import React, { Component } from 'react';

// Shows author's info
export default class AuthorInfo extends Component {
	showAuthorInfo(author) {
		return (
			<div className="author">
				<h1 className="name">{author.name}</h1>
				<p className="biography">{author.biography}</p>
				<h2 className="books-title">Books List</h2>
				<ul className="books-list">
					{author.books.map(book =>
						<li className="book" key={book.id}>{book.title}</li>
					)}
				</ul>
			</div>
		);
	}

	showLoadMessage() {
		return <div>Loading...</div>;
	}

	render() {
		// console.log(`author info from child component: ${this.props.author}`);
		console.log(this.props.author);
		return (
			<div className="author-info-section">
				{this.props.author ? this.showAuthorInfo(this.props.author) : this.showLoadMessage() }
			</div>
		);
	}
}
