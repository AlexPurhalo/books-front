// Node modules import
import React, { Component } from 'react';

// Shows a single book from books list
export default class SingleBook extends Component {
	render() {
		return (
			<li className="book">
				<h2 className="title">{this.props.title}</h2>
				<ul className="book-authors">
					{
						this.props.authors.map(author =>
							<li className="book-author" key={author.id}>
								<h3>{author.name}</h3>
							</li>
						)
					}
				</ul>
			</li>
		);
	}
}
