// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Shows authors list
class AuthorsPage extends Component {
	render() {
		return (
			<div className="authors-page">
				authors page
			</div>
		);
	}
}
export default connect(null)(AuthorsPage);
