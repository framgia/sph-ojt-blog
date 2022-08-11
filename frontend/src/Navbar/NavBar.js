import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import { Button, Modal } from 'semantic-ui-react'
import FormSignup from '../RegistrationPage/FormSignup';
import FormSuccess from '../RegistrationPage/FormSuccess';

const NavBar = () => {
	const navigate = useNavigate();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [open, setOpen] = useState(false)

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className='ui fluid secondary pointing menu'>
				<div className='item' onClick={() => navigate('/')}>
					Home
				</div>
				<div className='item active' onClick={() => navigate('/posts')}>
					All Blogs
				</div>
			</div>


			<div className='ui hidden divider'></div>
			<div>
				<br />
				<Modal

					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
					open={open}
					trigger={<Button className='signup-btn' color='red'>Sign Up</Button>}
					content={
						<div className='form-container'>
							<Button className='close-btn' basic onClick={() => setOpen(false)}>
								X
							</Button>
							<div className='form-content-left'>
								<img className='form-img' src='Images/RegIm2.jpg' alt='Computer' />
							</div>
							{!isSubmitted ? (
								<FormSignup submitForm={submitForm} />
							) : (
								<FormSuccess />
							)}

						</div>
					}
				/>
			</div>
		</>
	);
};

export default NavBar;
