// Node modules import
import React, { Component } from 'react';

// Shows books page
export default class BooksPage extends Component {
	render() {
		return (
			<div className="books-page">
				<div className="genres-section">
					<h1>Genres List</h1>
					<ul className="genres-list">
						<li className="genre"><h4>Fantasy</h4></li>
						<li className="genre"><h4>Science fiction</h4></li>
						<li className="genre"><h4>Horror</h4></li>
						<li className="genre"><h4>Thrillers</h4></li>
						<li className="genre"><h4>Literary Fiction</h4></li>
						<li className="genre"><h4>Technical Literature</h4></li>
					</ul>
				</div>
				<div className="books-section">
					<h1>Books List</h1>
					<ul className="books-list">
						<li className="book">
							<h2 className="title">The Hobbit</h2>
							<ul className="book-authors">
								<li className="book-author"><h3>J.R.R. Tolkien</h3></li>
							</ul>
						</li>
						<li className="book">
							<h2 className="title">Lord of the Rings</h2>
							<ul className="book-authors">
								<li className="book-author"><h3>J.R.R. Tolkien</h3></li>
							</ul>
						</li>
						<li className="book">
							<h2 className="title">The Stand</h2>
							<ul className="book-authors">
								<li className="book-author"><h3>Stephen King</h3></li>
							</ul>
						</li>
						<li className="book">
							<h2 className="title">Red Dragon</h2>
							<ul className="book-authors">
								<li className="book-author"><h3>Thomas Harris</h3></li>
							</ul>
						</li>
						<li className="book">
							<h2 className="title">Blood Meridian</h2>
							<ul className="book-authors">
								<li className="book-author"><h3>Cormac McCarthy</h3></li>
							</ul>
						</li>
						<li className="book">
							<h2 className="title">The Stand</h2>
							<ul className="book-authors">
								<li className="book-author"><h3>Stephen King</h3></li>
							</ul>
						</li>
						<li className="book">
							<h2 className="title">Ruby Science</h2>
							<ul className="book-authors">
								<li className="book-author"><h3>Joe Ferris</h3></li>
								<li className="book-author"><h3>Harlow Ward</h3></li>
								<li className="book-author"><h3>Thoughtbot</h3></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
