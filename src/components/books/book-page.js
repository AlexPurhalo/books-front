// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchBook } from '../../actions/books'
// Shows page of book
class BookPage extends Component {
	componentWillMount() {
		this.props.fetchBook(this.props.params.id);
	}

	render() {
		console.log(`book from component: ${this.props.book}`);
		return (
			<div className="book-page">
				Book Page
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { book: state.books.singleBook };
}

export default connect(mapStateToProps, { fetchBook })(BookPage);
