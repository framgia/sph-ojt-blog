import React from 'react';
import NavBar from '../Navbar/NavBar';

function BlogDetail() {
	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div className='ui raised very padded text container'>
				<div>
					<h4 className='ui left aligned sub header'>Date Created</h4>
					<h1 className='ui left aligned header'>Article Title</h1>
				</div>
				<div className='ui hidden divider'></div>
				<div className='ui left aligned text container segment '>
					<div className='ui placeholder'>
						<div className='image header'>
							<div className='line'></div>
							<div className='line'></div>
						</div>
						<div className='paragraph'>
							<div className='line'></div>
							<div className='line'></div>
							<div className='line'></div>
							<div className='line'></div>
							<div className='line'></div>
						</div>
					</div>
				</div>

				<div className='form container'>
					<div className='ui form'>
						<div className='field'>
							<textarea> What are your thoughts?</textarea>
						</div>
					</div>
				</div>
				<div className='ui hidden divider'></div>
				<div>
					<button className='ui right floated blue button'>Comment </button>
				</div>
				<div className='ui hidden section divider'></div>
				<div className='ui comments'>
					<h3 className='ui dividing header'>Comments</h3>
					<div className='comment'>
						<div className='avatar'>
							{/* <img src="/images/avatar/small/matt.jpg"> */}
						</div>
						<div className='content'>
							<div className='author'>Matt</div>
							<div className='metadata'>
								<span className='date'>Today at 5:42PM</span>
							</div>
							<div className='text'>How artistic!</div>
						</div>
					</div>
					<div className='comment'>
						<div className='avatar'>
							{/* <img src="/images/avatar/small/elliot.jpg"> */}
						</div>
						<div className='content'>
							<div className='author'>Elliot Fu</div>
							<div className='metadata'>
								<span className='date'>Yesterday at 12:30AM</span>
							</div>
							<div className='text'>
								<p>
									This has been very useful for my research. Thanks as well!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogDetail;
