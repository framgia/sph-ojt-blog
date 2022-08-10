import React from 'react';
import BlogDetail from './BlogDetail/BlogDetail';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/blogs/:id' element={<BlogDetail />} />
			</Routes>
		);
	}
}

export default App;
