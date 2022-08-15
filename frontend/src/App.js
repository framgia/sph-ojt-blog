import React from 'react';
import BlogDetail from './BlogDetail/BlogDetail';
import { Route, Routes } from 'react-router-dom';

import LogInPage from './LogInPage/LogInPage';

class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path='/' element={<LogInPage />} />
				
				<Route path='/blogs/:id' element={<BlogDetail />} />
			</Routes>
		);
	}
}

export default App;
