// Node modules import
import React, { Component } from 'react';

// Components import
import SingleAuthor from './single-author';

// Shows single author from authors list
export default class AuthorsList extends Component {
	renderAuthorsList(authors) {
		return (
			<div className="authors-list row">
				{
					authors.map( author =>
						<SingleAuthor
							key={author.id}
							id={author.id}
							name={author.name}
							books={author.books} />
					)
				}
			</div>
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
