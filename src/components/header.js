// Node modules import
import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router';

// Navigation bar
export default class Header extends Component {
	renderLinks() {
		return [
			<li className="nav-item" key={1}>
				<IndexLink
					to="/"
					className="nav-link"
					activeClassName="active">
					Books
				</IndexLink>
			</li>,
			<li className="nav-item" key={2}>
				<Link
					to="authors"
					className="nav-link"
					activeClassName="active">
					Authors
				</Link>
			</li>
		]
	}

	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-light">
					<Link to="/" className="navbar-brand">Books App</Link>
					<ul className="nav navbar-nav">
						{this.renderLinks()}
					</ul>
				</nav>
			</div>
		);
	}
}

