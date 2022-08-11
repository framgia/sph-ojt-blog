import React from 'react';
// import BlogDetail from './BlogDetail/BlogDetail';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PageNotFound from './pages/404 Page/PageNotFound';
import Template from './components/Template/Template';
class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/posts/:slug' element={<Template />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/404" element={<PageNotFound />} />
			</Routes>
		);
	}
}

export default App;
