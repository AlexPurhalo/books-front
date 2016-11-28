// Node modules import
import React, { Component } from 'react';

// Shows author's info
export default class AuthorInfo extends Component {
	render() {
		console.log(`author info from child component: ${this.props.author}`);
		return (
			<div className="author-info-section">
				Author Name
			</div>
		);
	}
}
