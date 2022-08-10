import React, { useState, useEffect } from 'react';
import API from '../API';
import NavBar from '../Navbar/NavBar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		API.get('/posts/')
			.then((res) => setPosts(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div>
				<NavBar />
			</div>
			<div>
				<header>(Sunposterisk) Data Generated From Django</header>
				<hr></hr>
				{posts?.map((output, id) => (
					<div key={id}>
						<div>
							<h1 onClick={() => navigate('/blogs/:id')}>
								Title: {output.title}
							</h1>
							<p>Content: {output.content}</p>
							<p>Author: {output.author}</p>
							<p>Published: {output.published_at}</p>
							<p>Votes: {output.total_votes}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default HomePage;
