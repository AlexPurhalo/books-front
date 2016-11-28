// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components import
import AuthorsList from './authors-page/authors-list';

// Shows authors list
class AuthorsPage extends Component {
	render() {
		return (
			<div className="authors-page">
				<AuthorsList />
			</div>
		);
	}
}
export default connect(null)(AuthorsPage);
