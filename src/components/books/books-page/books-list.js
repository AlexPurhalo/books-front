// Node modules import
import React, { Component } from 'react';

// Components import
import SingleBook from './single-book';

// Shows the books list
export default class BooksList extends Component {
	booksList = [
		{ id: 1, title: 'The Hobbit', authors: [{ id: 1, name: 'J.R.R. Tolkien' }]},
		{ id: 2, title: 'Lord of the Rings', authors: [{ id: 1, name: 'J.R.R. Tolkien' }]},
		{ id: 3, title: 'The Stand', authors: [{ id: 2, name: 'Stephen King' }]},
		{ id: 4, title: 'Red Dragon', authors: [{ id: 3, name: 'Thomas Harris' }]},
		{ id: 5, title: 'Blood Meridian', authors: [{ id: 4, name: 'Cormac McCarthy' }]},
		{ id: 6, title: 'The Stand', authors: [{ id: 5, name: 'Stephen King' }]},
		{ id: 7, title: 'Ruby Science', authors: [
			{ id: 6, name: 'Thoughtbot' }, { id: 7, name: 'Harlow Ward' }, { id: 8, name: 'Joe Ferris' }
		]}
	];

	render() {
		console.log(this.booksList);
		return (
			<div className="books-section">
				<h1 className="books-title">Books List</h1>
				<div className="row">
					<ul className="books-list">
						{
							this.booksList.map(book =>
								<SingleBook
									key={book.id}
									id={book.id}
									title={book.title}
									authors={book.authors} />
							)
						}
					</ul>
				</div>
			</div>
		);
	}
}
