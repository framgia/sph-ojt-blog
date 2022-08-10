import React from 'react';
import axios from 'axios';
import NavBar from '../Navbar/NavBar';

class HomePage extends React.Component {
	state = { details: [] };

	componentDidMount() {
		//let data;
		axios
			.get('http://localhost:8000/api/posts/')
			.then((res) => this.setState({ details: res.data }))
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<>
				<div>
					<NavBar />
				</div>
				<div>
					<header>(Sunposterisk) Data Generated From Django</header>
					<hr></hr>
					{this.state.details.map((output, id) => (
						<div key={id}>
							<div>
								<h1>Title: {output.title}</h1>
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
	}
}

export default HomePage;
