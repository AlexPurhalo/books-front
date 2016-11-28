// Node modules import
import React, { Component } from 'react';

// Shows the list of genres
export default class GenresList extends Component {
	showGenres(genres) {
		return (
			<ul className="genres-list">
				{
					genres.map(genre =>
						<li className="single-genre" key={genre.id}>
							<h4 className="genre-name">{genre.genre}</h4>
						</li>
					)
				}
			</ul>
		);
	}

	loadingMessage() {
		return <div>Data processing</div>
	}

	render() {
		// console.log(`genres list from child component: ${this.props.genres}`);
		return (
			<div className="genres-section">
				<h1 className="genres-title">Genres List</h1>
				{this.props.genres ? this.showGenres(this.props.genres) : this.loadingMessage() }
			</div>
		);
	}
}
