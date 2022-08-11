import React from 'react';
import BlogDetail from './BlogDetail/BlogDetail';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import PageNotFound from './404 Page/PageNotFound';
class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/posts/:slug' element={<BlogDetail />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/notfound" element={<PageNotFound />} />
			</Routes>
		);
	}
}

export default App;
