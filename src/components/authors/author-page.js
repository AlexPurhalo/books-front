// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchAuthor } from '../../actions/authors';

// Components import
import AuthorInfo from './author-page/author-info';

// Shows author's page
class AuthorPage extends Component {
	componentWillMount() {
		this.props.fetchAuthor(this.props.params.id)
	}
	render() {
		return (
			<div className="author-page">
				<AuthorInfo />
			</div>
		);
	}
}

export default connect(null, { fetchAuthor })(AuthorPage);
