// Node modules import
import React, { Component } from 'react';

// Components import
import SingleAuthor from './single-author';

// Shows single author from authors list
export default class AuthorsList extends Component {
	render() {
		return (
			<div className="authors-list-section">
				<ul className="authors-list">
					<SingleAuthor />
				</ul>
			</div>
		);
	}
}
