// Node modules import
import React, { Component } from 'react';

// Shows the list of genres
export default class GenresList extends Component {
	genresList = [
		{ id: 1, genre: 'Fantasy' },
		{ id: 2, genre: 'Science fiction' },
		{ id: 3, genre: 'Horror' },
		{ id: 4, genre: 'Thrillers' },
		{ id: 5, genre: 'Literary Fiction' },
		{ id: 6, genre: 'Technical Literature' },
	];

	render() {
		console.log(this.genresList);
		return (
			<div className="genres-section">
				<h1 className="genres-title">Genres List</h1>
				<ul className="genres-list">
					{
						this.genresList.map(genre =>
							<li className="single-genre" key={genre.id}>
								<h4 className="genre-name">{genre.genre}</h4>
								</li>
						)
					}
				</ul>
			</div>
		);
	}
}
