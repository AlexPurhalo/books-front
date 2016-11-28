// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchAuthors } from '../../actions/authors';

// Components import
import AuthorsList from './authors-page/authors-list';

// Shows authors list
class AuthorsPage extends Component {
	componentWillMount() {
		this.props.fetchAuthors();
	}

	render() {
		return (
			<div className="authors-page">
				<AuthorsList />
			</div>
		);
	}
}

export default connect(null, { fetchAuthors })(AuthorsPage);
