// Node modules import
import React, { Component } from 'react';

// Shows a single book from books list
export default class SingleBook extends Component {
	render() {
		return (
			<div className="col-md-3">
				<li className="book-section">
					<h2 className="book-title">{this.props.title}</h2>
					<img src={this.props.cover} alt="cover" width="214px" height="272"/>
					<div className="book-authors">
						{
							this.props.authors.map(author =>
								<ul className="book-author" key={author.id}>
									<h3 className="book-author-name">{author.name}</h3>
								</ul>
							)
						}
					</div>
				</li>
			</div>
		);
	}
}
