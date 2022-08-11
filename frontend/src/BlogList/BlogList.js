import React from 'react';

import PaginationList from './PaginationList';
import NavBar from '../Navbar/NavBar';
import BlogContainer from './BlogContainer';
import './BlogList.css';

const BlogList = () => {
	return (
		<div className='blog_list'>
			<div>
				<NavBar />
			</div>
			<div className='ui center aligned text container'>
				<h1>Post Things that Matter!</h1>
			</div>
			<div className='ui center container'>
				<BlogContainer />
				<BlogContainer />
				<BlogContainer />
			</div>
			<div className='ui center aligned container'>
				<PaginationList />
			</div>
		</div>
	);
};

export default BlogList;
