// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import BooksPage from './components/books/books-page';
import AuthorsPage from './components/authors/authors-page';

// Routes definition
export default (
	<Route path="/" component={App}>
		<IndexRoute component={BooksPage} />
		<Route path='/authors' component={AuthorsPage} />
	</Route>
);
