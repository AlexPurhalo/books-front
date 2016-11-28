// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';


// Shows a single book from books list
export default class SingleBook extends Component {
	render() {
		return (
			<div className="col-md-3">
				<li className="book-section">
					<Link to={`/books/${this.props.id}`}><h2 className="book-title">{this.props.title}</h2></Link>
					<img src={this.props.cover} alt="cover" width="214px" height="272"/>
					<div className="book-authors">
						{
							this.props.authors.map(author =>
								<ul className="book-author" key={author.id}>
									<Link to={`/authors/${author.id}`}><h3 className="book-author-name">{author.name}</h3></Link>
								</ul>
							)
						}
					</div>
				</li>
			</div>
		);
	}
}
