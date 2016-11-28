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
		// console.log(`author info from component: ${this.props.author}`);
		return (
			<div className="author-page">
				<AuthorInfo author={this.props.author}/>
			</div>
		);
	}
}

// Maps states to props
function mapStateToProps(state) {
	return { author: state.authors.authorInfo }
}

// Exports component to routes
export default connect(mapStateToProps, { fetchAuthor })(AuthorPage);
