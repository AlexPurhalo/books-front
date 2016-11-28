// Node modules import
import React, { Component } from 'react';

// Shows the list of genres
export default class GenresList extends Component {
	fetchBooksByGenre(genre) { this.props.fetchBookByGenre(genre) }

	showGenres(genres) {
		return (
			<ul className="genres-list">
				{
					genres.map(genre =>
						<li className="single-genre" key={genre.id}>
							<h4 className="genre-name">
								<button
									className="non-styled-btn"
									type="reset"
									onClick={e => this.fetchBooksByGenre.bind(this)(genre.genre)}>
									{genre.genre}
								</button>
							</h4>
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
