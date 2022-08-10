import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='ui fluid secondary pointing menu'>
				<div className='item active' onClick={() => navigate('/')}>
					Home
				</div>
				<div className='item'>All Blogs</div>
			</div>

			<div className='ui hidden divider'></div>
		</>
	);
};

export default NavBar;
