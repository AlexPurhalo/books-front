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
		// console.log(`authors list from books page: ${this.props.authors}`);
		return (
			<div className="authors-page">
				<AuthorsList />
			</div>
		);
	}
}

// Mapping states to props
function mapStateToProps(state) {
	return { authors: state.authors.authorsList }
}

// Export to routes
export default connect(mapStateToProps, { fetchAuthors })(AuthorsPage);
