import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BlogDetail from './BlogDetail/BlogDetail';
import HomePage from './HomePage/HomePage';
import BlogList from './BlogList/BlogList';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/posts/:slug' element={<BlogDetail />} />
			<Route path='/posts' element={<BlogList />} />
		</Routes>
	);
};

export default App;
