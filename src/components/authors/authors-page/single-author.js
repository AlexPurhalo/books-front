// Node modules import
import React, { Component } from 'react';

// Shows data about single author
export default class SingleAuthor extends Component {
	render() {
		return (
			<li className="single-author">
				{this.props.name}
				<ul className="single-author-books-list">
					{ this.props.books.map(book =>
						<li
							className='single-author-book'
							key={book.id}>
							{book.title}
						</li>
					)}
				</ul>
			</li>
		);
	}
}
