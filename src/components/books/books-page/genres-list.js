// Node modules import
import React, { Component } from 'react';

// Shows the list of genres
export default class GenresList extends Component {
	render() {
		return (
			<div className="genres-section">
				<h1>Genres List</h1>
				<ul className="genres-list">
					<li className="genre"><h4>Fantasy</h4></li>
					<li className="genre"><h4>Science fiction</h4></li>
					<li className="genre"><h4>Horror</h4></li>
					<li className="genre"><h4>Thrillers</h4></li>
					<li className="genre"><h4>Literary Fiction</h4></li>
					<li className="genre"><h4>Technical Literature</h4></li>
				</ul>
			</div>
		);
	}
}
