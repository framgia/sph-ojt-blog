import React from 'react';
import BlogDetail from './BlogDetail/BlogDetail';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BlogList from './BlogList/BlogList';
class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/posts/:slug' element={<BlogDetail />} />
				<Route path='/posts' element={<BlogList />} />
			</Routes>
		);
	}
}

export default App;
