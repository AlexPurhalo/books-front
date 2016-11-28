// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';

// Shows information about book
export default class BookInfo extends Component {
	renderBookInfo(book) {
		return (
			<div className="book-info">
				<div className="row">
					<div className="col-md-4">
						<img className='book-cover' src={book.cover} alt="book" height="372" width="283px"/>
					</div>
					<div className="col-md-7">
						<div className="row">
							<div className="col-md-6">
								<h1 className="book-title">{book.title}</h1>
							</div>
							<div className="col-md-6">
								<ul className="book-authors">
									{book.authors.map(author =>
										<li className='book-author' key={author.id}>
											<Link to={`/authors/${author.id}`}>
												<h3 className="book-author-name">{author.name}</h3>
											</Link>
										</li>
									)}
								</ul>
							</div>
						</div>
						<p className="book-brief">{book.brief}</p>
						<p className="genre">genre: {book.genre}</p>
					</div>
				</div>
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
