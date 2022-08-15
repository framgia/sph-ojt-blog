import React from 'react';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PageNotFound from './pages/404 Page/PageNotFound';
import BlogList from './pages/BlogList/BlogList';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/posts/:slug' element={<BlogDetail />} />
			<Route path="*" element={<PageNotFound />} />
			<Route path="/404" element={<PageNotFound />} />
			<Route path='/posts' element={<BlogList />} />
			
		</Routes>
	);
}

export default App;
