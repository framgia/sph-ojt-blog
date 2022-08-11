import React from 'react';
import BlogDetail from './BlogDetail/BlogDetail';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blogs/:id' element={<BlogDetail />} />
			</Routes>
		);
	}
}

export default App;
