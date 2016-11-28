// Node modules import
import React, { Component } from 'react';

// Components import
import SingleAuthor from './single-author';

// Shows single author from authors list
export default class AuthorsList extends Component {
	renderAuthorsList(authors) {
		return (
			<ul className="authors-list">
				{
					authors.map( author =>
						<SingleAuthor
							key={author.id}
							name={author.name}
							books={author.books} />
					)
				}
			</ul>
		)
	}

	renderEmptyMessage() {
		return <div>Data processing</div>;
	}

	render() {
		return (
			<div className="authors-list-section">
				{this.props.authors.length > 0 ? this.renderAuthorsList(this.props.authors) : this.renderEmptyMessage() }
			</div>
		);
	}
}
